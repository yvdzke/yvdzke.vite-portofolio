import React from "react";
import "./styles/Portfolio.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Portfolio() {
  const ref = useScrollAnimation();
  const projects = [
    {
      title: "Landing Page",
      img: "https://via.placeholder.com/300x200",
      desc: "A responsive marketing page.",
    },
    {
      title: "Dashboard UI",
      img: "https://via.placeholder.com/300x200",
      desc: "Interactive data dashboard.",
    },
    {
      title: "Portfolio Site",
      img: "https://via.placeholder.com/300x200",
      desc: "Personal portfolio design.",
    },
  ];

  return (
    <section id="portfolio" ref={ref} className="portfolio fade-section">
      <h2>Projects</h2>
      <div className="portfolio-grid">
        {projects.map((p, i) => (
          <div className="card" key={i}>
            <img src={p.img} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
