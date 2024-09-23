import React from 'react';
import './Results.css';
import { motion } from 'framer-motion';
import StarRatings from 'react-star-ratings';
import ResultsImg1 from '../../Images/beforeafter1jpeg.jpg';

function Results() {
    // Card animation properties
    const cardVariants = {
        hidden: { opacity: 0, x: 100 },  // Start off-screen to the right
        visible: { opacity: 1, x: 0 },   // Slide into view
    };

    return (
        <div className='text-danger py-4 py-sm-5' id='feedbacks'>
            <div className='container'>
                <h2 className='text-center'>See my Client Results</h2>
                <motion.div
                    className='d-flex justify-content-center'
                    initial={{ opacity: 0, x: -300 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className='row flex-lg-row flex-column-reverse mt-4'>
                        {/* Animate each card */}
                        <motion.div
                            className='col-lg-4'
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <img className='img-fluid w-40 mt-4 mt-lg-0' src={ResultsImg1} alt="ResultsImageOne" />
                            <h2 className='text-center fw-bold mt-4'>I Lost 14 kgs in 90 days</h2>
                            <div className='centered-star-ratings'>
                                <StarRatings
                                    rating={5}  // Fixed rating value for demonstration
                                    starRatedColor="gold"  // Color of the filled stars
                                    numberOfStars={5}
                                    starDimension="30px"
                                    starSpacing="5px"
                                    name='rating'
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className='col-lg-4'
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <img className='img-fluid w-40 mt-4 mt-lg-0' src={ResultsImg1} alt="ResultsImageOne" />
                            <h2 className='text-center fw-bold mt-4'>I found myself Again</h2>
                            <div className='centered-star-ratings'>
                                <StarRatings
                                    rating={4}  // Fixed rating value for demonstration
                                    starRatedColor="gold"  // Color of the filled stars
                                    numberOfStars={5}
                                    starDimension="30px"
                                    starSpacing="5px"
                                    name='rating'
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className='col-lg-4'
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <img className='img-fluid w-40 mt-4 mt-lg-0' src={ResultsImg1} alt="ResultsImageOne" />
                            <h2 className='text-center fw-bold mt-4'>Wrestling Back My Health</h2>
                            <div className='centered-star-ratings'>
                                <StarRatings
                                    rating={5}  // Fixed rating value for demonstration
                                    starRatedColor="gold"  // Color of the filled stars
                                    numberOfStars={5}
                                    starDimension="30px"
                                    starSpacing="5px"
                                    name='rating'
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div >
    );
}

export default Results;
