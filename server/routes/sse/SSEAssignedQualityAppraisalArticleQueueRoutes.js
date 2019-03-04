const SSEAssignedQualityAppraisalsArticleQueueController = require('../../controllers/sse/SSEAssignedQualityAppraisalsArticleQueueController');

module.exports = app => {
    app.get('/sse/assignedqualityappraisalsarticlequeue', SSEAssignedQualityAppraisalsArticleQueueController.listArticles);
    app.get('/sse/assignedqualityappraisalsarticle/fetcharticle/:articleId', SSEAssignedQualityAppraisalsArticleQueueController.fetchArticle);

    app.post('/sse/assignedqualityappraisalsarticle/savevalues/:articleId', SSEAssignedQualityAppraisalsArticleQueueController.setQualityAppraisalValues);
    app.post('/sse/assignedqualityappraisalarticle/setcompleted/:articleId', SSEAssignedQualityAppraisalsArticleQueueController.setQualityAppraisalComplete);
}