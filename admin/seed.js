// backend/seed.js
const mongoose = require('mongoose');
const HeroContent = require('./models/HeroContent');

mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'userdetails',
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    await HeroContent.create({
        subtitle: 'Get the body you want',
        title1: 'IT\'S MORE THAN',
        title2: 'JUST ANOTHER DIET',
        title3: 'IT\'S A LEAN LIFESTYLE.',
        buttonText: 'Get Started'
    });
    console.log('Seed data inserted');
    process.exit();
}).catch(err => {
    console.error('Error seeding data:', err);
    process.exit();
});
