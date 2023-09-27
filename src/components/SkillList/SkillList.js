import React from "react";
import SkillCard from "./../SkillCard/SkillCard"; // Import the SkillCard component
import "./../SkillCard/SkillCard.css";

import pythonImage from "./../images/python.png";
import reactImage from "./../images/react.svg";
import javaScriptImage from "./../images/javascript.png";
import htmlImage from "./../images/html.svg";
import cssImage from "./../images/css.svg";
import sqlImage from "./../images/sql.png";
import gitImage from "./../images/git.png";
import swiftImage from "./../images/swift.svg";
import cppImage from "./../images/cpp.png";
import javaImage from "./../images/java.svg";
import nodeImage from "./../images/nodejs.png";


const SkillList = () => {
    const python = {
        name: "Python",
        picture: pythonImage,
        description: "Two years as a teaching assistant. Created Spotify Visualization and many other projects."
    };
    
    const react = {
        name: "React",
        picture: reactImage,
        description: "Unit on React in ZTM course. Created several projects using the react framework"
    }
    const javaScript = {
        name: "JavaScript",
        picture:javaScriptImage,
        description: "Unit on JavaScript and Advanced Javascript concepts in ZTM course."
    };
    
    const html = {
        name: "HTML",
        picture: htmlImage,
        description: "Taken several courses using HTML at UVM. Created numerous websites using HTML."
    };
    
    const css = {
        name: "CSS",
        picture: cssImage,
        description: "Taken several courses using CSS at UVM. Created numerous websites using CSS."
    };
    
    const sql = {
        name: "SQL",
        picture: sqlImage,
        description: "Took a course on databases and SQL at UVM. Incorporated postgresql into the SmartBrain Project's server."
    }
    
    const git = {
        name: "Git Source Control",
        picture: gitImage,
        description: "Used github source control for all projects."
    }
    
    const swift = {
        name: "Swift/SwiftUI",
        picture: swiftImage,
        description: "Took mobile app development course at UVM. Created fully functioning fitness app using SwiftUI"
    }
    
    const cpp = {
        name: "C++",
        picture: cppImage,
        description: "Took C++ course at UVM. Used object oriented programming in C++ to create several projects."
    }
    const java ={
        name: "Java",
        picture: javaImage,
        description: "Two years as a teaching assistant. Created many projects using object oriented programming in Java."
    }
    const node = {
        name: "Node.js",
        picture: nodeImage,
        description: "Unit on Node and Express in ZTM course. Created a node and express server for the SmartBrain project."
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






