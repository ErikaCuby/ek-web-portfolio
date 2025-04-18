import React from "react";
import "./Contact.css"; // only for minimal custom styles, layout is shared via index.css

const Contact = () => {
  return (
    <div className="page-container contact-page">
      <section className="section-hero">
        <h1 className="page-title">Contact Me</h1>
        <p className="section-text">
          Let’s build something beautiful together — whether it’s code, visuals,
          or a bit of both.
        </p>
      </section>

      <section className="section">
        <h2 className="section-heading">Reach Out</h2>
        <p className="section-text">
          You can find me on LinkedIn, GitHub, or shoot me an email directly. I
          love connecting with creative people and passionate developers!
        </p>
        <ul className="contact-links">
          <li>
            <a href="mailto:you@example.com">📧 you@example.com</a>
          </li>
          <li>
            <a href="https://github.com/ErikaCuby" target="_blank">
              🐱 GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/erikacuby" target="_blank">
              🔗 LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
