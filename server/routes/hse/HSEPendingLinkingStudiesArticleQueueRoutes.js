const HSEPendingLinkingStudiesQueueController = require('../../controllers/hse/HSEPendingLinkingStudiesArticleQueueController');

module.exports = app => {
    app.get('/hse/pendinglinkingstudiesarticlequeue', HSEPendingLinkingStudiesQueueController.listArticles);
    app.get('/hse/pendinglinkingstudiesarticlequeue/:id', HSEPendingLinkingStudiesQueueController.listArticle);
    app.post('/hse/pendinglinkingstudiesarticlequeue/addjuniorlinker/:articleId', HSEPendingLinkingStudiesArticleQueueController.addArticleToJuniorLinker);
}