import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; 
import './Nav.css';

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <NavLink to="/" className="nav-link" activeclassname="active"> 
          <div className="logo">LH</div>
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto shift">
            {/* <NavLink to="/about" className="nav-link" activeclassname="active">About</NavLink>  */}
            <NavLink to="/projects" className="nav-link" activeclassname="active">Projects</NavLink> 
            <NavLink to="/resume" className="nav-link" activeclassname="active">Resume</NavLink> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
