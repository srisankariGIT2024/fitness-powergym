// models/AboutContent.js
const mongoose = require('mongoose');

const aboutContentSchema = new mongoose.Schema({
    title: String,
    subtitle1: String,
    subtitle2: String,
    subtitle3: String,
    buttonText: String
});

module.exports = mongoose.model('AboutContent', aboutContentSchema);
