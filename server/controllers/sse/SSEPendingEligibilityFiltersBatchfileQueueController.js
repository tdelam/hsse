const mongoose = require('mongoose');

const HSEArticleBatchfileModelClass = mongoose.model('HSEArticleBatchFiles');

exports.listBatchfiles = async (req, res) => {
    HSEArticleBatchfileModelClass.find()
        .or([ { _elibilityFilterJunior: null }, { _elibilityFilterSenior: null } ])
        .exec(function(err, batchfiles) {
            if(err) {
                return res.send(err);
            } else if(!batchfiles) {
                return res.status(404).send({
                    message: 'No article in the Eligibility Filters Batchfile Pending Queue'
                });
            }
            return res.status(200).send(batchfiles);
        });
};

exports.listBatchfile = async (req, res) => {

    const id = req.param.id;

    return await HSEArticleBatchfileModelClass.findById(id);

};

exports.create = (req, res) => {
    
}
