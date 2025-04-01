import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isDeveloper = location.pathname.includes("developer");
  const currentSection = isDeveloper ? "developer" : "illustration";
  const oppositeSection = isDeveloper ? "illustration" : "developer";

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          Erika Cuby
        </Link>
      </div>

      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
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
          className="circle-switch"
          onClick={closeMenu}
        >
          {oppositeSection === "developer" ? "💻" : "🎨"}
        </Link>
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
};

export default Navbar;
