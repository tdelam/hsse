
const StageController = require('../controllers/stageController');

module.exports = (app) => {
    
    app.get('/api/stage/:documentId', StageController.read);
    app.get('/api/stages', StageController.list);
    app.post('/api/stages', StageController.create);
    app.delete('/api/stages/:stageId', StageController.delete);

};