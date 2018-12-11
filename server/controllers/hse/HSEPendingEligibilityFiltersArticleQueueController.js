const mongoose = require('mongoose');

const HSEArticleModelClass = mongoose.model('HSEArticles');

exports.listArticles = async (req, res) => {
     HSEArticleModelClass.find()
        .or([ { elibilityFilterCompletedJunior: false }, { elibilityFilterCompletedSenior: false } ])
        .exec(function(err, articles) {
            if(err) {
                return res.send(err);
            } else if(!articles) {
                return res.status(404).send({
                    message: 'No article in the Eligibility Filters Article Pending Queue'
                });
            }
            return res.status(200).send(articles);
        });
};

exports.listArticle = async (req, res) => {

    const id = req.param.id;

    return await HSEArticleModelClass.findById(id);

};

exports.create = (req, res) => {
    
}

exports.addArticleToJuniorEligibilityFilterUser = (req, res) => {

    const { articleId } = req.params;

    if(!mongoose.Types.ObjectId.isValid(articleId)) {
        return res.status(400).send({
            message: 'Article is invalid'
        });
    }

    HSEArticleModelClass.findById(articleId, (err, article) => {
        if(err) {
            return res.send(err);
        } else if(!article) {
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
        }
        if(article._elibilityFilterJunior !== null) {
            return res.status(404).send({
                message: 'A junior filter has already been added for this article'
            });
        } else {
            article._elibilityFilterJunior = req.user.ObjectId;
            return res.status(200).send({
                message: 'Junior eligibility and filter user added'
            });
        }
    });

};

exports.addArticleToSeniorEligibilityFilterUser = (req, res) => {

    const { articleId } = req.params;

    if(!mongoose.Types.ObjectId.isValid(articleId)) {
        return res.status(400).send({
            message: 'Article is invalid'
        });
    }

    HSEArticleModelClass.findById(articleId, (err, article) => {
        if(err) {
            return res.send(err);
        } else if(!article) {
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
        }
        if(article._elibilityFilterSenior !== null) {
            return res.status(404).send({
                message: 'A senior filter has already been added for this article'
            });
        } else {
            article._elibilityFilterSenior = req.user.ObjectId;
            return res.status(200).send({
                message: 'Junior eligibility and filter user added'
            });
        }
    });

}



