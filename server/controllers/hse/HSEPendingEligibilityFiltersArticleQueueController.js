const mongoose = require('mongoose');

const Authentication = require('../authentication');

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

exports.addArticleToJuniorEligibilityFilterUser = async (req, res) => {

    const { articleId } = req.params;
    
     const user = await Authentication.getUserFromToken(req.headers.authorization);

    if(!mongoose.Types.ObjectId.isValid(articleId)) {
        return res.status(400).send({
            message: 'Article is invalid'
        });
    }

    HSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {
            return res.send(err);
        } else if(!article) {
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
        }
        if(article._elibilityFilterInputJunior !== null) {
            return res.status(404).send({
                message: 'A junior filter has already been added for this article'
            });
        } else {

            if(hasRole('juniorfilter', user) || hasRole('seniorfilter', user)) {console.log(`${article}-----------------------`);
                article._elibilityFilterInputJunior = user._id;
                await article.save();
                return res.status(200).send({
                    message: 'Junior eligibility and filter user added'
                });
            } else {
                return res.status(400).send({
                    message: 'User does not have persmission'
                })
            }
            
        }
    });

};

exports.addArticleToSeniorEligibilityFilterUser = (req, res) => {

    const { articleId } = req.params; 
    //const userId = Authentication.getUserIdFromToken(req.headers)

    console.log(req.headers);

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
        if(article._elibilityFilterInputSenior !== null) {
            return res.status(404).send({
                message: 'A senior filter has already been added for this article'
            });
        } else {

            if(hasRole('seniorfilter', req.user)) {
                article._elibilityFilterInputSenior = req.user._id;
                return res.status(200).send({
                    message: 'Junior eligibility and filter user added'
                });
            } else {
                return res.status(400).send({
                    message: 'User does not have persmission'
                })
            }
        }
    });

}

const hasRole = (role, user) => {
    return user.roles.includes(role);
}
