const SSEEligibilityFilterBatchfileQueueController = require('../../controllers/sse/SSEPendingEligibilityFiltersBatchfileQueueController');

module.exports = app => {
    app.get('/sse/pendingeligibilityfiltersbatchfilequeue', SSEEligibilityFilterBatchfileQueueController.listBatchfiles);
    app.get('/sse/pendingeligibilityfiltersbatchfilequeue/:id', SSEEligibilityFilterBatchfileQueueController.listBatchfile);
}