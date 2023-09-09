import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Projects.css';
import ProjectCard from './ProjectCard';
// import Contact from './Contact';

const Projects = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="projects-title">Projects</h1>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col lg={4} md={6} sm={12}>
          <ProjectCard className="artist-site" title="Artist Website" description="Project Description" />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <ProjectCard className="spotipi" title="Spotify Visualization" description="Project Description" />
        </Col>
        
        <Col lg={4} md={6} sm={12}>
          <ProjectCard className="chess" title="Chess Site with React" description="Project Description" />
        </Col>
      </Row>
      {/* <hr className="divider"/>

      <Contact></Contact> */}
    </Container>
  );
};

export default Projects;
