const HSEPendingPresentationDetailsQueueController = require('../../controllers/hse/HSEPendingPresentationDetailsQueueController');

module.exports = app => {
    app.get('/hse/pendingpresentationdetailsqueue', HSEPendingPresentationDetailsQueueController.listArticles);
    app.get('/hse/pendingpresentationdetailsqueue/:id', HSEPendingPresentationDetailsQueueController.listArticle);
}