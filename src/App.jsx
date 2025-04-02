import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "./pages/Landing";
import Developer from "./pages/Developer";
import Illustration from "./pages/Illustration";
import usePreviousLocation from "./hooks/usePreviousLocation";

function App() {
  const location = useLocation();
  const prevLocation = usePreviousLocation(location.pathname);

  const isLandingToSection =
    prevLocation === "/" &&
    (location.pathname === "/developer" ||
      location.pathname === "/illustration");

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route
          path="/developer"
          element={<Developer transitionFromLanding={isLandingToSection} />}
        />
        <Route
          path="/illustration"
          element={<Illustration transitionFromLanding={isLandingToSection} />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
