const mongoose = require('mongoose');

const { Schema } = mongoose;

const HSELinkingStudiesSchema = new Schema({ 
    
_article: { type: Schema.Types.ObjectId, ref: 'HSEArticles'},

    
});



mongoose.model('HSELinkingStudies', HSELinkingStudiesSchema);

HSELinkingStudiesSchema.eachPath(function(path) {
    //console.log(path);
});

var props = Object.keys(HSELinkingStudiesSchema.paths);