import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Mail, Phone, MessageCircle, Rocket, Target, Zap } from 'lucide-react';

const Calltoaction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const rotatingTexts = [
    "award-winning magic",
    "viral campaigns", 
    "epic branding",
    "digital dominance"
  ];

  useEffect(() => {
    setIsVisible(true);
    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % rotatingTexts.length);
    }, 2500);
    return () => clearInterval(textInterval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { email, message });
    setEmail('');
    setMessage('');
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Drop us a line",
      description: "hello@notedad.digital",
      color: "text-amber-500",
      bgColor: "bg-amber-100/40",
      action: "Email Now"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Give us a call",
      description: "+91 XXX XXX XXXX",
      color: "text-purple-500", 
      bgColor: "bg-purple-100/40",
      action: "Call Now"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Slide into our DMs",
      description: "@notedad_digital",
      color: "text-amber-500",
      bgColor: "bg-amber-100/40", 
      action: "Message Us"
    }
  ];

  const reasons = [
    {
      icon: <Target className="w-5 h-5" />,
      text: "We hit bullseyes, not just targets"
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      text: "Your growth will be out of this world"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Lightning-fast results that actually last"
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      text: "We add sparkle to everything we touch"
    }
  ];

  return (
    <div className="min-h-screen text-gray-800 py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse opacity-20 shadow-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 20}px`,
              height: `${Math.random() * 30 + 20}px`,
              background: i % 3 === 0
                ? 'linear-gradient(135deg, #f59e0b 40%, #f472b6 100%)'
                : i % 3 === 1
                ? 'linear-gradient(135deg, #8b5cf6 40%, #38bdf8 100%)'
                : 'linear-gradient(135deg, #fbbf24 40%, #a78bfa 100%)',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
              filter: 'blur(2px)'
            }}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Main CTA Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-8">
            <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-amber-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 leading-tight drop-shadow-lg animate-gradient-x">
              Wanna Be Part of Our
              <span className="block bg-gradient-to-r from-pink-500 via-amber-400 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
                Next Win?
              </span>
            </h2>
            <div className="text-2xl md:text-3xl text-purple-500 mb-6 font-semibold animate-fade-in">
              <span>We're always working on the next big thing — and we'd love for you to be part of it.</span>
              <div className="mt-4 h-8 flex items-center justify-center">
                <span>Let's make some </span>
                <span className="mx-2 font-bold text-amber-500 min-w-[250px] transition-all duration-500 animate-pulse">
                  {rotatingTexts[currentText]}
                </span>
                <span> together <span className="animate-bounce">✨</span></span>
              </div>
            </div>
          </div>
        </div>
        {/* Why Choose Us */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-500 to-amber-500 bg-clip-text text-transparent mb-8 animate-gradient-x">
            Why Partner With <span className="text-pink-500">The Best?</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white via-amber-50 to-purple-50 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 border-2 border-amber-200 hover:border-pink-400 group shadow-2xl hover:shadow-2xl relative overflow-hidden"
              >
                <div className={`mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300 ${index % 2 === 0 ? 'text-amber-500' : 'text-purple-500'}`}> 
                  {reason.icon}
                </div>
                <p className="text-gray-700 group-hover:text-pink-600 transition-colors text-lg font-semibold">
                  {reason.text}
                </p>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-pink-300 to-amber-200 rounded-full opacity-30 blur-2xl animate-pulse" />
              </div>
            ))}
          </div>
        </div>
        {/* Contact Methods */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-amber-500 to-purple-500 bg-clip-text text-transparent mb-8 animate-gradient-x">
            Ready to <span className="text-purple-500">Connect?</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`${method.bgColor} rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 border-2 border-purple-200 hover:border-amber-400 group cursor-pointer shadow-2xl hover:shadow-2xl relative overflow-hidden`}
              >
                <div className={`${method.color} mb-4 flex justify-center group-hover:scale-125 transition-transform duration-300 drop-shadow-lg`}> 
                  {method.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-500 transition-colors">
                  {method.title}
                </h4>
                <p className="text-gray-500 mb-4 group-hover:text-purple-500 transition-colors">
                  {method.description}
                </p>
                <button className={`${method.color} font-semibold hover:underline transition-all duration-300 animate-bounce-slow`}> 
                  {method.action} →
                </button>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-200 to-amber-100 rounded-full opacity-20 blur-2xl animate-pulse" />
              </div>
            ))}
          </div>
        </div>
        {/* Contact Form */}
        <div className={`mb-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white bg-opacity-95 backdrop-blur-xl rounded-3xl p-12 border-4 border-gradient-to-r from-amber-400 via-pink-400 to-purple-400 shadow-xl">
            {/* Add shadow to form border */}
            <div className="absolute inset-0 rounded-3xl shadow-2xl pointer-events-none" />
            <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-500 to-amber-500 bg-clip-text text-transparent mb-8 animate-gradient-x">
              Or Just <span className="text-pink-500">Say Hello</span> 👋
            </h3>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border-2 border-amber-200 rounded-xl px-6 py-4 text-gray-800 placeholder-gray-400 focus:border-pink-400 focus:outline-none transition-colors shadow-sm"
                />
                <input
                  type="text"
                  placeholder="Your company/project"
                  className="bg-white border-2 border-purple-200 rounded-xl px-6 py-4 text-gray-800 placeholder-gray-400 focus:border-amber-400 focus:outline-none transition-colors shadow-sm"
                />
              </div>
              <textarea
                placeholder="Tell us about your project... (or just say hi, we love friendly messages!)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full bg-white border-2 border-pink-200 rounded-xl px-6 py-4 text-gray-800 placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors mb-6 resize-none shadow-sm"
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-pink-500 via-amber-400 to-purple-500 text-white px-8 py-4 rounded-xl font-black text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-400/40 flex items-center justify-center gap-2 group animate-gradient-x relative overflow-hidden"
              >
                <span className="relative z-10">Let's Create Magic Together</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-white/20 via-pink-200/20 to-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-shimmer" />
              </button>
            </div>
          </div>
        </div>
        {/* Final CTA Banner */}
        <div className={`text-center transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-pink-200 via-amber-100 to-purple-200 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
            {/* Add shadow to CTA banner border */}
            <div className="absolute inset-0 rounded-3xl shadow-2xl pointer-events-none" />
            {/* Animated Background Confetti */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(40)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-bounce opacity-40"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    fontSize: `${Math.random() * 24 + 12}px`,
                    color: [
                      '#f59e0b', '#8b5cf6', '#f472b6', '#38bdf8', '#fbbf24', '#a78bfa', '#f43f5e', '#22d3ee'
                    ][Math.floor(Math.random() * 8)]
                  }}
                >
                  {['🎉', '✨', '🏆', '💎', '🎯', '⭐', '🚀', '🎈'][Math.floor(Math.random() * 8)]}
                </div>
              ))}
            </div>
            <div className="relative z-10">
              <Sparkles className="w-16 h-16 text-pink-500 mx-auto mb-6 animate-spin" style={{ animationDuration: '4s' }} />
              <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-6 animate-gradient-x">
                Ready to Join the Winner's Circle?
              </h3>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Your competitors are probably reading this right now too. 
                But you're still here, which means you're serious about winning. 
                Let's make it happen.
              </p>
              <button className="bg-gradient-to-r from-pink-500 via-amber-400 to-purple-500 text-white px-12 py-4 rounded-full font-black text-xl hover:bg-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl group animate-gradient-x relative overflow-hidden">
                <span className="relative z-10">I'm Ready to Win</span>
                <span className="ml-2 group-hover:animate-bounce relative z-10">🏆</span>
                <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-white/20 via-pink-200/20 to-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-shimmer" />
              </button>
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            animation: gradient-x 8s ease infinite;
            background-size: 200% 200%;
          }
          @keyframes shimmer {
            0% { left: -100%; }
            100% { left: 100%; }
          }
          .animate-shimmer {
            animation: shimmer 2s linear infinite;
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 3s ease-in-out infinite;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1.2s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Calltoaction;