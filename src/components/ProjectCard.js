import React from 'react';
import './ProjectCard.css'
import { Button } from 'react-bootstrap';
function ProjectCard({ className, title, description }) {
    return (
        <div className={`project-card ${className}`}>
            <div className="project-text-box">
                <h1 className="project-text">{title}</h1>
                <p className="project-text-p">This is an example description. I just need a couple sentences to figure out spacing</p>
                <Button variant="custom-card">Learn More</Button>
            </div>
        </div>
    );
}

export default ProjectCard;

