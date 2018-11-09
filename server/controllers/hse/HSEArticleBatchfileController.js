const axios = require('axios');
const AWS = require('aws-sdk');
const uuid = require('uuid/v1');

const mongoose = require('mongoose');

const fileUtil = require('../../util/parseBatchfile');

const HSEArticleBatchfileModelClass = mongoose.model('HSEArticleBatchFiles');

const s3 = new AWS.S3({
    accessKeyId: process.env.HSSE_S3_ACCESS_KEY,
    secretAccessKey: process.env.HSSE_S3_SECRET_KEY
});

exports.getHSES3Url = (req, res) => {

    const key2 = `${Date.now()}/.txt`;

    s3.getSignedUrl('putObject', {
        Bucket: 'hsse-staging',
        ContentType: 'txt',
        Key: key2
    }, (err, url) => {
        res.send({ key, url });
    });
};

exports.create = (req, res) => {

    console.log(req.body);

    // const key = `${decoded.sub}/${uuid()}.txt`;
    const key2 = `${Date.now()}/.txt`;

    const { file, url } = req.body;

    // Parse File here before storing to mongodb

    const articlesArray = fileUtil.parseHSEJournal(file);

    articlesArray.map();




    const newHSEArticleBatchfile = new HSEArticleBatchfileModelClass({
        batchfileUrl: url
    });

    s3.getSignedUrl('putObject', {
        Bucket: 'hsse-staging',
        ContentType: 'txt',
        Key: key2
    }, (err, url) => {
        newHSEArticleBatchfile.url = url;
    });

    newHSEArticleBatchfile.save( (err) => {
        if(err) {
            console.log(err);
            return res.status(422).send({
                message: 'Unable to save new batchfile'
            });
        } else {
            res.status(201).send(newHSEArticleBatchfile);
        }
    });
}
