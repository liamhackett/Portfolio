import React from "react";
import { Container, Row } from "react-bootstrap";
import "./About.css";
import SkillList from "./../SkillList/SkillList";
import certificate from "./certificate.jpeg";
const About = () => {
  return (
        <div>
           
              <hr className="divider" />
      
          <div className="center-about">
            <div className="about-col">
              <h1 className="about-title">About</h1>
              <p className="description">
              I am a recent graduate from the University of Vermont with a degree in Computer Science, 
              deeply passionate about web development. My journey into the world of web development began 
              with a <a href={certificate} target="_blank" rel="noreferrer"><span className="text-highlight">Zero to Mastery web development course</span></a>, where I honed my skills and discovered my 
              love for creating visually appealing and user-friendlywebsites and applications. 
              I enjoy the creative process of turning ideas into beautiful digital experiences 
              that people can enjoy and benefit from.
              </p>
            </div>
          </div>
        <Container>
        <Row>
          <div className="skills">
            <h1>My Skills</h1>
          </div>
        </Row>
        <Row>
          <SkillList></SkillList>
        </Row>
        <Row>
        <hr className="divider" />
      </Row>
      </Container>
      </div>
  );
};

export default About;
