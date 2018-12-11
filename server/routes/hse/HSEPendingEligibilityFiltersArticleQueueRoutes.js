const HSEEligibilityFilterArticleQueueController = require('../../controllers/hse/HSEPendingEligibilityFiltersArticleQueueController');

module.exports = app => {
    app.get('/hse/pendingeligibilityfiltersarticlequeue', HSEEligibilityFilterArticleQueueController.listArticles);
    app.get('/hse/pendingeligibilityfiltersarticlequeue/:id', HSEEligibilityFilterArticleQueueController.listArticle);
}