import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AboutImg from '../../Images/maninfrontofmirror.jpeg';
import PurpleBtn from '../PurpleBtn/PurpleBtn';

function About() {
    const [content, setContent] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/about-content');
                
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
    <div className='text-dark py-4 py-sm-5' id='about'>
      <div className='container'>
        <div className='row flex-lg-row flex-column-reverse '>
          <motion.div
            className='col-lg-6 d-flex justify-content-center'
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img className='img-fluid w-40 mt-4 mt-lg-0' src={AboutImg} alt="AboutImage" />
          </motion.div>
          <motion.div
            className='col-lg-6 d-flex justify-content-center align-items-start'
            initial={{ opacity: 0, x: 350 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className='gap-4'>
              <h2 className='section-title text-capitalize fw-bold'>
              <span className='text-danger'>{content.title}</span>
              </h2>
              <p>{content.subtitle1}</p>
              <p> {content.subtitle2}</p>
              <p>{content.subtitle1}</p>
              <PurpleBtn btnTitle='Know More' />
            </div>
          </motion.div>
        </div>
      </div>
    </div >
  );
}

export default About;
