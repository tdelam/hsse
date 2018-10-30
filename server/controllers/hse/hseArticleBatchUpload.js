const mongoose = require('mongoose');

const HSEArticleBatchfileModelClass = mongoose.model('HSEArtciles');

exports.create = (req, res) => {
    const newHSEArticleBatchfile = new HSEArticleBatchfileModelClass(req.body);

    newHSEArticleBatchfile.save( (err) => {
        if(err) {
            console.log(err);
            return res.status(422).send({
                message: 'Unable to save new batchfile'
            });
        } else {
            res.statu(201).send(newHSEArticleBatchfile);
        }
    });
}

exports.read = (req, res) => {
    const { batchfileId } = req.params;
}