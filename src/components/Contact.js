import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker} from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <Container>
       
        <Row className="justify-content-center">
          <Col className="centered-row">
            <h1>Contact Me</h1>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <div className="contact-card">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon" />
              <a className="link" href="mailto:wjhackett7@gmail.com">wjhackett7@gmail.com</a>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <div className="contact-card">
              <FontAwesomeIcon icon={faPhone} size="2x" className="icon" />
              <a className="link" href="tel:+18023932046">(802)-393-2046</a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">

          <Col md={6} className="text-center">
            <div className="contact-card">
              <FontAwesomeIcon icon={faMapMarker} size="2x" className="icon" />
              {/* <a href="geo:44.4759,-73.2121?q=Burlington, Vermont">Burlington, Vermont</a> */}
              <a href="https://www.google.com/maps?q=Burlington, Vermont" target="_blank" rel="noreferrer">Burlington, Vermont</a>
            </div>
          </Col>
        </Row>
        


      </Container>
    </div>
  );
};

export default Contact;
