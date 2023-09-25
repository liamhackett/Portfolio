import React from 'react';
import SkillCard from './SkillCard'; // Import the SkillCard component
import './SkillCard.css'

import pythonImage from './images/python.png';
import reactImage from './images/react.svg';
import javaScriptImage from './images/javascript.png';
import htmlImage from './images/html.svg';
import cssImage from './images/css.svg';
import sqlImage from './images/sql.png';
import gitImage from './images/git.png';
import swiftImage from './images/swift.svg';
import cppImage from './images/cpp.png';
import javaImage from './images/java.svg';
import nodeImage from "./images/nodejs.png";


const SkillList = () => {
    const python = {
        name: "Python",
        picture: pythonImage
    };
    
    const react = {
        name: "React",
        picture: reactImage
    }
    const javaScript = {
        name: "JavaScript",
        picture:javaScriptImage
    };
    
    const html = {
        name: "HTML",
        picture: htmlImage
    };
    
    const css = {
        name: "CSS",
        picture: cssImage
    };
    
    const sql = {
        name: "SQL",
        picture: sqlImage
    }
    
    const git = {
        name: "Git Source Control",
        picture: gitImage
    }
    
    const swift = {
        name: "Swift/SwiftUI",
        picture: swiftImage
    }
    
    const cpp = {
        name: "C++",
        picture: cppImage
    }
    const java ={
        name: "Java",
        picture: javaImage
    }
    const node = {
        name: "Node.js",
        picture: nodeImage,
    }
    
    
const skills = [react, javaScript, html, css, git, sql, python, swift, cpp, java, node];
    
const skillCards = skills.map((skill, index) => (
    <div key={index}>
      <SkillCard skill={skill} />
    </div>
  ));

  return (
    <div className="grid-cover">
        <div className="grid-container">
        {skillCards}
        </div>
    </div>
  );
};
export default SkillList;






