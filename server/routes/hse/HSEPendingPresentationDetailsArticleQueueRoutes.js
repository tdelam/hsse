const HSEPendingPresentationDetailsArticleQueueController = require('../../controllers/hse/HSEPendingPresentationDetailsQueueController');

module.exports = app => {
    app.get('/hse/pendingpresentationdetailsarticlequeue', HSEPendingPresentationDetailsArticleQueueController.listArticles);
    app.get('/hse/pendingpresentationdetailsarticlequeue/:id', HSEPendingPresentationDetailsArticleQueueController.listArticle);
    app.post('/hse/pendingpresentationdetailsarticlequeue/addjuniordetailer/:articleId', HSEPendingPresentationDetailsArticleQueueController.addArticleToJuniorPresentationDetailer);
}