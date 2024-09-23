const express = require('express');
const router = express.Router();
const FeatureItem = require('../models/featureItem');

// Get all feature items
router.get('/', async (req, res) => {
    try {
        const featureItems = await FeatureItem.find();
        res.json(featureItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
