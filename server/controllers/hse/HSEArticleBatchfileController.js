const axios = require('axios');
const AWS = require('aws-sdk');
const uuid = require('uuid/v1');

const mongoose = require('mongoose');

const parseBatchfile = require('../../util/parseBatchfile');

const HSEArticleBatchfileModelClass = mongoose.model('HSEArticleBatchFiles');
const HSEArticleModelClass = mongoose.model('HSEArticles');

const { Schema } = mongoose;

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

    console.log(req.body);

    // const key = `${decoded.sub}/${uuid()}.txt`;
    // const key = `${Date.now()}.txt`;

    const { url } = req.body; 

    const newHSEArticleBatchfile = new HSEArticleBatchfileModelClass({
        batchfileUrl: url
    });
    const savedBatchfile = await newHSEArticleBatchfile.save();
    console.log(savedBatchfile);
/*
    const savedBatchfile = newHSEArticleBatchfile.save( (err, articleBatchfile) => {
        if(err) {
            console.log(err);
            return res.status(422).send({
                message: 'Unable to save new batchfile'
            });
        } else {
            //return res.status(201).send({ message: 'Successfully save batchfile to db'});
            console.log('saved batchfile');
            console.log(`******************** ${articleBatchfile} **************************************`)
        }
    });

*/


    let articlesArray = [];
    let articleIdArray = [];


    const data1 = await axios.get(`https://s3.amazonaws.com/hsse-staging/${url}`); 
    
    articlesArray = parseBatchfile.parseHSEJournalFile(data1.data);

    articlesArray.map( (article) => {

        console.log(article);

        article["_batchfile"] = savedBatchfile._id;

        const newHSEArticle = new HSEArticleModelClass(article);
        newHSEArticle.save( (err, savedArticle) => {
            if(err) {
                console.log(err);
            } else {
                console.log(savedArticle._id);
                articleIdArray = [...articleIdArray, savedArticle._id];
                console.log(articleIdArray);
                console.log(`Successfully save article: [${article["title"]}]`);
            }
    
        });
        
        
    } );

    
};
