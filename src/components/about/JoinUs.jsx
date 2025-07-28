import React, { useState, useEffect } from 'react';
import { Sparkles, Lightbulb, Heart, Users, ArrowRight, Star } from 'lucide-react';
import Navbar from '../home/Navbar';
// import Footer from '../footer/Footer';


const VibeComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Generate floating particles
    const newParticles = [];
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2
      });
    }
    setParticles(newParticles);
  }, []);

  const vibeCards = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Weird Ideas",
      description: "Those crazy thoughts that might just change everything",
      color: "#f59e0b"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Wild Moments",
      description: "Spontaneous adventures and unexpected discoveries",
      color: "#8b5cf6"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "What If",
      description: "Endless possibilities waiting to be explored",
      color: "#f59e0b"
    }
  ];

  return (
    <div className='relative'>
                {/* Navbar Fixed at Top */}
                <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                    <Navbar />
                </div>
    <div className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden mt-25">  
      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.id % 2 === 0 ? '#f59e0b' : '#8b5cf6',
            animation: `float ${particle.duration}s ease-in-out infinite ${particle.delay}s`
          }}
        />
      ))}

      {/* Main Container */}
      <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* Header Section */}
        <div className="mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-2 border-purple-400 opacity-20 animate-pulse"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 relative z-10">
            <span className="bg-gradient-to-r from-amber-500 via-purple-500 to-amber-500 bg-clip-text text-transparent animate-pulse">
              Wanna Be Part of This Vibe?
            </span>
          </h1>
          
          <div className="flex justify-center mb-8">
            <Users className="w-12 h-12 text-gray-600 animate-bounce" />
          </div>
        </div>

        {/* Description */}
        <div className="mb-12 relative">
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Pull up a seat. Bring your{' '}
            <span className="text-purple-500 font-semibold hover:text-amber-500 transition-colors duration-300 cursor-pointer">
              weird
            </span>
            , your{' '}
            <span className="text-amber-500 font-semibold hover:text-purple-500 transition-colors duration-300 cursor-pointer">
              wild ideas
            </span>
            , your{' '}
            <span className="text-gray-700 font-semibold hover:text-amber-500 transition-colors duration-300 cursor-pointer">
              "what if"
            </span>{' '}
            moments. At{' '}
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-amber-500 bg-clip-text text-transparent">
              Noted
            </span>
            , we make room for them all.
          </p>
        </div>

        {/* Interactive Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {vibeCards.map((card, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border-2 border-gray-200 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                activeCard === index ? 'scale-105 shadow-2xl' : ''
              }`}
              style={{
                borderColor: activeCard === index ? card.color : '#e5e7eb',
                boxShadow: activeCard === index ? `0 20px 40px ${card.color}20` : ''
              }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card Background Glow */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ backgroundColor: card.color }}
              />
              
              {/* Icon */}
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ 
                  backgroundColor: `${card.color}20`,
                  color: card.color 
                }}
              >
                {card.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {card.description}
              </p>
              
              {/* Hover Arrow */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <ArrowRight className="w-5 h-5" style={{ color: card.color }} />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="relative">
          <button className="group relative px-12 py-4 text-xl font-semibold text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl transform">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-amber-500 to-purple-500 bg-size-200 animate-gradient"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-amber-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-3">
              Join the Vibe
              <Star className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </button>
          
          {/* Button Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${30 + (i % 2) * 40}%`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .bg-size-200 {
          background-size: 200% 200%;
        }
      `}</style>
    </div>
    {/* <Footer/> */}
    </div>
  );
};

export default VibeComponent;