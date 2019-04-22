const mongoose = require('mongoose');
// const UserModelClass = mongoose.model('Users');

const SSEArticleModelClass = mongoose.model('SSEArticles');
const SSEArticlePresentationDetailsModelClass = mongoose.model('SSEArticlePresentationDetails');
const Authentication = require('../authentication');

exports.listArticles = async (req, res) => {

    const user = await Authentication.getUserFromToken(req.headers.authorization);

    SSEArticleModelClass.find({ _presentationDetailsJunior: user._id })
    .exec(function(err, articles) {
        if(err) {
            return res.send(err);
        } else if(!articles) {
            return res.status(404).send({
                message: 'No article in your Assigned Presentation Details Queue'
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

    SSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {
            return res.send(err);
        } else if(!article) {
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
        }
        return res.status(200).send(article);
    })
    .populate('presentationDetailsJuniorInput')

};

exports.setPresentationDetailsValues = async (req, res) => {

    const { articleId } = req.params;

    const inputValues = req.body;
    
    const user = await Authentication.getUserFromToken(req.headers.authorization);

    SSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {

            return res.send(err);

        } else if(!article) {

            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });

        }
        
        if( !(article._presentationDetailsJunior.equals(user._id) ) ) {

            return res.status(404).send({
                message: 'Not authorized to add inputs for Presentation Details for article'
            });

        } else if ( article._linkingStudiesJunior.equals(user._id) ) {

            const newPresentationDetails = new SSEArticlePresentationDetailsModelClass(inputValues);
            newPresentationDetails._article = articleId;
            newPresentationDetails.save( (err) => {

                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Presentation Details for article, err: ${err}`
                    });
                }
        
            });
            
            article.presentationDetailsJuniorInput = newPresentationDetails;

            await article.save();
            
            return res.status(201).send({
                message: 'Inputs for Junior Presentation Details added for article'
            });

        } else if( article._presentationDetailsJunior.equals(user._id) ) {

            const newPresentationDetails = new SSEArticlePresentationDetailsModelClass(inputValues);
            newPresentationDetails.save( (err) => {
                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Presentation Details for article, err: ${err}`
                    });
                }
        
            });
            
            article.presentationDetailsJuniorInput = newPresentationDetails;
            await article.save();
            
            return res.status(201).send({
                message: 'Inputs for Junior presenter added for article'
            });
            
        }
        
    });

};

exports.setPresentationDetailsComplete = async (req, res) => {

    const { articleId } = req.params;

    const inputValues = req.body;
    
    const user = await Authentication.getUserFromToken(req.headers.authorization);

    SSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {

            return res.send(err);

        } else if(!article) {

            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });

        }
        
        if( !(article._presentationDetailsJunior.equals(user._id) ) ) {

            return res.status(404).send({
                message: 'Not authorized to add inputs for Presentation Details for article'
            });

        } else if( article._presentationDetailsJunior.equals(user._id) ) {

            const newPresentationDetails = new SSEArticlePresentationDetailsModelClass(inputValues);
            newPresentationDetails.save( (err) => {
                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Presentation Details for article, err: ${err}`
                    });
                }
        
            });
            
            article.presentationDetailsJuniorInput = newPresentationDetails;
            article.presentationDetailsJuniorCompleted = true;
            await article.save();
            
            return res.status(201).send({
                message: 'Inputs for Junior presenter added for article'
            });
            
        }
        
    });

};

/*
exports.setEligibilityFilterComplete = async (req, res) => {

    const { articleId } = req.params;

    const inputValues = req.body;
    
    const user = await Authentication.getUserFromToken(req.headers.authorization);

    SSEArticleModelClass.findById(articleId, async (err, article) => {
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
        
        if( (article._elibilityFilterJunior !== user._id) && (article._elibilityFilterSenior !== user._id) ) {

            return res.status(404).send({
                message: 'Not authorized to add inputs for eligibility and filter for article'
            });

        }

        setFullEligibilityFilterCompleteOrResolve(articleId);

    });

};

*/

exports.setJuniorPresentationDetailsComplete = async (req, res) => {

    const { articleId } = req.params;
    
    const user = await Authentication.getUserFromToken(req.headers.authorization);

    SSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {
            return res.send(err);
        } else if(!article) {
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
        }
        if(article._elibilityFilterJunior !== user._id) {
            return res.status(404).send({
                message: 'You are not the junior presenter for this article'
            });
        } else {

            article.elibilityFilterJuniorCompleted = true;
            await article.save();
            return res.status(200).send({
                message: 'Junior newPresentation Details completed for article'
            });
        
        }
    });

};


const setFullEligibilityFilterComplete = async (articleId) => {

    SSEArticleModelClass.findById(articleId, async (err, article) => {

        if(err) {

            //return res.send(err);
            console.log(err);

        } else if(!article) {
            /*
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
            */
           console.log('No article with that identifier has been found');
        }

        let newPresentationDetailsJuniorInput = null;

        await SSEArticlenewPresentationDetailsModelClass.findById(article.presentationDetailsJuniorInput, (err, presentationDetailsJuniorInput) => {
            
            if(err) {
                //console.log(err);
                throw new Error(err);
            } else if(!presentationDetailsJuniorInput) {
                throw new Error('Presentation Details for Junior Presenter does not exist');
            } else {
                newPresentationDetailsJuniorInput = presentationDetailsJuniorInput;
            }

        });

        if(article.presentationDetailsJuniorCompleted ) {
            
            // Call instance method to check if all fields on article's presentationDetails are equal
            if( newPresentationDetailsJuniorInput.isEqualTo(newPresentationDetailsSeniorInput) ) {

                article.presentationDetailsFullCompletion = true;
                await article.save();
                console.log(`Full completion set`);
                /*
                return res.status(201).send({
                    message: 'Presentation Details stage passed for this article'
                });
                */
            } else {

                article.linkingStudiesFinalInput = newLinkingStudiesSeniorInput;
                await article.save();
                console.log(`resolve completion set`);
                /*
                return res.status(201).send({
                    message: 'Resolve Linking Studies values for this article'
                });
                */
            }

        } else {
            /*
            return res.status(200).send({
                message: 'Senior and Junior Eligibility and filter are not completed for article'
            });
            */
           console.log('Junior Quality Appraisal are not completed for article');
        }
    });

};

exports.setFullCompletion = async (req, res) => {

    const { articleId } = req.params;

    //const user = await Authentication.getUserFromToken(req.headers.authorization);

    SSEArticleModelClass.findById(articleId)
       .and([ { elibilityFilterJuniorCompleted: true } ])
       .exec(function(err, article) {
           if(err) {
               return res.send(err);
           } else if(!article) {
               return res.status(404).send({
                   message: 'Could not set Full Completion for Article Eligibility Filters'
               });
           }
           
       });
};


exports.setQualityAppraisalInputs = async (req, res) => {

    const { articleId } = req.params;

    //const user = await Authentication.getUserFromToken(req.headers.authorization);

    SSEArticleModelClass.findById(articleId)
       .and([ { qualityAppraisalJuniorCompleted: true }, { qualityAppraisalSeniorCompleted: true } ])
       .exec(function(err, article) {
           if(err) {
               return res.send(err);
           } else if(!article) {
               return res.status(404).send({
                   message: 'Could not set Full Completion for Article Quality Appraisal'
               });
           }

           // Check to make sure all fields are the same
           if(isQualityAppraisalJuniorSeniorInputEqual(articleId)) {
               article.qualityAppraisalFullCompletion = true;
           } 
           
       });
};


