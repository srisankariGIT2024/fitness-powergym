const mongoose = require('mongoose');

const featureItemSchema = new mongoose.Schema({
    itemIcon: String, 
    itemTitle: String,
    itemDescription: String
});

module.exports = mongoose.model('FeatureItem', featureItemSchema, 'featureItems');