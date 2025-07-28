import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: "📺",
      title: "Live Sessions + Recorded Gold",
      description: "Interactive learning with lifetime access to all content",
      bgColor: "from-amber-100 to-amber-50",
      delay: 0
    },
    {
      icon: "🎯",
      title: "Hands-on Tasks & Real Feedback",
      description: "Get personalized guidance on your actual projects",
      bgColor: "from-violet-100 to-violet-50",
      delay: 200
    },
    {
      icon: "🔐",
      title: "Insider Secrets We Actually Use",
      description: "Real agency strategies that drive results",
      bgColor: "from-slate-100 to-slate-50",
      delay: 400
    },
    {
      icon: "🏆",
      title: "Certificate to Flex",
      description: "Show off your skills on LinkedIn & to clients",
      bgColor: "from-amber-100 to-amber-50",
      delay: 600
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-slate-700 animate-on-scroll">
          Learn From the Creators, Not Just Commentators
        </h2>
        <p className="text-xl text-center text-slate-600 mb-16 animate-on-scroll">
          This isn't your usual copy-paste marketing course. You'll get access to:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`animate-on-scroll bg-gradient-to-br ${feature.bgColor} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover-lift flex items-start gap-6 group cursor-pointer`}
              style={{ animationDelay: `${feature.delay}ms` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0) scale(1)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 flex-shrink-0 animate-pulse-glow">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-700 group-hover:text-violet-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
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
      `}</style>
    </section>
  );
};

export default FeaturesSection; 