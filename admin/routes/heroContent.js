// routes/heroContent.js
const express = require('express');
const router = express.Router();
const HeroContent = require('../models/HeroContent');

router.get('/', async (req, res) => {
    try {
        const content = await HeroContent.findOne(); // Adjust the query as needed
        if (!content) {
            return res.status(404).json({ message: 'Content not found' });
        }
        res.json(content);
    } catch (error) {
        console.error('Error fetching content:', error);
        res.status(500).json({ message: 'Error fetching content', error });
    }
});

module.exports = router;
