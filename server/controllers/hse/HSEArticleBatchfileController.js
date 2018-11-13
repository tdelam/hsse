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

exports.create = (req, res) => {

    console.log(req.body);

    // const key = `${decoded.sub}/${uuid()}.txt`;
    // const key = `${Date.now()}.txt`;

    const { url } = req.body;

    // console.log(`*************${req.body.url}*********`);

    let articlesArray = [];
    
    console.log("&&&&&&&&&&& " + url + " &&&&&&&&&&&&&");

    axios.get(`https://s3.amazonaws.com/hsse-staging/${url}`).then(function (response) {
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        // console.log(response.data);
        articlesArray = parseBatchfile.parseHSEJournalFile(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
    
    

    articlesArray.map( (article, index) => {
        const newHSEArticle = new HSEArticleModelClass(article);
        newHSEArticle.save( (err) => {
            if(err) {
                console.log(err);
            } else {
                console.log(`Successfully save article: [${index}]`);
            }
    
        });
    });

    const newHSEArticleBatchfile = new HSEArticleBatchfileModelClass({
        batchfileUrl: url
    });

    /*
    s3.getSignedUrl('putObject', {
        Bucket: 'hsse-staging',
        ContentType: 'txt',
        Key: key
    }, (err, key) => {
        console.log("***** s3.getSignedUrl ********************* ")
    });

*/

    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log(req.body);

    const newHSEArticle = new HSEArticleModelClass(req.body);

    newHSEArticle.save( (err) => {
        if(err) {
            //console.log(err);
            return res.status(422).send({
                message: 'Unable to save new article'
            });
        } else {
            res.status(201).send({ message: 'Successfully save new article'});
        }

    });

    console.log("-----------------------------------------------------------");

    newHSEArticleBatchfile.save( (err) => {
        if(err) {
            console.log(err);
            return res.status(422).send({
                message: 'Unable to save new batchfile'
            });
        } else {
            //return res.status(201).send({ message: 'Successfully save batchfile to db'});
            console.log('saved batchfile');
        }
    });

    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
};
