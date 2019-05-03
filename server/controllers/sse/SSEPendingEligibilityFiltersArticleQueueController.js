const mongoose = require('mongoose');

const Authentication = require('../authentication');

const SSEArticleModelClass = mongoose.model('SSEArticles');

exports.listArticles = async (req, res) => {
    SSEArticleModelClass.find()
       .or([ { _elibilityFilterJunior: null }, { _elibilityFilterSenior: null } ])
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

    return await SSEArticleModelClass.findById(id);

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

    SSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {
            return res.send(err);
        } else if(!article) {
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
        }
        /*
        if(article._elibilityFilterJunior !== null) {
            return res.status(404).send({
                message: 'A junior filter has already been added for this article'
            });
        } */else {

            if(hasRole('juniorfilter', user) || hasRole('seniorfilter', user)) {

                article._elibilityFilterJunior = user._id;
                article._elibilityFilterJuniorEmail = user.email;

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

exports.addArticleToSeniorEligibilityFilterUser = async (req, res) => {

    const { articleId } = req.params;
    
    const user = await Authentication.getUserFromToken(req.headers.authorization);

    if(!mongoose.Types.ObjectId.isValid(articleId)) {
        return res.status(400).send({
            message: 'Article is invalid'
        });
    }

    SSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {
            return res.send(err);
        } else if(!article) {
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
        } /*
        if(/*article._elibilityFilterSenior !== null) {
            return res.status(404).send({
                message: 'A senior filter has already been added for this article'
            });
        } else */{

            if(hasRole('seniorfilter', user)) {

                article._elibilityFilterSenior = user._id;
                article._elibilityFilterSeniorEmail = user.email;

                await article.save();
                return res.status(200).send({
                    message: 'Senior eligibility and filter user added'
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
