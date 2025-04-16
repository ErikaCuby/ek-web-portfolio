import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "./pages/Landing";
import Developer from "./pages/Developer";
import Illustration from "./pages/Illustration";
import usePreviousLocation from "./hooks/usePreviousLocation";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const prevLocation = usePreviousLocation(location.pathname);

  const isLandingToSection =
    prevLocation === "/" &&
    (location.pathname === "/developer" ||
      location.pathname === "/illustration");

  const isLandingPage = location.pathname === "/"; // Add this line

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route
            path="/developer"
            element={<Developer transitionFromLanding={isLandingToSection} />}
          />
          <Route
            path="/illustration"
            element={
              <Illustration transitionFromLanding={isLandingToSection} />
            }
          />
        </Routes>
      </AnimatePresence>

      {/* Show footer everywhere except the landing page */}
      {!isLandingPage && <Footer />}
    </>
  );
}

export default App;
