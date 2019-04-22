const SSEAssignedQualityAppraisalsArticleQueueController = require('../../controllers/sse/SSEAssignedQualityAppraisalsArticleQueueController');

module.exports = app => {
    app.get('/sse/assignedqualityappraisalsarticlequeue', SSEAssignedQualityAppraisalsArticleQueueController.listArticles);
    app.get('/sse/assignedqualityappraisalsarticle/fetcharticle/:articleId', SSEAssignedQualityAppraisalsArticleQueueController.fetchArticle);

    app.post('/sse/assignedqualityappraisalsarticlequeue/savevalues/:articleId', SSEAssignedQualityAppraisalsArticleQueueController.setQualityAppraisalValues);
    // app.post('/sse/assignedqualityappraisalarticlequeue/setcompleted/:articleId', SSEAssignedQualityAppraisalsArticleQueueController.setQualityAppraisalComplete);
}