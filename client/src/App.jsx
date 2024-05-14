import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import AdmissionRequirements from "./pages/AdmissionRequirements.jsx";
import Scholarship from "./pages/Scholarship.jsx";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/admission-requirements" element={<AdmissionRequirements />} />
      <Route path="/scholarship" element={<Scholarship />} />
    </Routes>
  </BrowserRouter>
}

export default App
