const mongoose = require('mongoose');
// const UserModelClass = mongoose.model('Users');

const HSEArticleModelClass = mongoose.model('HSEArticles');
const HSEArticleEligibilityFilterModelClass = mongoose.model('HSEArticleEligibilityFilters');
const Authentication = require('../authentication');

exports.listArticles = async (req, res) => {

    const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.find()
    .or([ { _elibilityFilterJunior: user._id }, { _elibilityFilterSenior: user._id } ])
    .exec(function(err, articles) {
        if(err) {
            return res.send(err);
        } else if(!articles) {
            return res.status(404).send({
                message: 'No article in your Eligibility Filters Queue'
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
    .populate('elibilityFilterJuniorInput')
    .populate('elibilityFilterSeniorInput');

};

exports.setEligibilityFilterValues = async (req, res) => {

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
        
        if( !(article._elibilityFilterJunior.equals(user._id) || article._elibilityFilterSenior.equals(user._id)) ) {

            return res.status(404).send({
                message: 'Not authorized to add inputs for eligibility and filter for article'
            });

        } else if ( article._elibilityFilterJunior.equals(user._id) && article._elibilityFilterSenior.equals(user._id) ) {

            const newEligibilityFilter = new HSEArticleEligibilityFilterModelClass(inputValues);
            newEligibilityFilter._article = articleId;
            newEligibilityFilter.save( (err) => {

                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Eligibility and Filter for article, err: ${err}`
                    });
                }
        
            });
            
            article.elibilityFilterJuniorInput = newEligibilityFilter;
            article.elibilityFilterSeniorInput = newEligibilityFilter;

            await article.save();
            
            return res.status(201).send({
                message: 'Inputs for Junior and Senior filter added for article'
            });

        } else if( article._elibilityFilterJunior.equals(user._id) ) {

            const newEligibilityFilter = new HSEArticleEligibilityFilterModelClass(inputValues);
            newEligibilityFilter.save( (err) => {
                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Eligibility and Filter for article, err: ${err}`
                    });
                }
        
            });
            
            article.elibilityFilterJuniorInput = newEligibilityFilter;
            await article.save();
            
            return res.status(201).send({
                message: 'Inputs for Junior filter added for article'
            });
            
        } else if( article._elibilityFilterSenior.equals(user._id) ) {

            const newEligibilityFilter = new HSEArticleEligibilityFilterModelClass(inputValues);
            newEligibilityFilter.save( (err) => {
                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Eligibility and Filter for article, err: ${err}`
                    });
                }
        
            });

            article.elibilityFilterSeniorInput = inputValues;
            await article.save();
            
            return res.status(201).send({
                message: 'Inputs for Senior filter added for article'
            });
            
        } 
        
    });

};

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
        
        if( !(article._elibilityFilterJunior.equals(user._id) || article._elibilityFilterSenior.equals(user._id)) ) {

            return res.status(404).send({
                message: 'Not authorized to add inputs for eligibility and filter for article'
            });

        } else if ( article._elibilityFilterJunior.equals(user._id) && article._elibilityFilterSenior.equals(user._id) ) {

            const newEligibilityFilter = new HSEArticleEligibilityFilterModelClass(inputValues);
            newEligibilityFilter._article = articleId;
            newEligibilityFilter.save( (err) => {

                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Eligibility and Filter for article, err: ${err}`
                    });
                }
        
            });
            
            article.elibilityFilterJuniorInput = newEligibilityFilter;
            article.elibilityFilterSeniorInput = newEligibilityFilter;
            
            article.elibilityFilterJuniorCompleted = true;
            article.elibilityFilterSeniorCompleted = true;

            await article.save();

            setFullEligibilityFilterCompleteOrResolve(articleId);
            
            return res.status(201).send({
                message: 'Inputs for Junior and Senior filter added for article'
            });

        } else if( article._elibilityFilterJunior.equals(user._id) ) {

            const newEligibilityFilter = new HSEArticleEligibilityFilterModelClass(inputValues);
            newEligibilityFilter.save( (err) => {
                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Eligibility and Filter for article, err: ${err}`
                    });
                }
        
            });
            
            article.elibilityFilterJuniorInput = newEligibilityFilter;
            article.elibilityFilterJuniorCompleted = true;
            await article.save();

            setFullEligibilityFilterCompleteOrResolve(articleId);
            
            return res.status(201).send({
                message: 'Inputs for Junior filter added for article'
            });
            
        } else if( article._elibilityFilterSenior.equals(user._id) ) {

            const newEligibilityFilter = new HSEArticleEligibilityFilterModelClass(inputValues);
            newEligibilityFilter.save( (err) => {
                if(err) {
                    return res.status(422).send({
                        message: `Unable to save values for Eligibility and Filter for article, err: ${err}`
                    });
                }
        
            });

            article.elibilityFilterSeniorInput = inputValues;
            article.elibilityFilterSeniorCompleted = true;
            await article.save();

            setFullEligibilityFilterCompleteOrResolve(articleId);
            
            return res.status(201).send({
                message: 'Inputs for Senior filter added for article'
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

exports.setJuniorEligibilityFilterComplete = async (req, res) => {

    const { articleId } = req.params;
    
    const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {
            return res.send(err);
        } else if(!article) {
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
        }
        if(article._elibilityFilterJunior !== user._id) {
            return res.status(404).send({
                message: 'You are not the junior filter for this article'
            });
        } else {

            article.elibilityFilterJuniorCompleted = true;
            await article.save();
            return res.status(200).send({
                message: 'Junior eligibility and filter completed for article'
            });
        
        }
    });

};

exports.setSeniorEligibilityFilterComplete = async (req, res) => {

    const { articleId } = req.params;
    
     const user = await Authentication.getUserFromToken(req.headers.authorization);

/*
    if(!mongoose.Types.ObjectId.isValid(articleId)) {
        return res.status(400).send({
            message: 'Article is invalid'
        });
    }
*/

    HSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {
            return res.send(err);
        } else if(!article) {
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
        }
        if(article._elibilityFilterSenior !== user._id) {
            return res.status(404).send({
                message: 'You are not the senior filter for this article'
            });
        } else {

            article.elibilityFilterSeniorCompleted = true;
            await article.save();
            return res.status(200).send({
                message: 'Senior eligibility and filter completed for article'
            });
        
        }
    });

};

const setFullEligibilityFilterCompleteOrResolve = async (articleId) => {

    HSEArticleModelClass.findById(articleId, async (err, article) => {

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

        let newEligibilityFilterJuniorInput = null;
        let newEligibilityFilterSeniorInput = null;

        await HSEArticleEligibilityFilterModelClass.findById(article.elibilityFilterJuniorInput, (err, eligibilityFilterJuniorInput) => {
            
            if(err) {
                //console.log(err);
                throw new Error(err);
            } else if(!eligibilityFilterJuniorInput) {
                throw new Error('Eligibility Filter for Junior Filter does not exist');
            } else {
                newEligibilityFilterJuniorInput = eligibilityFilterJuniorInput;
            }

        });

        await HSEArticleEligibilityFilterModelClass.findById(article.elibilityFilterSeniorInput, (err, eligibilityFilterSeniorInput) => {

            if(err) {
                //console.log(err);
                throw new Error(err);
            } else if(!eligibilityFilterSeniorInput) {
                throw new Error('Eligibility Filter for Senior Filter does not exist');
            } else {
                newEligibilityFilterSeniorInput = eligibilityFilterSeniorInput;
            }

        });

        if(article.elibilityFilterJuniorCompleted && article.elibilityFilterSeniorCompleted) {
            
            // Call instance method to check if all fields on article's eligibilityFilter are equal
            if( newEligibilityFilterJuniorInput.isEqualTo(newEligibilityFilterSeniorInput) ) {

                article.eligibilityFilterFullCompletion = true;
                await article.save();
                console.log(`Full completion set`);
                /*
                return res.status(201).send({
                    message: 'Eligibility and Filter stage passed for this article'
                });
                */
            } else {

                article.eligibilityFilterResolve = true;
                article.elibilityFilterFinalInput = newEligibilityFilterSeniorInput;
                await article.save();
                console.log(`resolve completion set`);
                /*
                return res.status(201).send({
                    message: 'Resolve Eligibility and Filter values for this article'
                });
                */
            }

        } else {
            /*
            return res.status(200).send({
                message: 'Senior and Junior Eligibility and filter are not completed for article'
            });
            */
           console.log('Senior and Junior Eligibility and filter are not completed for article');
        }
    });

};

exports.setFullCompletion = async (req, res) => {

    const { articleId } = req.params;

    //const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.findById(articleId)
       .and([ { elibilityFilterJuniorCompleted: true }, { elibilityFilterSeniorCompleted: true } ])
       .exec(function(err, article) {
           if(err) {
               return res.send(err);
           } else if(!article) {
               return res.status(404).send({
                   message: 'Could not set Full Completion for Article Eligibility Filters'
               });
           }

           // Check to make sure all fields are the same
           if(isElibigilityFilterJuniorSeniorInputEqual(articleId)) {
               article.eligibilityFilterFullCompletion = true;
           } 
           
       });
};

const isElibigilityFilterJuniorSeniorInputEqual = (articleId) => {

    const isEqual = false;

    HSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {
            return res.send(err);
        } else if(!article) {
            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });
        }

    });

    return isEqual;
    
};

exports.setEligibilityFilterInputs = async (req, res) => {

    const { articleId } = req.params;

    //const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.findById(articleId)
       .and([ { elibilityFilterJuniorCompleted: true }, { elibilityFilterSeniorCompleted: true } ])
       .exec(function(err, article) {
           if(err) {
               return res.send(err);
           } else if(!article) {
               return res.status(404).send({
                   message: 'Could not set Full Completion for Article Eligibility Filters'
               });
           }

           // Check to make sure all fields are the same
           if(isElibigilityFilterJuniorSeniorInputEqual(articleId)) {
               article.eligibilityFilterFullCompletion = true;
           } 
           
       });
};

