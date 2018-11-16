module.exports = app => {
    app.get('/hse/eligibilityqueue', HSEEligibilityFilterQueueController.listArticles);
    app.get('/hse/eligibilityqueue/:id', HSEEligibilityFilterQueueController.listArticle);
}