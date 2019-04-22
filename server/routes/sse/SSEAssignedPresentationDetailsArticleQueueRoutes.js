const SSEAssignedPresentationDetailsArticleQueueController = require('../../controllers/sse/SSEAssignedPresentationDetailsArticleQueueController');

module.exports = app => {
    app.get('/sse/assignedpresentationdetailsarticlequeue', SSEAssignedPresentationDetailsArticleQueueController.listArticles);
    app.get('/sse/assignedpresentationdetailsarticlequeue/fetcharticle/:articleId', SSEAssignedPresentationDetailsArticleQueueController.fetchArticle);

    app.post('/sse/assignedpresentationdetailsarticlequeue/savevalues/:articleId', SSEAssignedPresentationDetailsArticleQueueController.setPresentationDetailsValues);
    // app.post('/sse/assignedpresentationdetailsarticlequeue/setcompleted/:articleId', SSEAssignedPresentationDetailsArticleQueueController.setPresentationDetailsComplete);
}