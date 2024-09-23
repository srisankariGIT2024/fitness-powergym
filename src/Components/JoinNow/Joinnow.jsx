import React from 'react';
import './Joinnow.css';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import PurpleBtn from '../PurpleBtn/PurpleBtn';
import { Button } from 'react-bootstrap';

function Joinow() {
    return (
        <div className='bg-joinnowsection text-light py-4 py-sm-5'>
            <div className='container'>
                <div className='text-center mb-4'>
                    <motion.div
                        initial={{ opacity: 0, x: -300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className='text-dark'>
                            Join with my successful clients, and transform your fitness journey today
                        </h1>
                        {/* */}
                    </motion.div>
                </div>
                <div className='row text-center'>
                    <div className='col-lg-3 col-md-6 mb-4'>
                        <h2 className='stat-text'>
                            <CountUp end={300} separator=',' />+
                        </h2>
                        <p className='stat-description'>Fitness Programs</p>
                    </div>
                    <div className='col-lg-3 col-md-6 mb-4'>
                        <h2 className='stat-text'>
                            <CountUp end={20000} separator=',' />+
                        </h2>
                        <p className='stat-description'>Hours of Training</p>
                    </div>
                    <div className='col-lg-3 col-md-6 mb-4'>
                        <h2 className='stat-text'>
                            <CountUp end={10} />+
                        </h2>
                        <p className='stat-description'>Years in Operation</p>
                    </div>
                    <div className='col-lg-3 col-md-6 mb-4'>
                        <h2 className='stat-text'>
                            <CountUp end={1000} separator=',' />+
                        </h2>
                        <p className='stat-description'>Happy Clients</p>
                    </div>
                    <div className='mt-4'>
                        <h4>
                            <Button variant="light">Join with me</Button>{' '}
                        </h4>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Joinow;
