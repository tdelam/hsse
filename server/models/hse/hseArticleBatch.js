const mongoose = require('mongoose');

const { Schema } = mongoose;

const HSEArticleBatchSchema = new Schema({ 
    
    fileName: { type: String },
    uploadDate: { type: Date, default: Date.now },
    _articles: { type: [Schema.Types.ObjectId], ref: 'HSEArticles'}

})