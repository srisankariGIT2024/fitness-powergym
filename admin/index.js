const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const heroContentRoutes = require('./routes/heroContent');
const aboutContentRoutes = require('./routes/aboutContent');
const featureItemRoutes = require('./routes/featureItem');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userdetails', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Error connecting to MongoDB', err);
});

// Routes
app.use('/api/hero-content', heroContentRoutes);
app.use('/api/about-content', aboutContentRoutes);
app.use('/api/feature-items', featureItemRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
