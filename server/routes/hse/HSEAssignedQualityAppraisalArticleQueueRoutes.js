const HSEAssignedQualityAppraisalsArticleQueueController = require('../../controllers/hse/HSEAssignedQualityAppraisalsArticleQueueController');

module.exports = app => {
    app.get('/hse/assignedqualityappraisalsarticlequeue', HSEAssignedQualityAppraisalsArticleQueueController.listArticles);
    app.get('/hse/assignedqualityappraisalsarticle/fetcharticle/:articleId', HSEAssignedQualityAppraisalsArticleQueueController.fetchArticle);

    app.post('/hse/assignedqualityappraisalsarticle/savevalues/:articleId', HSEAssignedQualityAppraisalsArticleQueueController.setQualityAppraisalValues);
    app.post('/hse/assignedqualityappraisalarticle/setcompleted/:articleId', HSEAssignedQualityAppraisalsArticleQueueController.setQualityAppraisalComplete);
}