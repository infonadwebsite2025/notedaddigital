import React from 'react';

const FloatingElement = ({ delay = 0, duration = 3 }) => (
  <div
    className="absolute w-1 h-1 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full animate-ping opacity-60"
    style={{
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`
    }}
  />
);

const ParticleBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <FloatingElement key={i} delay={i * 0.2} />
    ))}
  </div>
);

export default ParticleBackground; 