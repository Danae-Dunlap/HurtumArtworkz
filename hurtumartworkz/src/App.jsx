import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Index';
import Services from './pages/Services';
import About from './pages/About.jsx';
import Gallery from './pages/services/Gallery.jsx';
import Merch from './pages/services/Merch.jsx'; 
import Party from './pages/services/Party.jsx'; 
import Murals from './pages/services/Murals.jsx';
import './index.css'; 

const App = () => {
  return (

        <Router>
      <Navbar/>
        <Routes>
          <Route exact path="" element={<Home />} />
          <Route exact path="services" element={<Services />} />
          <Route exact path="about" element={<About/>}/>
          <Route exact path="gallery" element={<Gallery/>} />
          <Route exact path="merch" element={<Merch/>} />
          <Route exact path="party" element={<Party/>} />
          <Route exact path="murals" element={<Murals/>} />
        </Routes>
        </Router>
  ); 
}

export default App