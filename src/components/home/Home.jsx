import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import Navbar from './Navbar'; // This path seems correct if Navbar is in src/home/Navbar.jsx

// Lazy load these components with the corrected paths
const Meme = lazy(() => import('./meme')); // Corrected path
const Contact = lazy(() => import('../contact/Contact')); // Assuming Contact is in src/contact/Contact.jsx
const FoodCul = lazy(() => import('./FoodCul')); // Corrected path
const OurCul = lazy(() => import('./OurCul')); // Corrected path
// const Footer = lazy(() => import('../../footer/Footer')); // Corrected path if you use Footer

const WorkSmartHomepage = () => {
  const [typedText, setTypedText] = useState('');
  const [isVisible, setIsVisible] = useState({});
  const [backgroundWords, setBackgroundWords] = useState([]);
  const heroRef = useRef(null);
  const cardsRef = useRef([]);

  const fullText = "Redefining the future of work through innovation and creativity";

  // Background animated words
  const wordsList = [
    "One Stop Solution", "NotedAd", "Innovation Hub", "Creative Studio", 
    "Digital Excellence", "Smart Solutions", "Future Ready", "Growth Partner",
    "Success Stories", "Brand Evolution", "Market Leaders", "Vision 2025",
    "Strategic Minds", "Creative Force", "Tech Pioneers", "Business Growth", "Website Development", "Social Media Management", 
    "Paid Ads", "Podcast", "Social Media Handling", "Graphic Designing", "Video Editing", "Training Programs", "Digital Marketing",
    "Website Management"
  ];

  useEffect(() => {
    // Handle scroll effect with parallax
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Parallax effect for hero
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }

      // Parallax effect for background words
      backgroundWords.forEach((word, index) => {
        const element = document.getElementById(`bg-word-${index}`);
        if (element) {
          const speed = (index % 3 + 1) * 0.2;
          element.style.transform = `translate(${word.x}%, ${word.y}%) translateY(${scrollY * speed}px)`;
        }
      });
    };

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe cards
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [backgroundWords]);

  useEffect(() => {
    // Create animated background words
    const words = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      text: wordsList[i % wordsList.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 0.8 + 0.6,
      opacity: Math.random() * 0.15 + 0.05,
      animationDelay: Math.random() * 10,
      animationDuration: Math.random() * 20 + 15,
      rotation: Math.random() * 360,
    }));
    setBackgroundWords(words);

    // Enhanced typing effect
    const timer = setTimeout(() => {
      let i = 0;
      const typeWriter = () => {
        if (i < fullText.length) {
          setTypedText(fullText.substring(0, i + 1));
          i++;
          setTimeout(typeWriter, 80);
        }
      };
      typeWriter();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const philosophyCards = [
    {
      icon: "🚀",
      title: "Beyond 9-to-5",
      text: "We don't believe in 9-to-5 clichés. We believe in problem-solving, late-night ideas, and coffee-fueled breakthroughs.",
      delay: 0.2,
      color: "from-blue-400 to-blue-600",
      accent: "blue"
    },
    {
      icon: "🔐",
      title: "Lock In, Don't Clock In",
      text: "Our team doesn't clock in — we lock in. Complete dedication to every project, every challenge, every breakthrough.",
      delay: 0.4,
      color: "from-purple-400 to-purple-600",
      accent: "purple"
    },
    {
      icon: "🎯",
      title: "Mission Accomplished",
      text: "Missions are never aborted; they're accomplished. We see every challenge through to its successful completion.",
      delay: 0.6,
      color: "from-green-400 to-green-600",
      accent: "green"
    },
    {
      icon: "🧠",
      title: "Strategy Over Hustle",
      text: "We don't just hustle, we strategize. Smart work beats hard work every time when powered by intelligent planning.",
      delay: 0.8,
      color: "from-amber-400 to-amber-600",
      accent: "amber"
    },
    {
      icon: "🎨",
      title: "Creativity as Habit",
      text: "Creativity is our habit, not a job description. Innovation flows through everything we do, every day.",
      delay: 1.0,
      color: "from-pink-400 to-pink-600",
      accent: "pink"
    },
    {
      icon: "⚡",
      title: "Breakthrough Mindset",
      text: "Every obstacle is an opportunity for a breakthrough. We transform challenges into stepping stones to success.",
      delay: 1.2,
      color: "from-red-400 to-red-600",
      accent: "red"
    }
  ];

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  
  return (
    
    <div className="max-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800 overflow-x-hidden relative">
      {/* Animated Background Words */}
      <Navbar/>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden ">
        {backgroundWords.map((word) => (
          <div
            key={word.id}
            id={`bg-word-${word.id}`}
            className="absolute font-bold text-gray-600 select-none transform-gpu"
            style={{
              left: `${word.x}%`,
              top: `${word.y}%`,
              fontSize: `${word.size}rem`,
              opacity: word.opacity,
              transform: `translate(-50%, -50%) rotate(${word.rotation}deg)`,
              animationDelay: `${word.animationDelay}s`,
              animationDuration: `${word.animationDuration}s`,
              animation: `floatWords ${word.animationDuration}s ease-in-out infinite ${word.animationDelay}s, fadeInOut 8s ease-in-out infinite ${word.animationDelay}s`
            }}
          >
            {word.text}
          </div>
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          >
            <div className={`w-${Math.floor(Math.random() * 4) + 2} h-${Math.floor(Math.random() * 4) + 2} bg-gradient-to-r ${
              ['from-blue-200 to-blue-300', 'from-purple-200 to-purple-300', 'from-amber-200 to-amber-300', 'from-pink-200 to-pink-300'][Math.floor(Math.random() * 4)]
            } rounded-full opacity-20 animate-bounce`}></div>
          </div>
        ))}
      </div>

      {/* Enhanced Hero Section */}
      <section 
        id="home" 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative z-10 px-4"
      >
        <div className="text-center max-w-6xl">
          {/* Main Title with enhanced animations */}
          <div className="relative mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-gray-700 via-amber-500 via-purple-500 to-gray-700 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%] transform hover:scale-105 transition-all duration-700 relative z-10">
              Work Smart, Live Loud
            </h1>                                                                                                                                           
            
            {/* Glowing text shadow effect */}
            <div className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-black text-amber-300 opacity-20 blur-2xl animate-pulse -z-10">
              Work Smart, Live Loud
            </div>
            
            {/* Animated underline */}
            <div className="w-32 h-2 bg-gradient-to-r from-amber-400 to-purple-500 mx-auto mt-4 rounded-full animate-pulse"></div>
          </div>

        <div className="relative mb-12 min-h-[4rem]">
  {/* Static container with fixed height to prevent shifting */}
  <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 min-h-[4rem] transition-transform duration-500 transform hover:scale-105 relative z-10">
    <span className="inline-block w-full">
      {typedText}
      <span className="text-amber-500 font-bold">|</span>
    </span>
  </p>

  {/* Subtitle glow effect */}
  <div
    className="absolute inset-0 text-xl md:text-2xl lg:text-3xl text-gray-400 opacity-10 blur-lg -z-10 pointer-events-none select-none"
    aria-hidden="true"
  >
    {typedText}
  </div>
</div>

          
          {/* Enhanced floating action buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-12">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-bold text-lg rounded-full transition-all duration-700 transform hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:shadow-amber-500/50 animate-bounce-slow overflow-hidden">
              <span className="relative z-10 transition-all duration-300 group-hover:scale-110">
                Get Started Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-all duration-700 transform -translate-x-full group-hover:translate-x-full"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
            
            <button className="group relative px-10 py-5 bg-white bg-opacity-90 backdrop-blur-xl border-2 border-gray-300 text-white font-bold text-lg rounded-full transition-all duration-700 transform hover:scale-110 hover:-rotate-3 hover:shadow-2xl hover:bg-gray-50 hover:border-purple-400 overflow-hidden">
              <span className="relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:text-purple-600">
                Discover More
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-200 to-transparent opacity-0 group-hover:opacity-50 transition-all duration-700 transform translate-x-full group-hover:-translate-x-full"></div>
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Philosophy Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-6 animate-fade-in relative">
            Our Philosophy
            <div className="absolute inset-0 text-5xl md:text-6xl font-bold text-gray-300 opacity-10 blur-lg -z-10">
              Our Philosophy
            </div>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-amber-500 to-purple-500 mx-auto rounded-full animate-pulse"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Discover the principles that drive our innovation and excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {philosophyCards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              id={`card-${index}`}
              className={`group bg-white bg-opacity-95 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 transition-all duration-700 cursor-pointer relative overflow-hidden transform perspective-1000 hover:shadow-2xl ${
                isVisible[`card-${index}`] ? 'animate-slide-up' : 'opacity-0 translate-y-20'
              }`}
              style={{ animationDelay: `${card.delay}s` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-20px) scale(1.05) rotateX(10deg)';
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* Multiple animated background layers */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-3xl`}></div>
              <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-${card.accent}-100 to-transparent opacity-0 group-hover:opacity-20 transition-all duration-700 rounded-3xl`}></div>
              
              {/* Complex shimmer effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-60 transition-all duration-700 transform -translate-x-full group-hover:translate-x-full"></div>
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-${card.accent}-200 to-transparent opacity-0 group-hover:opacity-30 transition-all duration-500 transform translate-x-full group-hover:-translate-x-full`} style={{ animationDelay: '200ms' }}></div>
              
              {/* Content with enhanced animations */}
              <div className="relative z-10">
                <div className="relative mb-6">
                  <span className="text-6xl block transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 transform-gpu relative z-10">
                    {card.icon}
                  </span>
                  <div className="absolute inset-0 text-6xl opacity-20 blur-xl group-hover:animate-pulse">
                    {card.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-all duration-300 relative">
                  {card.title}
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.color} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    {card.title}
                  </div>
                </h3>
                
                <p className="text-gray-600 leading-relaxed transition-all duration-300 group-hover:text-gray-700 transform group-hover:translate-y-1">
                  {card.text}
                </p>
              </div>
              
              {/* Glowing animated border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse`}
                   style={{ padding: '2px' }}>
                <div className="w-full h-full bg-white rounded-3xl opacity-95"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent relative">
            Ready to Transform Your Business?
            <div className="absolute inset-0 text-4xl md:text-5xl font-bold text-gray-300 opacity-10 blur-lg -z-10">
              Ready to Transform Your Business?
            </div>
          </h3>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of successful businesses that have revolutionized their approach with our solutions
          </p>
          
          <button className="group relative inline-block px-16 py-6 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-bold text-xl rounded-full transition-all duration-700 transform hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:shadow-amber-500/50 overflow-hidden">
            <span className="relative z-10 transition-all duration-300 group-hover:scale-110">
              Start Your Journey Today
            </span>
            
            {/* Multiple animated overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-40 transition-all duration-700 transform -translate-x-full group-hover:translate-x-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-0 group-hover:opacity-30 transition-all duration-500 transform translate-x-full group-hover:-translate-x-full" style={{ animationDelay: '100ms' }}></div>
            
            {/* Expanding ring effects */}
            <div className="absolute inset-0 rounded-full border-4 border-amber-300 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"></div>
            <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
          </button>
        </div>
      </section>

      {/* Lazy Loaded Components with Suspense */}
      <Suspense fallback={
        <div className="text-center py-20 text-gray-500">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-400 mx-auto mb-4"></div>
          <p>Loading content...</p>
        </div>
      }>
        <Meme/>
        <FoodCul/>
        <OurCul/>
        <Contact/>
        {/* {<Footer/>} Uncomment if you use Footer */}
      </Suspense>                                         

      <style jsx>{`
        @keyframes floatWords {
          0%, 100% { transform: translate(-50%, -50%) rotate(0deg) translateY(0px); }
          25% { transform: translate(-50%, -50%) rotate(90deg) translateY(-20px); }
          50% { transform: translate(-50%, -50%) rotate(180deg) translateY(-10px); }
          75% { transform: translate(-50%, -50%) rotate(270deg) translateY(-30px); }
        }
        
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.2; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(80px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-gradient-x {
          animation: gradient-x 8s ease infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-gpu {
          transform: translateZ(0);
        }
      `}</style>
    </div>
  );
};

export default WorkSmartHomepage;