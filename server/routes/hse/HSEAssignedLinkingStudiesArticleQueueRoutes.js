const HSEAssignedLinkingStudiesArticleQueueController = require('../../controllers/hse/HSEAssignedLinkingStudiesArticleQueueController');

module.exports = app => {
    app.get('/hse/assignedlinkingstudiesarticlequeue', HSEAssignedLinkingStudiesArticleQueueController.listArticles);
    app.get('/hse/assignedlinkingstudiesarticle/fetcharticle/:articleId', HSEAssignedLinkingStudiesArticleQueueController.fetchArticle);

    // app.post('/hse/assignedlinkingstudiesarticle/savevalues/:articleId', HSEAssignedLinkingStudiesArticleQueueController.setLinkingStudiesValues);
    // app.post('/hse/assignedlinkingstudiesarticle/setcompleted/:articleId', HSEAssignedLinkingStudiesArticleQueueController.setLinkingStudiesComplete);
}