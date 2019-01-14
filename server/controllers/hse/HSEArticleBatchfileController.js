const axios = require('axios');
const AWS = require('aws-sdk');
const uuid = require('uuid/v1');

const mongoose = require('mongoose');

const parseBatchfile = require('../../util/parseBatchfile');

const HSEArticleModelClass = mongoose.model('HSEArticles');
const HSEArticleBatchfileModelClass = mongoose.model('HSEArticleBatchFiles');
const HSEArticleEligibilityFilterModelClass = mongoose.model('HSEArticleEligibilityFilters'); 

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

    const newHSEArticleBatchfile = new HSEArticleBatchfileModelClass({
        batchfileUrl: url,
        harvestDate,
        articleSource,
        language,
        fileName
    });
    await newHSEArticleBatchfile.save();

    let articlesArray = [];
    let articleIdArray = [];

    const data1 = await axios.get(`https://s3.amazonaws.com/hsse-staging/${url}`);
    
    articlesArray = parseBatchfile.parseHSEJournalFile(data1.data);

    articlesArray.map( async (article) => {

        await HSEArticleBatchfileModelClass.find({ batchfileUrl: url }, (err, batchfile) => {
            article._batchFile = batchfile[0]._id;
            article.language = batchfile[0].language;
            article.articleSource = batchfile[0].articleSource;
            article.harvestDate = batchfile[0].harvestDate;
        });


        const newHSEArticle = new HSEArticleModelClass(article);

        const newEligibilityFilterJunior = new HSEArticleEligibilityFilterModelClass();
        const newEligibilityFilterSenior = new HSEArticleEligibilityFilterModelClass();

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
    
        newHSEArticle.elibilityFilterJuniorInput = newEligibilityFilterJunior;
        newHSEArticle.elibilityFilterSeniorInput = newEligibilityFilterSenior;

        await newHSEArticle.save( (err, savedArticle) => {
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

    return res.status(200).send(newHSEArticleBatchfile);
};

exports.list = (req, res) => {
    HSEArticleBatchfileModelClass.find( (err, batchfiles) => {
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

    HSEArticleModelClass.findById(batchfileId, (err, batchfile) => {
        if(err) {
            return res.send(err);
        } else if(!batchfile) {
            return res.status(404).send({
                message: 'No batchfile with that identifier has been found'
            });
        }
        return res.status(200).send(batchfile);
    });

}
