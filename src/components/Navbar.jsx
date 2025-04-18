import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ animated }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Used to style active links manually
  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${animated ? "animated" : ""}`}>
      <div className="navbar-left">
        <Link to="/" className="logo" onClick={closeMenu}>
          Erika Cuby
        </Link>
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
        <Link
          to="/about"
          className={`nav-link ${isActive("/about") ? "active" : ""}`}
          onClick={closeMenu}
        >
          About Me
        </Link>
        <Link
          to="/contact"
          className={`nav-link ${isActive("/contact") ? "active" : ""}`}
          onClick={closeMenu}
        >
          Contact
        </Link>
        <Link
          to="/developer"
          className={`nav-link ${
            location.pathname.includes("developer") ? "active" : ""
          }`}
          onClick={closeMenu}
        >
          Developer
        </Link>
        <Link
          to="/illustration"
          className={`nav-link ${
            location.pathname.includes("illustration") ? "active" : ""
          }`}
          onClick={closeMenu}
        >
          Illustration
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
