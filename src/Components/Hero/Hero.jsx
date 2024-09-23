import React, { useEffect, useState } from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import Button from 'react-bootstrap/Button';

function Hero() {
    const [content, setContent] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/hero-content');
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const data = await response.json();
                setContent(data);
            } catch (error) {
                console.error('Error fetching content:', error);
                setError('Failed to fetch content');
            }
        };

        fetchContent();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (!content) {
        return <div>Loading...</div>;
    }

    return (
        <header className='h-100 min-vh-100 d-flex align-items-center'>
            <div className='container'>
                <div className='row'>
                    <motion.div
                        className='col-md-6 d-flex flex-column justify-content-start align-items-sm-start'
                        initial={{ opacity: 0, x: -300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className='hero-subtitle text-light text-center text-sm-start text-uppercase'>
                            {content.subtitle}
                        </h2>
                        <h1 className='hero-title text-light text-center text-sm-start fw-bold text-uppercase lh-1'>
                            {content.title1}
                        </h1>
                        <h1 className='hero-title text-light text-center text-sm-start fw-bold text-uppercase lh-1'>
                            {content.title2}
                        </h1>
                        <h1 className='hero-title text-light text-center text-sm-start fw-bold text-uppercase lh-1'>
                            {content.title3}
                        </h1>
                        <Button variant="light">{content.buttonText}</Button>
                    </motion.div>
                </div>
            </div>
        </header>
    );
}

export default Hero;
