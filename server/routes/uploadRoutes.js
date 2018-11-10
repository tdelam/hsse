const AWS = require('aws-sdk');
const uuid = require('uuid/v1');
const jwt = require('jwt-simple');
const passport = require('passport');

const HSEArticleBatchfileController = require('../controllers/hse/HSEArticleBatchfileController');

const requireSignin = passport.authenticate('local', { session: false });

const s3 = new AWS.S3({
    accessKeyId: process.env.HSSE_S3_ACCESS_KEY,
    secretAccessKey: process.env.HSSE_S3_SECRET_KEY
});

module.exports = app => {
    app.get('/hse/getfileurl', HSEArticleBatchfileController.getFileUrl);
    app.post('/hse/batchfile', HSEArticleBatchfileController.create);
/*    
    app.post('/hse/batchfileupload', (req, res) => {

        // const token = localStorage.setItem('token', response.data.token);

        // const decoded = jwt.decode(token, process.env.JWT_SECRET);

        // console.log(`************ User Id: ${decoded.sub} ********`);
/*
        const user = req.user;

        console.log(user);

        // const key = `${decoded.sub}/${uuid()}.txt`;
        const key2 = `${Date.now()}/.txt`

        s3.getSignedUrl('putObject', {
            Bucket: 'hsse-staging',
            ContentType: 'txt',
            Key: key2
        }, (err, url) => res.send({ key, url }));
    });

    });
*/
    

};

/*

CORS

<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>GET</AllowedMethod>
    <MaxAgeSeconds>3000</MaxAgeSecond>
    <AllowedHeader>Authorization</AllowedHeader>
</CORSRule>

<CORSRule>
    <AllowedOrigin>http://localhost:3050</AllowedOrigin>
    <AllowedMethod>PUT</AllowedMethod>
    <MaxAgeSeconds>3000</MaxAgeSecond>
    <AllowedHeader>*</AllowedHeader>
</CORSRule>
</CORSConfiguration>


BUCKET POLICY
Use policy generator

*/