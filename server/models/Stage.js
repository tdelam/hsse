/**
 * @name Stage.js
 * @author Kwadwo Sakyi
 * @description Defines the stage model
 */

const mongoose = require('mongoose');

const { Schema } = mongoose;

const stageSchema = new Schema({
    stageName: { type: String, unique: true }
});


mongoose.model('stages', stageSchema);
