const mongoose = require('mongoose');

const { Schema } = mongoose;

const SSEArticleLinkingStudiesSchema = new Schema({ 
    
_article: { type: Schema.Types.ObjectId, ref: 'SSEArticles'},

questionOne: { type: String, enum: ['Yes', 'No', "Can't answer", "Not applicable"] }, 
  });


mongoose.model('SSEArticleLinkingStudies', SSEArticleLinkingStudiesSchema);

var props = Object.keys(SSEArticleLinkingStudiesSchema.paths);