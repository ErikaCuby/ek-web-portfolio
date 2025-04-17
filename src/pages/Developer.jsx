import React from "react";
import "./Developer.css";

const Developer = () => {
  return (
    <div className="developer-page">

      <header className="hero-section">
        <div className="hero-text">
          <h1>Front-End Developer</h1>
          <p>Designing interfaces that feel as good as they look.</p>
        </div>
      </header>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Massage Website</h3>
            <p>Relaxing visuals + accessible layout for a local therapist</p>
          </div>
          <div className="project-card">
            <h3>React Quiz App</h3>
            <p>A playful minimalist UI to test digital habits</p>
          </div>
          <div className="project-card">
            <h3>Responsive Gallery</h3>
            <p>Showcase of adaptive grid systems and smooth transitions</p>
          </div>
        </div>
      </section>

      <section className="case-study-cta">
        <p>Want the full process behind each build?</p>
        <button className="button button-secondary">
          Explore Case Studies
        </button>
      </section>
    </div>
  );
};

export default Developer;
