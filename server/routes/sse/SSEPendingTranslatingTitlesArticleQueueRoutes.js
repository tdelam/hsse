const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false});

const SSEPendingTranslatingTitlesArticleQueueController = require('../../controllers/sse/SSEPendingTranslatingTitlesArticleQueueController');

module.exports = app => {
    app.get('/sse/pendingtranslatingtitlesarticlequeue', SSEPendingTranslatingTitlesArticleQueueController.listArticles);
    app.get('/sse/pendingtranslatingtitlesarticlequeue/fetcharticle/:id', SSEPendingTranslatingTitlesArticleQueueController.listArticle);
    app.post('/sse/pendingtranslatingtitlesarticlequeue/addjuniordetailer/:articleId', SSEPendingTranslatingTitlesArticleQueueController.addArticleToJuniorTranslatingTitlesTranslator);
}
