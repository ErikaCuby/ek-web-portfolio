import React from "react";
import { useParams, Link } from "react-router-dom";
import developerProjects from "../data/developerProjects.json";

const DeveloperCaseStudy = () => {
  const { slug } = useParams();
  const project = developerProjects.find((p) => p.slug === slug);

  if (!project || !project.caseStudy) {
    return <p>Project not found 😢</p>;
  }

  const { title, date, image, sections } = project.caseStudy;

  return (
    <div className="case-study">
      <div className="case-header">
        <h1>{title}</h1>
        <p>{date}</p>
      </div>

      <img src={image} alt={title} className="case-image" />

      {sections.map((section, index) => (
        <div key={index} className="case-section">
          <h2>{section.heading}</h2>
          {section.content.map((paragraph, i) => {
            const isLink = paragraph.includes("http");
            return isLink ? (
              <p key={i}>
                {paragraph.split(" ").map((word, wIdx) =>
                  word.startsWith("http") ? (
                    <a
                      key={wIdx}
                      href={word}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {word}
                    </a>
                  ) : (
                    ` ${word}`
                  )
                )}
              </p>
            ) : (
              <p key={i}>{paragraph}</p>
            );
          })}
        </div>
      ))}

      <Link to="/developer" className="back-link">
        ← Back to Projects
      </Link>
    </div>
  );
};

export default DeveloperCaseStudy;
