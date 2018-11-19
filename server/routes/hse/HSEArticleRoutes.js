const passport = require('passport');

const HSEArticleController = require('../../controllers/hse/HSEArticleController');
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
    // app.get('/api/hsearticles', requireSignin, HSEArticleController.list);
    app.get('/hse/articles', HSEArticleController.list);
    app.get('/hse/article/:articleId', HSEArticleController.read);
    app.post('/hse/articles', HSEArticleController.create);
    app.delete('/hse/articles/:articleId', HSEArticleController.delete);
};