const mongoose = require('mongoose');

const { Schema } = mongoose;

const SSEArticleBatchFileSchema = new Schema({ 

    referenceType: { type: String },
    
    fileName: { type: String },
    batchfileUrl: String,
    uploadDate: { type: Date, default: Date.now },
    language: {type: String, enum: ['English', 'French', 'Spanish', 'Portuguese', 'Russian', 'Arabic', 'Chinese'], default: 'English' },
    harvestDate: { type: Date, default: Date.now },
    articleSource: { type: String },
    priority: {type: String, enum: ['LOW', 'MEDIUM', 'HIGH'], default: 'LOW' },
    // _articles: [{ type: Schema.Types.ObjectId], ref: 'HSEArticles'}]
    // test

    _elibilityFiltersJunior: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
    _elibilityFiltersJuniorEmail: { type: String, default: null },

    _elibilityFiltersSenior: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
    _elibilityFiltersSeniorEmail: { type: String, default: null },


})

mongoose.model('SSEArticleBatchFiles', SSEArticleBatchFileSchema);
