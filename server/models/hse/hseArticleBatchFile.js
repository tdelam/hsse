const mongoose = require('mongoose');

const { Schema } = mongoose;

const HSEArticleBatchFileSchema = new Schema({ 
    
    fileName: { type: String },
    batchfileUrl: String,
    uploadDate: { type: Date, default: Date.now },
    harvestDate: { type: Date, default: Date.now },
    _articles: { type: [Schema.Types.ObjectId], ref: 'HSEArticles'}

})

mongoose.model('HSEArticleBatchFiles', HSEArticleBatchFileSchema);