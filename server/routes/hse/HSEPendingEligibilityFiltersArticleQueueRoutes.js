const HSEEligibilityFilterArticleQueueController = require('../../controllers/hse/HSEPendingEligibilityFiltersArticleQueueController');

module.exports = app => {
    app.get('/hse/pendingeligibilityfiltersarticlequeue', HSEEligibilityFilterArticleQueueController.listArticles);
    app.get('/hse/pendingeligibilityfiltersarticlequeue/:id', HSEEligibilityFilterArticleQueueController.listArticle);
    app.post('/hse/pendingeligibilityfiltersarticleaddjuniorfilter/:articleId', HSEEligibilityFilterArticleQueueController.addArticleToJuniorEligibilityFilterUser);
    app.post('/hse/pendingeligibilityfiltersarticleaddseniorfilter/:articleId', HSEEligibilityFilterArticleQueueController.addArticleToSeniorEligibilityFilterUser);
}