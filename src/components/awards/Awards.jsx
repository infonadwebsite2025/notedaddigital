import React, { useState, useEffect } from 'react';
import { Trophy, Star, Award, Zap, Crown, Medal } from 'lucide-react';

const AwardsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const awards = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Top Digital Disruptor",
      year: "2024",
      description: "Recognized for innovative campaigns that broke the internet (in a good way).",
      color: "from-amber-500 to-amber-600",
      bgColor: "from-amber-100/60 to-amber-200/60",
      textColor: "text-amber-500",
      emoji: "🚀"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Best Social Media Marketing Agency",
      year: "2024",
      description: "We took stories, reels, and swipe-ups to a whole new level.",
      color: "from-purple-400 to-purple-600",
      bgColor: "from-purple-100/60 to-purple-200/60",
      textColor: "text-purple-500",
      emoji: "⭐"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Branding Brilliance Award",
      year: "2024",
      description: "For designs so sharp, our competitors still keep screenshots.",
      color: "from-amber-500 to-amber-600",
      bgColor: "from-amber-100/60 to-amber-200/60",
      textColor: "text-amber-500",
      emoji: "🎨"
    }
  ];

  const achievements = [
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Campaign of the Year",
      subtitle: "Viral Marketing Excellence",
      metric: "2.5M+ Reach"
    },
    {
      icon: <Medal className="w-6 h-6" />,
      title: "Innovation in Digital",
      subtitle: "Creative Strategy Award",
      metric: "300% Engagement"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Client Satisfaction",
      subtitle: "Service Excellence",
      metric: "98% Rating"
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
            <Trophy className="w-12 h-12 text-amber-500 animate-bounce" />
            <h2 className="text-5xl font-black bg-gradient-to-r from-amber-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x">
              Awards That Made Us Do a
              <span className="block text-purple-500">Happy Dance</span>
            </h2>
            <Star className="w-12 h-12 text-purple-500 animate-spin" style={{ animationDuration: '3s' }} />
          </div>
          <p className="text-xl text-pink-500 max-w-2xl mx-auto animate-fade-in">
            Because recognition feels good, and we're not too modest to show it off 💃
          </p>
        </div>
        {/* Main Awards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-[#fdf6e3] via-white to-[#f3e8ff] border-4 border-transparent rounded-3xl p-8 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:border-amber-400 overflow-hidden shadow-2xl animate-card-fade-in animate-delay-${index}`}
              style={{
                background:
                  'linear-gradient(135deg,rgb(245, 245, 241) 60%, #f3e8ff 100%)',
                boxShadow:
                  '0 8px 32px 0 rgba(131, 24, 67, 0.12), 0 1.5px 8px 0 rgba(139, 92, 246, 0.10)'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${award.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              {/* Floating Emoji */}
              <div className="absolute top-4 right-4 text-3xl animate-bounce opacity-50 group-hover:opacity-100 transition-opacity">
                {award.emoji}
              </div>
              <div className="relative z-10">
                {/* Icon */}
                <div className={`${award.textColor} mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {award.icon}
                </div>
                {/* Year Badge */}
                <div className={`inline-block bg-gradient-to-r ${award.color} text-white px-4 py-1 rounded-full text-sm font-bold mb-4`}>
                  {award.year}
                </div>
                {/* Title */}
                <h3 className="text-2xl font-black bg-gradient-to-r from-amber-500 to-purple-500 bg-clip-text text-transparent group-hover:animate-pulse transition-colors mb-4">
                  {award.title}
                </h3>
                {/* Description */}
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {award.description}
                </p>
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${award.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
                     style={{ 
                       background: `linear-gradient(45deg, transparent 40%, ${hoveredCard === index ? (index % 2 === 0 ? '#f59e0b' : '#8b5cf6') : 'transparent'} 50%, transparent 60%)`,
                       backgroundSize: '200% 200%',
                       animation: hoveredCard === index ? 'shimmer 2s infinite' : 'none'
                     }} />
              </div>
            </div>
          ))}
        </div>
        {/* Secondary Achievements */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            More Reasons to <span className="text-amber-500">Celebrate</span> 🎉
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-95 backdrop-blur-xl rounded-2xl p-6 hover:scale-105 transition-all duration-300 border border-gray-200 hover:border-purple-400 group shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="text-purple-500 group-hover:text-amber-500 transition-colors">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-amber-500 transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-500 text-sm mb-2">
                      {achievement.subtitle}
                    </p>
                    <div className="text-purple-500 font-bold text-sm">
                      {achievement.metric}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Trophy Display */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-amber-100 to-purple-100 rounded-3xl p-12 relative overflow-hidden">
            {/* Add shadow to trophy display */}
            <div className="absolute inset-0 rounded-3xl shadow-2xl pointer-events-none" />
            {/* Animated Background */}
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    fontSize: `${Math.random() * 20 + 10}px`
                  }}
                >
                  {['🏆', '⭐', '🥇', '🎯', '💎'][Math.floor(Math.random() * 5)]}
                </div>
              ))}
            </div>
            <div className="relative z-10">
              <div className="flex justify-center gap-4 mb-6">
                <Trophy className="w-16 h-16 text-amber-500 animate-bounce" />
                <Star className="w-16 h-16 text-purple-500 animate-pulse" />
                <Award className="w-16 h-16 text-amber-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
              <h3 className="text-4xl font-black bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
                The Trophy Cabinet Keeps Growing
              </h3>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Each award represents countless hours of creativity, strategy, and pure digital magic. 
                But honestly, the best reward is seeing our clients succeed.
              </p>
              <div className="mt-8 text-gray-500 text-sm">
                <em>"Success is not final, failure is not fatal: it is the courage to continue that counts."</em>
                <br />
                <span className="text-xs opacity-75">- Every agency ever (but we actually mean it)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes glow-border {
          0%, 100% { box-shadow: 0 0 24px 6px #fbbf24, 0 0 48px 12px #a78bfa33; }
          50% { box-shadow: 0 0 48px 16px #f472b6, 0 0 64px 24px #a78bfa55; }
        }
        .animate-glow-border {
          animation: glow-border 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AwardsSection;