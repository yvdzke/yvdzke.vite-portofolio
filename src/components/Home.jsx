import React from "react";
import "./styles/Home.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Home() {
  const ref = useScrollAnimation();
  return (
    <section id="Home" ref={ref} className="Home fade-section">
      <div className="Home-content">
        <h1>
          Hi, I'm <span>Yuda Pradana</span>
        </h1>
        <p>
          Frontend Developer passionate about crafting clean and interactive web
          experiences.
        </p>
        <a href="#portfolio" className="btn">
          View My Work
        </a>
      </div>
    </section>
  );
}

export default Home;
