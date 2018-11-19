const HSEPendingQualityAppraisalQueueController = require('../../controllers/hse/HSEPendingQualityAppraisalQueueController');

module.exports = app => {
    app.get('/hse/pendingqualityappraisalqueue', HSEPendingQualityAppraisalQueueController.listArticles);
    app.get('/hse/pendingqualityappraisalqueue/:id', HSEPendingQualityAppraisalQueueController.listArticle);
}