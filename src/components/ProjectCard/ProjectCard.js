import React from "react";
import "./ProjectCard.css"
import { Button } from "react-bootstrap";
function ProjectCard({ className, title, description, link, github }) {
    return (
        <div className={`project-card ${className}`}>
            <div className="project-text-box">
                <h1 className="project-text">{title}</h1>
                <p className="project-text-p">{description}</p>
                <div className="button-container">
                    <a href={github} target="_blank" rel="noopener noreferrer" className="gh-link">
                        <Button variant="custom-card">Learn more</Button>
                    </a>
                    {link !== "" && (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="gh-link">
                            <Button variant="custom-card">Demo</Button>
                        </a>
                    )}
                </div>
                
            </div>
        </div>
    );
}

export default ProjectCard;

