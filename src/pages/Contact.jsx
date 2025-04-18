import React from "react";

const Contact = () => {
  return (
    <div className="page-container">
      <section className="section-hero">
        <h1 className="page-title">Contact Me</h1>
        <p className="section-text">
          Let’s build something beautiful together — whether it’s code, visuals,
          or a bit of both.
        </p>
      </section>

      <section className="section">
        <h2 className="section-heading">Reach Out</h2>
        <ul className="section-list">
          <li>
            📧 <a href="mailto:you@example.com">you@example.com</a>
          </li>
          <li>
            🐱{" "}
            <a href="https://github.com/ErikaCuby" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            🔗{" "}
            <a href="https://www.linkedin.com/in/erikacuby" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
