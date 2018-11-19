const HSEPendingLinkingStudiesQueueController = require('../../controllers/hse/HSEPendingPresentationDetailsQueueController');

module.exports = app => {
    app.get('/hse/pendinglinkingstudiesqueue', HSEPendingLinkingStudiesQueueController.listArticles);
    app.get('/hse/pendinglinkingstudiesqueue/:id', HSEPendingLinkingStudiesQueueController.listArticle);
}