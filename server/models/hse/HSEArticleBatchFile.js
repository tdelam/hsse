const mongoose = require('mongoose');

const { Schema } = mongoose;

const HSEArticleBatchFileSchema = new Schema({ 

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

    _eligibilityFiltersJunior: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
    _eligibilityFiltersJuniorEmail: { type: String, default: null },

    _eligibilityFiltersSenior: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
    _eligibilityFiltersSeniorEmail: { type: String, default: null },

})

mongoose.model('HSEArticleBatchFiles', HSEArticleBatchFileSchema);
