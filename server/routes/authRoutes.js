const jwt = require('jwt-simple');
const Authentication = require('../controllers/authentication');
const passportService = require('../services/passport');
const passport = require('passport');

const config = require('../config/baseConfig');

const requireAuth = passport.authenticate('jwt', { session: false});
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
    app.get('/', (req, res, next) => {
        res.send({ message: "Welcome to McMaster Health Sciences"});
    });

    app.get('/auth', requireAuth, (req, res, next) => {
        res.send({ message: 'Authenticated Route' })
    });

    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);
    
    app.get('/confirmuser/:token', Authentication.confirmUser);
    app.post('/forgotpassword', Authentication.sendPasswordResetEmail);
    app.post('/resetpassword/:token', Authentication.resetPassword);
};