const mongoose = require('mongoose');

const { Schema } = mongoose;

const HSEArticleEligibilityFilterSchema = new Schema({ 
    
    _article: { type: Schema.Types.ObjectId, ref: 'HSEArticles'},

    // Relevance
    relevance: { type: Boolean, default: false },

    // Eligibility
    evidenceBriefsForPolicy: { type: Boolean, default: false },
    documenttype: {type: String, enum: ['LOW', 'MEDIUM', 'HIGH'], default: 'LOW' },

})

mongoose.model('HSEArticleEligibilityFilters', HSEArticleEligibilityFilterSchema);