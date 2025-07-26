import React from 'react';
import { Star, TrendingUp, BarChart3, Zap, Sparkles } from 'lucide-react';

const TestimonialsGrid = ({ testimonials, hoveredCard, setHoveredCard, visibleCards, currentTestimonial, isAutoPlaying, setIsAutoPlaying }) => (
  <div className="space-y-12">
    {testimonials.map((testimonial, index) => {
      const IconComponent = testimonial.icon;
      const isVisible = visibleCards.includes(testimonial.id);
      const isActive = currentTestimonial === index;
      return (
        <div
          key={testimonial.id}
          data-card-id={testimonial.id}
          className={`relative group cursor-pointer transition-all duration-1000 ease-out transform ${
            hoveredCard === testimonial.id 
              ? 'scale-105 -translate-y-4 z-20' 
              : hoveredCard !== null 
                ? 'scale-95 opacity-60' 
                : isActive 
                  ? 'scale-102 -translate-y-1'
                  : 'scale-100'
          } ${
            isVisible ? 'animate-slideInUp opacity-100' : 'opacity-0 translate-y-8'
          }`}
          onMouseEnter={() => {
            setHoveredCard(testimonial.id);
            setIsAutoPlaying(false);
          }}
          onMouseLeave={() => {
            setHoveredCard(null);
            setIsAutoPlaying(true);
          }}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 rounded-3xl">
            <div 
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl animate-pulse"
              style={{
                background: `linear-gradient(135deg, ${testimonial.gradientFrom}30, ${testimonial.gradientTo}30)`
              }}
            ></div>
            {hoveredCard === testimonial.id && (
              <div className="absolute inset-0 rounded-3xl animate-pulse">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full opacity-60 animate-bounce"
                    style={{
                      background: `linear-gradient(45deg, ${testimonial.gradientFrom}, ${testimonial.gradientTo})`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
            )}
          </div>
          {/* Main Card */}
          <div className="relative border-2 border-gray-300 rounded-3xl p-10 transition-all duration-700 group-hover:border-transparent group-hover:shadow-2xl bg-white/90 backdrop-blur-lg overflow-hidden">
            {/* Animated Border */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"
              style={{
                background: `linear-gradient(135deg, ${testimonial.gradientFrom}, ${testimonial.gradientTo})`,
                padding: '2px'
              }}
            >
              <div className="w-full h-full bg-white/95 backdrop-blur-sm rounded-3xl"></div>
            </div>
            <div className="relative z-10">
              {/* Category Badge */}
              <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                <div 
                  className="px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${testimonial.gradientFrom}, ${testimonial.gradientTo})`
                  }}
                >
                  {testimonial.category}
                </div>
              </div>
              {/* Icon and Title */}
              <div className="flex items-center mb-8 group-hover:animate-pulse">
                <div 
                  className="p-4 rounded-2xl mr-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${testimonial.gradientFrom}, ${testimonial.gradientTo})`
                  }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-700 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500 mb-2">
                    "{testimonial.title}"
                  </h3>
                  {/* Star Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 text-yellow-500 fill-current group-hover:animate-spin" 
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Quote */}
              <div className="mb-8 relative">
                <div className="text-6xl text-gray-200 font-serif absolute -top-4 -left-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">"</div>
                <p className="text-xl text-gray-600 leading-relaxed mb-4 pl-8 relative z-10">
                  {testimonial.quote}{' '}
                  <span 
                    className="font-bold text-2xl relative inline-block group-hover:animate-bounce bg-gradient-to-r from-yellow-500 to-purple-600 bg-clip-text text-transparent"
                  >
                    {testimonial.highlight}
                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  </span>
                  {testimonial.quote2 && (
                    <>
                      {' '}{testimonial.quote2}
                    </>
                  )}
                </p>
                <div className="text-6xl text-gray-200 font-serif absolute -bottom-4 -right-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">"</div>
              </div>
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="w-12 h-12 rounded-full mr-4 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${testimonial.gradientFrom}, ${testimonial.gradientTo})`
                    }}
                  >
                    {testimonial.author.charAt(0)}
                  </div>
                  <p className="font-bold text-gray-700 text-xl">
                    {testimonial.author}
                  </p>
                </div>
                {/* Animated Stats Icons */}
                <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-8 group-hover:translate-x-0">
                  <div className="p-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-bounce" style={{ animationDelay: '0.1s' }}>
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-bounce" style={{ animationDelay: '0.2s' }}>
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div className="p-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 animate-bounce" style={{ animationDelay: '0.3s' }}>
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Sparkles */}
            {hoveredCard === testimonial.id && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <Sparkles
                    key={i}
                    className="absolute w-4 h-4 text-yellow-400 animate-ping opacity-75"
                    style={{
                      top: `${20 + (i * 15)}%`,
                      right: `${10 + (i * 5)}%`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      );
    })}
  </div>
);

export default TestimonialsGrid; 