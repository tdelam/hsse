const axios = require('axios');
const AWS = require('aws-sdk');
const uuid = require('uuid/v1');

const mongoose = require('mongoose');

const parseBatchfile = require('../../util/parseBatchfile');

const SSEArticleModelClass = mongoose.model('SSEArticles');
const SSEArticleBatchfileModelClass = mongoose.model('SSEArticleBatchFiles');
const SSEArticleEligibilityFilterModelClass = mongoose.model('SSEArticleEligibilityFilters');

const s3 = new AWS.S3({
    accessKeyId: process.env.HSSE_S3_ACCESS_KEY,
    secretAccessKey: process.env.HSSE_S3_SECRET_KEY
});

exports.getFileUrl = (req, res) => {

    const key = `${Date.now()}-${uuid()}.txt`;

    s3.getSignedUrl('putObject', {
        Bucket: 'hsse-staging',
        ContentType: 'text/plain',
        Key: key
    }, (err, url) => {
        if(err) {
            console.log(err);
        }
        res.send({ key, url }); 
    });
};

exports.create = async (req, res) => {

    const { url, harvestDate, articleSource, language, fileName } = req.body; 

    const newSSEArticleBatchfile = new SSEArticleBatchfileModelClass({
        batchfileUrl: url,
        harvestDate,
        articleSource,
        language,
        fileName
    });
    await newSSEArticleBatchfile.save();

    let articlesArray = [];
    let articleIdArray = [];

    const data1 = await axios.get(`https://s3.amazonaws.com/hsse-staging/sse/${url}`);
    
    articlesArray = parseBatchfile.parseHSEJournalFile(data1.data);

    articlesArray.map( async (article) => {

        await SSEArticleBatchfileModelClass.find({ batchfileUrl: url }, (err, batchfile) => {
            article._batchFile = batchfile[0]._id;
            article.language = batchfile[0].language;
            article.articleSource = batchfile[0].articleSource;
            article.harvestDate = batchfile[0].harvestDate;
        });


        const newSSEArticle = new SSEArticleModelClass(article);

        const newEligibilityFilterJunior = new SSEArticleEligibilityFilterModelClass();
        const newEligibilityFilterSenior = new SSEArticleEligibilityFilterModelClass();

        newEligibilityFilterJunior.save( (err, savedEligibilityFilter) => {
            if(err){
                console.log(err)
            } else {
                console.log(`New eligibility filter input created: ${savedEligibilityFilter._id}`);
            }
        });

        newEligibilityFilterSenior.save( (err, savedEligibilityFilter) => {
            if(err){
                console.log(err)
            } else {
                console.log(`New eligibility filter input created: ${savedEligibilityFilter._id}`);
            }
        });
    
        newSSEArticle.elibilityFilterJuniorInput = newEligibilityFilterJunior;
        newSSEArticle.elibilityFilterSeniorInput = newEligibilityFilterSenior;

        await newSSEArticle.save( (err, savedArticle) => {
            if(err) {
                console.log(err);
            } else {
                articleIdArray = [...articleIdArray, savedArticle._id];
                //console.log(`Successfully save article: [${article["title"]}]`);
                console.log(savedArticle.elibilityFilterJuniorInput);
            }
    
        });

        // return res.status(200).send(newHSEArticleBatchfile);

    });

    return res.status(200).send(newSSEArticleBatchfile);
};

exports.list = (req, res) => {
    SSEArticleBatchfileModelClass.find( (err, batchfiles) => {
        if(err) {
            return res.send(err);
        } else if(!batchfiles) {
            return res.status(404).send({
                message: 'No batchfile has been found'
            });
        }
        return res.status(200).send(batchfiles);
    });
};

exports.read = (req, res) => {

    const { batchfileId } = req.params;

    if(!mongoose.Types.ObjectId.isValid(batchfileId)) {
        return res.status(400).send({
            message: 'Invalid batchfile Id'
        });
    }

    SSEArticleModelClass.findById(batchfileId, (err, batchfile) => {
        if(err) {
            return res.send(err);
        } else if(!batchfile) {
            return res.status(404).send({
                message: 'No batchfile with that identifier has been found'
            });
        }
        return res.status(200).send(batchfile);
    });

};
