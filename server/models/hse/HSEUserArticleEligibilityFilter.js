const mongoose = require('mongoose');

const { Schema } = mongoose;

const HSEUserArticleEligibilityFilterSchema = new Schema({ 
    
    _article: { type: Schema.Types.ObjectId, ref: 'HSEArticles'},

    // Relevance
    relevance: { type: Boolean, default: false },

    // Eligibility
    

})

mongoose.model('HSEUserArticleEligibilityFilters', HSEUserArticleEligibilityFilterSchema);