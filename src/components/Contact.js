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
          <a className="link" href="mailto:wjhackett7@gmail.com">
            <div className="contact-card">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon" />
              <p>wjhackett7@gmail.com</p>
            </div>
            </a>
          </Col>
          <Col md={6} className="text-center">
            <a className="link" href="tel:+18023932046">
              <div className="contact-card">
                <FontAwesomeIcon icon={faPhone} size="2x" className="icon" />
                <p>(802)-393-2046</p>
              </div>
            </a>
          </Col>
        </Row>
        <Row className="justify-content-center">

          <Col md={6} className="text-center">
          <a href="https://www.google.com/maps?q=Burlington, Vermont" target="_blank" rel="noreferrer">
            <div className="contact-card">
              <FontAwesomeIcon icon={faMapMarker} size="2x" className="icon" />
              {/* <a href="geo:44.4759,-73.2121?q=Burlington, Vermont">Burlington, Vermont</a> */}
              <p> Burlington, Vermont</p>
            </div>
            </a>
          </Col>
        </Row>
        <Row className="justify-content-center buffer">
          <Col xs="auto" className="px-2">
            <a
              href="https://github.com/liamhackett"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <FontAwesomeIcon icon={['fab', 'github']} size="3x" className="" />
            </a>
          </Col>
          <Col xs="auto" className="px-2">
            <a
              href="https://www.linkedin.com/in/william-j-hackett/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" className="" />
            </a>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Contact;
