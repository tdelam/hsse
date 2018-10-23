const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.HSSE_S3_ACCESS_KEY,
    secretAccessKey: process.env.HSSE_S3_SECRET_KEY
});

module.exports = app => {
    app.get('/api/upload', (req, res) => {
        s3.getSignedUrl('putObject', {
            Bucket: 'hsse-staging',
            ContentType: 'txt',
            
        })
    })
};