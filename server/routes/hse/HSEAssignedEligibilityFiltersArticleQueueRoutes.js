const HSEAssignedEligibilityFiltersArticleQueueController = require('../../controllers/hse/HSEAssignedEligibilityFiltersArticleQueueController');

module.exports = app => {
    app.get('/hse/assignedeligibilityfiltersarticlequeue', HSEAssignedEligibilityFiltersArticleQueueController.listArticles);
    app.get('/hse/assignedeligibilityfiltersarticlequeue/fetcharticle/:articleId', HSEAssignedEligibilityFiltersArticleQueueController.fetchArticle);

    app.post('/hse/assignedeligibilityfiltersarticlequeue/savevalues/:articleId', HSEAssignedEligibilityFiltersArticleQueueController.setEligibilityFilterValues);
    app.post('/hse/assignedeligibilityfiltersarticlequeue/setcompleted/:articleId', HSEAssignedEligibilityFiltersArticleQueueController.setEligibilityFilterComplete);
}