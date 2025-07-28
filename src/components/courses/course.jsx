import React, { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
// import SkillsSection from './SkillsSection';
// import TrainingProgramsSection from './TrainingProgramsSection';
import FeaturesSection from './FeaturesSection';
import AudienceSection from './AudienceSection';
import CTASection from './CTASection';
import { useScrollAnimation } from './AnimationUtils';
import SkillsAndTrainingSection from './SkillsAndTrainingSection';
import Navbar from '../home/Navbar';
import Footer from "../footer/Footer"

const Course = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Initialize scroll animations
  useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Global animation styles */}
      <style jsx global>{`
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

        @keyframes pulse-glow {
    0%, 100% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
            transform: scale(1);
    }
    50% {
            box-shadow: 0 0 40px rgba(139, 92, 246, 0.6);
            transform: scale(1.05);
          }
        }
        
        @keyframes slide-in-left {
    from {
        opacity: 0;
            transform: translateX(-100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

        @keyframes slide-in-right {
    from {
        opacity: 0;
            transform: translateX(100px);
    }
    to {
        opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-up {
    from {
        opacity: 0;
            transform: translateY(30px);
    }
    to {
        opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #374151 0%, #f59e0b 30%, #8b5cf6 70%, #374151 100%);
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
          background-clip: text;
}

        @keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

        .floating-particles {
    position: absolute;
    width: 100%;
    height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
        
        .particle {
            position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(139, 92, 246, 0.3);
            border-radius: 50%;
          animation: float-particle 6s ease-in-out infinite;
        }
        
        @keyframes float-particle {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          50% { 
            transform: translateY(-100px) translateX(20px);
            opacity: 1;
          }
        }
      `}</style>

      <Navbar/>
      {/* Render all sections */}
      <HeroSection />
      {/* <SkillsSection /> */}
      {/* <TrainingProgramsSection /> */}
      <SkillsAndTrainingSection/>
      <FeaturesSection />
      <AudienceSection />
      <Footer/>
    </div>
  );
};

export default Course;