exports.getHeroContent = (req, res) => {
    res.json({
        subtitle: 'Get the body you want',
        title1: 'IT\'S MORE THAN',
        title2: 'JUST ANOTHER DIET',
        title3: 'IT\'S A LEAN LIFESTYLE.',
        buttonText: 'Get Started'
    });
};
exports.geAboutContent = (req, res) => {
    res.json({
        title: 'About me',
        subtitle1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        subtitle2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        subtitle3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        buttonText: 'Know More'
    });
};
