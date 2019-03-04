const passport = require('passport');

const SSEArticleBatchfileController = require('../../controllers/sse/SSEArticleBatchfileController');
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
    //app.get('/api/hse/batchfile', requireSignin, HSEBatchfileController.list);
    app.get('/sse/articlebatchfiles', SSEArticleBatchfileController.list);
    app.get('/sse/articlebatchfiles/:batchfileId', SSEArticleBatchfileController.read);
    //app.post('/hse/articlebatchfiles', HSEArticleBatchfileController.create);
    //app.delete('/hse/articlebatchfile/:batchfileId', HSEArticleBatchfileController.delete);
};