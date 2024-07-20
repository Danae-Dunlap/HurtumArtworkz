import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/';
import Services from './pages/services';
import About from './pages/about';
import Gallery from './pages/services/gallery';
import Merch from './pages/services/merch'; 
import Party from './pages/services/party'; 
import Murals from './pages/services/murals';

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