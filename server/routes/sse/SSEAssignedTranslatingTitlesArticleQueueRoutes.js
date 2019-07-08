const SSEAssignedTranslatingTitlesArticleQueueController = require('../../controllers/sse/SSEAssignedTranslatingTitlesArticleQueueController');

module.exports = app => {
    app.get('/sse/assignedtranslatingtitlesarticlequeue', SSEAssignedTranslatingTitlesArticleQueueController.listArticles);
    app.get('/sse/assignedtranslatingtitlesarticlequeue/fetcharticle/:articleId', SSEAssignedTranslatingTitlesArticleQueueController.fetchArticle);
}