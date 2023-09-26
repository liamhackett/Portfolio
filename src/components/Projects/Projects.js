import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";
import ProjectCard from "./../ProjectCard/ProjectCard";

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
          <ProjectCard className="smartbrain" title="SmartBrain" description="An innovative project leveraging the power of the Clarifai API to effortlessly identify faces and recognize celebrities within images." link="https://lhackett-smart-brain-0c98f4a72c64.herokuapp.com/" github="https://github.com/liamhackett/smartbrain"/>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <ProjectCard className="spotipi" title="Spotify Visualization" description="Powered by a Python script and the Spotify API, this dynamically showcases the album cover of the currently playing song on an LED matrix connected to a Raspberry Pi." link="" github="https://github.com/liamhackett/Spotify-API-Demo"/>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <ProjectCard className="artist-site" title="Fauna" description="Explore the captivating world of Fauna through their artist website, where you can learn about their current and upcoming releases." link="https://liamhackett.github.io/fauna/" github="https://github.com/liamhackett/fauna"/>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <ProjectCard className="chess" title="Chess Site with React" description="A chess website built with React and TypeScript, that allows players to play local games against each other." link="" github="https://github.com/liamhackett/Chess-App"/>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
