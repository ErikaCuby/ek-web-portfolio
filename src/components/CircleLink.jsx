// Designed circle link component presented for the Landing page of the app

import React from "react";
import "./CircleLink.css";

const CircleLink = ({ label, color, onClick }) => {
  return (
    <div
      className="circle-link"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <span>{label}</span>
    </div>
  );
};

export default CircleLink;
