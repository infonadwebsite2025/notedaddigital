import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  const baseImages = [
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    'https://images.unsplash.com/photo-1493612276216-ee3925520721',
    'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  ];

  const images = [...baseImages, ...baseImages]; // Duplicate for seamless scroll
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        if (prev >= baseImages.length) {
          containerRef.current.style.transition = 'none';
          setTimeout(() => {
            containerRef.current.style.transition = 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)';
            setCurrent(1);
          }, 30);
          return 0;
        }
        return prev + 1;
      });
    }, 1500); // Faster carousel speed

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="font-sans text-gray-700 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[320px] flex items-center justify-center bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: `url('${images[0]}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700/80 via-gray-700/60 to-purple-600/40 z-0" />
        <div className="relative z-10 px-12 py-10 rounded-2xl backdrop-blur-sm bg-white/10 shadow-2xl text-center max-w-3xl mx-4 hero-float">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-2xl hero-title">
            CONTACT US
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-purple-600 mx-auto my-4 rounded-full animate-pulse"></div>
          <p className="text-white/90 text-lg mt-6 font-medium drop-shadow-lg">
            <a href="/" className="hover:text-amber-400 transition-colors duration-300 text-white/80">Home</a> 
            <span className="mx-2 text-amber-400">•</span> 
            Contact Us
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-28 px-6 md:px-32">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          {/* Left Info Section */}
          <div className="lg:w-1/2 space-y-14">
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold text-gray-700 leading-tight tracking-tight">
                <span className="inline-block hover:scale-105 transition-transform duration-500 ease-out hover:text-amber-600">
                  Let's Connect
                </span>
                <span className="text-purple-600 ml-3 hover:text-amber-500 transition-colors duration-500 block md:inline">
                  & Create Magic Together ✨
                </span>
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-purple-600 rounded-full animate-pulse"></div>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p className="text-xl font-medium transform hover:translate-x-2 transition-transform duration-300">
                Got a project? A <span className="text-amber-600 font-semibold hover:text-purple-600 transition-colors duration-300">wild idea</span>? 
                Or just want to say hi? <br />
                We're all ears <span className="italic text-purple-600">(and screens)</span>.
              </p>
              <p className="text-lg hover:text-gray-700 transition-colors duration-300">
                Whether you're ready to <span className="font-semibold text-amber-600 hover:text-purple-600 transition-colors duration-300">boost your brand</span>,
                build something awesome, or need help with <span className='font-bold text-purple-600'>digital marketing</span> —
                we're just one message away.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="contact-card group">
                <div className="p-6 rounded-2xl shadow-lg bg-white border-l-4 border-amber-500 hover:border-purple-600 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
                  <p className="text-xl font-bold text-gray-700 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    <span className="text-2xl mr-2 float-emoji">📬</span> Get In Touch
                  </p>
                  <div className="space-y-2 text-gray-600">
                    <p>Email: 
                      <a href="mailto:md@notedaddigital.com" className="ml-2 font-semibold hover:text-amber-600 transition-colors duration-300 hover:underline">
                        md@notedaddigital.com
                      </a> /
                      <a href="mailto:ceo@notedaddigital.com" className="ml-1 font-semibold hover:text-amber-600 transition-colors duration-300 hover:underline">
                        ceo@notedaddigital.com
                      </a>
                    </p>
                    <p>Call: 
                      <a href="tel:9781043441" className="ml-2 font-semibold hover:text-purple-600 transition-colors duration-300 hover:underline">
                        9781043441
                      </a> /
                      <a href="tel:7009704696" className="ml-1 font-semibold hover:text-purple-600 transition-colors duration-300 hover:underline">
                        7009704696
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-card group">
                <div className="p-6 rounded-2xl shadow-lg bg-white border-l-4 border-purple-600 hover:border-amber-500 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
                  <p className="text-xl font-bold text-gray-700 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    <span className="text-2xl mr-2 float-emoji">📍</span> Visit Us
                  </p>
                  <p className="text-gray-600 mb-2">
                    2nd Floor, G Square Building, Maqsudan, Jalandhar, Punjab, 144008
                  </p>
                  <p className="italic text-sm text-purple-600 mb-4">(But we vibe globally 🌍)</p>
                  <a 
                    href="https://www.google.com/maps?q=G+Square+Building,+Maqsudan,+Jalandhar,+Punjab+144008" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 border-2 border-gray-700 text-gray-700 font-semibold px-4 py-2 rounded-full hover:bg-gray-700 hover:text-white hover:scale-105 transition-all duration-300 hover:shadow-lg map-btn"
                  >
                    <span className="text-lg">📌</span> View on Map
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <div className="bg-gradient-to-br from-gray-50 to-purple-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-700 mb-6 hover:text-purple-600 transition-colors duration-300 flex items-center gap-3">
                    <span className="text-3xl float-emoji">⏰</span> Business Hours
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { day: 'Mon – Fri:', time: '10:00 AM – 6:00 PM', color: 'bg-green-500', emoji: '💼' },
                      { day: 'Saturday:', time: 'Pizza + Planning Mode', color: 'bg-amber-500', emoji: '🍕' },
                      { day: 'Sunday:', time: 'Creativity Recharging', color: 'bg-purple-500', emoji: '💡' }
                    ].map((item, index) => (
                      <li key={index} className="flex items-center group transition-all duration-300 cursor-default hover:translate-x-3 hover:scale-[1.02]">
                        <span className={`w-3 h-3 ${item.color} rounded-full mr-4 group-hover:scale-150 transition-transform duration-300`}></span>
                        <span className="font-semibold text-gray-700 mr-2">{item.day}</span>
                        <span className="text-gray-600 mr-2">{item.time}</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.emoji}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Form Section */}
          <div className="lg:w-1/2 max-w-2xl mx-auto">
            <div className="form-container bg-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-purple-600 to-gray-700"></div>
              
              <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">
                <span className="text-4xl mr-2 float-emoji">✨</span>
                Let's Start Something Amazing
              </h2>

              <div className="space-y-6">
                {[
                  { field: 'name', type: 'text', placeholder: 'Your Name', emoji: '👤' },
                  { field: 'email', type: 'email', placeholder: 'Your Email', emoji: '✉️' },
                  { field: 'mobile', type: 'tel', placeholder: 'Your Mobile Number', emoji: '📱' }
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <input
                      type={item.type}
                      name={item.field}
                      placeholder={item.placeholder}
                      className="input-field w-full p-5 pl-14 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-purple-600 transition-all duration-300 hover:border-amber-500 hover:shadow-md text-gray-700 bg-gray-50 focus:bg-white"
                      required
                    />
                    <span className="input-emoji absolute left-5 top-1/2 -translate-y-1/2 text-xl transition-all duration-500 group-hover:scale-125 group-focus-within:scale-125 group-focus-within:-translate-y-8 group-hover:-translate-y-8">
                      {item.emoji}
                    </span>
                  </div>
                ))}
                
                <div className="relative group">
                  <textarea
                    name="message"
                    placeholder="Tell us about your project (go wild with details!)"
                    rows="6"
                    className="input-field w-full p-5 pl-14 border-2 border-gray-200 rounded-2xl resize-none focus:outline-none focus:border-purple-600 transition-all duration-300 hover:border-amber-500 hover:shadow-md text-gray-700 bg-gray-50 focus:bg-white"
                    required
                  ></textarea>
                  <span className="input-emoji absolute left-5 top-5 text-xl transition-all duration-500 group-hover:scale-125 group-focus-within:scale-125 group-focus-within:-translate-y-6 group-hover:-translate-y-6">
                    💭
                  </span>
                </div>
                
                <button
                  type="submit"
                  className="submit-btn w-full bg-gradient-to-r from-gray-700 via-amber-500 to-purple-600 text-white py-4 px-8 rounded-2xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-lg font-bold relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Let's Create Magic 
                    <span className="text-xl group-hover:animate-bounce">🚀</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-gray-700 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Fast Carousel */}
      <section className="my-16 max-w-7xl mx-auto overflow-hidden rounded-2xl">
        <div
          ref={containerRef}
          className="flex gap-3 px-3"
          style={{
            transform: `translateX(-${current * 227}px)`,
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          {images.map((src, idx) => (
            <div key={idx} className="relative group cursor-pointer">
              <img
                src={src}
                alt={`Slide ${idx}`}
                className="w-[224px] h-[320px] flex-shrink-0 rounded-xl object-cover transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-700/60 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/9781043441"
        className="fixed bottom-8 right-8 z-50 whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-green-500 p-4 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 group">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12"
          />
        </div>
      </a>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16 px-6 md:px-24">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">
              Digital Agency
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Get started & grow with <br />
              <span className="text-amber-400 font-semibold">The Best 360º Marketing</span> Agency in Jalandhar
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-amber-400 flex items-center gap-2">
              <span className="text-xl">📍</span> Address
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-white transition-colors duration-300">
                <i className="fas fa-map-marker-alt text-amber-400 mr-3"></i>
                2nd Floor, G Square Building, Maqsudan, Jalandhar, Punjab, 144008
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <i className="fas fa-phone-alt text-purple-400 mr-3"></i>
                9781043441 / 7009704696
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <i className="fas fa-envelope text-amber-400 mr-3"></i>
                md@notedaddigital.com
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-purple-400 flex items-center gap-2">
              <span className="text-xl">🔗</span> Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {['Home', 'About us', 'Services', 'Contact us'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-amber-400 flex items-center gap-2">
              <span className="text-xl">🌐</span> Follow Us
            </h3>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'linkedin'].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-amber-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes floatEmoji {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
        }
        
        @keyframes formGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.1); }
          50% { box-shadow: 0 0 40px rgba(245, 158, 11, 0.2), 0 0 60px rgba(139, 92, 246, 0.1); }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .hero-float {
          animation: heroFloat 3s ease-in-out infinite;
        }
        
        .hero-title {
          animation: heroFloat 3s ease-in-out infinite;
          animation-delay: 0.2s;
        }
        
        .float-emoji {
          animation: floatEmoji 2.5s ease-in-out infinite;
        }
        
        .contact-card {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .contact-card:nth-child(2) { animation-delay: 0.2s; }
        .contact-card:nth-child(3) { animation-delay: 0.4s; }
        
        .form-container {
          animation: formGlow 3s ease-in-out infinite;
        }
        
        .input-field:focus {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.15);
        }
        
        .input-emoji {
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }
        
        .submit-btn {
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        
        .whatsapp-btn {
          animation: bounce 2s infinite;
        }
        
        .whatsapp-btn:hover {
          animation: none;
        }
        
        .map-btn:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(55, 65, 81, 0.3);
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-15px); }
          70% { transform: translateY(-8px); }
          90% { transform: translateY(-3px); }
        }
      `}</style>
    </div>
  );
};

export default Contact;