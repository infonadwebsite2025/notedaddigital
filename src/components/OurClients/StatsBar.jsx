import React from 'react';

const StatsBar = ({ stats }) => (
  <div className="mb-16 relative">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={index}
            className="text-center group cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl p-6 group-hover:border-transparent group-hover:shadow-xl transition-all duration-500 group-hover:scale-105">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-yellow-400/20 to-purple-600/20"></div>
              <div className="relative z-10">
                <IconComponent className="w-8 h-8 mx-auto mb-3 text-purple-600 group-hover:animate-spin" />
                <div className="text-3xl font-bold text-gray-700 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default StatsBar; 