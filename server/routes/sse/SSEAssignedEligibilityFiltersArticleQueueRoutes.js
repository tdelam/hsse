const SSEAssignedEligibilityFiltersArticleQueueController = require('../../controllers/sse/SSEAssignedEligibilityFiltersArticleQueueController');

module.exports = app => {
    app.get('/sse/assignedeligibilityfiltersarticlequeue', SSEAssignedEligibilityFiltersArticleQueueController.listArticles);
    app.get('/sse/assignedeligibilityfiltersarticle/fetcharticle/:articleId', SSEAssignedEligibilityFiltersArticleQueueController.fetchArticle);

    app.post('/sse/assignedeligibilityfiltersarticle/savevalues/:articleId', SSEAssignedEligibilityFiltersArticleQueueController.setEligibilityFilterValues);
    app.post('/sse/assignedeligibilityfiltersarticle/setcompleted/:articleId', SSEAssignedEligibilityFiltersArticleQueueController.setEligibilityFilterComplete);
}