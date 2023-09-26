import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './About.css';
import SkillList from './SkillList';

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
              with a Zero to Mastery web development course, where I honed my skills and discovered my 
              love for creating <span className="text-highlight">visually appealing and user-friendly</span> websites and applications. 
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
