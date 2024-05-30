import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/about.js";
import Home from "./pages";
import Service from "./pages/services"; 


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="./pages/" element={<Home />}/>
            <Route path="./pages/about" element={<About />}/>
            <Route path="./pages/services" element={<Service />}/>
          </Routes>
        </Router>
      </header>

        <Footer />

    </div>
  );
}

export default App;