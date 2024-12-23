import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Development from "./pages/Development";
import Consulting from "./pages/Consulting";

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="development" element={<Development />} />
        <Route path="consulting" element={<Consulting />} />
      </Routes>

    </>
  );
}

export default App;
