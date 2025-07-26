import React, { useState } from 'react';
import { Music, Headphones, Repeat, Heart, Star, Zap, Coffee } from 'lucide-react';
import Navbar from '../home/Navbar';

const WhyChooseUsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Energetic",
      description: "High-energy solutions that keep your business moving forward",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Unexpected",
      description: "Innovative approaches that surprise and delight your audience",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: <Repeat className="w-8 h-8" />,
      title: "On Repeat",
      description: "Consistent excellence that keeps clients coming back for more",
      color: "from-gray-600 to-gray-800"
    }
  ];

  const deliverables = [
    { icon: <Heart className="w-6 h-6" />, text: "Delight" },
    { icon: <Star className="w-6 h-6" />, text: "Excellence" },
    { icon: <Coffee className="w-6 h-6" />, text: "Doughnuts" }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-25 relative overflow-hidden">
        <Navbar/>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-amber-500/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-purple-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-gray-600/5 to-purple-500/5 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Header Section */}
        <div className="text-center mb-16 transform hover:scale-105 transition-all duration-700">
          <div className="inline-flex items-center gap-3 mb-6 p-4 rounded-2xl bg-gradient-to-r from-gray-600/10 to-purple-500/10 backdrop-blur-sm border border-gray-600/20 hover:border-amber-500/40 transition-all duration-500">
            <Headphones className="w-12 h-12 text-amber-500 animate-bounce" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-600 via-purple-500 to-amber-500 bg-clip-text text-transparent">
              Why Choose Us?
            </h1>
          </div>
          
          <div className="relative group">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-medium">
              Because working with us feels like your favorite playlist: 
              <span className="inline-block ml-2 text-amber-500 font-bold transform group-hover:scale-110 transition-transform duration-300">energetic</span>, 
              <span className="inline-block ml-2 text-purple-500 font-bold transform group-hover:scale-110 transition-transform duration-300 delay-100">unexpected</span>, 
              <span className="inline-block ml-2 text-gray-700 font-bold transform group-hover:scale-110 transition-transform duration-300 delay-200">and on repeat</span>.
            </p>
            
            {/* Floating Music Notes */}
            <div className="absolute -top-8 left-1/4 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
              <div className="text-amber-500 text-2xl animate-bounce">♪</div>
            </div>
            <div className="absolute -top-12 right-1/4 transform translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-500">
              <div className="text-purple-500 text-3xl animate-bounce delay-200">♫</div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 rounded-3xl transition-all duration-500 blur-xl transform group-hover:scale-110"
                   style={{background: `linear-gradient(135deg, ${feature.color.includes('amber') ? '#f59e0b' : feature.color.includes('purple') ? '#8b5cf6' : '#374151'}, transparent)`}}>
              </div>
              
              <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/50 hover:border-amber-500/50 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 group-hover:bg-white/90">
                <div className="flex flex-col items-center text-center">
                  <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-r ${feature.color} text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-700 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Hover Effect Lines */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-20 h-1 bg-gradient-to-r from-amber-500 to-purple-500 rounded-full transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-gray-600/10 via-purple-500/10 to-amber-500/10 backdrop-blur-lg border border-gray-600/20 hover:border-purple-500/40 transition-all duration-500 group">
            <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed font-medium">
              We don't just deliver deliverables — we deliver{' '}
              <span className="font-bold text-purple-500 group-hover:scale-110 inline-block transition-transform duration-300">
                delight
              </span>
              .
            </p>
            
            <div className="flex items-center justify-center gap-6 mb-4">
              {deliverables.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 hover:bg-white/80 border border-gray-200/50 hover:border-amber-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-lg"
                >
                  <span className="text-purple-500 transform hover:rotate-12 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-gray-500 italic group-hover:text-gray-600 transition-colors duration-300">
              (And sometimes doughnuts. Ask nicely.)
            </p>
            
            {/* Floating Donut Animation */}
            <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
              <div className="text-4xl animate-spin" style={{animationDuration: '3s'}}>🍩</div>
            </div>
          </div>
        </div>

        {/* Interactive CTA Button */}
        <div className="text-center mt-12">
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-600 via-purple-500 to-amber-500 text-white font-bold text-lg rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
            <span className="relative z-10">Get Started Today</span>
            <Zap className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
            
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-purple-500 to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;