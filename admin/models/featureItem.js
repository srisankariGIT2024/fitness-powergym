const mongoose = require('mongoose');

const featureItemSchema = new mongoose.Schema({
    itemIcon: String, // This should match the data type in your MongoDB
    itemTitle: String,
    itemDescription: String
});

module.exports = mongoose.model('FeatureItem', featureItemSchema, 'featureItems');