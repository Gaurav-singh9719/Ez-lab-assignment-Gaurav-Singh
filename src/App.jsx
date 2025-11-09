import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import FilmProduction from "./pages/FilmProduction";
import Branding from "./pages/Branding";
import ArtCuration from "./pages/ArtCuration";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

// Styles
import "./styles/globals.css";
import "./styles/typography.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        {/* Added top padding to avoid content hiding behind fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/film-production" element={<FilmProduction />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/art-curation" element={<ArtCuration />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/varnan" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
