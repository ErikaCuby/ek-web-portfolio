import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ animated }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setIsMobileMenuOpen(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const isActive = (path) => location.pathname === path;

  const handleScrollNav = (sectionId) => {
    if (location.pathname !== "/about") {
      navigate(`/about#${sectionId}`);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        const offset = -80;
        const elementPosition =
          el.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: elementPosition, behavior: "smooth" });
      }
    }
    closeMenu();
  };

  return (
    <nav className={`navbar ${animated ? "animated" : ""}`}>
      <div className="navbar-left">
        <span
          className="logo"
          onClick={() => {
            navigate("/");
            closeMenu();
          }}
        >
          Erika Cuby
        </span>
      </div>

      <div
        className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        {/* these 3 spans are used to create the hamburger icon animation to X */}
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navbar-right ${isMobileMenuOpen ? "open" : ""}`}>
        <span
          className={`nav-link ${
            location.pathname === "/about" ? "active" : ""
          }`}
          onClick={() => handleScrollNav("intro")}
        >
          About Me
        </span>
        <span
          className={`nav-link ${
            location.pathname === "/about" && location.hash === "#contact"
              ? "active"
              : ""
          }`}
          onClick={() => handleScrollNav("contact")}
        >
          Contact
        </span>
        <span
          className={`nav-link ${
            location.pathname.includes("developer") ? "active" : ""
          }`}
          onClick={() => {
            navigate("/developer");
            closeMenu();
          }}
        >
          Developer
        </span>
        <span
          className={`nav-link ${
            location.pathname.includes("illustration") ? "active" : ""
          }`}
          onClick={() => {
            navigate("/illustration");
            closeMenu();
          }}
        >
          Illustration
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
