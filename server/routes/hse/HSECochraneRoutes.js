const passport = require('passport');

const HSECochrane = require('../../controllers/cochrane/HSECochraneController');
const requiresSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
    //app.get('/hse/cochrane')
}