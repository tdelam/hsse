const mongoose = require('mongoose');

const { Schema } = mongoose;

const SSELinkingStudiesSchema = new Schema({ 
    
_article: { type: Schema.Types.ObjectId, ref: 'SSEArticles'},

questionOne: { type: String, enum: ['Yes', 'No', "Can't answer", "Not applicable"] }, 
  });


mongoose.model('SSELinkingStudies', SSELinkingStudiesSchema);

var props = Object.keys(SSELinkingStudiesSchema.paths);