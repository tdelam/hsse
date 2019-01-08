const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false});

const HSEEligibilityFilterArticleQueueController = require('../../controllers/hse/HSEPendingEligibilityFiltersArticleQueueController');

module.exports = app => {
    app.get('/hse/pendingeligibilityfiltersarticlequeue', HSEEligibilityFilterArticleQueueController.listArticles);
    app.get('/hse/pendingeligibilityfiltersarticlequeue/fetcharticle/:id', HSEEligibilityFilterArticleQueueController.listArticle);
    app.post('/hse/pendingeligibilityfiltersarticle/addjuniorfilter/:articleId', HSEEligibilityFilterArticleQueueController.addArticleToJuniorEligibilityFilterUser);
    app.post('/hse/pendingeligibilityfiltersarticle/addseniorfilter/:articleId', HSEEligibilityFilterArticleQueueController.addArticleToSeniorEligibilityFilterUser);
}