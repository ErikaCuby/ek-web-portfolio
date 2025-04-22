import React from "react";
import { useParams, Link } from "react-router-dom";
import developerProjects from "../data/developerProjects.json";
import NotFoundPage from "./NotFoundPage";

const DeveloperCaseStudy = () => {
  const { slug } = useParams();
  const project = developerProjects.find((p) => p.slug === slug);

if (!project || !project.caseStudy) {
  return <NotFoundPage />;
}

  const { title, date, heroImage, sections } = project.caseStudy;

  const renderSection = (section, index) => {
    switch (section.type) {
      case "imageText":
        return (
          <div
            key={index}
            className={`case-section image-text ${
              section.layout || "image-left"
            }`}
          >
            {section.layout === "image-left" && (
              <div className="image">
                <img src={section.image} alt={section.heading} />
              </div>
            )}
            <div className="text">
              <h2>{section.heading}</h2>
              {section.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            {section.layout === "image-right" && (
              <div className="image">
                <img src={section.image} alt={section.heading} />
              </div>
            )}
          </div>
        );

      case "gallery":
        return (
          <div key={index} className="case-section gallery">
            <h2>{section.heading}</h2>
            <div className="gallery-grid">
              {section.images.map((img, i) => (
                <figure key={i}>
                  <img src={img.src} alt={img.caption} />
                  <figcaption>{img.caption}</figcaption>
                </figure>
              ))}
            </div>
            {section.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        );

      case "features":
        return (
          <div key={index} className="case-section features">
            <h2>{section.heading}</h2>
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        );

      case "reflection":
        return (
          <div key={index} className="case-section reflection">
            <h2>{section.heading}</h2>
            {section.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="case-study">
      <div className="case-header">
        <h1>{title}</h1>
        <p>{date}</p>
      </div>

      {heroImage && <img src={heroImage} alt={title} className="case-image" />}

      {sections.map((section, index) => renderSection(section, index))}

      <Link to="/developer" className="back-link">
        ← Back to Projects
      </Link>
    </div>
  );
};

export default DeveloperCaseStudy;
