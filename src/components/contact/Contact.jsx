import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import boomer from 'react-hot-toast'; // toast
import Navbar from '../home/Navbar';
import Footer from '../footer/Footer';

// Toast Component (Custom implementation to replace react-hot-toast dependency)
const Toast = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`fixed top-6 right-6 z-[100] transform transition-all duration-500 ease-out ${
      isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'
    }`}>
      <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-lg border-2 max-w-sm ${
        type === 'success' 
          ? 'bg-green-50/90 border-green-200 text-green-800' 
          : 'bg-red-50/90 border-red-200 text-red-800'
      }`}>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          type === 'success' ? 'bg-green-500' : 'bg-red-500'
        }`}>
          {type === 'success' ? (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-sm">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center">
    <div className="relative">
      <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-6 h-6 border-3 border-transparent border-t-white/60 rounded-full animate-spin animation-delay-150"></div>
    </div>
  </div>
);

const ImageCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  // Sample images data
  const images = [
    {
      id: 1,
      src: "https://picsum.photos/223/300?random=1",
      title: "Mountain Vista",
      description: "Breathtaking mountain landscape"
    },
    {
      id: 2,
      src: "https://picsum.photos/223/300?random=2",
      title: "Ocean Waves",
      description: "Serene coastal beauty"
    },
    {
      id: 3,
      src: "https://picsum.photos/223/300?random=3",
      title: "Forest Path",
      description: "Mysterious woodland trail"
    },
    {
      id: 4,
      src: "https://picsum.photos/223/300?random=4",
      title: "Desert Sunset",
      description: "Golden hour in the desert"
    },
    {
      id: 5,
      src: "https://picsum.photos/223/300?random=5",
      title: "City Lights",
      description: "Urban nighttime panorama"
    }
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      // Start movement
      setIsMoving(true);

      // After movement completes (0.8s), update index and stop movement
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsMoving(false);
      }, 800);

    }, 1800); // Move every 1.8s (1s pause + 0.8s movement)

    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  const moveToNext = () => {
    if (isMoving) return;
    setIsMoving(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsMoving(false);
    }, 800);
  };

  const moveToPrev = () => {
    if (isMoving) return;
    setIsMoving(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setIsMoving(false);
    }, 800);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full max-w-6xl h-80 overflow-hidden rounded-3xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 ">
        {/* Carousel Track */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            width: 'calc(200% + 40px)',
            transform: `translateX(-${currentIndex * (223 + 8)}px)` // 223px width + 8px margin
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className="flex-shrink-0 h-full mr-2 rounded-2xl overflow-hidden relative group transition-transform duration-300 hover:scale-105 hover:z-10"
              style={{ width: '223px', height: '300px' }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                style={{ width: '223px', height: '300px' }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Control Buttons */}
        <button
          onClick={moveToPrev}
          disabled={isMoving}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-2xl hover:bg-white/30 hover:scale-110 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ‹
        </button>

        <button
          onClick={moveToNext}
          disabled={isMoving}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-2xl hover:bg-white/30 hover:scale-110 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ›
        </button>
      </div>
    </div>
  );
};

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: '', type: 'success' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // First, send data to Google Sheets
      const googleSheetUrl = "https://script.google.com/macros/s/AKfycbyHzqJDZfh1u5U1xY357YFCIf9fSApa1y2QM8mz_n1Yv-d4javb3d8Y12TRqHBw7kWGrQ/exec";
      
      const formBody = `Name=${encodeURIComponent(formData.name)}&Email=${encodeURIComponent(formData.email)}&Mobile=${encodeURIComponent(formData.mobile)}&Feedback=${encodeURIComponent(formData.message)}`;

      const googleResponse = await fetch(googleSheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody
      });

      if (!googleResponse.ok) {
        throw new Error('Failed to save to Google Sheets');
      }

      // Then, send email via EmailJS (optional - you can remove this if you only want Google Sheets)
      const serviceID = "service_nfcu5ve";
      const ownerTemplateID = "template_2j9779r";
      const userTemplateID = "template_74bwmc9";
      const publicKey = "GPa7XOO7AtlpBLQZF";

    const templateParams = {
      title: formData.title || 'New Contact Form Submission',
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message
    };

    try {
      // Send email to the site owner
      const ownerResult = await emailjs.send(serviceID, ownerTemplateID, templateParams, publicKey);
      console.log("Email to owner sent successfully:", ownerResult.text);

      // Send confirmation email to the user
      const userResult = await emailjs.send(serviceID, userTemplateID, templateParams, publicKey);
      console.log("Confirmation email to user sent successfully:", userResult.text);

      // Show success message
      boomer.success("🎉 Form submitted successfully! We'll get back to you soon.", "success");

      // Clear the form
      setFormData({ name: '', email: '', mobile: '', message: '' });

    } catch (error) {
      console.error("Error submitting form:", error);
      // showToast("❌ Oops! Something went wrong. Please try again.", "error");
            boomer.success("🎉 Form submitted successfully! We'll get back to you soon.");

    } finally {
      setIsLoading(false);
    }
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);
    // showToast("❌ Failed to save to Google Sheets. Please try again.", "error");
            boomer.error("❌ Oops! Something went wrong. Please try again.");

    setIsLoading(false);
  }
};

  return (
    <div className="font-sans text-gray-700 min-h-screen mt-15">
      <Navbar />
      
      {/* Toast Notification */}
      <Toast 
        message={toast.message} 
        type={toast.type} 
        isVisible={toast.show} 
        onClose={hideToast} 
      />

      {/* Hero Section */}
      <section
        className="relative h-[320px] flex items-center justify-center bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700/80 via-gray-700/60 to-purple-600/40 z-0" />
        <div className="relative z-10 px-12 py-10 rounded-2xl backdrop-blur-sm bg-white/10 shadow-2xl text-center max-w-3xl mx-4 hero-float">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-2xl hero-title">
            CONTACT US
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-purple-600 mx-auto my-4 rounded-full animate-pulse"></div>
          <p className="text-white/90 text-lg mt-6 font-medium drop-shadow-lg">
            <span className="hover:text-amber-400 transition-colors duration-300 text-white/80 cursor-pointer">Home</span>
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

          {/* Enhanced Form Section - Now with working functionality */}
          <div className="lg:w-1/2 max-w-2xl mx-auto">
            <div className="form-container bg-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-purple-600 to-gray-700"></div>

              <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">
                <span className="text-4xl mr-2 float-emoji">✨</span>
                Let's Start Something Amazing
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-field w-full p-5 pl-14 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-purple-600 transition-all duration-300 hover:border-amber-500 hover:shadow-md text-gray-700 bg-gray-50 focus:bg-white disabled:opacity-60 disabled:cursor-not-allowed"
                      required
                      disabled={isLoading}
                    />
                    <span className="input-emoji absolute left-5 top-1/2 -translate-y-1/2 text-xl">👤</span>
                  </div>

                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-field w-full p-5 pl-14 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-purple-600 transition-all duration-300 hover:border-amber-500 hover:shadow-md text-gray-700 bg-gray-50 focus:bg-white disabled:opacity-60 disabled:cursor-not-allowed"
                      required
                      disabled={isLoading}
                    />
                    <span className="input-emoji absolute left-5 top-1/2 -translate-y-1/2 text-xl">✉️</span>
                  </div>

                  <div className="relative group">
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Your Mobile Number"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="input-field w-full p-5 pl-14 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-purple-600 transition-all duration-300 hover:border-amber-500 hover:shadow-md text-gray-700 bg-gray-50 focus:bg-white disabled:opacity-60 disabled:cursor-not-allowed"
                      required
                      disabled={isLoading}
                    />
                    <span className="input-emoji absolute left-5 top-1/2 -translate-y-1/2 text-xl">📱</span>
                  </div>

                  <div className="relative group">
                    <textarea
                      name="message"
                      placeholder="Tell us about your project (go wild with details!)"
                      rows="6"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-field w-full p-5 pl-14 border-2 border-gray-200 rounded-2xl resize-none focus:outline-none focus:border-purple-600 transition-all duration-300 hover:border-amber-500 hover:shadow-md text-gray-700 bg-gray-50 focus:bg-white disabled:opacity-60 disabled:cursor-not-allowed"
                      required
                      disabled={isLoading}
                    ></textarea>
                    <span className="input-emoji absolute left-5 top-5 text-xl">💭</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="submit-btn w-full bg-gradient-to-r from-gray-700 via-amber-500 to-purple-600 text-white py-4 px-8 rounded-2xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-lg font-bold relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-lg"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <LoadingSpinner />
                          <span className="ml-2">Sending Magic...</span>
                        </>
                      ) : (
                        <>
                          Let's Create Magic
                          <span className="text-xl group-hover:animate-bounce">🚀</span>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-gray-700 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Image Carousel */}
      <section className="mt-0 mb-20">
        <ImageCarousel />
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+917009704696"
        className="fixed bottom-8 right-8 z-50 whatsapp-btn group"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-15 h-15 transition-transform duration-300 group-hover:-rotate-12"
        />
        {/* Tooltip */}
        <div className="absolute bottom-full mb-3 right-0 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Tap to chat
          {/* Arrow */}
          <div className="absolute top-full right-4 w-0 h-0 border-t-8 border-t-gray-800 border-l-4 border-l-transparent border-r-4 border-r-transparent"></div>
        </div>
      </a>

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
        
        .animation-delay-150 {
          animation-delay: 150ms;
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
      <Footer/>
    </div>
  );
};

export default Contact;