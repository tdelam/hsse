const passport = require('passport');

const HSEArticleBatchfileController = require('../../controllers/hse/HSEArticleBatchfileController');
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
    // app.get('/api/hsearticles', requireSignin, HSEArticleController.list);
    app.get('/hse/articles', HSEArticleBatchfileController.list);
    app.get('/hse/articles/:articleId', HSEArticleBatchfileController.read);
    app.post('/hse/articles', HSEArticleBatchfileController.create);
    app.delete('/hse/articles/:articleId', HSEArticleBatchfileController.delete);
};