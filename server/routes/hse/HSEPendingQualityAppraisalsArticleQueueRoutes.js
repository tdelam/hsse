const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false});

const HSEPendingQualityAppraisalsArticleQueueController = require('../../controllers/hse/HSEPendingQualityAppraisalsArticleQueueController');

module.exports = app => {
    app.get('/hse/pendingqualityappraisalsarticlequeue', HSEPendingQualityAppraisalsArticleQueueController.listArticles);
    app.get('/hse/pendingqualityappraisalsarticlequeue/fetcharticle/:id', HSEPendingQualityAppraisalsArticleQueueController.listArticle);
    app.post('/hse/pendingqualityappraisalsarticlequeue/addjuniorappraiser/:articleId', HSEPendingQualityAppraisalsArticleQueueController.addArticleToJuniorQualityAppraiser);
    app.post('/hse/pendingqualityappraisalsarticlequeue/addseniorappraiser/:articleId', HSEPendingQualityAppraisalsArticleQueueController.addArticleToSeniorQualityAppraiser);
}
