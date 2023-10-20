import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import yourImage from "../../assets/images/liam-hackett.png";
import arrow from "../../assets/images/arrow.svg";
import { Link } from "react-router-dom";
import About from "./../About/About";
import Contact from "./../Contact/Contact";

const Home = () => {
  return (
    <div>
      <div className="body-container">
        <Container>
          <Row className="first-row">
            <Col lg={6} md={12}>
              <div className="content text-left d-flex flex-column justify-content-center">
                <h1 className="display-4">
                  <span className="smaller-text">I'm</span> <span className="name">Liam Hackett</span>
                </h1>
                <p className="lead">
                  A recent University of Vermont graduate<br></br>and aspiring web developer
                </p>
                <Link to="/projects">
                  <Button variant="custom">Projects</Button>
                </Link>
              </div>
            </Col>
            <Col lg={6} md={12} className="text-center image-col">
              <img src={yourImage} alt="liam-hackett" className="image" />
            </Col>
          </Row>
          <Row className="arrow-row">
            <Col xs={1} className="arrow-col arrow-row">
              <a href="#about" className="scroll-link">
                <img src={arrow} alt="Arrow" className="down-arrow" />
              </a>
            </Col>
          </Row>
        </Container>
        <div className="social-icons">
          <hr className="vertical-hr"></hr>
          <a
            href="https://github.com/liamhackett"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FontAwesomeIcon icon={["fab", "github"]} size="2x" className="icon-spacing" />
          </a>
          <a
            href="https://www.linkedin.com/in/william-j-hackett/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" className="icon" />
          </a>
        </div>


      </div>
      <div id="about">
        <About></About>
      </div>
      <Contact></Contact>
    </div>
  );
};

export default Home;
