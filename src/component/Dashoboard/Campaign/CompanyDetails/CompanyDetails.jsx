import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './CompanyDetails.css';
import contactImg from '../../../../Assets/contact.svg';
// import swal from 'sweetalert'
import Fade from 'react-reveal/Fade';

const CompanyDetails = () => {
    const handleSubmit = event => {
        event.preventDefault();
        event.target.reset();
        // swal("Thank You!", "We appreciate you contacting us!", "success");
    }
    return (
        <section id="contact">
            <Col md={11} className="mx-auto">
                <Row>
                    <Col md={6}>
                        <Fade duration={2000} left>
                            <form onSubmit={handleSubmit} className="contactForm">
                                <h4 className="miniTitle">TELL US ABOUT</h4>
                                <h5 className="sectionTitle">YOUR BRAND</h5>
                                <Row>
                                    <Col md={12} lg={6}>
                                        <input placeholder="Brand Name" type="text" required/>
                                    </Col>
                                    <Col md={12} lg={6}>
                                        <input placeholder="Industry" type="email" required/>
                                    </Col>
                                    <Col md={12}>
                                        <input placeholder="Tagline" type="text" required/>
                                    </Col>
                                    <Col md={12}>
                                        <textarea placeholder="What is your brand about?" required></textarea>
                                    </Col>
                                </Row>
                                <button className="branBtn" type="submit">Generate</button>
                            </form>
                        </Fade>
                    </Col>
                    <Col md={6}>
                        <Fade duration={2000} right>
                            <img src={`${contactImg}`} alt="" className="img-fluid"/>
                        </Fade>
                    </Col>
                </Row>
            </Col>
        </section>
    );
};

export default CompanyDetails;
