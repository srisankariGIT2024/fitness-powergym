// routes/AboutContent.js
const express = require('express');
const router = express.Router();
const AboutContent = require('../models/AboutContent');

router.get('/', async (req, res) => {
    try {
        const content = await AboutContent.findOne(); // Adjust the query as needed
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
