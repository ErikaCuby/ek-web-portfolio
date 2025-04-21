import React from "react";

const About = () => {
  return (
    <div className="page-container">
      <section className="section-hero">
        <h1 className="page-title">About Me</h1>
        <p className="section-text">
          Hi! I’m Erika — a front-end developer with a background in visual arts
          and illustration. I blend clean code with creative design to build
          experiences that look good and feel even better.
        </p>
      </section>

      <section className="section">
        <h2 className="section-heading">What I love doing</h2>
        <ul className="section-list">
          <li>Building responsive, user-friendly web interfaces</li>
          <li>Creating illustrations and digital visuals</li>
          <li>Mixing logic with storytelling</li>
          <li>Sipping cappuccinos while pushing pixels</li>
        </ul>
      </section>

      <section className="section">
        <p className="section-text">
          Whether it’s designing a smooth UI or illustrating a whimsical world,
          I bring empathy, curiosity, and attention to detail into every
          project.
        </p>
      </section>
    </div>
  );
};

export default About;
