import React from 'react';
import './NavigationBar.css';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import PurpleBtn from '../PurpleBtn/PurpleBtn';

function NavigationBar() {
    return (
        <Navbar expand='lg' className='position-absolute w-100 z-2'>
            <Container>
                <motion.a className='navbar-brand text-light' href='./' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>

                    <FontAwesomeIcon className='me-2' icon={faDumbbell} size='xl' style={{ color: '#FFF' }}></FontAwesomeIcon>Power <span className='text-light text-uppercase fw-bold'>gym</span>
                </motion.a>

                <Navbar.Toggle aria-controls='basic-navbar' />

                <Navbar.Collapse id='basic-navbar-nav' className='p-3 p-lg-0 mt-2 mt-lg-0'>

                    <motion.ul className='navbar-nav me-auto justify-content-end w-100' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                        <Nav.Link href='#' className='text-light text-uppercase'>Home
                        </Nav.Link>
                        <Nav.Link href='#about' className='text-light text-uppercase'>About
                        </Nav.Link>
                        <Nav.Link href='#features' className='text-light text-uppercase'>Trainings
                        </Nav.Link>
                        <Nav.Link href='#feedbacks' className='text-light text-uppercase'>Feedbacks
                        </Nav.Link>
                        <Nav.Link href='#contact' className='text-light text-uppercase'>Contact
                        </Nav.Link>
                    </motion.ul>

                    <motion.div className='ms-0 ms-lg-2 mt-3 mt-lg-0' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                        <PurpleBtn btnTitle='Join now' />
                    </motion.div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar