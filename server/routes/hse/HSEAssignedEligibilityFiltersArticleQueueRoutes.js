/**
 *  Routing for eligibility and filter queue
 *  
 *  @author Kwadwo Sakyi
 */

const HSEAssignedEligibilityFiltersArticleQueueController = require('../../controllers/hse/HSEAssignedEligibilityFiltersArticleQueueController');

module.exports = app => {
    app.get('/hse/assignedeligibilityfiltersarticlequeue', HSEAssignedEligibilityFiltersArticleQueueController.listArticles);
    app.get('/hse/assignedeligibilityfiltersarticlequeue/fetcharticle/:articleId', HSEAssignedEligibilityFiltersArticleQueueController.fetchArticle);

    app.post('/hse/assignedeligibilityfiltersarticlequeue/savevalues/:articleId', HSEAssignedEligibilityFiltersArticleQueueController.setEligibilityFiltersValues);
    app.post('/hse/assignedeligibilityfiltersarticlequeue/setcompleted/:articleId', HSEAssignedEligibilityFiltersArticleQueueController.setFullEligibilityFiltersCompleteOrResolve);

    app.post('/hse/assignedeligibilityfiltersarticlequeue/removejuniorfilterer/:articleId', HSEAssignedEligibilityFiltersArticleQueueController.removeArticleFromJuniorEligibilityFilterer);
    app.post('/hse/assignedeligibilityfiltersarticlequeue/removealljuniorfilterer', HSEAssignedEligibilityFiltersArticleQueueController.removeAllArticlesFromJuniorEligibilityFilterer);

    app.post('/hse/assignedeligibilityfiltersarticlequeue/removeseniorfilterer/:articleId', HSEAssignedEligibilityFiltersArticleQueueController.removeArticleFromSeniorEligibilityFilterer);
    app.post('/hse/assignedeligibilityfiltersarticlequeue/removeallseniorfilterer', HSEAssignedEligibilityFiltersArticleQueueController.removeAllArticlesFromSeniorEligibilityFilterer);
}