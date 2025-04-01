import React from "react";
import CircleLink from "../components/CircleLink";
import "./Landing.css"; // Assuming you have a CSS file for styles

const Landing = () => {
  const handleCodeClick = () => {
    alert("Go to Developer Portfolio");
  };

  const handleArtClick = () => {
    alert("Go to Illustration Portfolio");
  };

  return (
    <div className="landing-container">
      <CircleLink
        label="Code"
        color="var(--accent-color-code)"
        onClick={handleCodeClick}
      />
      <CircleLink
        label="Art"
        color="var(--accent-color-art)"
        onClick={handleArtClick}
      />
    </div>
  );
};

export default Landing;
