import React from "react";
import { FaReact, FaHtml5, FaCss3, FaJsSquare, FaDatabase, FaGithub, FaBootstrap, FaGit, FaJava, FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import "./Skills.css";

const skillsTop = [
  { id: 1, name: "React", icon: <FaReact color="#61dafb" /> }, // Warna React
  { id: 2, name: "HTML", icon: <FaHtml5 color="#e34f26" /> }, // Warna HTML5
  { id: 3, name: "CSS", icon: <FaCss3 color="#1572b6" /> }, // Warna CSS3
  { id: 4, name: "JavaScript", icon: <FaJsSquare color="#f7df1e" /> }, // Warna JavaScript
  { id: 5, name: "Bootstrap", icon: <FaBootstrap color="#7952b3" /> }, // Warna Bootstrap
  { id: 6, name: "Tailwind CSS", icon: <RiTailwindCssFill color="#38B2AC" /> }, // Warna TailwindCSS
];

const skillsBot = [
  { id: 1, name: "GIT", icon: <FaGit color="#F05032" /> }, // Warna Git
  { id: 2, name: "GitHub", icon: <FaGithub color="#fff" /> }, // Warna GitHub
  { id: 3, name: "Database", icon: <FaDatabase color="#4DB33D" /> }, // Warna Database
  { id: 4, name: "Java", icon: <FaJava color="#007396" /> }, // Warna Java
  { id: 5, name: "Python", icon: <FaPython color="#3776AB" /> }, // Warna Python
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title slide-in">Skills</h1>
      <div className="skills-icons-right slide-in">
        {[...skillsTop, ...skillsTop].map((skill, index) => (
          <div key={index} className="skill-item slide-in">
            <div className="skill-icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
      <div className="skills-icons-left slide-in">
        {[...skillsBot, ...skillsBot].map((skill, index) => (
          <div key={index} className="skill-item slide-in">
            <div className="skill-icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
