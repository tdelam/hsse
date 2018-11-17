const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');
const nodemailer = require('nodemailer');
//const aws = require('aws-sdk');
const ses = require('nodemailer-ses-transport');

const config = require('../config/baseConfig');
/*
aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: 'us-east-1',
});
*/
const UserModelClass = mongoose.model('users');

const userToken = (user) => {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, process.env.JWT_SECRET);
}


/*
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'pj55xncdxkaztz7o@ethereal.email', // generated ethereal user
        pass: 'x3FfF2hgRDhQEpKJ16' // generated ethereal password
    }
});


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.gmailUser,
        pass: config.gmailPassword
    }
});


// create Nodemailer SES transporter
const transporter = nodemailer.createTransport({
    SES: new aws.SES({
        apiVersion: '2010-12-01'
    })
});
*/

const transporter = nodemailer.createTransport(ses({
    accessKeyId: process.env.HSSE_SES_ACCESS_KEY,
    secretAccessKey: process.env.HSSE_SES_SECRET_KEY,
    region: process.env.REGION
}));


const sendConfirmation = (args, emailToken) => {
    
    const confirmationUrl = `${config.backendServer}/confirmuser/${emailToken}`;
     transporter.sendMail({
        from: 'sakksoftware@gmail.com',
        to: args.email,
        subject: 'Confirm Registration Email',
        html: `Please click this email to confirm your email: <a href="${confirmationUrl}">${confirmationUrl}</a>`,
    });
}

const sendResetEmail = (args, emailToken) => {

    console.log("*********** sending email *******");
    
    const resetUrl = `${config.frontendServer}/resetpassword/${emailToken}`;
     transporter.sendMail({
        from: 'sakksoftware@gmail.com',
        to: args.email,
        subject: 'Reset Password Email',
        html: `Please click this to reset your password: <a href="${resetUrl}">${resetUrl}</a>`,
    });
}

exports.signin = (req, res, next) => {
    res.send({ token: userToken(req.user) });
}

exports.signup = (req, res, next) => {
    const { email } = req.body;
    const { password } = req.body;

    if ( !email || !password) {
        return res.status(422).send({ error: 'You must provide email and password'});
    }

    UserModelClass.findOne({ email }, (err, existingUser) => {
        
        if (err) { return next(err); }

        if (existingUser) {
            return res.status(422).send({ error: 'Email is in use' });
        }

        const newUser = new UserModelClass({
            email,
            password
        });
/*
        newUser.save( (err) => {
            res.json({ token: userToken(newUser) });
        });
*/

    newUser.save( (err) => {
        res.json({ message: "Email confirmation sent!" });
    });

    //console.log(`email: ${email}, password: ${password}`);

    sendConfirmation(newUser, userToken(newUser));

    });
    
}

exports.confirmUser = (req, res, next) => {

    const { sub } = jwt.decode(req.params.token, process.env.JWT_SECRET);

    UserModelClass.update({ _id: sub }, { $set: { confirmed: true }}, function (err, user) {

        if(err) { 
            console.log("****** There was an error *******"); 
            return next(err); 
        }

    });


    return res.redirect(config.frontendServer + "/signin" );

}

exports.resetPassword = (req, res, next) => {

    console.log("**************** INSIDE RESET PASSWORD *******************");

    const { sub } = jwt.decode(req.params.token, process.env.JWT_SECRET);


    

    const { password } = req.body;
    const { confirmPassword } = req.body;

    console.log("****************" + password + " - " + confirmPassword +  "*******************");

    var hashedPassword = "";

    if ( !password || !confirmPassword ) {
        console.log("You must provide password and confirmPassword");
        return res.status(422).send({
            error: 'You must provide password and confirmPassword'
        });
    } else if ( password !== confirmPassword ) {
        console.log("Your password and confirmPassword must match");
        return res.status(422).send({ 
            error: 'Your password and confirmPassword must match'
        });
    }

    console.log("**************** inside resetPassword2 *******************");

    bcrypt.genSalt(10, function(err, salt) {
        if (err) { return next(err); }

        bcrypt.hash(password, salt, null, function(err, hash) {
            if(err) { return next(err); }

            UserModelClass.update({ _id: sub }, { $set: { password: hash }}, function (err, user) {

                if(err) { 
                    console.log("*************** ERROR SAVING NEW PASSWORD *******************");
                    return next(err); 
                }
        
                console.log("**************** PASSWORD SAVED! *******************");
        
            });

            next();

        })

        return res.redirect(config.frontendServer + "/successfulpasswordreset" ); 
    });

}

exports.sendPasswordResetEmail = (req, res, next) => {

    const { email } = req.body;

    if ( !email ) {
        return res.status(422).send({ error: 'You must provide email'});
    }

    UserModelClass.findOne({ email }, (err, existingUser) => {
        
        if (err) { return next(err); }

        if (existingUser) {

            sendResetEmail(existingUser, userToken(existingUser));
            console.log("**************** SENDING RESSET EMAIL ***********************");
            

        } else { console.log("************" + email + "************ FOUND ONE ***************");
            return res.status(422).send({ error: 'User is not registered' });
        }

    });
}