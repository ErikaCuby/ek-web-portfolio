// Portfolio Developer Section Mockup (React structure with layout + entry animation)

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";
import "./Developer.css";

const Developer = ({ transitionFromLanding }) => {
  const [showContent, setShowContent] = useState(!transitionFromLanding);
  const [navbarVisible, setNavbarVisible] = useState(!transitionFromLanding);

  useEffect(() => {
    if (transitionFromLanding) {
      setTimeout(() => setNavbarVisible(true), 600); // navbar rolls in first
      setTimeout(() => setShowContent(true), 1000); // then content fades in
    }
  }, [transitionFromLanding]);

  return (
    <PageWrapper fromLanding={transitionFromLanding}>
      <div className="developer-page">
        {navbarVisible && <Navbar animated={transitionFromLanding} />}

        {showContent && (
          <>
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
                  <p>
                    Relaxing visuals + accessible layout for a local therapist
                  </p>
                </div>
                <div className="project-card">
                  <h3>React Quiz App</h3>
                  <p>A playful minimalist UI to test digital habits</p>
                </div>
                <div className="project-card">
                  <h3>Responsive Gallery</h3>
                  <p>
                    Showcase of adaptive grid systems and smooth transitions
                  </p>
                </div>
              </div>
            </section>

            <section className="case-study-cta">
              <p>Want the full process behind each build?</p>
              <button>Explore Case Studies</button>
            </section>
          </>
        )}
      </div>
    </PageWrapper>
  );
};

export default Developer;
