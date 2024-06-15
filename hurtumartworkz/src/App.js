import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/';
import Services from './pages/services';
import About from './pages/about';

const App = () => {
  return (

        <Router>
      <Navbar/>
        <Routes>
          <Route exact path="" element={<Home />} />
          <Route exact path="services" element={<Services />} />
          <Route exact path="about" element={<About/>}/>
    
        </Routes>
        </Router>
  ); 
}

export default App