const axios = require('axios');
const AWS = require('aws-sdk');
const uuid = require('uuid/v1');

const mongoose = require('mongoose');

const parseBatchfile = require('../../util/parseBatchfile');

const HSEArticleModelClass = mongoose.model('HSEArticles');
const HSEArticleBatchfileModelClass = mongoose.model('HSEArticleBatchFiles');

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
        res.send({ key, url }); 
    });
};

exports.create = async (req, res) => {

    const { url } = req.body; 

    const newHSEArticleBatchfile = new HSEArticleBatchfileModelClass({
        batchfileUrl: url
    });
    const savedBatchfile = await newHSEArticleBatchfile.save();

    let articlesArray = [];
    let articleIdArray = [];

    const data1 = await axios.get(`https://s3.amazonaws.com/hsse-staging/${url}`); 
    
    articlesArray = parseBatchfile.parseHSEJournalFile(data1.data);

    articlesArray.map( (article) => {

        article["_batchfile"] = savedBatchfile._id;

        const newHSEArticle = new HSEArticleModelClass(article);
        newHSEArticle.save( (err, savedArticle) => {
            if(err) {
                console.log(err);
            } else {
                articleIdArray = [...articleIdArray, savedArticle._id];
                console.log(`Successfully save article: [${article["title"]}]`);
            }
    
        });
    } ); 
};

exports.list = (req, res) => {console.log(req);
    HSEArticleBatchfileModelClass.find( (err, batchfiles) => {
        if(err) {
            return res.send(err);
        } else if(!batchfiles) {
            return res.status(404).send({
                message: 'No batchfile with that identifier has been found'
            });
        }
        return res.status(200).send(batchfiles);
    });
};
