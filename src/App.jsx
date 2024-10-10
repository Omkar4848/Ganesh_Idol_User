import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Aboutus from "./components/aboutus/Aboutus";
import Gallery from "./components/gallery/Gallery";
import Contactus from "./components/Contactus/Contactus";
import Signup from "./components/Signup/Signup";

import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
