import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
//import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/about.js";
import Home from "./pages/index.js";
import Service from "./pages/services.js"; 


function App() {

  return (
      <Router>
          <Navbar />
          <Routes>
            <Route exact path="/index" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
          </Routes>
      </Router>
  
      //<Footer />
  );
};

export default App;