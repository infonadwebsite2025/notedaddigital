import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import confetti from 'canvas-confetti';
import  OurTeam from './pages/OurTeam';
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
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react'; // ✅ Import the component
// import DarkModeToggle from './components/ui/DarkModeToggle'; 
import ScrollToTop from '../src/components/ScrollToTop/ScrollToTop';  // ✅ import

function App() {
  // canvas confetti animation
const canvasRef = useRef(null);

  useEffect(() => {
    const myConfetti = confetti.create(canvasRef.current, {
      resize: true,
      useWorker: true,
    });

    myConfetti({
      particleCount: 200,
      spread: 180,
      origin: { y: 0.5 },
    });

    const duration = 2000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > animationEnd) {
        clearInterval(interval);
      }

      myConfetti({
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
    <>
      {/* Fixed confetti canvas */}
      <canvas
        ref={canvasRef}
        id="confetti-canvas"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />

    <Router>
      <ScrollToTop />
          <Toaster position="top-center" reverseOrder={false} />
                {/* <DarkModeToggle /> */}
      <Routes>
        <Route path='/our-team' element={<OurTeam/>}/> 

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
          <Analytics />

    </>
  );
}

export default App;