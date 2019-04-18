const SSEAssignedLinkingStudiesArticleQueueController = require('../../controllers/sse/SSEAssignedLinkingStudiesArticleQueueController');

module.exports = app => {
    app.get('/sse/assignedlinkingstudiesarticlequeue', SSEAssignedLinkingStudiesArticleQueueController.listArticles);
    app.get('/sse/assignedlinkingstudiesarticle/fetcharticle/:articleId', SSEAssignedLinkingStudiesArticleQueueController.fetchArticle);

    app.post('/sse/assignedlinkingstudiesarticle/savevalues/:articleId', SSEAssignedLinkingStudiesArticleQueueController.setQualityAppraisalValues);
    // app.post('/sse/assignedlinkingstudiesarticle/setcompleted/:articleId', SSEAssignedLinkingStudiesArticleQueueController.setLinkingStudiesComplete);
}