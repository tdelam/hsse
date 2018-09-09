const passport = require('passport');

const HSEArticleController = require('../../controllers/hse/HSEArticleController');
const requireSignin = passport.authenticate('local', { session: false });

const config = require('../../config/baseConfig');

module.exports = (app) => {
    
    // app.get('/api/hsearticles', requireSignin, HSEArticleController.list);
    app.get('/api/hsearticle/:articleId', HSEArticleController.read);
    app.post('/api/hsearticles', HSEArticleController.create);
    app.delete('/api/hsearticles/:articleId', HSEArticleController.delete);
    
};