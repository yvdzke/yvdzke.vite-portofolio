import React, { useState } from "react";
import "./styles/Home.css";
import useScrollAnimation from "../hooks/useScrollAnimation";
import About from "./About.jsx";
import { FaNodeJs } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoDocumentAttachSharp } from "react-icons/io5";
import SkillsSection from "../components/SkillsSection.jsx";

function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const ref = useScrollAnimation();
  return (
    <section id="Home" ref={ref} className="Home fade-section">
      <div className="Home-content">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7JhjnxhO7YY?si=W_T76qv11D3-iQEF"
          title="YouTube video player"
          frameborder="2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <h1>The code is like a joke. If it needs comment, it's no good.</h1>
        <p>
          Graduated Full-Stack Web Developer bootcamp program from harisenin.com
          for deepening{""}
          <button className="nav-btn" onClick={() => setShowAbout(true)}>
            Skills
          </button>
          in Web Developer. Explore my latest projects, showcasing my expertise
          in web development.
        </p>
        <div className="div-btn">
          <a href="#portfolio" className="btn-resume">
            Resume
            <IoDocumentAttachSharp />
          </a>
          <a href="#portfolio" className="btn-contact">
            Send Message
            <FaFacebookMessenger />
          </a>
        </div>
      </div>
      <About isOpen={showAbout} onClose={() => setShowAbout(false)} />
    </section>
  );
}

export default Home;
