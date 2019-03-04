const mongoose = require('mongoose');

const SSEArticleModelClass = mongoose.model('SSEArticles');

exports.listArticles = async (req, res) => {
     SSEArticleModelClass.find()
        .or([ { qualityAppraisalCompletedJunior: false }, { qualityAppraisalCompletedSenior: false } ])
        .exec(function(err, articles) {
            if(err) {
                return res.send(err);
            } else if(!articles) {
                return res.status(404).send({
                    message: 'No article in the Quality Appraisal Pending Queue'
                });
            }
            return res.status(200).send(articles);
        });

};

exports.listArticle = async (req, res) => {

    const id = req.param.id;

    return await SSEArticleModelClass.findById(id);

};

exports.create = (req, res) => {
    
}
