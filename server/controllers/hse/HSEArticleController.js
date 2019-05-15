const mongoose = require('mongoose');

const HSEArticleModelClass = mongoose.model('HSEArticles');
const HSEArticleEligibilityFilterModelClass = mongoose.model('HSEArticleEligibilityFilters');
const HSEArticleQualityAppraisalModelClass = mongoose.model('HSEArticleQualityAppraisals'); 
const HSEArticleLinkingStudiesModelClass = mongoose.model('HSEArticleLinkingStudies');
const HSEArticlePresentationDetailsModelClass = mongoose.model('HSEArticlePresentationDetails');

exports.create = (req, res) => {

    const newHSEArticle = new HSEArticleModelClass(req.body);

    const newEligibilityFilterJunior = new HSEArticleEligibilityFilterModelClass();
    const newEligibilityFilterSenior = new HSEArticleEligibilityFilterModelClass();

    const newQualityAppraiserJunior = new HSEArticleQualityAppraisalModelClass();
    const newQualityAppraiserSenior = new HSEArticleQualityAppraisalModelClass();

    const newLinkingStudiesJunior = new HSEArticleLinkingStudiesModelClass();

    const newPresentationDetailsJunior = new HSEArticlePresentationDetailsModelClass();

    newEligibilityFilterJunior.save();
    newEligibilityFilterSenior.save();

    newQualityAppraiserJunior.save();
    newQualityAppraiserSenior.save();

    newLinkingStudiesJunior.save();

    newPresentationDetailsJunior.save();

    newHSEArticle.eligibilityFiltersJuniorInput = newEligibilityFilterJunior._id;
    newHSEArticle.eligibilityFiltersSeniorInput = newEligibilityFilterSenior._id;

    newHSEArticle.qualityAppraisalsJuniorInput = newQualityAppraiserJunior._id;
    newHSEArticle.qualityAppraisalsSeniorInput = newQualityAppraiserSenior._id;

    newHSEArticle.linkingStudiesJuniorInput = newLinkingStudiesJunior._id;

    newHSEArticle.presentationDetailsJuniorInput = newPresentationDetailsJunior._id;

    newHSEArticle.save( (err) => {
        if(err) {
            console.log(err);
            return res.status(422).send({
                message: 'Unable to save new article'
            });
        } else {
            res.status(201).send(newHSEArticle);
        }

    });
    
};

exports.read = (req, res) => {

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
        return res.status(200).send(article);
    });

}

exports.update = (req, res) => {
    HSEArticleModelClass.findByIdAndUpdate(req.params.articleId, req.body, (err ) => {

    });
}

exports.delete = (req, res) => {
    HSEArticleModelClass.findByIdAndRemove(req.params.articleId, (err) => {
        if(err) {
            res.send(err);
        } else {
            res.json({ message: 'Article has been removed!'});
        }
    })
}

exports.list = (req, res) => {
    HSEArticleModelClass.find( (err, articles) => {
        if(err) {
            return res.send(err);
        } else if(!articles) {
            return res.status(404).send({
                message: 'No article has been found'
            });
        }
        return res.status(200).send(articles);
    });
}

exports.addToComplicatedQueue = async (req, res) => {

    const { articleId } = req.params;

    if(!mongoose.Types.ObjectId.isValid(articleId)) {
        return res.status(400).send({
            message: 'Article is invalid'
        });
    }

    await HSEArticleModelClass.findByIdAndUpdate(
        articleId,
        
        {complicated: true},
        
        {new: true},
        
        // the callback function
        (err, article) => {
        // Handle any possible database errors
            if (err) return res.status(500).send(err);
            
            return res.send({
                message: `Article: ${article._id} has been added to the complicated queue`
            });
        }
    );

};