import React from "react";
import { useParams, Link } from "react-router-dom";
import developerProjects from "../data/developerProjects.json";
import "./DeveloperCaseStudy.css";


const DeveloperCaseStudy = () => {
  const { slug } = useParams();
  const project = developerProjects.find((proj) => proj.slug === slug);

  if (!project) return <p className="not-found">Project not found.</p>;

  return (
    <div className="case-study">
      <header className="case-header">
        <h1>{project.title}</h1>
        <p>{project.fullDescription}</p>
      </header>

      <img src={project.fullImage} alt={project.title} className="case-image" />

      <div className="back-link">
        <Link to="/developer" className="button">
          ← Back to Developer Page
        </Link>
      </div>
    </div>
  );
};

export default DeveloperCaseStudy;
