const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false});

const SSEPendingPresentationDetailsArticleQueueController = require('../../controllers/sse/SSEPendingPresentationDetailsArticleQueueController');

module.exports = app => {
    app.get('/sse/pendingpresentationdetailsarticlequeue', SSEPendingPresentationDetailsArticleQueueController.listArticles);
    app.get('/sse/pendingpresentationdetailsarticlequeue/fetcharticle/:id', SSEPendingPresentationDetailsArticleQueueController.listArticle);
    app.post('/sse/pendingpresentationdetailsarticlequeue/addjuniordetailer/:articleId', SSEPendingPresentationDetailsArticleQueueController.addArticleToJuniorPresentationDetailer);
}
