import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "./pages/Landing";
import About from "./pages/About";

import Developer from "./pages/Developer";
import DeveloperCaseStudy from "./pages/DeveloperCaseStudy";
import Illustration from "./pages/Illustration";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";


function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <AnimatePresence mode="wait">
      <PageWrapper key={location.pathname}>
        <>
          {/* Render Navbar on all pages except the landing page */}
          {!isLandingPage && <Navbar />}

          <Routes location={location}>
            <Route path="/" element={<Landing />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/developer/:slug" element={<DeveloperCaseStudy />} />
            <Route path="/illustration" element={<Illustration />} />
            <Route path="/about" element={<About />} />
          </Routes>

          {/* Render Footer on all pages except the landing page */}
          {!isLandingPage && <Footer />}
        </>
      </PageWrapper>
    </AnimatePresence>
  );
}

export default App;
// This is the main App component that sets up routing and page transitions using React Router and Framer Motion. It conditionally renders the Navbar and Footer based on the current route.