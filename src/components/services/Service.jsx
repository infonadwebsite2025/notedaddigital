import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Zap, Search, Smartphone, Users, TrendingUp, Palette, Video, Mic, ShoppingCart, Radio, Printer, Globe, Play, Pause, Sparkles } from 'lucide-react';
import Navbar from '../home/Navbar';
const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Digital Marketing",
      description: "We don't just market — we make your brand magnetic. Targeted, tailored, turbo-charged.",
      icon: Zap,
      accentColor: "#f59e0b"
    },
    {
      id: 2,
      title: "SEO (Search Engine Optimization)",
      description: "We speak fluent Google. Climb rankings, crush keywords, conquer SERPs.",
      icon: Search,
      accentColor: "#8b5cf6"
    },
    {
      id: 3,
      title: "App & Software Development",
      description: "Ideas into apps. Concepts into code. We build smooth, sleek, scalable tech magic.",
      icon: Smartphone,
      accentColor: "#374151"
    },
    {
      id: 4,
      title: "Social Media Marketing",
      description: "Memes, reels, and algorithms — we master them all to make your brand the talk of every timeline.",
      icon: Users,
      accentColor: "#f59e0b"
    },
    {
      id: 5,
      title: "Influencer Marketing",
      description: "From micro to mega — we link you with voices that actually influence.",
      icon: TrendingUp,
      accentColor: "#8b5cf6"
    },
    {
      id: 6,
      title: "Content Marketing",
      description: "Words that work, visuals that wow. Blogs, captions, and everything in between.",
      icon: Palette,
      accentColor: "#374151"
    },
    {
      id: 7,
      title: "Video Editing",
      description: "Snappy edits, cinematic vibes, viral-worthy cuts. Let your content roll in style.",
      icon: Video,
      accentColor: "#f59e0b"
    },
    {
      id: 8,
      title: "Podcast Marketing",
      description: "Have a voice? Let's amplify it. From strategy to distribution — we've got your audio empire covered.",
      icon: Mic,
      accentColor: "#8b5cf6"
    },
    {
      id: 9,
      title: "E-commerce Marketing",
      description: "Clicks to carts, carts to conversions. We optimize every digital shelf.",
      icon: ShoppingCart,
      accentColor: "#374151"
    },
    {
      id: 10,
      title: "Radio Advertising",
      description: "Old-school charm, new-age targeting. Radio still rocks, and we know how to use it.",
      icon: Radio,
      accentColor: "#f59e0b"
    },
    {
      id: 11,
      title: "Print Media Advertising",
      description: "Offline isn't outdated. Smart print campaigns that complement your digital game.",
      icon: Printer,
      accentColor: "#8b5cf6"
    },
    {
      id: 12,
      title: "Website Design & Development",
      description: "Clean code, cooler designs. Your online HQ, custom-built for performance.",
      icon: Globe,
      accentColor: "#374151"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 4000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAutoPlay, currentIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  // Get visible services with current service in center
  const getVisibleServices = () => {
    const result = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + services.length) % services.length;
      result.push({ ...services[index], position: i + 1 });
    }
    return result;
  };

  const visibleServices = getVisibleServices();

  return (
    <div className="w-full py-20 px-4 relative overflow-x-hidden">
      <Navbar />
      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 opacity-5 animate-spin-slow" style={{ color: '#f59e0b' }}>
          <Sparkles className="w-full h-full" />
        </div>
        <div className="absolute bottom-20 right-10 w-24 h-24 opacity-5 animate-bounce" style={{ color: '#8b5cf6' }}>
          <Sparkles className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-4 w-20 h-20 opacity-5 animate-pulse" style={{ color: '#374151' }}>
          <Sparkles className="w-full h-full" />
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-20 mt-10">
        <div className="inline-flex items-center justify-center space-x-4 mb-8">
          <div className="w-16 h-1 rounded-full" style={{ backgroundColor: '#f59e0b' }}></div>
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#8b5cf6' }}></div>
          <div className="w-16 h-1 rounded-full" style={{ backgroundColor: '#374151' }}></div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          <span style={{ color: '#374151' }}>What We</span>{' '}
          <span 
            className="relative inline-block"
            style={{ color: '#f59e0b' }}
          >
            Do
            <div 
              className="absolute -bottom-2 left-0 w-full h-1 rounded-full transform origin-left animate-pulse"
              style={{ backgroundColor: '#8b5cf6' }}
            ></div>
          </span>
        </h1>
        
        <p className="text-xl md:text-3xl font-light max-w-4xl mx-auto leading-relaxed" style={{ color: '#374151' }}>
          Welcome to our digital playground — where big ideas meet even bigger results.
          <span className="font-bold ml-2" style={{ color: '#8b5cf6' }}>
            The Cool Stuff
          </span>
        </p>
      </div>

      {/* Main Carousel Container */}
      <div className="relative max-w-8xl mx-auto">
        {/* Services Container */}
        <div className="relative h-[420px] mb-16 overflow-visible">
          <div className="flex transition-all duration-700 ease-out h-full items-center justify-center">
            {visibleServices.map((service, index) => {
              const IconComponent = service.icon;
              const isCenter = index === 1;
              const isLeft = index === 0;
              const isRight = index === 2;
              
              return (
                <div
                  key={`${service.id}-${currentIndex}`}
                  className={`relative flex-shrink-0 transition-all duration-700 ease-out transform cursor-pointer ${
                    isCenter 
                      ? 'w-full md:w-[380px] scale-100 opacity-100 z-30 hover:scale-110' 
                      : 'w-full md:w-[260px] scale-80 opacity-50 z-10 hover:scale-85 hover:opacity-70'
                  }`}
                  style={{
                    transform: `translateX(${isLeft ? '-25px' : isRight ? '25px' : '0px'}) scale(${isCenter ? 1 : 0.8}) rotateY(${isLeft ? '15deg' : isRight ? '-15deg' : '0deg'})`,
                    filter: isCenter ? 'none' : 'blur(1px)',
                    marginX: isCenter ? '15px' : '8px'
                  }}
                  onClick={() => !isCenter && goToSlide((currentIndex + index - 1 + services.length) % services.length)}
                >
                  {/* Service Card */}
                  <div className="relative h-full mx-4 group">
                    {/* Enhanced Glowing Border Effect */}
                    <div 
                      className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                        isCenter ? 'shadow-2xl hover:shadow-[0_0_40px_rgba(0,0,0,0.15)]' : 'shadow-md'
                      }`}
                      style={{
                        border: `2px solid ${isCenter ? service.accentColor : 'transparent'}`,
                        boxShadow: isCenter 
                          ? `0 0 25px ${service.accentColor}15, 0 15px 35px rgba(0,0,0,0.08)` 
                          : '0 8px 16px rgba(0,0,0,0.04)'
                      }}
                    >
                      {/* Animated Gradient Overlay */}
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${service.accentColor}30, transparent, ${service.accentColor}15)`
                        }}
                      ></div>
                      
                      {/* Shimmer Effect */}
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                          background: `linear-gradient(45deg, transparent 30%, ${service.accentColor}20 50%, transparent 70%)`,
                          transform: 'translateX(-100%)',
                          animation: isCenter ? 'shimmer 2s ease-in-out infinite' : 'none'
                        }}
                      ></div>
                    </div>

                    {/* Main Card Content */}
                    <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-6 h-full flex flex-col justify-between border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500">
                      {/* Service Number Badge */}
                      <div className="absolute -top-4 -right-4 z-20">
                        <div 
                          className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-lg transform transition-all duration-500 ${
                            isCenter ? 'scale-100 group-hover:scale-125 group-hover:rotate-[20deg]' : 'scale-75'
                          }`}
                          style={{ backgroundColor: service.accentColor }}
                        >
                          {String(service.id).padStart(2, '0')}
                        </div>
                      </div>

                      {/* Floating Icon */}
                      <div className="mb-6 relative">
                        <div 
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center transform transition-all duration-500 shadow-md hover:shadow-lg ${
                            isCenter ? 'group-hover:rotate-12 group-hover:scale-125 group-hover:-translate-y-3' : ''
                          }`}
                          style={{ backgroundColor: `${service.accentColor}20` }}
                        >
                          <IconComponent 
                            className="w-8 h-8" 
                            style={{ color: service.accentColor }}
                          />
                        </div>
                        
                        {/* Animated Ring */}
                        {isCenter && (
                          <div 
                            className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-60 animate-ping"
                            style={{ borderColor: service.accentColor }}
                          ></div>
                        )}
                        
                        {/* Pulsing Background Circle */}
                        <div 
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 animate-pulse"
                          style={{ backgroundColor: `${service.accentColor}10` }}
                        ></div>
                      </div>

                      {/* Title with Dynamic Styling */}
                      <h3 
                        className={`font-black mb-4 transition-all duration-500 leading-tight ${
                          isCenter ? 'text-2xl' : 'text-lg'
                        }`}
                        style={{ 
                          color: isCenter ? service.accentColor : '#374151'
                        }}
                      >
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p 
                        className={`leading-relaxed transition-all duration-500 flex-grow font-medium ${
                          isCenter ? 'text-sm' : 'text-xs'
                        }`}
                        style={{ color: '#374151' }}
                      >
                        {service.description}
                      </p>

                      {/* Enhanced Decorative Line */}
                      <div 
                        className={`w-full h-0.5 rounded-full my-4 transition-all duration-500 ${
                          isCenter ? 'opacity-100' : 'opacity-50'
                        }`}
                        style={{ backgroundColor: `${service.accentColor}30` }}
                      ></div>

                      {/* Action Button - Only visible on center card */}
                      {isCenter && (
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                          <button 
                            className="w-full px-6 py-3 rounded-xl text-white font-bold shadow-md hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                            style={{ backgroundColor: service.accentColor }}
                          >
                            <span className="relative z-10 text-sm">Explore Service</span>
                            <div className="absolute inset-0 bg-white/25 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            <div 
                              className="absolute inset-0 opacity-0 group-hover:opacity-20 animate-pulse"
                              style={{ backgroundColor: 'white' }}
                            ></div>
                          </button>
                        </div>
                      )}

                      {/* Enhanced Floating Animation Elements */}
                      {isCenter && (
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                          <div 
                            className="absolute top-1/5 left-1/5 w-1.5 h-1.5 rounded-full animate-ping"
                            style={{ backgroundColor: '#f59e0b' }}
                          ></div>
                          <div 
                            className="absolute top-4/5 right-1/5 w-1 h-1 rounded-full animate-ping delay-300"
                            style={{ backgroundColor: '#8b5cf6' }}
                          ></div>
                          <div 
                            className="absolute bottom-1/5 left-4/5 w-0.5 h-0.5 rounded-full animate-ping delay-700"
                            style={{ backgroundColor: '#374151' }}
                          ></div>
                          
                          {/* Orbiting Elements */}
                          <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full animate-spin transform -translate-x-1/2 -translate-y-1/2">
                            <div 
                              className="absolute w-1 h-1 rounded-full -top-8"
                              style={{ backgroundColor: service.accentColor }}
                            ></div>
                          </div>
                        </div>
                      )}
                      
                      {/* Corner Accent */}
                      <div 
                        className="absolute bottom-0 right-0 w-12 h-12 opacity-5 group-hover:opacity-20 transition-opacity duration-500"
                        style={{ backgroundColor: service.accentColor }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Navigation Controls */}
        <div className="flex items-center justify-center space-x-12 mb-8">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className="group relative w-16 h-16 rounded-2xl border-3 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            style={{ 
              borderColor: '#374151',
              backgroundColor: 'white'
            }}
          >
            <ChevronLeft 
              className="w-7 h-7 mx-auto transition-colors duration-300" 
              style={{ color: '#374151' }}
            />
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              style={{ backgroundColor: '#374151' }}
            ></div>
            {/* Previous Service Preview */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border">
              <div className="text-xs font-bold whitespace-nowrap" style={{ color: '#374151' }}>
                {services[(currentIndex - 1 + services.length) % services.length].title}
              </div>
            </div>
          </button>

          {/* Current Service Display */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: services[currentIndex].accentColor }}
              >
                {React.createElement(services[currentIndex].icon, { 
                  className: "w-6 h-6 text-white" 
                })}
              </div>
              <div>
                <div className="text-xl font-black" style={{ color: services[currentIndex].accentColor }}>
                  {services[currentIndex].title}
                </div>
                <div className="text-sm" style={{ color: '#374151' }}>
                  Service {String(currentIndex + 1).padStart(2, '0')} of {String(services.length).padStart(2, '0')}
                </div>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="group relative w-16 h-16 rounded-2xl border-3 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            style={{ 
              borderColor: '#f59e0b',
              backgroundColor: 'white'
            }}
          >
            <ChevronRight 
              className="w-7 h-7 mx-auto transition-colors duration-300" 
              style={{ color: '#f59e0b' }}
            />
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              style={{ backgroundColor: '#f59e0b' }}
            ></div>
            {/* Next Service Preview */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border">
              <div className="text-xs font-bold whitespace-nowrap" style={{ color: '#374151' }}>
                {services[(currentIndex + 1) % services.length].title}
              </div>
            </div>
          </button>
        </div>

        {/* Auto-play Toggle & Slide Indicators */}
        <div className="flex items-center justify-center space-x-8 mb-8">
          {/* Auto-play Toggle */}
          <button
            onClick={toggleAutoPlay}
            className="group relative w-14 h-14 rounded-2xl border-3 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            style={{ 
              borderColor: isAutoPlay ? '#8b5cf6' : '#374151',
              backgroundColor: isAutoPlay ? '#8b5cf6' : 'white'
            }}
          >
            {isAutoPlay ? (
              <Pause className="w-6 h-6 mx-auto text-white" />
            ) : (
              <Play className="w-6 h-6 mx-auto" style={{ color: '#374151' }} />
            )}
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className="transition-all duration-300 rounded-full disabled:cursor-not-allowed hover:scale-110 transform hover:-translate-y-0.5 relative group"
                style={{
                  width: index === currentIndex ? '24px' : '8px',
                  height: '8px',
                  backgroundColor: index === currentIndex 
                    ? services[currentIndex].accentColor 
                    : '#d1d5db',
                  opacity: index === currentIndex ? 1 : 0.6
                }}
              >
                {/* Service Preview on Hover */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/95 backdrop-blur-sm rounded-md px-2 py-1 shadow-md border whitespace-nowrap z-50">
                  <div className="text-xs font-medium" style={{ color: '#374151' }}>
                    {service.title}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Compact Progress Section */}
        <div className="mt-6 max-w-xl mx-auto">
          {/* Minimized Progress Bar */}
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden shadow-sm relative">
            <div 
              className="h-full rounded-full transition-all duration-700 relative"
              style={{ 
                width: `${((currentIndex + 1) / services.length) * 100}%`,
                backgroundColor: services[currentIndex].accentColor
              }}
            >
              {/* Compact active indicator */}
              <div 
                className="absolute right-0 top-1/2 w-3 h-3 rounded-full shadow-md transform translate-x-1.5 -translate-y-1/2 animate-pulse border-2 border-white"
                style={{ backgroundColor: services[currentIndex].accentColor }}
              ></div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <div className="text-center flex-1">
              <div className="text-lg font-bold mb-1" style={{ color: '#374151' }}>
                {services[currentIndex].title}
              </div>
              <div className="text-sm mb-2" style={{ color: '#8b5cf6' }}>Active Service</div>
              <div className="text-sm leading-tight max-w-md mx-auto opacity-70" style={{ color: '#374151' }}>
                {services[currentIndex].description.slice(0, 55)}...
              </div>
            </div>
          </div>
        </div>

        {/* Auto-play Status Indicator */}
        {isAutoPlay && (
          <div className="fixed bottom-8 right-8 z-50">
            <div 
              className="flex items-center space-x-3 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-white/20"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
            >
              <div 
                className="w-3 h-3 rounded-full animate-pulse"
                style={{ backgroundColor: '#8b5cf6' }}
              ></div>
              <span className="text-sm font-bold" style={{ color: '#374151' }}>
                Auto-playing
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Custom CSS */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        /* Mobile responsive fixes - only for layout, keeping all effects */
        @media (max-width: 768px) {
          /* Adjust header spacing */
          .text-6xl {
            font-size: 3rem;
          }
          
          .text-xl {
            font-size: 1.125rem;
          }

          /* Make navigation controls smaller on mobile */
          .w-16 {
            width: 3rem !important;
          }
          
          .h-16 {
            height: 3rem !important;
          }
          
          .w-7 {
            width: 1.25rem !important;
          }
          
          .h-7 {
            height: 1.25rem !important;
          }

          /* Adjust card spacing */
          .mx-4 {
            margin-left: 0.5rem !important;
            margin-right: 0.5rem !important;
          }

          /* Make text more readable */
          .text-xl {
            font-size: 1rem !important;
          }

          /* Adjust progress section */
          .max-w-xl {
            max-width: 20rem !important;
          }

          /* Auto-play indicator adjustment */
          .bottom-8 {
            bottom: 1rem !important;
          }
          
          .right-8 {
            right: 1rem !important;
          }

          /* Keep all transform effects but scale them appropriately */
          .md\\:w-\\[380px\\] {
            width: 85% !important;
          }
          
          .md\\:w-\\[260px\\] {
            width: 70% !important;
          }

          /* Ensure floating elements are still visible */
          .left-10 {
            left: 1rem !important;
          }
          
          .right-10 {
            right: 1rem !important;
          }
          
          .w-32 {
            width: 4rem !important;
          }
          
          .h-32 {
            height: 4rem !important;
          }
          
          .w-24 {
            width: 3rem !important;
          }
          
          .h-24 {
            height: 3rem !important;
          }

          /* Ensure space between navigation elements */
          .space-x-12 > :not([hidden]) ~ :not([hidden]) {
            margin-left: 2rem !important;
          }
          
          .space-x-8 > :not([hidden]) ~ :not([hidden]) {
            margin-left: 1.5rem !important;
          }
        }

        /* Ultra-small screens */
        @media (max-width: 480px) {
          .text-6xl {
            font-size: 2.5rem !important;
          }
          
          .px-4 {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          
          .space-x-12 > :not([hidden]) ~ :not([hidden]) {
            margin-left: 1rem !important;
          }
          
          .md\\:w-\\[380px\\] {
            width: 95% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesCarousel;