const mongoose = require('mongoose');

const config = require('../../config/baseConfig');

const HSEArticleModelClass = mongoose.model('HSEArticles');


exports.create = (req, res) => {

    const newHSEArticle = new HSEArticleModelClass(req.body);

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
    
}

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
