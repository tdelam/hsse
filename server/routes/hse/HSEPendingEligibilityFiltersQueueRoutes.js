const HSEEligibilityFilterQueueController = require('../../controllers/hse/HSEPendingEligibilityFiltersQueueController');

module.exports = app => {
    app.get('/hse/pendingeligibilityfiltersqueue', HSEEligibilityFilterQueueController.listArticles);
    app.get('/hse/pendingeligibilityfiltersqueue/:id', HSEEligibilityFilterQueueController.listArticle);
}