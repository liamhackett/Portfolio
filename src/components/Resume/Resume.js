import resume from "./../../assets/images/resume.jpg";
import React from "react";
import "./Resume.css";


const Resume = () => {
  return (
    <div>
        <div className="resume-wrapper">
        <h1>Resume</h1>
            <img src={resume} alt="resume" className="resume"></img>
        </div>
    </div>
  );
};

export default Resume;
