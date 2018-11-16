const axios = require('axios');
const mongoose = require('mongoose');

const HSEArticleModelClass = mongoose.model('HSEArticles');

const { Schema } = mongoose;

exports.listArticles = async (req, res) => {

    return await HSEArticleModelClass.find({ elibilityEligibility: false });

};

exports.listArticle = async (req, res) => {

    const id = req.param.id;

    return await HSEArticleModelClass.findById({ elibilityEligibility: false });

};

exports.create = (req, res) => {
    
}
