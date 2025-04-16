import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ animated }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isDeveloperSection = location.pathname.includes("developer");
  const currentSection = isDeveloperSection ? "developer" : "illustration";
  const oppositeSection = isDeveloperSection ? "illustration" : "developer";

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${animated ? "animated" : ""}`}>
      <div className="navbar-left">
        <Link to="/" className="logo" onClick={closeMenu}>
          Erika Cuby
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`navbar-right ${isMobileMenuOpen ? "open" : ""}`}>
        <Link
          to={`/${currentSection}`}
          className="nav-link"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link to="/about" className="nav-link" onClick={closeMenu}>
          About Me
        </Link>
        <Link to="/contact" className="nav-link" onClick={closeMenu}>
          Contact
        </Link>
        <Link
          to={`/${oppositeSection}`}
          className="nav-link"
          onClick={closeMenu}
        >
          {oppositeSection.charAt(0).toUpperCase() + oppositeSection.slice(1)}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
