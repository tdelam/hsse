const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false});

const HSEEligibilityFilterArticleQueueController = require('../../controllers/hse/HSEPendingEligibilityFiltersArticleQueueController');

module.exports = app => {
    app.get('/hse/pendingeligibilityfiltersarticlequeue', HSEEligibilityFilterArticleQueueController.listArticles);
    app.get('/hse/pendingeligibilityfiltersarticlequeue/fetcharticle/:id', HSEEligibilityFilterArticleQueueController.listArticle);
    app.post('/hse/pendingeligibilityfiltersarticlequeue/addjuniorfilter/:articleId', HSEEligibilityFilterArticleQueueController.addArticleToJuniorEligibilityFilter);
    app.post('/hse/pendingeligibilityfiltersarticlequeue/addseniorfilter/:articleId', HSEEligibilityFilterArticleQueueController.addArticleToSeniorEligibilityFilter);
}