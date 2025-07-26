import React, { useState, useEffect } from 'react';
import { Tv, Users, Heart, Camera, Newspaper, Mic, Video, Star } from 'lucide-react';

const MentionsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mentions = [
    {
      icon: <Newspaper className="w-8 h-8" />,
      title: "Featured In Media",
      items: ["Jalandhar City LIVE", "Iconic Media", "Digital Tribune"],
      description: "Our work made headlines (and we have the screenshots to prove it)",
      color: "from-amber-500 to-amber-600",
      bgColor: "from-amber-100/30 to-amber-200/30",
      emoji: "📰"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Celebrity Collaborations",
      items: ["Marketing Channel Invites", "Influencer Partnerships", "Brand Ambassador Programs"],
      description: "Invited celebrities at multiple marketing channels (yes, we're kind of a big deal)",
      color: "from-purple-400 to-purple-600",
      bgColor: "from-purple-100/30 to-purple-700/30",
      emoji: "🌟"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Team Love Stories",
      items: ["Intern Testimonials", "Team Bonds", "Workplace Culture"],
      description: "Our interns cried when they left (true story, we have video proof)",
      color: "from-amber-500 to-amber-600",
      bgColor: "from-amber-100/30 to-amber-200/30",
      emoji: "💖"
    }
  ];

  const mediaHighlights = [
    {
      type: "Interview",
      title: "Digital Marketing Trends 2024",
      platform: "Jalandhar City LIVE",
      icon: <Mic className="w-5 h-5" />,
      metric: "50K+ Views"
    },
    {
      type: "Feature",
      title: "Agency Spotlight",
      platform: "Iconic Media",
      icon: <Camera className="w-5 h-5" />,
      metric: "25K+ Reads"
    },
    {
      type: "Podcast",
      title: "Building Digital Empires",
      platform: "Marketing Talks",
      icon: <Video className="w-5 h-5" />,
      metric: "15K+ Listens"
    },
    {
      type: "Article",
      title: "Innovation in Branding",
      platform: "Design Weekly",
      icon: <Newspaper className="w-5 h-5" />,
      metric: "30K+ Shares"
    }
  ];

  const testimonials = [
    {
      quote: "I came for the internship, stayed for the family vibes. Now I'm crying because I have to leave! 😭",
      author: "Sarah M.",
      role: "Marketing Intern",
      rating: 5
    },
    {
      quote: "This place doesn't just teach you marketing, it teaches you magic. Pure digital wizardry!",
      author: "Raj P.",
      role: "Design Intern", 
      rating: 5
    },
    {
      quote: "From day one, they treated me like family. The learning curve was steep but so worth it!",
      author: "Priya S.",
      role: "Content Intern",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen text-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl font-black bg-gradient-to-r from-amber-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x mb-4">
            Honorable Mentions
            <span className="block text-2xl text-purple-500 font-normal mt-2">
              (aka Flex Zone 💪)
            </span>
          </h2>
          <p className="text-xl text-pink-500 max-w-2xl mx-auto animate-fade-in">
            Because sometimes the best achievements are the ones that make you smile
          </p>
        </div>
        {/* Main Mentions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {mentions.map((mention, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-white to-gray-50 backdrop-blur-xl border border-gray-300 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:border-amber-400 relative overflow-hidden shadow-lg hover:shadow-amber-200/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
              }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${mention.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              {/* Floating Emoji */}
              <div className="absolute top-4 right-4 text-3xl animate-bounce opacity-50 group-hover:opacity-100 transition-opacity">
                {mention.emoji}
              </div>
              <div className="relative z-10">
                {/* Icon */}
                <div className={`text-${index % 2 === 0 ? 'amber' : 'purple'}-500 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {mention.icon}
                </div>
                {/* Title */}
                <h3 className="text-2xl font-black bg-gradient-to-r from-amber-500 to-purple-500 bg-clip-text text-transparent group-hover:animate-pulse transition-colors mb-4">
                  {mention.title}
                </h3>
                {/* Items List */}
                <div className="mb-4">
                  {mention.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-sm text-gray-500 mb-1 group-hover:text-gray-700 transition-colors">
                      • {item}
                    </div>
                  ))}
                </div>
                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {mention.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Media Highlights */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Media <span className="text-purple-500">Spotlight</span> 📸
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl rounded-2xl p-6 hover:scale-105 transition-all duration-300 border border-gray-300 hover:border-amber-400 group shadow-lg hover:shadow-amber-200/30"
                style={{
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-amber-500 group-hover:text-purple-500 transition-colors">
                    {highlight.icon}
                  </div>
                  <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded-full">
                    {highlight.type}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-amber-500 transition-colors">
                  {highlight.title}
                </h4>
                <p className="text-gray-500 text-sm mb-2">
                  {highlight.platform}
                </p>
                <div className="text-purple-500 font-bold text-sm">
                  {highlight.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Intern Testimonials */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Intern's <span className="text-amber-500">Stories</span> 💌
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 via-white to-amber-50 rounded-2xl p-6 hover:scale-105 transition-all duration-300 border border-gray-300 hover:border-purple-400 shadow-lg hover:shadow-purple-200/30"
                style={{
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
                }}
              >
                {/* Quote */}
                <div className="text-4xl text-amber-500 mb-3">"</div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">
                  {testimonial.quote}
                </p>
                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                  ))}
                </div>
                {/* Author */}
                <div className="text-gray-800 font-semibold">
                  {testimonial.author}
                </div>
                <div className="text-gray-500 text-sm">
                  {testimonial.role}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Fun Stats */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-amber-100 to-purple-100 rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-pulse opacity-20"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    fontSize: `${Math.random() * 15 + 10}px`
                  }}
                >
                  {['📺', '🎤', '📰', '⭐', '💖', '🏆'][Math.floor(Math.random() * 6)]}
                </div>
              ))}
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-6">
                The Numbers Don't Lie 📊
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                {[
                  { label: 'Media Features', value: '15+', icon: '📺' },
                  { label: 'Celebrity Collabs', value: '8+', icon: '⭐' },
                  { label: 'Happy Interns', value: '50+', icon: '💖' },
                  { label: 'Viral Moments', value: '∞', icon: '🚀' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-2 shadow-lg rounded-xl bg-white/60 inline-block">{stat.icon}</div>
                    <div className="text-3xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:animate-pulse transition-colors mb-1 shadow-lg rounded-xl bg-white/60 inline-block">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Sometimes the best recognition comes from the hearts you touch and the smiles you create along the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsSection;