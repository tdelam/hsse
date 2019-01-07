const HSEAssignedEligibilityFiltersArticleQueueController = require('../../controllers/hse/HSEAssignedEligibilityFiltersArticleQueueController');

module.exports = app => {
    app.get('/hse/assignedeligibilityfiltersarticlequeue', HSEAssignedEligibilityFiltersArticleQueueController.listArticles);
    app.get('/hse/assignedeligibilityfiltersarticle/fetcharticle/:articleId', HSEAssignedEligibilityFiltersArticleQueueController.fetchArticle);

    app.post('/hse/assignedeligibilityfiltersarticle/savevalues/:articleId', HSEAssignedEligibilityFiltersArticleQueueController.setEligibilityFilterValues);
    app.post('/hse/assignedeligibilityfiltersarticle/setcompleted/:articleId', HSEAssignedEligibilityFiltersArticleQueueController.setEligibilityFilterComplete);
}