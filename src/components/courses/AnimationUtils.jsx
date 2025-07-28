import { useEffect } from 'react';

// Custom hook for scroll animations
export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

// Animation data constants
export const ANIMATION_DELAYS = {
  SKILLS: [0, 200, 400, 600],
  FEATURES: [0, 200, 400, 600],
  AUDIENCE: [0, 100, 200, 300, 400]
};

// Color schemes for different sections
export const COLOR_SCHEMES = {
  AMBER: 'from-amber-100 to-amber-50 border-amber-200',
  VIOLET: 'from-violet-100 to-violet-50 border-violet-200',
  SLATE: 'from-slate-100 to-slate-50 border-slate-200'
};

// Gradient backgrounds
export const GRADIENT_BGS = {
  AMBER: 'from-amber-100 to-amber-50',
  VIOLET: 'from-violet-100 to-violet-50',
  SLATE: 'from-slate-100 to-slate-50'
};

// Common animation styles
export const COMMON_ANIMATIONS = `
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
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  .animate-bounce-gentle {
    animation: bounce-gentle 2s ease-in-out infinite;
  }
  
  @keyframes bounce-gentle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
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
`;

// Utility function for staggered animations
export const getStaggeredDelay = (index, baseDelay = 100) => {
  return index * baseDelay;
};

// Utility function for hover effects
export const handleHoverEnter = (element, transform = 'translateY(-8px) scale(1.02)') => {
  element.style.transform = transform;
  element.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
};

export const handleHoverLeave = (element) => {
  element.style.transform = '';
  element.style.boxShadow = '';
}; 