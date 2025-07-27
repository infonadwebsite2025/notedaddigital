import React, { useState, useEffect } from 'react';
import { ChefHat, Coffee, Lightbulb, Sparkles, Pizza, Users, Brain, Rocket, Zap, Star } from 'lucide-react';

const NadFoodCulture = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fadeClass, setFadeClass] = useState('opacity-100');

  const colors = {
    slate: '#374151',
    amber: '#f59e0b', 
    purple: '#8b5cf6'
  };

  const mealTypes = [
    {
      id: 1,
      title: "Breakfast?",
      subtitle: "Brainstorming.",
      icon: <Lightbulb className="w-12 h-12" />,
      description: "Start your day with creative energy and innovative thinking sessions",
      color: colors.amber,
      gradient: `linear-gradient(135deg, ${colors.amber}30, ${colors.slate}20, ${colors.amber}10)`,
      accentIcon: <Brain className="w-6 h-6" />,
      emoji: "🧠",
      particles: 12,
      bgPattern: `radial-gradient(circle at 25% 25%, ${colors.amber}20 0%, transparent 50%), radial-gradient(circle at 75% 75%, ${colors.amber}15 0%, transparent 50%)`
    },
    {
      id: 2,
      title: "Lunch?",
      subtitle: "Launch planning.",
      icon: <Users className="w-12 h-12" />,
      description: "Collaborate over meals and transform ideas into actionable strategies",
      color: colors.purple,
      gradient: `linear-gradient(135deg, ${colors.purple}30, ${colors.slate}20, ${colors.purple}10)`,
      accentIcon: <Rocket className="w-6 h-6" />,
      emoji: "🚀",
      particles: 10,
      bgPattern: `radial-gradient(circle at 30% 70%, ${colors.purple}20 0%, transparent 50%), radial-gradient(circle at 80% 30%, ${colors.purple}15 0%, transparent 50%)`
    },
    {
      id: 3,
      title: "Snacks?",
      subtitle: "Strategy sessions.",
      icon: <ChefHat className="w-12 h-12" />,
      description: "Fuel strategic thinking with perfectly timed nutrition and focus",
      color: colors.amber,
      gradient: `linear-gradient(135deg, ${colors.amber}25, ${colors.purple}20, ${colors.slate}15)`,
      accentIcon: <Sparkles className="w-6 h-6" />,
      emoji: "⚡",
      particles: 15,
      bgPattern: `radial-gradient(circle at 20% 80%, ${colors.amber}20 0%, transparent 50%), radial-gradient(circle at 70% 20%, ${colors.purple}15 0%, transparent 50%)`
    }
  ];

  // Fully automatic carousel
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setFadeClass('opacity-50');
          setTimeout(() => {
            setCurrentSlide(current => (current + 1) % mealTypes.length);
            setFadeClass('opacity-100');
          }, 200);
          return 0;
        }
        return prev + 0.8; // Slower progress for 4 seconds total
      });
    }, 32); // Smooth 60fps progress
    
    return () => clearInterval(progressInterval);
  }, [currentSlide]);

  const FloatingParticle = ({ delay, color, size, index, pattern }) => (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        backgroundColor: color,
        width: `${size}px`,
        height: `${size}px`,
        left: `${10 + (index * 8) % 80}%`,
        top: `${5 + (index * 12) % 90}%`,
        opacity: 0.6,
        animation: `floatComplex ${3 + (index % 3)}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        boxShadow: `0 0 ${size * 2}px ${color}60`,
      }}
    />
  );

  const currentMeal = mealTypes[currentSlide];

  return (
    <div className="min-h-screen p-6 relative overflow-hidden">
      {/* Global floating particles */}
      {[...Array(20)].map((_, i) => (
        <FloatingParticle
          key={`global-${i}`}
          delay={i * 0.3}
          color={i % 2 === 0 ? colors.amber : colors.purple}
          size={Math.random() * 4 + 2}
          index={i}
        />
      ))}

      <div className="max-w-5xl mx-auto relative">
        {/* Enhanced Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-4 mb-6 relative">
            <div className="relative">
              <Pizza 
                className="w-10 h-10" 
                style={{ 
                  color: colors.amber,
                  filter: `drop-shadow(0 0 20px ${colors.amber}80)`,
                  animation: 'spinGlow 6s linear infinite'
                }}
              />
              <div 
                className="absolute -inset-3 rounded-full opacity-30 animate-ping"
                style={{ backgroundColor: colors.amber }}
              />
            </div>
            
            <Sparkles 
              className="w-8 h-8" 
              style={{ 
                color: colors.purple,
                filter: `drop-shadow(0 0 15px ${colors.purple}70)`,
                animation: 'sparkleFloat 4s ease-in-out infinite'
              }}
            />
            
            <Star 
              className="w-6 h-6" 
              style={{ 
                color: colors.amber,
                animation: 'twinkle 2s ease-in-out infinite',
                animationDelay: '1s'
              }}
            />
          </div>
          
          <h1 
            className="text-5xl font-black mb-4 relative"
            style={{ 
              background: `linear-gradient(45deg, ${colors.amber}, ${colors.purple}, ${colors.amber}, ${colors.purple})`,
              backgroundSize: '400% 400%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              animation: 'gradientWave 6s ease-in-out infinite'
            }}
          >
            NAD Food Culture
            <div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${colors.amber}, ${colors.purple}, ${colors.amber})`,
                animation: 'breathe 3s ease-in-out infinite'
              }}
            />
          </h1>
          
          <p className="text-xl font-semibold" style={{ color: colors.slate }}>
            Powered by{' '}
            <span 
              className="font-black"
              style={{ 
                color: colors.amber,
                textShadow: `0 0 10px ${colors.amber}50`
              }}
            >
              Pizza
            </span>
            {' & '}
            <span 
              className="font-black"
              style={{ 
                color: colors.purple,
                textShadow: `0 0 10px ${colors.purple}50`
              }}
            >
              Ideas
            </span>
          </p>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-12">
          <div 
            className="inline-block border-2 rounded-2xl px-8 py-4 backdrop-blur-sm relative overflow-hidden"
            style={{ 
              backgroundColor: `${colors.slate}12`,
              borderColor: `${currentMeal.color}40`,
              transition: 'all 0.5s ease'
            }}
          >
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: currentMeal.bgPattern,
                animation: 'patternShift 8s linear infinite'
              }}
            />
            <p className="text-2xl font-bold relative z-10" style={{ color: colors.slate }}>
              We don't <span className="line-through text-red-500 opacity-70">skip</span> meals.{' '}
              <span 
                style={{ color: colors.amber }} 
                className="font-black"
              >
                We create them.
              </span>
            </p>
          </div>
        </div>

        {/* Enhanced Auto Carousel */}
        <div className="relative mb-12">
          {/* Dynamic particles for current slide */}
          {[...Array(currentMeal.particles)].map((_, i) => (
            <FloatingParticle
              key={`current-${currentSlide}-${i}`}
              delay={i * 0.15}
              color={currentMeal.color}
              size={Math.random() * 8 + 4}
              index={i}
            />
          ))}

          <div className="overflow-hidden rounded-3xl relative">
            {/* Enhanced progress bar */}
            <div className="absolute top-0 left-0 w-full h-2 z-20 bg-gray-200 bg-opacity-20">
              <div 
                className="h-full rounded-full transition-all duration-75 relative overflow-hidden"
                style={{
                  width: `${progress}%`,
                  background: `linear-gradient(90deg, ${currentMeal.color}, ${currentMeal.color}CC, ${currentMeal.color})`,
                  boxShadow: `0 0 20px ${currentMeal.color}80, inset 0 0 20px ${currentMeal.color}40`
                }}
              >
                <div 
                  className="absolute inset-0 opacity-50"
                  style={{
                    background: `linear-gradient(90deg, transparent, white, transparent)`,
                    animation: 'progressShine 2s ease-in-out infinite'
                  }}
                />
              </div>
            </div>

            <div 
              className={`flex transition-all duration-700 ease-out ${fadeClass}`}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {mealTypes.map((meal, index) => (
                <div key={meal.id} className="w-full flex-shrink-0 px-4">
                  <div 
                    className="relative rounded-2xl p-10 text-center border-2 backdrop-blur-sm overflow-hidden"
                    style={{ 
                      background: meal.gradient,
                      borderColor: `${meal.color}60`,
                      minHeight: '350px',
                      boxShadow: currentSlide === index ? 
                        `0 25px 50px ${meal.color}25, inset 0 0 50px ${meal.color}10` : 
                        'none',
                      transform: currentSlide === index ? 'scale(1.02)' : 'scale(1)',
                      transition: 'all 0.7s ease'
                    }}
                  >
                    {/* Animated background layers */}
                    <div 
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: meal.bgPattern,
                        animation: 'backgroundFloat 10s ease-in-out infinite'
                      }}
                    />
                    
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: `conic-gradient(from 0deg at 50% 50%, ${meal.color}20, transparent, ${meal.color}15, transparent)`,
                        animation: 'conicRotate 15s linear infinite'
                      }}
                    />

                    {/* Corner effects */}
                    <div className="absolute top-6 right-6 opacity-80">
                      <div 
                        style={{ 
                          color: meal.color,
                          filter: `drop-shadow(0 0 10px ${meal.color}70)`,
                          animation: 'iconPulse 3s ease-in-out infinite'
                        }}
                      >
                        {meal.accentIcon}
                      </div>
                    </div>

                    <div 
                      className="absolute top-6 left-6 text-2xl"
                      style={{ animation: 'emojiDance 4s ease-in-out infinite' }}
                    >
                      {meal.emoji}
                    </div>

                    {/* Main icon with enhanced effects */}
                    <div className="mb-8 relative z-10">
                      <div 
                        className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 relative"
                        style={{ backgroundColor: `${meal.color}25` }}
                      >
                        {/* Multiple glow layers */}
                        <div 
                          className="absolute inset-0 rounded-full opacity-60 blur-xl"
                          style={{ backgroundColor: meal.color }}
                        />
                        <div 
                          className="absolute inset-0 rounded-full opacity-40 blur-lg animate-pulse"
                          style={{ backgroundColor: meal.color }}
                        />
                        <div 
                          style={{ 
                            color: meal.color, 
                            position: 'relative',
                            filter: `drop-shadow(0 0 15px ${meal.color}80)`,
                            animation: 'iconFloat 4s ease-in-out infinite'
                          }}
                        >
                          {meal.icon}
                        </div>
                      </div>
                    </div>

                    {/* Enhanced content */}
                    <div className="relative z-10">
                      <h3 
                        className="text-4xl font-bold mb-4"
                        style={{ 
                          color: colors.slate,
                          textShadow: `0 2px 4px ${colors.slate}30`
                        }}
                      >
                        {meal.title}
                      </h3>
                      
                      <p 
                        className="text-2xl font-bold mb-6"
                        style={{ 
                          color: meal.color,
                          textShadow: `0 0 20px ${meal.color}40`,
                          animation: 'textGlow 3s ease-in-out infinite'
                        }}
                      >
                        {meal.subtitle}
                      </p>
                      
                      <p 
                        className="text-lg leading-relaxed max-w-sm mx-auto"
                        style={{ color: `${colors.slate}DD` }}
                      >
                        {meal.description}
                      </p>
                    </div>

                    {/* Enhanced bottom accent */}
                    <div 
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-2 rounded-full"
                      style={{ 
                        background: `linear-gradient(90deg, transparent, ${meal.color}, transparent)`,
                        boxShadow: `0 0 20px ${meal.color}80`,
                        animation: 'bottomGlow 2s ease-in-out infinite'
                      }}
                    />

                    {/* Side light strips */}
                    <div 
                      className="absolute left-0 top-1/4 w-1 h-1/2 rounded-full opacity-70"
                      style={{ 
                        backgroundColor: meal.color,
                        boxShadow: `0 0 15px ${meal.color}60`
                      }}
                    />
                    <div 
                      className="absolute right-0 top-1/4 w-1 h-1/2 rounded-full opacity-70"
                      style={{ 
                        backgroundColor: meal.color,
                        boxShadow: `0 0 15px ${meal.color}60`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center">
          <div 
            className="inline-block border-2 rounded-2xl px-8 py-6 backdrop-blur-sm relative overflow-hidden"
            style={{ 
              backgroundColor: `${colors.slate}10`,
              borderColor: `${currentMeal.color}50`,
              transition: 'all 0.5s ease'
            }}
          >
            {/* Dynamic background effect */}
            <div 
              className="absolute inset-0 opacity-15"
              style={{
                background: `linear-gradient(45deg, ${colors.amber}20, ${colors.purple}20, ${colors.amber}20)`,
                animation: 'backgroundWave 8s ease-in-out infinite'
              }}
            />

            <div className="flex items-center justify-center gap-4 mb-4 relative z-10">
              <Coffee 
                className="w-8 h-8" 
                style={{ 
                  color: colors.amber,
                  filter: `drop-shadow(0 0 15px ${colors.amber}70)`,
                  animation: 'coffeeFloat 3s ease-in-out infinite'
                }} 
              />
              <Sparkles 
                className="w-6 h-6" 
                style={{ 
                  color: colors.purple,
                  animation: 'sparkleRotate 4s linear infinite'
                }} 
              />
              <Zap 
                className="w-7 h-7" 
                style={{ 
                  color: colors.amber,
                  animation: 'zapPulse 2s ease-in-out infinite',
                  animationDelay: '0.5s'
                }} 
              />
            </div>
            
            <p className="text-xl font-bold mb-2 relative z-10" style={{ color: colors.slate }}>
              Some agencies offer{' '}
              <span 
                style={{ 
                  color: colors.amber,
                  textShadow: `0 0 10px ${colors.amber}50`
                }}
              >
                free coffee
              </span>
            </p>
            
            <p className="text-xl font-bold relative z-10" style={{ color: colors.slate }}>
              We offer a{' '}
              <span 
                className="font-black text-2xl"
                style={{ 
                  background: `linear-gradient(45deg, ${colors.purple}, ${colors.amber}, ${colors.purple})`,
                  backgroundSize: '300% 300%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  animation: 'textShimmer 4s ease-in-out infinite'
                }}
              >
                full-course experience
              </span>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatComplex {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.6; }
          25% { transform: translateY(-15px) translateX(10px) rotate(90deg); opacity: 0.8; }
          50% { transform: translateY(-10px) translateX(-5px) rotate(180deg); opacity: 0.4; }
          75% { transform: translateY(-20px) translateX(15px) rotate(270deg); opacity: 0.7; }
        }
        @keyframes spinGlow {
          0% { transform: rotate(0deg); filter: drop-shadow(0 0 20px #f59e0b80); }
          50% { transform: rotate(180deg); filter: drop-shadow(0 0 30px #f59e0bCC); }
          100% { transform: rotate(360deg); filter: drop-shadow(0 0 20px #f59e0b80); }
        }
        @keyframes sparkleFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.8); }
        }
        @keyframes gradientWave {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes breathe {
          0%, 100% { width: 6rem; opacity: 0.8; }
          50% { width: 8rem; opacity: 1; }
        }
        @keyframes patternShift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
        }
        @keyframes progressShine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes backgroundFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10px, -10px) scale(1.05); }
        }
        @keyframes conicRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes iconPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes emojiDance {
          0%, 100% { transform: rotate(0deg) translateY(0px); }
          25% { transform: rotate(5deg) translateY(-3px); }
          75% { transform: rotate(-5deg) translateY(-2px); }
        }
        @keyframes iconFloat {
          0%, 100% { transform: rotate(0deg) translateY(0px); }
          50% { transform: rotate(10deg) translateY(-5px); }
        }
        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 20px currentColor40; }
          50% { text-shadow: 0 0 30px currentColor60, 0 0 40px currentColor40; }
        }
        @keyframes bottomGlow {
          0%, 100% { box-shadow: 0 0 20px currentColor80; }
          50% { box-shadow: 0 0 30px currentColor, 0 0 40px currentColor60; }
        }
        @keyframes backgroundWave {
          0%, 100% { transform: translateX(0) skewX(0deg); }
          50% { transform: translateX(20px) skewX(5deg); }
        }
        @keyframes coffeeFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
        }
        @keyframes sparkleRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes zapPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
        @keyframes textShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};

export default NadFoodCulture;