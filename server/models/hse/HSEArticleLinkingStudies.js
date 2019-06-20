const mongoose = require('mongoose');

const { Schema } = mongoose;

const HSEArticleLinkingStudiesSchema = new Schema({
    
    _article: { type: Schema.Types.ObjectId, ref: 'HSEArticles'},

    notInEnglish: { type: Boolean, default: false },
    noFreeFullText: { type: Boolean, default: false },
    largeReviews: { type: Boolean, default: false },

    countriesNotReportedInDetails: { type: Boolean, default: false },
    noSpecificCountryFocus: { type: Boolean, defualt: false },

    links: { type: [String] },

    links: [{
        country: String,
        url: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }]
    
    
});



mongoose.model('HSEArticleLinkingStudies', HSEArticleLinkingStudiesSchema);

HSEArticleLinkingStudiesSchema.eachPath(function(path) {
    //console.log(path);
});

var props = Object.keys(HSEArticleLinkingStudiesSchema.paths);