const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false});

const SSEPendingLinkingStudiesArticleQueueController = require('../../controllers/sse/SSEPendingLinkingStudiesArticleQueueController');

module.exports = app => {
    app.get('/sse/pendinglinkingstudiessarticlequeue', SSEPendingLinkingStudiesArticleQueueController.listArticles);
    app.get('/sse/pendinglinkingstudiesarticlequeue/fetcharticle/:id', SSEPendingLinkingStudiesArticleQueueController.listArticle);
    app.post('/sse/pendinglinkingstudiesarticle/addjuniorappraiser/:articleId', SSEPendingLinkingStudiesArticleQueueController.addArticleToJuniorLinker);
}
