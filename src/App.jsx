import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "./pages/Landing";
import Developer from "./pages/Developer";
import Illustration from "./pages/Illustration";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <AnimatePresence mode="wait">
      <PageWrapper key={location.pathname}>
        <>
          <Routes location={location}>
            <Route path="/" element={<Landing />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/illustration" element={<Illustration />} />
          </Routes>

          {!isLandingPage && <Footer />}
        </>
      </PageWrapper>
    </AnimatePresence>
  );
}

export default App;
