import React, { useState, useEffect } from 'react';
import { Users, Globe, TrendingUp, Eye, Brain, Rocket } from 'lucide-react';

const MilestonesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    brands: 0,
    countries: 0,
    growth: 0,
    impressions: 0
  });

  useEffect(() => {
    setIsVisible(true);
    // Animate counters with delay
    setTimeout(() => {
      const animateCounter = (key, target) => {
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 30);
      };
      animateCounter('brands', 100);
      animateCounter('countries', 8);
      animateCounter('growth', 150);
      animateCounter('impressions', 10);
    }, 500);
  }, []);

  const milestones = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Brands Boosted",
      count: counters.brands,
      suffix: "+",
      description: "across industries from fashion to fintech (and a few that still don't know what SEO is, but we helped anyway).",
      color: "from-amber-500 to-amber-600",
      iconColor: "text-amber-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Countries Reached",
      count: counters.countries,
      suffix: "+",
      description: "yep, we've gone global. Our memes now have accents.",
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Average Growth",
      count: counters.growth,
      suffix: "%",
      description: "Because results > reports.",
      color: "from-amber-500 to-amber-600",
      iconColor: "text-amber-500"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Impressions Generated",
      count: counters.impressions,
      suffix: "M+",
      description: "and growing like your favorite trending reel.",
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen text-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Rocket className="w-10 h-10 text-amber-500 animate-bounce" />
            <h2 className="text-5xl font-black bg-gradient-to-r from-amber-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x">
              Milestones That Make Us
              <span className="text-amber-500"> Blush</span>
            </h2>
          </div>
          <p className="text-xl text-purple-500 max-w-2xl mx-auto animate-fade-in">
            From zero to hero, one epic campaign at a time
          </p>
        </div>
        {/* Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`group bg-white bg-opacity-95 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:border-amber-400 relative overflow-hidden shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                animationDelay: `${index * 0.2}s`,
                background: `linear-gradient(135deg, ${index % 2 === 0 ? '#f3f4f6' : '#e5e7eb'} 0%, #fff 100%)`
              }}
            >
              {/* Icon */}
              <div className={`${milestone.iconColor} mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                {milestone.icon}
              </div>
              {/* Counter */}
              <div className="mb-4">
                <span className={`text-4xl font-black bg-gradient-to-r from-amber-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x group-hover:animate-pulse`}>
                  {milestone.count}{milestone.suffix}
                </span>
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-amber-500 transition-colors">
                {milestone.title}
              </h3>
              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                {milestone.description}
              </p>
              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${milestone.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
        {/* Think Tank Section */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-purple-100 to-amber-100 rounded-3xl p-12 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-200/25 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-amber-400 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
            <div className="relative z-10">
              <Brain className="w-16 h-16 text-amber-500 mx-auto mb-6 animate-pulse" />
              <h3 className="text-3xl font-black bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
                🧠 In-house Think Tank
              </h3>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                We've actually turned brainstorming into a business model.
                <span className="block mt-2 text-lg opacity-90">
                  (Patent pending... just kidding, or are we? 🤔)
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Fun Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { icon: '☕', label: 'Cups of Coffee', value: '∞' },
            { icon: '🌙', label: 'Late Night Sessions', value: '247' },
            { icon: '💡', label: 'Bright Ideas', value: '1,337' },
            { icon: '🎯', label: 'Bulls Eyes Hit', value: '100%' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-95 backdrop-blur-xl rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 border border-gray-200 hover:border-amber-400 shadow-lg"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-amber-500 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MilestonesSection;