const passport = require('passport');

const SSEArticleController = require('../../controllers/sse/SSEArticleController');
const requireSignin = passport.authenticate('local', { session: false });

const config = require('../../config/baseConfig');

module.exports = (app) => {
    
    // app.get('/api/ssearticles', requireSignin, SSEArticleController.list);
    app.get('/api/ssearticle/:articleId', SSEArticleController.read);
    app.post('/api/ssearticles', SSEArticleController.create);
    app.delete('/api/ssearticles/:articleId', SSEArticleController.delete);
    
};