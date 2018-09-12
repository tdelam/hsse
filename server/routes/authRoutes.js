const jwt = require('jwt-simple');
const Authentication = require('../controllers/authentication');
const passportService = require('../services/passport');
const passport = require('passport');

const config = require('../config/baseConfig');

const requireAuth = passport.authenticate('jwt', { session: false});
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
    app.get('/api/', (req, res, next) => {
        res.send({ message: "Welcome to McMaster Health Sciences"});
    });

    app.get('/api/auth', requireAuth, (req, res, next) => {
        res.send({ message: 'Authenticated Route' })
    });

    app.post('/api/signin', requireSignin, Authentication.signin);
    app.post('/api/signup', Authentication.signup);
    
    app.get('/api/confirmuser/:token', Authentication.confirmUser);
    app.post('/api/forgotpassword', Authentication.sendPasswordResetEmail);
    app.post('/api/resetpassword/:token', Authentication.resetPassword);
};