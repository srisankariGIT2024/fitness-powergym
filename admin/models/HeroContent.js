// models/HeroContent.js
const mongoose = require('mongoose');

const heroContentSchema = new mongoose.Schema({
    subtitle: String,
    title1: String,
    title2: String,
    title3: String,
    buttonText: String
});

module.exports = mongoose.model('HeroContent', heroContentSchema);
