const mongoose = require('mongoose');
// const UserModelClass = mongoose.model('Users');

const HSEArticleModelClass = mongoose.model('HSEArticles');
const HSEArticleEligibilityFilterModelClass = mongoose.model('HSEArticleEligibilityFilters');
const Authentication = require('../authentication');

exports.listArticles = async (req, res) => {

    const user = await Authentication.getUserFromToken(req.headers.authorization);

    HSEArticleModelClass.find({ complicated: false })
    .or([ { _eligibilityFiltersJunior: user._id }, { _eligibilityFiltersSenior: user._id } ])
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
    .populate('eligibilityFiltersJuniorInput')
    .populate('eligibilityFiltersSeniorInput');

};

exports.setEligibilityFiltersValues = async (req, res) => {

    const { articleId } = req.params;

    const { inputValues }  = req.body;

    const user = await Authentication.getUserFromToken(req.headers.authorization);
    
    HSEArticleModelClass.findById(articleId, async (err, article) => {
        if(err) {

            return res.send(err);

        } else if(!article) {

            return res.status(404).send({
                message: 'No article with that identifier has been found'
            });

        }
        
        if( !(user._id.equals(article._eligibilityFiltersJunior) || user._id.equals(article._eligibilityFiltersSenior) ) ) {

            return res.status(404).send({
                message: 'Not authorized to add inputs for eligibility and filter for article'
            });

        }/* else if ( user._id.equals(article._eligibilityFiltersJunior) && user._id.equals(article._eligibilityFiltersSenior) ) {

            await HSEArticleEligibilityFilterModelClass.findByIdAndUpdate(
                article.eligibilityFiltersJuniorInput,
                
                {hseState: inputValues},
                
                {new: true},
                
                // the callback function
                (err, todo) => {
                // Handle any possible database errors
                    if (err) return res.status(500).send(err);
                    
                    await HSEArticleEligibilityFilterModelClass.findByIdAndUpdate(
                        article.eligibilityFiltersSeniorInput,
                        
                        {hseState: inputValues},
                        
                        {new: true},
                        
                        // the callback function
                        (err, todo) => {
                        // Handle any possible database errors
                            if (err) return res.status(500).send(err);
                            
                            return res.send({
                                message: 'Inputs for Junior and Senior filter added for article'
                            });
                        }
                    );
                    
                }
            );


        } */ else if( user._id.equals(article._eligibilityFiltersJunior) ) {            
            
            await HSEArticleEligibilityFilterModelClass.findByIdAndUpdate(
                article.eligibilityFiltersJuniorInput,
                
                {hseState: inputValues},
                
                {new: true},
                
                // the callback function
                (err, article) => {
                // Handle any possible database errors
                    if (err) return res.status(500).send(err);
                    
                    return res.send({
                        message: `Inputs for Junior filter added for article: ${article._id}`
                    });
                }
            );
            
        } else if( user._id.equals(article._eligibilityFiltersSenior) ) {  
            
            await HSEArticleEligibilityFilterModelClass.findByIdAndUpdate(
                article.eligibilityFiltersSeniorInput,
                
                {hseState: inputValues},
                
                {new: true},
                
                // the callback function
                (err, todo) => {
                // Handle any possible database errors
                    if (err) return res.status(500).send(err);
                    
                    return res.send({
                        message: `Inputs for Senior filter added for article: ${article._id}`
                    });
                }
            );
            
        }
        
    });

};

exports.setEligibilityFiltersComplete = async (req, res) => {

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
        
        if( !(user._id.equals(article._eligibilityFilterJunior) || user._id.equals(article._eligibilityFilterSenior)) ) {

            return res.status(404).send({
                message: 'Not authorized to add inputs for eligibility and filter for article'
            });

        }/* else if ( article._eligibilityFilterJunior.equals(user._id) && article._eligibilityFilterSenior.equals(user._id) ) {

            const newEligibilityFilters = new HSEArticleEligibilityFilterModelClass(inputValues);
            newEligibilityFilters._article = articleId;
            
            article.eligibilityFiltersJuniorInput = newEligibilityFilters;
            article.eligibilityFiltersSeniorInput = newEligibilityFilters;
            
            article.eligibilityFiltersJuniorCompleted = true;
            article.eligibilityFiltersSeniorCompleted = true;

            await article.save();

            setFullEligibilityFiltersCompleteOrResolve(articleId);
            
            return res.status(201).send({
                message: 'Inputs for Junior and Senior filter added for article'
            });

    } */ else if( user._id.equals(article._eligibilityFilterJunior) ) {

            await HSEArticleEligibilityFilterModelClass.findByIdAndUpdate(
                article.eligibilityFiltersJuniorInput,
                
                {hseState: inputValues, eligibilityFilterJuniorCompleted: true},
                
                {new: true},
                
                // the callback function
                (err, article) => {
                // Handle any possible database errors
                    if (err) return res.status(500).send(err);
                    
                    return res.send({
                        message: `Inputs for Junior filter added for article: ${article._id}`
                    });
                }
            );
            
        } else if( article._eligibilityFilterSenior.equals(user._id) ) {

            await HSEArticleEligibilityFilterModelClass.findByIdAndUpdate(
                article.eligibilityFiltersSeniorInput,
                
                {hseState: inputValues, eligibilityFilterSeniorCompleted: true},
                
                {new: true},
                
                // the callback function
                (err, article) => {
                // Handle any possible database errors
                    if (err) return res.status(500).send(err);
                    
                    return res.send({
                        message: `Inputs for Junior filter added for article: ${article._id}`
                    });
                }
            );
        
        }
    });

};


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
        if(article._eligibilityFilterJunior !== user._id) {
            return res.status(404).send({
                message: 'You are not the junior filter for this article'
            });
        } else {

            article.eligibilityFilterJuniorCompleted = true;
            await article.save();
            return res.status(200).send({
                message: 'Junior eligibility and filter completed for article'
            });
        
        }
    });

};

exports.setSeniorEligibilityFiltersComplete = async (req, res) => {

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
        if(article._eligibilityFilterSenior !== user._id) {
            return res.status(404).send({
                message: 'You are not the senior filter for this article'
            });
        } else {

            article.eligibilityFilterSeniorCompleted = true;
            await article.save();
            return res.status(200).send({
                message: 'Senior eligibility and filter completed for article'
            });
        
        }
    });

};

const setFullEligibilityFiltersCompleteOrResolve = async (articleId) => {

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

        let newEligibilityFiltersJuniorInput = null;
        let newEligibilityFiltersSeniorInput = null;

        await HSEArticleEligibilityFilterModelClass.findById(article.eligibilityFilterJuniorInput, (err, eligibilityFilterJuniorInput) => {
            
            if(err) {
                //console.log(err);
                throw new Error(err);
            } else if(!eligibilityFilterJuniorInput) {
                throw new Error('Eligibility Filter for Junior Filter does not exist');
            } else {
                newEligibilityFilterJuniorInput = eligibilityFilterJuniorInput;
            }

        });

        await HSEArticleEligibilityFilterModelClass.findById(article.eligibilityFilterSeniorInput, (err, eligibilityFilterSeniorInput) => {

            if(err) {
                //console.log(err);
                throw new Error(err);
            } else if(!eligibilityFilterSeniorInput) {
                throw new Error('Eligibility Filter for Senior Filter does not exist');
            } else {
                newEligibilityFilterSeniorInput = eligibilityFilterSeniorInput;
            }

        });

        if(article.eligibilityFilterJuniorCompleted && article.eligibilityFilterSeniorCompleted) {
            
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
                article.eligibilityFilterFinalInput = newEligibilityFilterSeniorInput;
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
       .and([ { eligibilityFilterJuniorCompleted: true }, { eligibilityFilterSeniorCompleted: true } ])
       .exec(function(err, article) {
           if(err) {
               return res.send(err);
           } else if(!article) {
               return res.status(404).send({
                   message: 'Could not set Full Completion for Article Eligibility Filters'
               });
           }

           // Check to make sure all fields are the same
           if(isEligibilityFilterJuniorSeniorInputEqual(articleId)) {
               article.eligibilityFilterFullCompletion = true;
           } 
           
       });
};

const isEligibilityFilterJuniorSeniorInputEqual = (articleId) => {

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
       .and([ { eligibilityFilterJuniorCompleted: true }, { eligibilityFilterSeniorCompleted: true } ])
       .exec(function(err, article) {
           if(err) {
               return res.send(err);
           } else if(!article) {
               return res.status(404).send({
                   message: 'Could not set Full Completion for Article Eligibility Filters'
               });
           }

           // Check to make sure all fields are the same
           if(isEligibilityFilterJuniorSeniorInputEqual(articleId)) {
               article.eligibilityFilterFullCompletion = true;
           } 
           
       });
};


