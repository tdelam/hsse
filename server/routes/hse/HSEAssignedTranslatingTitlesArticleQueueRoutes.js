const HSEAssignedTranslatingTitlesArticleQueueController = require('../../controllers/hse/HSEAssignedTranslatingTitlesArticleQueueController');

module.exports = app => {
    app.get('/hse/assignedtranslatingtitlesarticlequeue', HSEAssignedTranslatingTitlesArticleQueueController.listArticles);
    app.get('/hse/assignedtranslatingtitlesarticlequeue/fetcharticle/:articleId', HSEAssignedTranslatingTitlesArticleQueueController.fetchArticle);
}