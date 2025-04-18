import React from "react";
import { Link } from "react-router-dom";
import "./Developer.css";
import developerProjects from "../data/developerProjects.json";

const Developer = () => {
  return (
    <div className="developer-container">
      {" "}
      {/* ✅ Use string classNames */}
      {/* Intro Section */}
      <section className="developer-intro">
        <h1>Hello, I’m Erika 👩‍💻</h1>
        <p>
          I’m a passionate front-end developer who blends code and creativity. I
          specialize in building elegant, user-friendly interfaces using tools
          like <strong>React</strong>, <strong>Vite</strong>, and{" "}
          <strong>CSS Modules</strong>. I love crafting clean code and smooth UX
          experiences.
        </p>
      </section>
      {/* Projects Gallery */}
      <section className="developer-gallery">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {developerProjects.slice(0, 3).map((project) => (
            <Link
              to={`/developer/${project.slug}`}
              key={project.id}
              className="project-card"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="thumbnail"
              />
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Developer;
