import React from 'react';
import { BarChart3, Play, Sparkles, ArrowRight } from 'lucide-react';

const CTASection = () => (
  <div className="mt-20 space-y-12">
    {/* Want Numbers Like These? */}
    <div className="text-center relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-700/10 via-purple-500/10 to-yellow-400/10 blur-3xl rounded-full animate-pulse"></div>
      <div className="relative bg-white/90 backdrop-blur-lg border-2 border-gray-300 rounded-3xl p-12 group-hover:border-transparent group-hover:shadow-2xl transition-all duration-700 overflow-hidden">
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-gray-700/10 via-purple-600/10 to-yellow-400/10"></div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-yellow-500 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-gray-700 to-purple-600 mr-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-700 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-700 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500">
              Want Numbers Like These?
            </h3>
          </div>
          <p className="text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
            We've helped <span className="font-bold text-purple-600">startups</span>, <span className="font-bold text-yellow-600">legacy brands</span>, <span className="font-bold text-purple-600">influencers</span>, and <span className="font-bold text-yellow-600">ecommerce champs</span> turn clicks into conversions and campaigns into cash flow. 
            <br />
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-yellow-600 bg-clip-text text-transparent">Your success story could be next.</span>
          </p>
          <div className="flex items-center justify-center text-2xl font-bold text-gray-700 group-hover:animate-pulse">
            <div className="p-3 rounded-full bg-gradient-to-r from-yellow-500 to-purple-600 mr-4 animate-pulse shadow-lg">
              <Play className="w-6 h-6 text-white" />
            </div>
            Let's talk results.
          </div>
        </div>
      </div>
    </div>
    {/* Main CTA Button */}
    <div className="text-center">
      <div className="inline-block relative group cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-purple-600 to-gray-700 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse scale-110"></div>
        <button className="relative px-16 py-6 bg-gradient-to-r from-yellow-500 via-purple-600 to-gray-700 text-white font-bold rounded-full text-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 flex items-center space-x-4 animate-bounce">
          <Sparkles className="w-8 h-8 animate-spin" />
          <span>Ready for Your Success Story?</span>
          <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
        </button>
      </div>
    </div>
  </div>
);

export default CTASection; 