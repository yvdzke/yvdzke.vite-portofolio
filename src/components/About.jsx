import React from "react";
import "./styles/About.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

function About() {
  const ref = useScrollAnimation();
  return (
    <section id="about" ref={ref} className="about fade-section">
      <h2>About Me</h2>
      <p>
        I’m a Frontend Developer who loves turning ideas into reality through
        clean code and modern web technologies. My main tools are React,
        JavaScript, and CSS.
      </p>
    </section>
  );
}

export default About;
