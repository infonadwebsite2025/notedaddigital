import React from 'react';
import { Star } from 'lucide-react';

const HeaderSection = () => (
  <div className="text-center mb-16 relative mt-25">
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-purple-500/10 to-gray-700/10 blur-3xl rounded-full transform -translate-y-8 animate-pulse"></div>
    <div className="relative">
      <div className="flex items-center justify-center mb-6">
        <div className="flex space-x-1 animate-bounce">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
        <span className="text-gray-700 inline-block animate-fadeInUp">Real Results.</span>{' '}
        <span className="text-gray-700 inline-block animate-fadeInUp" style={{ animationDelay: '0.2s' }}>Real People.</span>{' '}
        <span className="bg-gradient-to-r from-yellow-500 via-purple-600 to-gray-700 bg-clip-text text-transparent animate-gradient-x inline-block" style={{ animationDelay: '0.4s' }}>
          Real Revenue.
        </span>
      </h1>
      <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-purple-600 mx-auto rounded-full mb-8 animate-pulse"></div>
      <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
        We don't just talk numbers — we <span className="font-bold text-purple-600 animate-pulse">deliver them</span>.
        <br />
        Here's what our clients have to say about working with{' '}
        <span className="font-bold bg-gradient-to-r from-yellow-600 to-purple-600 bg-clip-text text-transparent">Noted Ad Digital</span> on
        performance marketing, social media campaigns, and{' '}
        <span className="italic font-bold text-yellow-600 relative">
          next-level
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-purple-500 animate-pulse"></div>
        </span> sales growth.
      </p>
    </div>
  </div>
);

export default HeaderSection; 