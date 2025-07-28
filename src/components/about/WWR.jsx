import React, { useState, useEffect } from 'react';
import { Sparkles, Zap, Lightbulb, Coffee, Rocket, Star, ArrowRight, Heart, Code, Palette } from 'lucide-react';
import Navbar from '../home/Navbar';
// import Footer from '../footer/Footer';

const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamTraits = [
    {
      icon: Code,
      text: "Speak fluent algorithm AND sarcasm.",
      color: "from-purple-500 to-violet-600",
      hoverColor: "hover:from-purple-600 hover:to-violet-700"
    },
    {
      icon: Lightbulb,
      text: "Turn \"Umm, I have an idea...\" into \"WOAH, that's brilliant!\"",
      color: "from-amber-500 to-orange-500",
      hoverColor: "hover:from-amber-600 hover:to-orange-600"
    },
    {
      icon: Heart,
      text: "Believe deadlines are sacred (but dance breaks are too).",
      color: "from-gray-600 to-gray-700",
      hoverColor: "hover:from-gray-700 hover:to-gray-800"
    }
  ];

  const floatingElements = [
    { icon: Sparkles, delay: 0, position: "top-10 left-10" },
    { icon: Zap, delay: 1000, position: "top-20 right-20" },
    { icon: Rocket, delay: 2000, position: "bottom-20 left-16" },
    { icon: Star, delay: 1500, position: "bottom-16 right-12" },
  ];

  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden ">
        <Navbar/>
      {/* Animated Background Elements */}
      {floatingElements.map((elem, idx) => {
        const IconComponent = elem.icon;
        return (
          <div
            key={idx}
            className={`absolute ${elem.position} opacity-10 animate-float`}
            style={{ animationDelay: `${elem.delay}ms` }}
          >
            <IconComponent className="w-8 h-8 text-purple-500" />
          </div>
        );
      })}

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20  relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-3 mb-6 group cursor-pointer p-6">
            <div className="relative">
              <Sparkles className="text-purple-500 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
              <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
            </div>
            <h1 className="text-5xl font-bold text-gray-700 group-hover:text-purple-600 transition-colors duration-500">
              Who We Are
            </h1>
            <span className="text-2xl font-light text-amber-500 group-hover:scale-110 transition-transform duration-500">
              (Other Than Awesome)
            </span>
          </div>
        </div>

        {/* Main Description Card */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative group cursor-pointer">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-amber-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
            
            <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-gray-200/50 group-hover:shadow-3xl group-hover:scale-105 transition-all duration-700 overflow-hidden">
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-amber-500/20 to-purple-500/0 group-hover:from-purple-500/20 group-hover:via-amber-500/40 group-hover:to-purple-500/20 rounded-3xl transition-all duration-700"></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <p className="text-xl leading-relaxed text-gray-700 mb-6 group-hover:text-gray-800 transition-colors duration-500">
                  We're <span className="font-bold text-purple-600 group-hover:text-purple-700 transition-colors duration-300">Noted ad Digital</span> — part mad scientists, part digital wizards, and full-time creative chaos lovers. We turn ideas into scroll-stopping, client-wowing, ROI-boosting digital stories. No boring boardroom vibes here — think more memes, brainstorms over biryani, and whiteboards full of "Wait, what if we tried this..."
                </p>
                
                <div className="flex items-center gap-3 text-amber-500 group-hover:text-amber-600 transition-colors duration-300">
                  <Coffee className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-medium">Powered by creativity and caffeine</span>
                  <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agency Statement */}
        <div className={`mb-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-8 group cursor-pointer inline-block hover:text-purple-600 transition-colors duration-500 hover:scale-105 transform">
              We're not your typical agency. We're the ones who:
            </h2>
          </div>
        </div>

        {/* Team Traits Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamTraits.map((trait, idx) => {
            const IconComponent = trait.icon;
            return (
              <div
                key={idx}
                className={`transition-all duration-1000 delay-${700 + idx * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative group cursor-pointer h-full">
                  {/* Card Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${trait.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700`}></div>
                  
                  <div className={`relative bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-200/50 group-hover:shadow-2xl group-hover:scale-105 group-hover:border-purple-300/50 transition-all duration-700 h-full flex flex-col`}>
                    {/* Icon Container */}
                    <div className="mb-6">
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${trait.color} ${trait.hoverColor} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                        <IconComponent className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-500" />
                      </div>
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 mb-4">
                        {trait.text}
                      </p>
                      
                      {/* Hover Arrow */}
                      <div className={`flex items-center gap-2 text-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-0 group-hover:translate-x-2`}>
                        <span className="text-sm font-medium">Learn more</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                    
                    {/* Animated dots */}
                    <div className="absolute top-4 right-4 flex gap-1">
                      {[0, 1, 2].map((dot) => (
                        <div
                          key={dot}
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${trait.color} opacity-30 group-hover:opacity-60 transition-all duration-500`}
                          style={{ animationDelay: `${dot * 200}ms` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative group cursor-pointer inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-amber-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
            
            <div className="relative bg-gradient-to-r from-gray-700 to-gray-800 text-white px-12 py-6 rounded-2xl shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 overflow-hidden">
              {/* Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10 flex items-center gap-4">
                <Palette className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-xl font-semibold">Ready to create some digital magic together?</span>
                <Rocket className="w-6 h-6 group-hover:scale-110 group-hover:text-amber-400 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          25% { transform: translateY(-10px) rotate(5deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(0deg); opacity: 0.1; }
          75% { transform: translateY(-10px) rotate(-5deg); opacity: 0.3; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
      {/* <Footer /> */}
    </div>
  );
};

export default WhoWeAre;