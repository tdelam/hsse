const HSEPendingPresentationDetailsArticleQueueController = require('../../controllers/hse/HSEPendingPresentationDetailsArticleQueueController');

module.exports = app => {
    app.get('/hse/pendingpresentationdetailsarticlequeue', HSEPendingPresentationDetailsArticleQueueController.listArticles);
    app.get('/hse/pendingpresentationdetailsarticlequeue/:id', HSEPendingPresentationDetailsArticleQueueController.listArticle);
    app.post('/hse/pendingpresentationdetailsarticlequeue/addjuniordetailer/:articleId', HSEPendingPresentationDetailsArticleQueueController.addArticleToJuniorDetailer);
}