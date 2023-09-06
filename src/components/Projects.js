import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Projects.css';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
      <Container>
        <Row>
          <Col>
            <h1 className="projects-title">Projects</h1>
          </Col>
        </Row>
        <Row className="mb-5"> 
        <Col>
            <ProjectCard className="artist-site" title="Artist Website" description="Project Description" />

        </Col>
        <Col>
            <ProjectCard> </ProjectCard>
        </Col>
        <Col>
            <ProjectCard> </ProjectCard>
        </Col>
        </Row>

        <Row className="mb-3"> 
        <Col>
            <ProjectCard/>

        </Col>
        <Col>
            <ProjectCard> </ProjectCard>
        </Col>
        <Col>
            <ProjectCard> </ProjectCard>
        </Col>
        </Row>
        <Row>
            <hr className="divider" />
        </Row>
      </Container>
  );
};

export default Projects;
