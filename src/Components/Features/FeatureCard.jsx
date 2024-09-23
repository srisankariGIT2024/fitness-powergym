import React from 'react';
import './Features.css';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FeatureCard({ itemIcon, itemTitle, itemDescription }) {
    return (
        <motion.div className='col-lg-4' initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <Card className='bg-black text-light card-custom'>
                <Card.Body className='d-flex flex-column align-items-center'>
                    <FontAwesomeIcon icon={itemIcon} style={{ color: '#B20600', fontSize: '2rem' }} />
                    <Card.Title className='text-capitalize text-center fw-bold my-3'>{itemTitle}</Card.Title>
                    <Card.Text className='text-center'>
                        {itemDescription}
                    </Card.Text>
                </Card.Body>
            </Card>

        </motion.div>
    );
}

export default FeatureCard;
