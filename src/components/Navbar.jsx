import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ animated = false }) => {
  const location = useLocation();
  const isDeveloper = location.pathname.includes("developer");
  const currentSection = isDeveloper ? "developer" : "illustration";
  const oppositeSection = isDeveloper ? "illustration" : "developer";

  const MotionTag = animated ? motion.nav : "nav";

  return (
    <MotionTag
      className="navbar"
      {...(animated && {
        initial: { x: "-100%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { duration: 0.7, ease: [0.15, 0.85, 0.45, 1] },
      })}
    >
      <div className="navbar-left">
        <Link to="/" className="logo">
          Erika.dev
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
    </MotionTag>
  );
};

export default Navbar;
