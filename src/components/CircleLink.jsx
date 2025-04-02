import React from "react";
import "./CircleLink.css";

const CircleLink = ({ label, color, onClick, animationClass }) => {
  return (
    <div
      className={`circle-link ${animationClass || ""}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <span>{label}</span>
    </div>
  );
};

export default CircleLink;
