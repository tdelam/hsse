const mongoose = require('mongoose');

const { Schema } = mongoose;

const HSEArticleQualityAppraisalSchema = new Schema({ 
    
_article: { type: Schema.Types.ObjectId, ref: 'HSEArticles'},

    // Quality
    questionOne: { type: String, default: '' },
    questionTwo: { type: String, default: '' }

});

HSEArticleQualityAppraisalSchema.methods.isEqualTo = function (otherInput) {

    currentModel = this;

    var unEqualFields = 0;

    const props = Object.keys(HSEArticleQualityAppraisalSchema.paths);

    console.log(props.length);

    HSEArticleQualityAppraisalSchema.eachPath(function(path) {
        
        if( currentModel[path] !== otherInput[path] && path != '_article' && path != '_id') {
            console.log(`${path}: ${currentModel[path]}, ${path}: ${otherInput[path]}`);
            unEqualFields++;
            console.log(path);
        }
    
    });

    return unEqualFields === 0;

};

mongoose.model('HSEArticleQualityAppraisals', HSEArticleQualityAppraisalSchema);

HSEArticleEligibilityFilterSchema.eachPath(function(path) {
    //console.log(path);
});

var props = Object.keys(HSEArticleQualityAppraisalSchema.paths);
//console.log(props.length);