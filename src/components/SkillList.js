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
        picture: "/assets/images/react.svg"
    }
    const javaScript = {
        name: "JavaScript",
        picture:"/assets/images/javascript.png"
    };
    
    const html = {
        name: "HTML",
        picture: "/assets/images/html.svg"
    };
    
    const css = {
        name: "CSS",
        picture: "/assets/images/css.svg"
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
        picture: "/assets/images/swift.svg"
    }
    
    const cpp = {
        name: "C++",
        picture: "/assets/images/cpp.png"
    }
    const java ={
        name: "Java",
        picture:"/assets/images/java.svg"
    }
    
    
const skills = [react, javaScript, html, css, git, sql, python, swift, cpp, java];
    
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






