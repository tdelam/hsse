const mongoose = require('mongoose');

const SSEArticleModelClass = mongoose.model('SSEArticles');
const SSEArticleEligibilityFilterModelClass = mongoose.model('SSEArticleEligibilityFilters'); 

exports.create = (req, res) => {

    const newSSEArticle = new SSEArticleModelClass(req.body);
    const newEligibilityFilter = new SSEArticleEligibilityFilterModelClass();
    
    newSSEArticle.elibilityFilterJuniorInput = newEligibilityFilter;
    newSSEArticle.elibilityFilterSeniorInput = newEligibilityFilter;

    newSSEArticle.save( (err) => {
        if(err) {
            console.log(err);
            return res.status(422).send({
                message: 'Unable to save new article'
            });
        } else {
            console.log(newSSEArticle.newEligibilityFilter);
            res.status(201).send(newSSEArticle);
        }

    });
    
}

exports.read = (req, res) => {

    const { articleId } = req.params;

    if(!mongoose.Types.ObjectId.isValid(articleId)) {
        return res.status(400).send({
            message: 'Article is invalid'
        });
    }

    SSEArticleModelClass.findById(articleId, (err, article) => {
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
    SSEArticleModelClass.findByIdAndUpdate(req.params.articleId, req.body, (err ) => {

    });
}

exports.delete = (req, res) => {
    SSEArticleModelClass.findByIdAndRemove(req.params.articleId, (err) => {
        if(err) {
            res.send(err);
        } else {
            res.json({ message: 'Article has been removed!'});
        }
    })
}

exports.list = (req, res) => {
    SSEArticleModelClass.find( (err, articles) => {
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