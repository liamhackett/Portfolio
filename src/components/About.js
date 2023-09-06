import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import SkillList from './SkillList';

const About = () => {
  return (
      <Container>
      <Row>
        <hr className="divider" />
      </Row>
        <Row>
          <Col>
            <h1 className="about-title">About</h1>
          </Col>
        </Row>
        <Row>
        <Col xs="1">
          <hr className="horizontal-hr"/>
        </Col>
          <Col>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor convallis metus, in lacinia elit euismod at. Integer
              feugiat turpis id justo eleifend, a bibendum nunc iaculis.
              Vestibulum non enim nec justo efficitur elementum. Proin sit amet
              justo nec elit cursus egestas. Duis quis lacus elit. Sed bibendum
              eros in est tristique, sed volutpat mi hendrerit. Integer in
              mauris quis tellus ultricies condimentum. Nulla facilisi. Sed vel
              eros et urna cursus scelerisque. Nunc a auctor elit, non sodales
              lectus. Suspendisse potenti.
            </p>
          </Col>
        </Row>
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
  );
};

export default About;
