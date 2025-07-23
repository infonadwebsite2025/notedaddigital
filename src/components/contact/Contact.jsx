import React, { useState, useEffect ,useRef} from 'react';

const Contact = () => {
//   const [current, setCurrent] = useState(0);
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
            containerRef.current.style.transition = 'transform 0.5s cubic-beizer(0.23, 1, 0.32, 1) ';
            setCurrent(1);
          }, 50);
          return 0;
        }
        return prev + 1;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    setIsVisible(true);
  }, []);

  const formStyles = {
  container: {
    maxWidth: "36rem",
    width: "100%",
    margin: "2.5rem auto",
    padding: "2rem",
    background: "linear-gradient(to bottom right, #fff1f5, white, #fde8f1)",
    borderRadius: "1.5rem",
    boxShadow: "0 0 25px rgba(255, 192, 203, 0.5)",
    animation: "fadeInUp 1.3s ease-out",
    position: "relative",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    color: "#1f2937",
  },
  input: {
    width: "100%",
    padding: "1rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.75rem",
    outline: "none",
    transition: "all 0.3s ease",
  },
  textarea: {
    width: "100%",
    padding: "1rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.75rem",
    resize: "none",
    outline: "none",
    transition: "all 0.3s ease",
  },
  button: {
    width: "100%",
    background: "linear-gradient(to right, #ef4444, #ec4899)",
    color: "white",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.75rem",
    fontSize: "1.125rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    animation: "pulse 2s infinite",
  },
  emojiFloat: {
    position: "absolute",
    right: "1rem",
    top: "1.25rem",
    fontSize: "1.25rem",
    animation: "floatEmoji 2s ease-in-out infinite",
    pointerEvents: "none",
  },}

  const floatAnimation = {
  animation: 'bounce 2s ease-in-out borderColorChange 2s ease-in-out infinite',
  border: '1.7px solid #f87171', // starting border color
  padding: '2rem',
  borderRadius: '1rem',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  backgroundColor: 'white',
  maxWidth: '36rem',
  margin: '0 auto',
};

  

  return (
    <div className="font-sans text-gray-800 min-h-screen">

      {/* Hero Section */}
      <section
        className="relative h-[280px] flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: `url('${images[0]}')` }}
      >
        <div className="absolute inset-0 z-0" />
        <div className="relative z-10 px-10 py-8 rounded-xl shadow-2xl text-center max-w-2xl mx-4">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg">CONTACT US</h1>
          <p className="text-white text-lg mt-4 font-medium drop-shadow-sm">
            <a href="/" className="hover:underline text-white/80">Home</a> / Contact Us
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 md:px-32 animate-section-fade-in">
        <div className="flex flex-col md:flex-row gap-20 items-start">

          {/* Left Info Section */}
          <div className="md:w-1/2 space-y-12">
  <h2 className="text-3xl font-extrabold text-gray-900 leading-snug animate-fade-in-up-slow tracking-tight mb-4">
    <span className="inline-block hover:scale-105 transition-transform duration-300 ease-in-out">Slide Into Our Inbox</span> 
    <span className="text-red-500 ml-2 hover:text-pink-600 transition-colors duration-300">— We Don't Bite</span>
  </h2>

  <div className="space-y-5 text-gray-700 text-lg leading-relaxed animate-fade-in-up">
    <p className="text-xl font-medium">
      Got a project? A <span className="text-pink-500 font-semibold">wild idea</span>? Or just want to say hi? <br />
      We're all ears <span className="italic">(and screens)</span>.
    </p>
    <p className="text-lg">
      Whether you're ready to <span className="font-semibold text-pink-500">boost your brand</span>, 
      build something awesome, or need help untangling the chaos of <span className='font-bold'>digital marketing</span> — 
      we're just one message away.
    </p>
  </div>

  <div className="space-y-4 text-base text-gray-800 animate-fade-in-delay">
    <div className="rounded-xl shadow-lg p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl animate-soft-glow">
      <p className="text-lg font-semibold text-black mb-1"><span className="animate-float-emoji">📬</span> Reach Out:</p>
      <p>Email us:
        <a href="mailto:md@notedaddigital.com" className="font-medium hover:underline ml-1 text-pink-600 transition-colors">md@notedaddigital.com</a> /
        <a href="mailto:ceo@notedaddigital.com" className="font-medium hover:underline ml-1 text-pink-600 transition-colors">ceo@notedaddigital.com</a>
      </p>
      <p>Call us:
        <a href="tel:9781043441" className="font-medium hover:underline ml-1 text-pink-600 transition-colors">9781043441</a> /
        <a href="tel:7009704696" className="font-medium hover:underline ml-1 text-pink-600 transition-colors">7009704696</a>
      </p>
    </div>

    <div className="bg-white p-5 rounded-xl shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 animate-fade-in-up transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
      <div>
        <p className="font-semibold text-gray-900"><span className="animate-float-emoji">📍</span> Location: <span className="text-gray-700 font-medium">2nd Floor, G Square Building, Maqsudan, Jalandhar, Punjab, 144008</span></p>
        <p className="italic text-sm text-gray-500">(But we vibe globally <span className="animate-float-emoji">🌍</span>)</p>
      </div>
      <a href="https://www.google.com/maps?q=G+Square+Building,+Maqsudan,+Jalandhar,+Punjab+144008" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-red-300 text-red-600 font-semibold px-4 py-2 rounded-full hover:bg-red-100 hover:scale-105 transition duration-300 ease-in-out whitespace-nowrap animate-pulse hover:animate-wiggle">
        <span>📌</span> View on Map
      </a>
    </div>
  </div>

              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-7 rounded-2xl hover:shadow-xl transition-all duration-500 hover:scale-[1.03] animate-fade-in-up">
  <h3 className="text-2xl font-semibold text-gray-900 mb-4 hover:text-red-600 transition-colors duration-300 flex items-center gap-2">
    <span className="animate-float-emoji">⏰</span> Business Hours:
  </h3>

  <ul className="text-gray-700 space-y-4">
    <li className="flex items-center group transition-all duration-300 cursor-default hover:translate-x-2 hover:scale-[1.03] hover:text-gray-900">
      <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
      <span className="font-medium text-black">Mon – Fri:</span>
      <span className="ml-2">10:00 AM – 6:00 PM</span>
    </li>

    <li className="flex items-center group transition-all duration-300 cursor-default hover:translate-x-2 hover:scale-[1.03] hover:text-gray-900">
      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
      <span className="font-medium text-black">Saturday:</span>
      <span className="ml-2">Pizza + Planning Mode <span className="animate-float-emoji">🍕</span></span>
    </li>

    <li className="flex items-center group transition-all duration-300 cursor-default hover:translate-x-2 hover:scale-[1.03] hover:text-gray-900">
      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
      <span className="font-medium text-black">Sunday:</span>
      <span className="ml-2">Creativity Recharging <span className="animate-float-emoji">💡</span></span>
    </li>
  </ul>
</div>
</div>



          {/* Form Section */}
          
    <div
  style={{ ...floatAnimation, border: 'none' }}
  className="space-y-5 bg-white p-8 rounded-2xl shadow max-w-xl mx-auto animate-form-glow relative"
>



      <h2 style={formStyles.heading}>✨ Or Just Fill This Form Like a Boss</h2>
            <form className="space-y-5">
  {['name', 'email', 'mobile'].map((field, index) => (
    <div key={index} className="relative group">
      <input
        type={field === 'email' ? 'email' : field === 'mobile' ? 'tel' : 'text'}
        name={field}
        placeholder={
          field === 'name'
            ? ' Your Name'
            : field === 'email'
            ? ' Your Email'
            : ' Your Mobile Number'
        }
        className="w-full p-4 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 transition group-hover:shadow-lg group-focus-within:shadow-lg"
        required
      />
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl pointer-events-none transition-all duration-300 emoji-float group-hover:emoji-float-active group-focus-within:emoji-float-active">
        {field === 'name' ? '🚀' : field === 'email' ? '📩' : '📱'}
      </span>
    </div>
  ))}
  <div className="relative group">
    <textarea
      name="message"
      placeholder=" Tell us everything (seriously, go wild)"
      rows="5"
      className="w-full p-4 pl-12 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-red-400 transition group-hover:shadow-lg group-focus-within:shadow-lg"
      required
    ></textarea>
    <span className="absolute left-4 top-4 text-xl pointer-events-none transition-all duration-300 emoji-float group-hover:emoji-float-active group-focus-within:emoji-float-active">📝</span>
  </div>
  <button
    type="submit"
    className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 px-6 rounded-xl hover:from-pink-500 hover:to-yellow-400 hover:shadow-xl hover:scale-[1.03] transition-all duration-200 ease-in-out text-lg font-semibold animate-pulse"
  >
    Let's Make Magic 💥
  </button>
</form>


      {/* Inline keyframe styles */}
      <style>
        {`
        @keyframes formGlow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(236,72,153,0.15), 0 0 24px 4px rgba(236,72,153,0.18);
          }
          50% {
            box-shadow: 0 0 0 6px rgba(236,72,153,0.10), 0 0 32px 8px rgba(236,72,153,0.28);
          }
        }
        .animate-form-glow {
          animation: formGlow 2.2s ease-in-out infinite;
          border-radius: 1.5rem;
        }
        .emoji-float {
          opacity: 0.7;
          transform: translateY(0);
        }
        .group:hover .emoji-float,
        .group:focus-within .emoji-float {
          opacity: 1;
          transform: translateY(-18px) scale(1.18);
          transition: transform 0.35s cubic-bezier(0.23,1,0.32,1), opacity 0.25s;
        }
        .emoji-float-active {
          opacity: 1 !important;
          transform: translateY(-18px) scale(1.18) !important;
        }
          @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }

        @keyframes borderColorChange {
          0% { border-color: #f87171; }
          25% { border-color: #fb923c; }
          50% { border-color: #facc15; }
          75% { border-color: #34d399; }
          100% { border-color: #f87171; }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatEmoji {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.85;
          }
        }

        @keyframes floatEmojiNonForm {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float-emoji {
          display: inline-block;
          animation: floatEmojiNonForm 2.2s ease-in-out infinite;
        }
        @keyframes waShake {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-10deg); }
          40% { transform: rotate(8deg); }
          60% { transform: rotate(-6deg); }
          80% { transform: rotate(6deg); }
        }
        .animate-wa-shake {
          animation: waShake 0.5s;
        }
        .rotate-wa-left {
          transform: rotate(-12deg);
        }
        .group:hover .wa-icon {
          animation: none !important;
          transform: rotate(-25deg);
        }
        `}
      </style>
    </div>
    </div>


        <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatEmoji {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.85;
          }
        }
          @keyframes softPulseGlow {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 4px 1px rgba(240, 72, 153, 0.05);
              border-color: rgba(244, 114, 182, 0.1);
            }
            25% {
              transform: scale(1.005);
              box-shadow: 0 0 8px 2px rgba(240, 72, 153, 0.15);
              border-color: rgba(244, 114, 182, 0.25);
            }
            50% {
              transform: scale(1.012);
              box-shadow: 0 0 12px 3px rgba(240, 72, 153, 0.25);
              border-color: rgba(236, 72, 153, 0.4);
            }
            75% {
              transform: scale(1.005);
              box-shadow: 0 0 8px 2px rgba(240, 72, 153, 0.15);
              border-color: rgba(244, 114, 182, 0.25);
            }
          }
          .animate-soft-glow {
            animation: softPulseGlow 2s ease-in-out infinite;
            border-width: 4px;
            border-style: solid;
            border-radius: 1.5rem;
          }
          .emoji-float {
            @apply absolute top-1/2 left-4 text-2xl pointer-events-none transition-all duration-500 opacity-0;
          }
          .group:hover .emoji-float {
            transform: translateY(-2.5rem);
            opacity: 1;
          }

          @keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
  75% { transform: rotate(-1deg); }
}
.hover\\:animate-wiggle:hover {
  animation: wiggle 0.5s ease-in-out;
}

        `}</style>
      </section>

      {/* WhatsApp Floating Button */}
     {/* WhatsApp Button */}
      <a
        href="https://wa.me/911234567890"
        className="fixed bottom-6 right-6 z-50 animate-bounce hover:scale-110 hover:shadow-2xl transition group"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-14 h-14 transition-all duration-300 wa-icon"
        />
      </a>
      {/* Auto Carousel Section */}
      <section className="my-12 max-w-7xl mx-auto overflow-hidden rounded-xl bg-gradient-to-br from-[#fff5f5] via-[#fefefe] to-[#f0f0f0">
      <div
        ref={containerRef}
        className="flex gap-2 px-2"
        style={{
          transform: `translateX(-${current * 223}px)`, // 223px is image width
          transition: 'transform 0.4s ease-in-out',
        }}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx}`}
            className="w-[223px] h-[300px] flex-shrink-0 rounded-lg object-cover"
          />
        ))}
      </div>
    </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 md:px-24">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <img src="/logo.svg" alt="Logo" className="h-12 mb-4" />
            <p className="text-sm text-gray-300">
              Get started & grow with <br />
              <span className="text-pink-400 font-medium">The Best 360º Marketing</span> Agency in Jalandhar
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">Address</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><i className="fas fa-map-marker-alt text-pink-400 mr-2"></i>2nd Floor, G Square Building, Maqsudan, Jalandhar, Punjab, 144008</li>
              <li><i className="fas fa-phone-alt text-pink-400 mr-2"></i>9781043441 / 7009704696</li>
              <li><i className="fas fa-envelope text-pink-400 mr-2"></i>md@notedaddigital.com</li>
              <li><i className="fas fa-envelope text-pink-400 mr-2"></i>business@notedaddigital.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">About us</a></li>
              <li><a href="#" className="hover:text-white transition">Services</a></li>
              <li><a href="#" className="hover:text-white transition text-yellow-400">Contact us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">Follow us on</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-pink-400 transition"><i className="fab fa-facebook fa-lg"></i></a>
              <a href="#" className="text-white hover:text-pink-400 transition"><i className="fab fa-instagram fa-lg"></i></a>
              <a href="#" className="text-white hover:text-pink-400 transition"><i className="fab fa-linkedin fa-lg"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
