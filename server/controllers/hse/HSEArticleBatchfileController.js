const axios = require('axios');
const AWS = require('aws-sdk');
const uuid = require('uuid/v1');

const mongoose = require('mongoose');

const parseBatchfile = require('../../util/parseBatchfile');

const HSEArticleBatchfileModelClass = mongoose.model('HSEArticleBatchFiles');
const HSEArticleModelClass = mongoose.model('HSEArticles');

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
