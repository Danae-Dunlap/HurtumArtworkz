import './index.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/';
import Services from './pages/services';
import About from './pages/about';
import Menu from './components/Navbar/Menu';
import { useState } from 'react';

function App() {

  const[clicked,isClicked] = useState(false)
  return (

    <Router>
  <Navbar clicked={clicked} isClicked={isClicked}/>
  {clicked?<Menu/>:null}
    <Routes>
      <Route exact path="" element={<Home />} />
      <Route exact path="services" element={<Services />} />
      <Route exact path="about" element={<About/>}/>

    </Routes>
    </Router>

  );
}

export default App;