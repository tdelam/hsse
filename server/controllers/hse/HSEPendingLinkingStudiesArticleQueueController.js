const mongoose = require('mongoose');
// const UserModelClass = mongoose.model('Users');

const HSEArticleModelClass = mongoose.model('HSEArticles');
const HSEArticleLinkingStudiesModelClass = mongoose.model('HSEArticleLinkingStudies');
const Authentication = require('../authentication');

exports.listArticles = async (req, res) => {
    console.log("******Testing*******");
    return res.status(200).send({ message: 'Testing'});

    const user = await Authentication.getUserFromToken(req.headers.authorization);
    
    HSEArticleModelClass.find({ _linkingStudiesJunior: user._id })
    .exec(function(err, articles) {
        if(err) {
            return res.send(err);
        } else if(!articles) {
            return res.status(404).send({
                message: 'No article in your Assigned Linking Studies Queue'
            });
        }
        return res.status(200).send(articles);
    });
};

exports.fetchArticle = async (req, res) => {

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
        return res.status(200).send(article);
    })
    .populate('linkingStudiesJuniorInput')

};

exports.setLinkingStudiesValues = async (req, res) => {

    const { articleId } = req.params;

    const inputValues = req.body;
    
    const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {

            return res.send(err);

        } else if(!article) {

            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });

        }
        
        if( !(article._qualityAppraisalsJunior.equals(user._id) ) ) {

            return res.status(404).send({
                message: 'Not authorized to add inputs for  and linking studies for article'
            });

        } else if ( article._qualityAppraisalsJunior.equals(user._id) ) {

            const newQualityAppraisals = new HSEArticleLinkingStudiesModelClass(inputValues);
            newQualityAppraisals._article = articleId;
            newQualityAppraisals.save( (err) => {

                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Linking for article, err: ${err}`
                    });
                }
        
            });
            
            article.qualityAppraisalsJuniorInput = newQualityAppraisals;

            await article.save();
            
            return res.status(201).send({
                message: 'Inputs for Junior linker added for article'
            });

        } else if( article._linkingStudiesJunior.equals(user._id) ) {

            const newLinkingStudies = new HSEArticleLinkingStudiesModelClass(inputValues);
            newLinkingStudies.save( (err) => {
                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Linking for article, err: ${err}`
                    });
                }
        
            });
            
            article.LinkingStudiesJuniorInput = newLinkingStudies;
            await article.save();
            
            return res.status(201).send({
                message: 'Inputs for Junior linker added for article'
            });
            
        } 
        
    });

};

exports.setnewQualityAppraisalComplete = async (req, res) => {

    const { articleId } = req.params;

    const inputValues = req.body;
    
    const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {

            return res.send(err);

        } else if(!article) {

            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });

        }
        
        if( !(article._linkingStudiesJunior.equals(user._id)) ) {

            return res.status(404).send({
                message: 'Not authorized to add inputs for linking studies for article'
            });

        } else if ( article._elibilityFilterJunior.equals(user._id) ) {

            const newLinkingStudies = new HSEArticleLinkingStudiesModelClass(inputValues);
            newLinkingStudies._article = articleId;
            newLinkingStudies.save( (err) => {

                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Linking Studies for article, err: ${err}`
                    });
                }
        
            });
            
            article.linkingStudiesJuniorInput = newLinkingStudies;
            
            article.linkingStudiesJuniorCompleted = true;

            await article.save();

            setFullLinkingStudiesCompleteOrResolve(articleId);
            
            return res.status(201).send({
                message: 'Inputs for Junior added for article'
            });

        } else if( article._elibilityFilterJunior.equals(user._id) ) {

            const newLinkingStudies = new HSEArticleLinkingStudiesModelClass(inputValues);
            newLinkingStudies.save( (err) => {
                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Linking Studies for article, err: ${err}`
                    });
                }
        
            });
            
            article.linkingStudiesJuniorInput = newLinkingStudies;
            article.linkingStudiesJuniorCompleted = true;
            await article.save();

            setFullLinkingStudiesCompleteOrResolve(articleId);
            
            return res.status(201).send({
                message: 'Inputs for Junior Linker added for article'
            });
            
        } 
        
    });

};

/*
exports.setEligibilityFilterComplete = async (req, res) => {

    const { articleId } = req.params;

    const inputValues = req.body;
    
    const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {

            return res.send(err);

        } else if(!article) {

            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });

        }

        if(article._elibilityFilterJunior === user._id) {

            article.elibilityFilterJuniorInput = inputValues;
            article.elibilityFilterJuniorCompleted = true;

            await article.save();
            return res.status(200).send({
                message: 'Junior eligibility and filter completed for article'
            });

        }

        if(article._elibilityFilterSenior === user._id) {

            article.elibilityFilterSeniorInput = inputValues;
            article.elibilityFilterSeniorCompleted = true;
            await article.save();
            return res.status(200).send({
                message: 'Senior eligibility and filter completed for article'
            });

        }
        
        if( (article._elibilityFilterJunior !== user._id) && (article._elibilityFilterSenior !== user._id) ) {

            return res.status(404).send({
                message: 'Not authorized to add inputs for eligibility and filter for article'
            });

        }

        setFullEligibilityFilterCompleteOrResolve(articleId);

    });

};

*/


exports.setFullCompletion = async (req, res) => {

    const { articleId } = req.params;

    //const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.findById(articleId)
       .and([ { elibilityFilterJuniorCompleted: true }])
       .exec(function(err, article) {
           if(err) {
               return res.send(err);
           } else if(!article) {
               return res.status(404).send({
                   message: 'Could not set Full Completion for Article Linking Studies'
               });
           }

            article.linkingStudiesFullCompletion = true;

       });
};

exports.setLinkingStudiesInputs = async (req, res) => {

    const { articleId } = req.params;

    //const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.findById(articleId)
       .and([ { linkingStudiesJuniorCompleted: true } ])
       .exec(function(err, article) {
           if(err) {
               return res.send(err);
           } else if(!article) {
               return res.status(404).send({
                   message: 'Could not set Full Completion for Article Linking Studies'
               });
           }

            article.linkingstudiesFullCompletion = true;
           
       });
};


