import React from "react";
import "./SkillCard.css"

function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <img src={skill.picture} alt="skill" className="card-image" />
      <p className="card-text">{skill.name}</p>
      <div className="card-overlay">
        <p className="card-title">{skill.name}</p>
        <p className="card-text-back">{skill.description}</p>
      </div>
    </div>
  );
}

export default SkillCard;
