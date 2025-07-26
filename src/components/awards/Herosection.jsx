import React, { useState, useEffect } from 'react';
import { Zap, Sparkles, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  
  const words = ['Epic', 'Award-Winning', 'Viral', 'Legendary'];

  useEffect(() => {
    setIsVisible(true);
    
    const wordInterval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(wordInterval);
  }, []);

  return (
    <div className="min-h-screen text-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              backgroundColor: i % 3 === 0 ? '#f59e0b' : '#8b5cf6',
              animation: `float ${Math.random() * 3 + 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 md:py-24 flex flex-col items-center min-h-screen mt-10">
        <div className={`transition-all duration-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Main Heading */}
          <div className="mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-black bg-gradient-to-r from-amber-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 leading-tight drop-shadow-lg animate-gradient-x text-center">
              Achievements & Awards
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-600 mb-8 h-auto flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in text-center">
              <span>Because doing</span>
              <span className="mx-2 font-bold bg-gradient-to-r from-amber-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x transition-all duration-500 animate-pulse">
                {words[currentWord]}
              </span>
              <span>stuff deserves a spotlight</span>
            </div>
          </div>
<div>
          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mb-12 sm:mb-16 leading-relaxed text-center font-medium">
            At Notedad Digital, we don't chase trophies — we earn them by doing the work that speaks for itself. 
            From late-night caffeine-powered brainstorms to viral campaigns that lit up the internet.
          </p>
</div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center items-center mb-16 sm:mb-20">
            <button className="group w-full sm:w-auto bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25 flex items-center justify-center gap-3 shadow-xl">
              <span>Explore Our Wins</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group w-full sm:w-auto bg-white bg-opacity-95 backdrop-blur-xl text-gray-700 font-bold text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 shadow-lg">
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>See Our Process</span>
            </button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16 sm:mt-20 pt-16 sm:pt-20 w-full">
            {[
              { label: 'Brands Boosted', value: '100+', color: 'text-amber-500' },
              { label: 'Countries', value: '8+', color: 'text-purple-500' },
              { label: 'Growth Rate', value: '150%', color: 'text-amber-500' },
              { label: 'Impressions', value: '10M+', color: 'text-purple-500' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group hover:scale-105 transition-transform duration-300 bg-white bg-opacity-90 backdrop-blur-xl rounded-2xl py-8 px-6 shadow-xl hover:shadow-2xl relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-50 to-purple-50 opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className={`text-3xl sm:text-4xl font-black ${stat.color} mb-3 group-hover:animate-pulse`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm sm:text-base font-medium">
                    {stat.label}
                  </div>
                </div>

                {/* Animated accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  stat.color.includes('amber') ? 'from-amber-400 to-amber-600' : 'from-purple-400 to-purple-600'
                } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 animate-bounce opacity-20">
        <Zap className="w-16 h-16 text-amber-500" />
      </div>
      <div className="absolute top-3/4 left-10 animate-pulse opacity-20" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-14 h-14 text-purple-500" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;