const mongoose = require('mongoose');

const { Schema } = mongoose;

const stageSchema = new Schema({
    stageName: { type: String, unique: true }
});


mongoose.model('stages', stageSchema);