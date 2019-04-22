const HSEAssignedQualityAppraisalsArticleQueueController = require('../../controllers/hse/HSEAssignedQualityAppraisalsArticleQueueController');

module.exports = app => {
    app.get('/hse/assignedqualityappraisalsarticlequeue', HSEAssignedQualityAppraisalsArticleQueueController.listArticles);
    app.get('/hse/assignedqualityappraisalsarticlequeue/fetcharticle/:articleId', HSEAssignedQualityAppraisalsArticleQueueController.fetchArticle);

    // app.post('/hse/assignedqualityappraisalsarticlequeue/savevalues/:articleId', HSEAssignedQualityAppraisalsArticleQueueController.setQualityAppraisalValues);
    // app.post('/hse/assignedqualityappraisalsarticlequeue/setcompleted/:articleId', HSEAssignedQualityAppraisalsArticleQueueController.setQualityAppraisalComplete);
}