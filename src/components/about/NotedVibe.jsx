import React, { useState, useEffect } from 'react';
import { Check, Sparkles, TrendingUp, Heart, Users } from 'lucide-react';
import Navbar from '../home/Navbar';
import Footer from '../footer/Footer';


const NotedVibeComponent = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [celebrationActive, setCelebrationActive] = useState(false);
  const [activeStickers, setActiveStickers] = useState([]);

  const vibeItems = [
    {
      id: 1,
      text: "We laugh loud.",
      icon: <Sparkles className="w-5 h-5" />,
      color: "#f59e0b",
      delay: 0,
      stickers: ['😂', '🤣', '😄', '😆', '🎭']
    },
    {
      id: 2,
      text: "We fail fast and bounce back faster.",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "#8b5cf6",
      delay: 200,
      stickers: ['💪', '🚀', '⚡', '🔥', '💫']
    },
    {
      id: 3,
      text: "We throw spontaneous celebrations when a reel hits 1M views.",
      icon: <Users className="w-5 h-5" />,
      color: "#f59e0b",
      delay: 400,
      stickers: ['🎉', '🎊', '🥳', '🍾', '✨', '🎆', '🌟', '💥']
    },
    {
      id: 4,
      text: "And we genuinely love what we do.",
      icon: <Heart className="w-5 h-5" />,
      color: "#8b5cf6",
      delay: 600,
      stickers: ['❤️', '💖', '😍', '🥰', '💝']
    }
  ];

  useEffect(() => {
    vibeItems.forEach((item, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, item.id]);
      }, item.delay);
    });
  }, []);

  const handleCelebration = () => {
    setCelebrationActive(true);
    setTimeout(() => setCelebrationActive(false), 2000);
  };

  const handleVibeClick = (itemId, stickers) => {
    // Clear existing stickers
    setActiveStickers([]);
    
    // Add new stickers with random positions and animations
    const newStickers = stickers.map((sticker, index) => ({
      id: `${itemId}-${index}-${Date.now()}`,
      emoji: sticker,
      x: Math.random() * 80 + 10, // 10% to 90% from left
      y: Math.random() * 60 + 20, // 20% to 80% from top
      rotation: Math.random() * 360,
      scale: 0.8 + Math.random() * 0.4, // 0.8 to 1.2
      delay: index * 100
    }));

    setActiveStickers(newStickers);
    
    // Remove stickers after animation
    setTimeout(() => {
      setActiveStickers([]);
    }, 3000);

    // Also trigger celebration for item 3
    if (itemId === 3) {
      setCelebrationActive(true);
      setTimeout(() => setCelebrationActive(false), 2000);
    }
  };

  return (
     <div className='relative'>
            {/* Navbar Fixed at Top */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                <Navbar />
            </div>
    <div className="max-w-4xl mx-auto p-8 relative overflow-hidden mt-20">
      {/* Floating particles animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-20 animate-bounce"
            style={{
              backgroundColor: i % 2 === 0 ? '#f59e0b' : '#8b5cf6',
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Dynamic Stickers Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {activeStickers.map((sticker) => (
          <div
            key={sticker.id}
            className="absolute text-4xl animate-bounce"
            style={{
              left: `${sticker.x}%`,
              top: `${sticker.y}%`,
              transform: `rotate(${sticker.rotation}deg) scale(${sticker.scale})`,
              animationDelay: `${sticker.delay}ms`,
              animationDuration: '1s',
              animationIterationCount: '3'
            }}
          >
            <div className="animate-pulse">
              {sticker.emoji}
            </div>
          </div>
        ))}
      </div>

      {/* Main Title */}
      <div className="text-center mb-12 relative">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 via-purple-500 to-gray-700 bg-clip-text text-transparent animate-pulse">
          The Noted Vibe
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-purple-500 mx-auto rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_0.5s_forwards]" />
      </div>

      {/* Vibe Items Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {vibeItems.map((item, index) => (
          <div
            key={item.id}
            className={`group relative p-6 rounded-2xl border-2 border-gray-200 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer ${
              visibleItems.includes(item.id) 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
            style={{
              transitionDelay: `${item.delay}ms`,
              boxShadow: visibleItems.includes(item.id) ? `0 10px 30px -10px ${item.color}40` : 'none'
            }}
            onClick={() => handleVibeClick(item.id, item.stickers)}
          >
            {/* Hover gradient overlay */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              style={{ background: `linear-gradient(135deg, ${item.color}, transparent)` }}
            />
            
            {/* Content */}
            <div className="relative z-10 flex items-start space-x-4">
              {/* Animated Checkmark */}
              <div className="flex-shrink-0 relative">
                <div 
                  className="w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    borderColor: item.color,
                    backgroundColor: visibleItems.includes(item.id) ? item.color : 'transparent'
                  }}
                >
                  <Check 
                    className={`w-4 h-4 text-white transition-all duration-500 ${
                      visibleItems.includes(item.id) ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`}
                  />
                </div>
                
                {/* Pulse ring animation */}
                <div 
                  className="absolute inset-0 rounded-lg border-2 animate-ping opacity-20"
                  style={{ borderColor: item.color }}
                />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {item.text}
                </p>
                
                {/* Icon appears on hover */}
                <div 
                  className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </div>
              </div>
            </div>

            {/* Special celebration effect for item 3 */}
            {item.id === 3 && celebrationActive && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-6xl animate-bounce">🎉</div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-purple-500 opacity-20 rounded-2xl animate-pulse" />
              </div>
            )}

            {/* Click hint */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full">
                Click me! ✨
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Stats Cards */}
      <div className="grid grid-cols-3 gap-4 mt-12">
        {[
          { label: "Laughs", value: "∞", color: "#f59e0b" },
          { label: "Comebacks", value: "Fast", color: "#8b5cf6" },
          { label: "Love", value: "100%", color: "#374151" }
        ].map((stat, index) => (
          <div
            key={stat.label}
            className="group p-4 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            style={{
              animationDelay: `${800 + index * 100}ms`
            }}
          >
            <div 
              className="text-3xl font-bold mb-2 transition-all duration-300 group-hover:scale-110"
              style={{ color: stat.color }}
            >
              {stat.value}
            </div>
            <div className="text-gray-600 text-sm uppercase tracking-wide">
              {stat.label}
            </div>
            <div 
              className="w-0 group-hover:w-full h-0.5 mx-auto mt-2 transition-all duration-300 rounded"
              style={{ backgroundColor: stat.color }}
            />
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <button
          onClick={handleCelebration}
          className="group relative px-8 py-4 rounded-full border-2 border-purple-500 text-purple-500 font-semibold overflow-hidden transition-all duration-300 hover:text-white hover:scale-105 hover:shadow-xl"
        >
          <span className="relative z-10">Join Our Vibe</span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          
          {/* Sparkles on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {[...Array(3)].map((_, i) => (
              <Sparkles
                key={i}
                className="absolute w-4 h-4 text-white animate-pulse"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${20 + i * 20}%`,
                  animationDelay: `${i * 200}ms`
                }}
              />
            ))}
          </div>
        </button>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default NotedVibeComponent;