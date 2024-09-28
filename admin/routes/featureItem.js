const express = require('express');
const router = express.Router();
const FeatureItem = require('../models/featureItem');

router.get('/', async (req, res) => {
    console.log('Fetching feature items...'); // Log when the route is hit
    try {
        const featureItems = await FeatureItem.find();
        res.json(featureItems);
    } catch (err) {
        console.error(err); // Log the error
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
