const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false});

const SSEPendingQualityAppraisalsArticleQueueController = require('../../controllers/sse/SSEPendingQualityAppraisalsArticleQueueController');

module.exports = app => {
    app.get('/sse/pendingqualityappraisalsarticlequeue', SSEPendingQualityAppraisalsArticleQueueController.listArticles);
    app.get('/sse/pendingqualityappraisalsarticlequeue/fetcharticle/:id', SSEPendingQualityAppraisalsArticleQueueController.listArticle);
    app.post('/sse/pendingqualityappraisalsarticle/addjuniorappraiser/:articleId', SSEPendingQualityAppraisalsArticleQueueController.addArticleToJuniorQualityAppraiser);
    app.post('/sse/pendingqualityappraisalsarticle/addseniorappraiser/:articleId', SSEPendingQualityAppraisalsArticleQueueController.addArticleToSeniorQualityAppraiser);
}
