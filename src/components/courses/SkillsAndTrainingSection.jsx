import React, { useState, useEffect } from 'react';

const SkillsAndTrainingSection = () => {
  // --- Skills Section Data ---
  const skills = [
    {
      icon: "🎭",
      title: "Social Media Sorcery",
      description: "Reels, reach & results that actually matter",
      color: "from-amber-100 to-amber-50 border-amber-200",
      delay: 0
    },
    {
      icon: "🎯",
      title: "Performance Marketing",
      description: "Ads that sell, not just 'impress'",
      color: "from-violet-100 to-violet-50 border-violet-200",
      delay: 200
    },
    {
      icon: "⚡",
      title: "Content That Converts",
      description: "Because 'likes' don't pay bills",
      color: "from-slate-100 to-slate-50 border-slate-200",
      delay: 400
    },
    {
      icon: "📈",
      title: "Strategy & Scaling",
      description: "From 'small brand' to 'big buzz'",
      color: "from-amber-100 to-amber-50 border-amber-200",
      delay: 600
    }
  ];

  // --- Training Programs Section Data & Logic ---
  const [activeTab, setActiveTab] = useState('45-days');
  const [isVisible, setIsVisible] = useState(false);
  const [animateItems, setAnimateItems] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setAnimateItems(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setAnimateItems(false);
    const timer = setTimeout(() => setAnimateItems(true), 200);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const programs = {
    '45-days': {
      title: '45 DAYS',
      subtitle: 'Foundation Program',
      color: '#f59e0b',
      curriculum: [
        '🚀 Digital Marketing Fundamentals',
        '🔍 SEO Basics & Optimization',
        '📱 Social Media Page Setup & Management',
        '💡 Digital Marketing Strategies',
        '💻 Web Development Basics',
        '📝 Content Marketing Essentials',
        '🎯 Google Ads Knowledge',
        '📊 PowerPoint Presentation Skills',
        '💼 Interview Presentation Techniques'
      ]
    },
    '3-months': {
      title: '3 MONTHS',
      subtitle: 'Advanced Certification',
      color: '#8b5cf6',
      curriculum: [
        '🎯 Complete Digital Marketing Mastery',
        '🔍 SEO Advanced (On-page & Off-page)',
        '📱 Social Media Page Setup & Strategy',
        '📈 Facebook & Instagram Ad Account Setup',
        '💻 Professional Web Development',
        '📝 Content Marketing Strategies',
        '🎨 Canva Design & Graphics',
        '🎯 Google Ad Account Setup & Management',
        '🏆 Digital Marketing Certification',
        '📊 Advanced PowerPoint Presentation'
      ]
    },
    '6-months': {
      title: '6 MONTHS',
      subtitle: 'Professional Mastery',
      color: '#374151',
      curriculum: [
        '🌟 Full Digital Marketing Program',
        '🔍 Advanced SEO Techniques',
        '📱 Complete Social Media Account Management',
        '📋 Strategic Planning & Implementation',
        '🎯 Facebook & Google Ads Account Setup',
        '💻 Professional Web Development',
        '📝 Advanced Content Marketing',
        '🎨 Adobe Photoshop Mastery',
        '🏆 Industry Certification',
        '🛠️ Live Project Implementation',
        '💼 Complete Interview Preparation',
        '📊 Professional PowerPoint Presentations'
      ]
    }
  };

  const handleTabClick = (tabId) => setActiveTab(tabId);
  const currentProgram = programs[activeTab];

  return (
    <>
      {/* --- Skills Section --- */}
      <section className="pt-4 pb-10 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-slate-700 relative animate-on-scroll">
            What You'll Master
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-500 via-violet-500 to-slate-700 rounded-full animate-pulse-glow"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`animate-on-scroll bg-gradient-to-br ${skill.color} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift border-2 group cursor-pointer`}
                style={{ animationDelay: `${skill.delay}ms` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.05) rotateY(5deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
                }}
              >
                <div className="text-5xl mb-6 transition-all duration-300 emoji-float">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-700 group-hover:text-violet-600 transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
          }
          .animate-on-scroll.animate-fade-in-up {
            opacity: 1;
            transform: translateY(0);
          }
          .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }
          @keyframes pulse-glow {
            0%, 100% { 
              box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
              transform: scale(1);
            }
            50% { 
              box-shadow: 0 0 40px rgba(139, 92, 246, 0.6);
              transform: scale(1.05);
            }
          }
          .hover-lift {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .hover-lift:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          }
          .emoji-float {
            animation: emoji-float 3s ease-in-out infinite;
          }
          @keyframes emoji-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </section>

      {/* --- Training Programs Section --- */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-5 animate-pulse"
            style={{
              background: `radial-gradient(circle, ${currentProgram.color}, transparent)`,
              animation: 'float 6s ease-in-out infinite'
            }}
          ></div>
          <div 
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5"
            style={{
              background: `radial-gradient(circle, #8b5cf6, transparent)`,
              animation: 'float 8s ease-in-out infinite reverse'
            }}
          ></div>
        </div>
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .shimmer {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            background-size: 200% 100%;
            animation: shimmer 2s infinite;
          }
        `}</style>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header Section */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>          
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-wide">
              <span 
                className="bg-gradient-to-r from-gray-700 via-purple-600 to-amber-500 bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(45deg, #374151, #8b5cf6, #f59e0b)',
                  backgroundSize: '200% auto',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}
              >
                TRAINING PROGRAMS WE OFFER
              </span>
            </h2>
            <div 
              className="w-32 h-1.5 mx-auto mb-8 rounded-full"
              style={{
                background: `linear-gradient(90deg, #f59e0b, #8b5cf6, #374151)`,
                animation: 'shimmer 2s infinite'
              }}
            ></div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Every student is taught by <span className="text-purple-600 font-bold">highly experienced</span> digital marketer individually for more <span className="text-amber-500 font-bold">precise learning</span>.<br/>
              The students receive the <span className="text-gray-700 font-bold">best guidance</span> for making a career for themselves in digital marketing.
            </p>
          </div>

          {/* Program Duration Tabs */}
          <div className={`flex justify-center mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="flex bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
              {Object.keys(programs).map((tabId, index) => (
                <button
                  key={tabId}
                  onClick={() => handleTabClick(tabId)}
                  className={`px-10 py-5 text-xl font-bold focus:outline-none transition-all duration-500 relative group ${
                    activeTab === tabId
                      ? 'text-white shadow-lg transform scale-105'
                      : 'text-gray-700 bg-transparent hover:bg-gray-50 hover:scale-102'
                  }`}
                  style={{
                    borderRight: index !== Object.keys(programs).length - 1 ? '1px solid #eee' : 'none',
                    background: activeTab === tabId 
                      ? `linear-gradient(135deg, ${programs[tabId].color}, ${programs[tabId].color}cc)` 
                      : 'transparent'
                  }}
                >
                  <span className="relative z-10">{programs[tabId].title}</span>
                  {activeTab !== tabId && (
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-300"
                      style={{background: programs[tabId].color}}
                    ></div>
                  )}
                  {activeTab === tabId && (
                    <div className="absolute inset-0 shimmer"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Course Content Box */}
          <div className={`flex justify-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div 
              className="bg-white border-2 rounded-xl w-full max-w-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group cursor-pointer"
              style={{
                borderColor: currentProgram.color,
                background: `linear-gradient(135deg, white, ${currentProgram.color}05)`
              }}
            >
              <div 
                className="absolute top-0 left-0 w-full h-1 transition-all duration-500 group-hover:h-2" 
                style={{background: `linear-gradient(90deg, #f59e0b, #8b5cf6, #374151)`}}
              ></div>
              {/* Animated Background on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-all duration-500"
                style={{background: `linear-gradient(135deg, ${currentProgram.color}, transparent)`}}
              ></div>
              <ul className="list-none space-y-3 relative z-10">
                {programs[activeTab].curriculum.map((item, idx) => (
                  <li 
                    key={idx} 
                    className={`flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 transform group cursor-pointer ${
                      animateItems ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`}
                    style={{
                      transitionDelay: `${idx * 100}ms`,
                      animation: animateItems ? `slideUp 0.6s ease-out ${idx * 100}ms both` : 'none'
                    }}
                  >
                    <div 
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${currentProgram.color}, ${currentProgram.color}80)`,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                      }}
                    >
                      <span className="text-white text-xs font-bold transition-all duration-300 group-hover:scale-110">
                        {idx + 1}
                      </span>
                    </div>
                    <span className="text-base text-gray-800 font-semibold leading-relaxed transition-all duration-300 group-hover:text-purple-600 group-hover:font-bold">
                      {item}
                    </span>
                    {/* Animated Checkmark on Hover */}
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <svg 
                        className="w-5 h-5 text-green-500" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {/* Progress Bar */}
                    <div 
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${currentProgram.color}, ${currentProgram.color}80)`,
                        width: '0%',
                        animation: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.width = '100%';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.width = '0%';
                      }}
                    ></div>
                  </li>
                ))}
              </ul>
              {/* Floating Elements on Box Hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
                <div 
                  className="w-8 h-8 rounded-full animate-pulse"
                  style={{background: `linear-gradient(45deg, ${currentProgram.color}, transparent)`}}
                ></div>
              </div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:-rotate-12">
                <div 
                  className="w-6 h-6 rounded-full animate-ping"
                  style={{background: `linear-gradient(45deg, #8b5cf6, transparent)`}}
                ></div>
              </div>
            </div>
          </div>

          {/* Register Now Button */}
          <div className={`flex justify-center mt-12 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfL8Ev7S1FPWOD0wX8wOfOub6XdIOgQNHvxmXif3lIFv5VIqA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-16 py-5 text-xl font-bold rounded-xl shadow-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-3xl relative overflow-hidden inline-block"
              style={{
                background: `linear-gradient(135deg, #374151, #8b5cf6, #f59e0b)`,
                backgroundSize: '200% auto',
                color: 'white',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.animation = 'shimmer 1s infinite';
              }}
              onMouseLeave={(e) => {
                e.target.style.animation = 'none';
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                REGISTER NOW
                <svg 
                  className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-amber-500 to-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </a>
          </div>

          {/* Additional Features */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {[
              {
                title: 'Individual Attention',
                description: 'One-on-one mentoring with industry experts',
                color: '#f59e0b',
                icon: '👨‍🏫'
              },
              {
                title: 'Industry Certification',
                description: 'Recognized certificates to boost your career',
                color: '#8b5cf6',
                icon: '🏆'
              },
              {
                title: 'Practical Projects',
                description: 'Hands-on experience with real-world campaigns',
                color: '#374151',
                icon: '🚀'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100"
              >
                <div 
                  className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-2xl transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                    border: `2px solid ${feature.color}30`
                  }}
                >
                  {feature.icon}
                </div>
                <h4 className="font-bold text-xl text-gray-800 mb-3">{feature.title}</h4>
                <p className="text-gray-600 font-medium leading-relaxed">{feature.description}</p>
                <div 
                  className="w-full h-1 mt-4 rounded-full transition-all duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${feature.color}, ${feature.color}80)`,
                    opacity: 0.5
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsAndTrainingSection; 