import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import './Contact.css';

const Contact = () => {
  return (
    <div className= "contact">
        <Container>
            <Row className="centered-row">
                <h1>Contact Me</h1>
            </Row>
            <Row>
                <Col>
                    <div className="contact-card">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon"/>
                        <h3>wjhackett7@gmail.com</h3>
                    </div>
                </Col>
                <Col>
                    <div className="contact-card">
                        <FontAwesomeIcon icon={faPhone} size="2x" className="icon"/>
                        <h3>(802)-393-2046</h3>
                    </div>
                </Col>
                   
            </Row>
        </Container>
    </div>
  );
};

export default Contact;
