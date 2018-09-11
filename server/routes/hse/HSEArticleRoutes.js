const passport = require('passport');

const HSEArticleController = require('../../controllers/hse/HSEArticleController');
const requireSignin = passport.authenticate('local', { session: false });

const config = require('../../config/baseConfig');

module.exports = (app) => {
    
    // app.get('/api/hsearticles', requireSignin, HSEArticleController.list);
    app.get('/hsearticle/:articleId', HSEArticleController.read);
    app.post('/hsearticles', HSEArticleController.create);
    app.delete('/hsearticles/:articleId', HSEArticleController.delete);
    
};