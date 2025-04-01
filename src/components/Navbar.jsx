import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isDeveloper = location.pathname.includes("developer");
  const currentSection = isDeveloper ? "developer" : "illustration";
  const oppositeSection = isDeveloper ? "illustration" : "developer";

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          Erika Cuby
        </Link>
      </div>

      <div className="navbar-right">
        <Link to={`/${currentSection}`} className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About Me
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>

        <Link to={`/${oppositeSection}`} className="circle-switch">
          {oppositeSection === "developer" ? "💻" : "🎨"}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
