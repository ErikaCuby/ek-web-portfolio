import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Developer from "./pages/Developer";
import Illustration from "./pages/Illustration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/developer" element={<Developer />} />
      <Route path="/illustration" element={<Illustration />} />
    </Routes>
  );
}

export default App;
