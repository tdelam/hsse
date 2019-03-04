const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false});

const HSEQualityAppraisalArticleQueueController = require('../../controllers/hse/HSEPendingQualityAppraisalsArticleQueueController');

module.exports = app => {
    app.get('/hse/pendingqualityappraisalsarticlequeue', HSEQualityAppraisalArticleQueueController.listArticles);
    app.get('/hse/pendingqualityappraisalsarticlequeue/fetcharticle/:id', HSEQualityAppraisalArticleQueueController.listArticle);
    app.post('/hse/pendingqualityappraisalsarticle/addjuniorappraiser/:articleId', HSEQualityAppraisalArticleQueueController.addArticleToJuniorQualityAppraiserUser);
    app.post('/hse/pendingqualityappraisalsarticle/addseniorappraiser/:articleId', HSEQualityAppraisalArticleQueueController.addArticleToSeniorQualityAppraiserUser);
}
