import React from "react";
import "./About.css";
import { useScrollAnimation } from "./useScrollAnimation";

const About = () => {
  useScrollAnimation();

  return (
    <div className="container">
      <div className="about slide-in">
        <h1 className="title slide-in">About</h1>
        <p className="slide-in">I’m a 20-year-old student and aspiring web developer specializing in front-end technologies such as React, Bootstrap, HTML, CSS, and Tailwind CSS. My journey began with a curiosity about how websites are built, which has now turned into a passion for developing seamless and aesthetic digital experiences.

          I am also expanding my skill set with MySQL to better understand and manage data-driven applications. My goal is to continuously grow as a developer and contribute to projects that make a difference.
          </p>
      </div>
    </div>
  );
};

export default About;
