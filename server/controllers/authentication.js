const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');
const nodemailer = require('nodemailer');
//const aws = require('aws-sdk');
const ses = require('nodemailer-ses-transport');

const config = require('../config/baseConfig');

const USER = ['user'];
const UPLOADER = ['user', 'uploader'];
const JUNIOR_DETAILER = ['user', 'uploader', 'juniordetailer'];
const SENIOR_DETAILER = ['user', 'uploader', 'juniordetailer', 'seniordetailer'];
const JUNIOR_LINKER = ['user', 'uploader', 'juniordetailer', 'seniordetailer', 'juniorlinker'];
const SENIOR_LINKER = ['user', 'uploader', 'juniordetailer', 'seniordetailer','juniorlinker', 'seniorlinker'];
const JUNIOR_APPRAISER = ['user', 'uploader', 'juniordetailer', 'seniordetailer','juniorlinker', 'seniorlinker', 'juniorappraiser'];
const SENIOR_APPRAISER = ['user', 'uploader', 'juniordetailer', 'seniordetailer','juniorlinker', 'seniorlinker', 'juniorappraiser', 'seniorappraiser'];
const JUNIOR_FILTER = ['user', 'uploader', 'juniordetailer', 'seniordetailer','juniorlinker', 'seniorlinker', 'juniorappraiser', 'seniorappraiser', 'juniorfilter'];
const SENIOR_FILTER = ['user', 'uploader', 'juniordetailer', 'seniordetailer','juniorlinker', 'seniorlinker', 'juniorappraiser', 'seniorappraiser', 'juniorfilter', 'seniorfilter'];
const PRIORITIZER = ['user', 'uploader', 'juniordetailer', 'seniordetailer','juniorlinker', 'seniorlinker', 'juniorappraiser', 'seniorappraiser', 'juniorfilter', 'seniorfilter', 'prioritizer'];
const ADMINISTRATOR= ['user', 'uploader', 'juniordetailer', 'seniordetailer','juniorlinker', 'seniorlinker', 'juniorappraiser', 'seniorappraiser', 'juniorfilter', 'seniorfilter', 'prioritizer', 'administrator'];


/*
aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: 'us-east-1',
});
*/
const UserModelClass = mongoose.model('Users');

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
        from: 'forum@mcmaster.ca',
        to: args.email,
        subject: 'Confirm Registration Email',
        html: `Please click this email to confirm your email: <a href="${confirmationUrl}">${confirmationUrl}</a>`,
    });
}

const sendResetEmail = (args, emailToken) => {

    console.log("*********** sending email *******");
    
    const resetUrl = `${config.frontendServer}/resetpassword/${emailToken}`;
     transporter.sendMail({
        from: 'forum@mcmaster.ca',
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


    return res.redirect(config.frontendServer + "/registrationconfirmed" );

}

exports.currentUser = async (req, res, next) => {

    const userId = getUserIdFromToken(req.headers.authorization);

    const user = await UserModelClass.findOne({ _id: userId }).exec();

    return res.status(200).send({ user });

}

exports.fetchUserByEmail = async (req, res, next) => {

    console.log(req.params);

    const email = req.params.email;

    const user = await UserModelClass.findOne({ email }).exec();

    return res.status(200).send({ user });

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

const getUserIdFromToken = (token) => {
    return jwt.decode(token, process.env.JWT_SECRET).sub;
}
/*
exports.getUserFromToken = (token) => {

    const userId = getUserIdFromToken(token);

    UserModelClass.findOne({ _id: userId }, (err, existingUser) => {
        
        if (err) { 
            return null; 
        }
        
        return existingUser;

    });
}
*/

exports.getUserFromToken = async (token) => {

    const userId = getUserIdFromToken(token);

    return await UserModelClass.findOne({ _id: userId }).exec();
}

exports.fetchAllUsers = (req, res) => {
    UserModelClass.find( (err, users) => {
        if(err) {
            return res.send(err);
        } else if(!users) {
            return res.status(404).send({
                message: 'No user has been found'
            });
        }
        return res.status(200).send(users);
    });
}

exports.addRole = async (req, res) => {

    const values = req.body;

    UserModelClass.findOneAndUpdate( (err, user) => {
        if(err) {
            return res.send(err);
        } else if(!user) {
            return res.status(404).send({
                message: 'No user has been found'
            });
        }
        return res.status(200).send(user);
    });

    const user = await getUserFromToken(req.headers.authorization);

    await UserModelClass.findOneAndUpdate(
        { _id:  user._id },
        
        { $push: { roles: values } },

        { new: true, useFindAndModify: false },

        { safe: true, upsert: trued },
        
        // the callback function
        (err, user) => {
        // Handle any possible database errors
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            } else if (!user) {
                console.log('No user found!');
                return res.status(404).send({
                    message: 'No user has been found'
                });
            } else {
                console.log(user);
                return res.send({
                    message: `${values} added to ${user}`
                });
            }
        }
    );

}

exports.removeRole = async (req, res) => {

    const values = req.body;

    const user = await getUserIdFromToken(req.headers.authorization);

    await UserModelClass.findOneAndUpdate(
        
        { _id: user._id },
        
        { $pull: { roles: values } },
        
        { safe: true, upsert: true },

        (err, user) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            } else if (!user) {
                console.log('No user found!');
                return res.status(404).send({
                    message: 'No user has been found'
                });
            } else {
                console.log(user);
                return res.send({
                    message: `${values} added to ${user}`
                });
            }
        }
    );

}

exports.updateRole = async (req, res) => {
    //console.log(req.body.value);
    let values;
    let { selectedRole, selectedEmail } = req.body.value;

    switch(selectedRole) {
        case 'user':
            values =  USER;
            break;
        case 'uploader':
            values = UPLOADER;
            break;
        case 'juniordetailer':
            values = JUNIOR_DETAILER;
            break;
        case 'seniordetailer':
            values = SENIOR_DETAILER;
            break;
        case 'juniorlinker': 
            values = JUNIOR_LINKER;
            break;
        case 'seniorlinker': 
            values = SENIOR_LINKER;
            break;
        case 'juniorappraiser':
            values = JUNIOR_APPRAISER;
            break;
        case 'seniorappraiser':
            values = SENIOR_APPRAISER;
            break;
        case 'juniorfilter':
            values = JUNIOR_FILTER;
            break;
        case 'seniorfilter':
            values = SENIOR_FILTER;
            break;
        case 'prioritizer': 
            values = PRIORITIZER;
            break;
        case 'administrator': 
            values = ADMINISTRATOR;
            break;
        default:
            values = USER;
    }

    await UserModelClass.findOneAndUpdate(
        
        //{ _id: user._id },

        { email: selectedEmail },
        
        { roles: values },

        { useFindAndModify: true, upsert: true },
        
        //{ safe: true, upsert: true },

        (err, user) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            } else if (!user) {
                console.log('No user found!');
                return res.status(404).send({
                    message: 'Unable to update role!'
                });
            } else {
                console.log(user);
                return res.send({
                    message: `Role "${selectedRole}" added to ${user.email}`
                });
            }
        }
    );

}

exports.activateUser = async (req, res) => {

    const user = req.body.values;

    // await UserModelClass.findOneAndUpdate(
    await UserModelClass.findByIdAndUpdate(

        { _id: user._id },

        { confirm: true },

        { new: true, useFindAndModify: false },

        (err, user) => {
            if (err) {

            } else if (!user) {
                console.log('No user found!');
                return res.status(404).send({
                    message: 'No user has found'
                })
            } else {
                console.log(user);
                return res.send({
                    message: `${values} added to ${user}`
                });
            }
        }

    );

}

exports.deactivateUser = async (req, res) => {

    const user = req.body.values;

    await UserModelClass.findOneAndUpdate(

        { _id: user._id },

        { confirm: false },

        { new: true, useFindAndModify: false },

        (err, user) => {
            if (err) {

            } else if (!user) {
                console.log('No user found!');
                return res.status(404).send({
                    message: 'No user has found'
                })
            } else {
                console.log(user);
                return res.send({
                    message: `${values} added to ${user}`
                });
            }
        }

    );

}