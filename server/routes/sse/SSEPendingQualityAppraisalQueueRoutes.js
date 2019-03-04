const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false});

const SSEQualityAppraisalArticleQueueController = require('../../controllers/sse/SSEPendingQualityAppraisalsArticleQueueController');

module.exports = app => {
    app.get('/sse/pendingqualityappraisalsarticlequeue', SSEQualityAppraisalArticleQueueController.listArticles);
    app.get('/sse/pendingqualityappraisalsarticlequeue/fetcharticle/:id', SSEQualityAppraisalArticleQueueController.listArticle);
    app.post('/sse/pendingqualityappraisalsarticle/addjuniorappraiser/:articleId', SSEQualityAppraisalArticleQueueController.addArticleToJuniorQualityAppraiserUser);
    app.post('/sse/pendingqualityappraisalsarticle/addseniorappraiser/:articleId', SSEQualityAppraisalArticleQueueController.addArticleToSeniorQualityAppraiserUser);
}
