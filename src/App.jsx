import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import confetti from 'canvas-confetti';
// import  DraggableCard from './pages/DraggableCardDemo';
import Navbar from './components/home/Navbar';
import Home from './components/home/Home';
import Meme from './components/home/meme';
import FoodCul from './components/home/FoodCul';
import Contact from "./components/contact/Contact";
import OurCul from './components/home/OurCul';
import WWR from "./components/about/WWR";
import WWD from "./components/about/WWD";
import WCU from "./components/about/WCU";
import NotedVibe from "./components/about/NotedVibe";
import JoinUs from "./components/about/JoinUs";
import Achievement from './components/awards/Achievement';
import Service from './components/services/Service';
import OurClients from './components/OurClients/OurClients';
import Courses from './components/courses/course';
// import DarkModeToggle from './components/ui/DarkModeToggle'; 

function App() {
  // canvas confetti animation
  useEffect(() => {
    // Fire fullscreen confetti animation every time the app loads
    confetti({
      particleCount: 300,
      spread: 180,
      origin: { y: 0.5 },
    });

    // Optional: burst effect loop
    const duration = 2 * 2000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > animationEnd) {
        clearInterval(interval);
      }

      confetti({
        particleCount: 50,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2
        }
      });
    }, 250);
  }, []);

  return (

    <Router>
                {/* <DarkModeToggle /> */}
      <Routes>
        {/* <Route path='/card' element={<DraggableCard/>}/> */}

        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Meme" element={<Meme />} />
        <Route path="/Food" element={<FoodCul />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/OurCul" element={<OurCul />} />
        <Route path="/who-we-are" element={<WWR />} />
        <Route path="/what-we-do" element={<WWD />} />
        <Route path="/why-choose-us" element={<WCU />} />
        <Route path="/noted-vibe" element={<NotedVibe />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/awards" element={<Achievement />} />
        <Route path="/services" element={<Service />} />
        <Route path="/our-clients" element={<OurClients />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      
      {/* <Footer/> */}
    </Router>
  );
}

export default App;