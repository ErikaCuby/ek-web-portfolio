import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CircleLink from "../components/CircleLink";
import "./Landing.css";

const Landing = () => {
  const [clicked, setClicked] = useState(null);
  const navigate = useNavigate();

  const handleClick = (type) => {
    setClicked(type);

    setTimeout(() => {
      navigate(`/${type}`);
    }, 1200); // match duration of animation
  };

  return (
    <div className={`landing-container ${clicked ? "fadeout" : ""}`}>
      <CircleLink
        label="Code"
        color="var(--accent-color-code)"
        onClick={() => handleClick("developer")}
        animationClass={
          clicked === "developer" ? "expand-explode" : clicked ? "collapse" : ""
        }
      />
      <CircleLink
        label="Art"
        color="var(--accent-color-art)"
        onClick={() => handleClick("illustration")}
        animationClass={
          clicked === "illustration"
            ? "expand-explode"
            : clicked
            ? "collapse"
            : ""
        }
      />
    </div>
  );
};

export default Landing;
