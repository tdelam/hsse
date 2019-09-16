/**
 * @name 
 * @author Kwadwo Sakyi
 * @description This file contains the controller methods for 
 */

const mongoose = require('mongoose');

const Authentication = require('../authentication');

const HSEArticleModelClass = mongoose.model('HSEArticles');

/**
 * Rename to list
 * 
 * @param ReadableStream req The function's request body
 * @param string req.user The username of the user to sign in.
 * @param WritableStream res The function's response body
 */
exports.listArticles = async (req, res) => {
    HSEArticleModelClass.find({ complicated: false/*, eligibilityFiltersFullCompletion: true*/ })
        .and([ { _linkingStudiesJunior: null } ])
        .exec(function(err, articles) {
           if(err) {
               return res.send(err);
           } else if(!articles) {
               return res.status(404).send({
                   message: 'No article in the Linking Studies Article Pending Queue'
               });
           }
           return res.status(200).send(articles);
       });
};

/**
 * Rename to fetch
 * 
 * @param ReadableStream req The function's request body
 * @param string req.user The username of the user to sign in.
 * @param WritableStream res The function's response body
 */
exports.listArticle = async (req, res) => {

    const id = req.param.id;

    return await HSEArticleModelClass.findById(id);

};

/**
 * DEFUNCT
 */
exports.create = (req, res) => {
    
}

/**
 * Assign the article to a user for the linking queue
 * Rename: assignToLinker
 * 
 * @param ReadableStream req The function's request body
 * @param string req.user The username of the user to sign in.
 * @param WritableStream res The function's response body
 */
exports.addArticleToJuniorLinker = async (req, res) => {

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
        } else if(article._linkingStudiesJunior !== null) {
            return res.status(404).send({
                message: 'Junior linker has already been added for this article'
            });
        } else {

            if(hasRole('linker', user) ) {

                article._linkingStudiesJunior = user._id;
                article._linkingStudiesJuniorEmail = user.email;

                await article.save();
                return res.status(200).send({
                    message: 'Junior studies linker added'
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
