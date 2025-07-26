import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/home/Navbar';
// import  DraggableCard from './pages/DraggableCardDemo';
import Home from './components/home/Home';
// import Eg from "./components/eg";
import Meme from "./components/home/meme"
import FoodCul from './components/home/FoodCul';
import Contact from "./components/contact/Contact"
import OurCul from './components/home/OurCul';
import WWR from "./components/about/WWR";
import WWD from "./components/about/WWD"
import WCU from "./components/about/WCU"
import NotedVibe from "./components/about/NotedVibe"
import JoinUs from "./components/about/JoinUs"
import Achievement from './components/awards/Achievement';
import Service from './components/services/Service';
import OurClients from './components/OurClients/OurClients';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/navbar" element={<Navbar />} />
        <Route path="/home" element={<Home />} />

        {/* <Route path='/card' element={<DraggableCard/>}/> */}
        <Route path="/Meme" element={<Meme />} />
        <Route path="/Food" element={<FoodCul />} />
        <Route path="/Contact" element={<Contact />} />

        <Route path="/OurCul" element={<OurCul />} />

        <Route path='/who-we-are' element={<WWR />} />
        <Route path='/what-we-do' element={<WWD />} />
        <Route path='/why-choose-us' element={<WCU />} />
        <Route path='/noted-vibe' element={<NotedVibe />} />
        <Route path='/join-us' element={<JoinUs />} />
        <Route path='/awards' element={<Achievement />} />
        <Route path='/services' element={<Service />} />
        <Route path='/our-clients' element={<OurClients />} />
                
      </Routes>
    </Router>
  );
}

export default App;