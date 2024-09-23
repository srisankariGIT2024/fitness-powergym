import React from 'react';
import './Footer.css';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
function Footer() {
    return (
        <div className="bg-dark text-light py-4 py-sm-5" id='contact'>
            <div className='container'>

                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h3 className="text-uppercase"><FontAwesomeIcon className='me-2' icon={faDumbbell} size='lg' style={{ color: '#DC0000' }}></FontAwesomeIcon>Power <span className='text-light text-uppercase fw-bold'>gym</span>
                        </h3>
                        <hr class="half-rule"/>
                        <h5>
                            A revolutionary program to help busy people to drop body fat and reignite their health in just 3 months!
                        </h5>
                    </div>              

                    <div className="col-md-3 mb-md-0 mb-3 text-right justify-content-center ">
                        <h3 className="text-uppercase text-underlined">Legal</h3>
                        <hr class="half-rule"/>
                        <hr className="clearfix w-100 d-md-none pb-0" />
                        <h5 className="text-light">
                            <ul className="list-unstyled">
                                <li className='mt-2'><a href="#!"></a>Blogs</li>
                                <li className='mt-2'><a href="#!"></a>Terms and Condition </li>
                                <li className='mt-2'><a href="#!"></a>Privacy Policy</li>
                            </ul>
                        </h5>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3 text-right justify-content-center ">
                        <h3 className="text-uppercase">Quicks Links</h3>
                        <hr class="half-rule"/>
                        <h5 className="text-light">
                            <ul className="list-unstyled">
                                <li className='mt-2'><a href="#!"></a>Home</li>
                                <li className='mt-2'><a href="#!"></a>About</li>
                                <li className='mt-2'><a href="#!"></a>Join Now</li>
                                <li className='mt-2'><a href="#!"></a>Feedbacks</li>
                            </ul>
                        </h5>
                    </div>

                </div >
            </div>
        </div>
    );
}

export default Footer;