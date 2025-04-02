import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "./pages/Landing";
import Developer from "./pages/Developer";
import Illustration from "./pages/Illustration";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/illustration" element={<Illustration />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
