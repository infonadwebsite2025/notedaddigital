import React from 'react';

const AudienceSection = () => {
  const audiences = [
    { emoji: "💭", title: "Digital Dreamers", color: "from-amber-100 to-amber-50 border-amber-200", delay: 0 },
    { emoji: "🎨", title: "Content Creators", color: "from-violet-100 to-violet-50 border-violet-200", delay: 100 },
    { emoji: "💼", title: "Business Owners", color: "from-slate-100 to-slate-50 border-slate-200", delay: 200 },
    { emoji: "🚀", title: "Marketing Newbies", color: "from-amber-100 to-amber-50 border-amber-200", delay: 300 },
    { emoji: "😤", title: "Tired of Googling", subtitle: '"how to go viral"', color: "from-violet-100 to-violet-50 border-violet-200", delay: 400 }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-slate-700 animate-on-scroll">
          Who's It For?
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className={`animate-on-scroll bg-gradient-to-br ${audience.color} p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-500 hover-lift border-2 group cursor-pointer`}
              style={{ animationDelay: `${audience.delay}ms` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) rotate(2deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) rotate(0deg)';
              }}
            >
              <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotateY-180 transition-all duration-500 animate-bounce-gentle">
                {audience.emoji}
              </div>
              <h3 className="text-lg font-semibold text-slate-700 mb-2 group-hover:text-violet-600 transition-colors duration-300">
                {audience.title}
              </h3>
              {audience.subtitle && (
                <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                  {audience.subtitle}
                </p>
              )}
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
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
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

export default AudienceSection; 