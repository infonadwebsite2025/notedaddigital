import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/home/Navbar';
// import  DraggableCard from './pages/DraggableCardDemo';
import Home from './components/home/Home';
import Eg from "./components/eg";
import Meme from "./components/home/meme"
import FoodCul from './components/home/FoodCul';
import Contact from "./components/contact/Contact"
import OurCul from './components/home/OurCul';
// import AboutUs from './components/about/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/home" element={<Home />} />

        {/* <Route path='/card' element={<DraggableCard/>}/> */}
        <Route path="/Eg" element={<Eg />} />
        <Route path="/Meme" element={<Meme />} />
        <Route path="/Food" element={<FoodCul />} />
        <Route path="/Contact" element={<Contact />} />

        <Route path="/OurCul" element={<OurCul />} />

      </Routes>
    </Router>
  );
}

export default App;