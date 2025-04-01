// Landing page of the app
// This page contains two circle links that navigate to the developer and illustration pages when clicked.

import React from "react";
import { useNavigate } from "react-router-dom";
import CircleLink from "../components/CircleLink";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  const handleCodeClick = () => {
    navigate("/developer");
  };

  const handleArtClick = () => {
    navigate("/illustration");
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
