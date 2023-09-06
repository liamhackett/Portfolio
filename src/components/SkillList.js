import React from 'react';
import SkillCard from './SkillCard'; // Import the SkillCard component
import './SkillCard.css'

const SkillList = () => {
    const python = {
        name: "Python",
        picture: "/assets/images/python.png"
    };
    
    const react = {
        name: "React",
        picture: "/assets/images/react.jpg"
    }
    const javaScript = {
        name: "JavaScript",
        picture:"/assets/images/javascript.png"
    };
    
    const html = {
        name: "HTML",
        picture: "/assets/images/html.jpg"
    };
    
    const css = {
        name: "CSS",
        picture: "/assets/images/css.png"
    };
    
    const sql = {
        name: "SQL",
        picture: "/assets/images/sql.png"
    }
    
    const git = {
        name: "Git Source Control",
        picture: "/assets/images/git.png"
    }
    
    const swift = {
        name: "Swift/SwiftUI",
        picture: "/assets/images/swift.png"
    }
    
    const cpp = {
        name: "C++",
        picture: "/assets/images/cpp.png"
    }
    
    
const skills = [python, react, javaScript, html, css, git, sql, swift, cpp ];
    
const skillCards = skills.map((skill, index) => (
    <div key={index} className="skill-card">
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






