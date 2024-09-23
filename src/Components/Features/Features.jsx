import React, { useEffect, useState } from 'react';
import './Features.css';
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faDumbbell, faWeightHanging, faPersonSwimming, faPersonRunning, faWeightScale } from '@fortawesome/free-solid-svg-icons';
import './Features.css';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

// Map icon names to FontAwesome icons
const iconMap = {
    faHeartPulse,
    faDumbbell,
    faWeightHanging,
    faPersonSwimming,
    faPersonRunning,
    faWeightScale,
};

function Features() {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3000/api/feature-items');
                const data = response.data.map(item => ({
                    ...item,
                    itemIcon: iconMap[item.itemIcon] || faHeartPulse, // Fallback to default icon if not found
                }));
                setFeatures(data);
            } catch (error) {
                console.error('Error fetching feature items:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className='bg-black text-light py-4 py-sm-5' id='features'>
            <div className='container'>
                <motion.h2 className='section-title text-center text-capitalize fw-bold mb-4 mb-sm-5'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}>
                    Features
                </motion.h2>
                <div className='row g-4 mt-2'>
                    {features.map(item => (
                        <FeatureCard
                            key={item._id}
                            itemIcon={item.itemIcon}
                            itemTitle={item.itemTitle}
                            itemDescription={item.itemDescription}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Features;
