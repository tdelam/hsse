const HSEAssignedLinkingStudiesArticleQueueController = require('../../controllers/hse/HSEAssignedLinkingStudiesArticleQueueController');

module.exports = app => {
    app.get('/hse/assignedlinkingstudiesarticlequeue', HSEAssignedLinkingStudiesArticleQueueController.listArticles);
    app.get('/hse/assignedlinkingstudiesarticlequeue/fetcharticle/:articleId', HSEAssignedLinkingStudiesArticleQueueController.fetchArticle);

    // app.post('/hse/assignedlinkingstudiesarticlequeue/savevalues/:articleId', HSEAssignedLinkingStudiesArticleQueueController.setLinkingStudiesValues);
    // app.post('/hse/assignedlinkingstudiesarticlequeue/setcompleted/:articleId', HSEAssignedLinkingStudiesArticleQueueController.setLinkingStudiesComplete);
}