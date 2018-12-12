const HSEPendingEligibilityFilterArticleQueueController = require('../../controllers/hse/HSEPendingEligibilityFiltersArticleQueueController');

module.exports = app => {
    app.get('/hse/assignedeligibilityfiltersarticlequeue', HSEPendingEligibilityFilterArticleQueueController.listArticles);
    app.get('/hse/assignedeligibilityfiltersarticlequeue/:id', HSEPendingEligibilityFilterArticleQueueController.listArticle);
    app.post('/hse/assignedeligibilityfiltersarticleaddjuniorfilter/:articleId', HSEPendingEligibilityFilterArticleQueueController.addArticleToJuniorEligibilityFilterUser);
    app.post('/hse/assignedeligibilityfiltersarticleaddseniorfilter/:articleId', HSEPendingEligibilityFilterArticleQueueController.addArticleToSeniorEligibilityFilterUser);
}