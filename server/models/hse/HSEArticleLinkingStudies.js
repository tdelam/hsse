const mongoose = require('mongoose');

const { Schema } = mongoose;

const HSEArticleLinkingStudiesSchema = new Schema({ 
    
_article: { type: Schema.Types.ObjectId, ref: 'HSEArticles'},

    
});



mongoose.model('HSEArticleLinkingStudies', HSEArticleLinkingStudiesSchema);

HSEArticleLinkingStudiesSchema.eachPath(function(path) {
    //console.log(path);
});

var props = Object.keys(HSEArticleLinkingStudiesSchema.paths);