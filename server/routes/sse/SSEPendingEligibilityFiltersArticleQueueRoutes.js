const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false});

const SSEEligibilityFilterArticleQueueController = require('../../controllers/sse/SSEPendingEligibilityFiltersArticleQueueController');

module.exports = app => {
    app.get('/sse/pendingeligibilityfiltersarticlequeue', SSEEligibilityFilterArticleQueueController.listArticles);
    app.get('/sse/pendingeligibilityfiltersarticlequeue/fetcharticle/:id', SSEEligibilityFilterArticleQueueController.listArticle);
    app.post('/sse/pendingeligibilityfiltersarticlequeue/addjuniorfilterer/:articleId', SSEEligibilityFilterArticleQueueController.addArticleToJuniorEligibilityFilterer);
    app.post('/sse/pendingeligibilityfiltersarticlequeue/addseniorfilterer/:articleId', SSEEligibilityFilterArticleQueueController.addArticleToSeniorEligibilityFilterer);
}