import React from "react";
import "./SkillCard.css"

function SkillCard({ skill }) {
    return (
        <div className="skill-card">
            <img src= {skill.picture} alt="skill" className="card-image"></img>
            <p className="card-text">{skill.name}</p>
        </div>
    );
}

export default SkillCard;
