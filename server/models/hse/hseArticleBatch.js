const mongoose = require('mongoose');

const { Schema } = mongoose;

const HSEArticleBatchSchema = new Schema({
    
    batchName: { type: String },
    uploadDate: { type: Date, default: Date.now },
    _articles: { type: [Schema.Types.ObjectId], ref: 'HSEArticles'}

})