const mongoose = require('mongoose');

const Authentication = require('../authentication');

const HSEArticleModelClass = mongoose.model('HSEArticles');

exports.listArticles = async (req, res) => {
    HSEArticleModelClass.find({ complicated: false })
       .or([ { _eligibilityFiltersJunior: null }, { _eligibilityFiltersSenior: null } ])
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

exports.addArticleToJuniorEligibilityFilterer= async (req, res) => {

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
        } else if(article._eligibilityFiltersJunior !== null) {
            return res.status(404).send({
                message: 'A junior filterer has already been added for this article'
            });
        } else {

            if(hasRole('juniorfilterer', user) || hasRole('seniorfilterer', user)) {
                
                article._eligibilityFiltersJunior = user._id;
                article._eligibilityFiltersJuniorEmail = user.email;

                await article.save();
                return res.status(200).send({
                    message: 'Junior eligibility and filterer user added'
                });
            } else {
                return res.status(400).send({
                    message: 'User does not have persmission'
                })
            }
            
        }
    });

};

exports.addAllArticleToJuniorEligibilityFilterer= async (req, res) => {

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
        } else if(article._eligibilityFiltersJunior !== null) {
            return res.status(404).send({
                message: 'A junior filterer has already been added for this article'
            });
        } else {

            if(hasRole('juniorfilterer', user) || hasRole('seniorfilterer', user)) {
                
                article._eligibilityFiltersJunior = user._id;
                article._eligibilityFiltersJuniorEmail = user.email;

                await article.save();
                return res.status(200).send({
                    message: 'Junior eligibility and filterer user added'
                });
            } else {
                return res.status(400).send({
                    message: 'User does not have persmission'
                })
            }
            
        }
    });

};

exports.addArticleToSeniorEligibilityFilterer = async (req, res) => {

    const { articleIds } = req.params;
    console.log(req.headers);
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
        } else if(article._eligibilityFiltersSenior !== null) {
            return res.status(404).send({
                message: 'A senior filterer has already been added for this article'
            });
        } else {

            if(hasRole('seniorfilterer', user)) {

                articleIds.forEach( async (article) => {
                    
                    article._eligibilityFiltersSenior = user._id;
                    article._eligibilityFiltersSeniorEmail = user.email;

                    await article.save();

                });

                return res.status(200).send({
                    message: 'Senior eligibility and filterer user added'
                });
            } else {
                return res.status(400).send({
                    message: 'User does not have persmission'
                })
            }
        }
    });

};

exports.addAllArticleToSeniorEligibilityFilterer = async (req, res) => {

    const { articleIds } = req.params;
    console.log(req.headers);
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
        } else if(article._eligibilityFiltersSenior !== null) {
            return res.status(404).send({
                message: 'A senior filterer has already been added for this article'
            });
        } else {

            if(hasRole('seniorfilterer', user)) {

                articleIds.foreach( async (article) => {
                    article._eligibilityFiltersSenior = user._id;
                    article._eligibilityFiltersSeniorEmail = user.email;
                    await article.save();
                });
                
                return res.status(200).send({
                    message: 'Senior eligibility and filterer user added'
                });

            } else {
                return res.status(400).send({
                    message: 'User does not have persmission'
                })
            }
        }
    });

};

const hasRole = (role, user) => {
    return user.roles.includes(role);
}
