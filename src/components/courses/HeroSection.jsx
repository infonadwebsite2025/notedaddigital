import React, { useEffect, useState, useRef } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section ref={heroRef} className="relative py-20 text-center overflow-hidden">
      {/* Floating particles */}
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-violet-50 to-slate-50 opacity-30 animate-rotate-slow"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-5 mt-10">
        <h1 
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Learn the Digital Way — The Notedad Way
        </h1>
        <p 
          className={`text-xl md:text-2xl text-slate-700 mb-10 font-semibold animate-bounce-gentle transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Ready to turn your passion into a paycheck?
        </p>
        <p 
          className={`text-lg md:text-xl text-slate-600 max-w-4xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Whether you're an aspiring creator, budding marketer, or entrepreneur with a fire in your belly, 
          we've got the tools, tricks, and tea to take your digital game next level. No boring lectures. 
          No fluff. Just real-world skills from real-world pros.
        </p>
      </div>

      <style jsx>{`
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
        
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection; 