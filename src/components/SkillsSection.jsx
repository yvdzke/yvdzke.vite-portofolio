import React from "react";
import {
  FaPhp,
  FaReact,
  FaNodeJs,
  FaJs,
  FaDatabase,
  FaPaintBrush,
} from "react-icons/fa";
import "./styles/SkillsSection.css";

const skills = [
  { name: "PHP", icon: <FaPhp />, level: 40 },
  { name: "JavaScript", icon: <FaJs />, level: 70 },
  { name: "React", icon: <FaReact />, level: 80 },
  { name: "SQL", icon: <FaDatabase />, level: 50 },
  { name: "NodeJs", icon: <FaNodeJs />, level: 60 },
];

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">PROFESSIONAL SKILLS</h2>
      <p className="skills-subtitle">
        my <em>Talent</em>
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-icon">{skill.icon}</span>
            </div>
            <div className="skill-line">
              <div
                className="skill-dot"
                style={{ left: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
