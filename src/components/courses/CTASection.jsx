import React from 'react';

const CTASection = () => {
  const handleButtonClick = () => {
    // Add click animation
    const button = document.querySelector('.cta-button');
    if (button) {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 150);
    }
    
    // Add your enrollment logic here
    alert('🚀 Ready to start your digital journey? Contact us to secure your spot!');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-violet-500/20 to-slate-700/20 animate-rotate-slow"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-text animate-on-scroll">
          Enrollment Open Now!
        </h2>
        <p className="text-xl md:text-2xl mb-12 opacity-90 animate-on-scroll">
          Seats are limited (because we keep it personal & powerful).<br />
          Wanna be the next digital success story?
        </p>
        <button 
          className="cta-button px-12 py-6 text-xl font-bold bg-gradient-to-r from-amber-500 via-violet-500 to-slate-700 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 transform animate-on-scroll animate-pulse-glow cursor-pointer"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(139, 92, 246, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '';
          }}
          onClick={handleButtonClick}
        >
          Start Your Journey
        </button>
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
      `}</style>
    </section>
  );
};

export default CTASection; 