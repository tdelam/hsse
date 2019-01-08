const HSEEligibilityFilterBatchfileQueueController = require('../../controllers/hse/HSEPendingEligibilityFiltersBatchfileQueueController');

module.exports = app => {
    app.get('/hse/pendingeligibilityfiltersbatchfilequeue', HSEEligibilityFilterBatchfileQueueController.listBatchfiles);
    app.get('/hse/pendingeligibilityfiltersbatchfilequeue/:id', HSEEligibilityFilterBatchfileQueueController.listBatchfile);
}