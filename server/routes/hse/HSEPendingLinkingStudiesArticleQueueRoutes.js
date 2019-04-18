const HSEPendingLinkingStudiesArticleQueueController = require('../../controllers/hse/HSEPendingLinkingStudiesArticleQueueController');

module.exports = app => {
    app.get('/hse/pendinglinkingstudiesarticlequeue', HSEPendingLinkingStudiesArticleQueueController.listArticles);
    app.get('/hse/pendinglinkingstudiesarticlequeue/:id', HSEPendingLinkingStudiesArticleQueueController.listArticle);
    app.post('/hse/pendinglinkingstudiesarticlequeue/addjuniorlinker/:articleId', HSEPendingLinkingStudiesArticleQueueController.addArticleToJuniorLinker);
}