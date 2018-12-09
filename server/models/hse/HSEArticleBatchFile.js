const mongoose = require('mongoose');

const { Schema } = mongoose;

const HSEArticleBatchFileSchema = new Schema({ 

    referenceType: { type: String },
    
    fileName: { type: String },
    batchfileUrl: String,
    uploadDate: { type: Date, default: Date.now },
    language: {type: String, enum: ['English', 'French', 'Spanish', 'Portuguese', 'Russian', 'Arabic', 'Chinese'], default: 'English' },
    harvestDate: { type: Date, default: Date.now },
    // _articles: { type: [Schema.Types.ObjectId], ref: 'HSEArticles'}
    // test

})

mongoose.model('HSEArticleBatchFiles', HSEArticleBatchFileSchema);
