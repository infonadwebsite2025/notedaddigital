import React, { useState, useEffect } from "react";

const Meme = () => {
  const [isVisible, setIsVisible] = useState(false);
const [hoveredCard, setHoveredCard] = useState(null);
const [isShaking, setIsShaking] = useState(false);
const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    const shakeInterval = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }, 3000);
    return () => clearInterval(shakeInterval);
  }, []);
  const features = [
    {
      title: "Say one funny thing and you'll be on a sticker.",
      icon: "fa-laugh-squint",
      delay: 200,
      color: "from-amber-500",
      content:
        "Our sticker wall of fame features the most memorable quotes and moments. From accidental puns to intentional dad jokes, your humor lives forever here.",
      stories: [
        "Made a coffee pun, now it's on every mug",
        "Started a meeting with a dad joke, got immortalized",
      ],
      image:
        "https://readdy.ai/api/search-image?query=Funny%20colorful%20sticker%20wall%20with%20memes%20and%20quotes%20in%20vibrant%20neon%20colors%20against%20a%20clean%20white%20wall%2C%20modern%20office%20environment%20with%20playful%20decorations&width=600&height=400&seq=1&orientation=landscape",
    },
    {
      title: "Office party bloopers? Immortalized.",
      icon: "fa-camera-retro",
      delay: 400,
      color: "from-purple-500",
      content:
        "Every awkward dance move, every karaoke performance, every costume party mishap - we treasure these moments like gold.",
      stories: [
        "The legendary holiday party dance-off of 2024",
        "That time we all dressed as each other",
      ],
      image:
"https://www.shutterstock.com/image-photo/young-businesswoman-cake-her-colleagues-260nw-2512987195.jpg",
    },
    {
      title: "You walk in quiet. You leave quirky.",
      icon: "fa-hat-wizard",
      delay: 600,
      color: "from-amber-500",
      content:
        "Watch as your professional demeanor slowly gives way to your true chaotic self. Resistance is futile.",
      stories: [
        "Started wearing colorful socks on Mondays",
        "Now leads the weekly prank planning committee",
      ],
      image: "https://www.shutterstock.com/image-vector/cute-cat-holding-keep-quiet-600nw-1201932298.jpg"
    },
  ];
  return (
    <div className="min-h-screen  flex items-center justify-center p-8 overflow-hidden">
      <div
        className={`max-w-3xl w-full transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <h1
            className={` text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-amber-500 via-purple-500 to-amber-500 text-transparent bg-clip-text bg-size-200 animate-gradient ${isShaking ? "animate-shake" : ""}`}
          >
            Pranks. Memes. Mayhem.
          </h1>
          <p className="text-xl text-gray-500 mb-4 transform transition-all duration-300 hover:scale-105 hover:text-amber-400">
            Yes, we work hard — but we meme harder.
          </p>
          <p className="text-lg text-gray-400 relative">
            From <span className="italic text-purple-400">casual chaos</span> in
            the break room to
            <span className="relative inline-block mx-2 group">
              <span className="text-amber-400 cursor-pointer">
                spontaneous dance battles
              </span>
              <span className="absolute -top-1 -right-1 transform rotate-12 transition-transform group-hover:rotate-45">
                {/* <i className="fas fa-star text-amber-400 text-xs"></i> */}
              </span>
            </span>
            our team's vibe is anything but corporate.
          </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {features.map((item, index) => (
    <div
      key={index}
      onClick={() => setSelectedCard(index)}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      className={`relative bg-gradient-to-r from-slate-700 to-slate-800 p-4 sm:p-6 rounded-2xl transform transition-all duration-500 hover:scale-[1.02] sm:hover:scale-[1.06] cursor-pointer shadow-xl hover:shadow-amber-500/20 border border-slate-600 hover:border-gradient-to-br from-purple-600 to-amber-400 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      style={{
        transitionDelay: `${item.delay}ms`,
      }}
    >
      {/* Gradient Orb Icon */}
      <div className="absolute -right-1 sm:-right-2 -top-1 sm:-top-2 w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-amber-500 to-purple-600 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 shadow-md">
        <i className={`fas ${item.icon} text-white text-sm sm:text-lg`}></i>
      </div>

      {/* Image */}
      <div className="relative w-full h-32 sm:h-40 mb-3 sm:mb-4 rounded-xl overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Text */}
      <h3 className="text-base sm:text-lg text-white font-semibold line-clamp-2 group-hover:text-amber-400 transition-colors duration-300 mb-2">
        {item.title}
      </h3>
      <p className="text-sm text-gray-400 line-clamp-3 sm:line-clamp-2 leading-relaxed">
        {item.content}
      </p>

      {/* Optional Glow on Hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${item.color} to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}
      ></div>

      {/* Fun Hover Sparkle */}
      {hoveredCard === index && (
        <div className="absolute -right-1 sm:-right-2 -bottom-1 sm:-bottom-2 pointer-events-none">
          <i className="fas fa-sparkles text-amber-400 animate-ping text-sm sm:text-base"></i>
        </div>
      )}

      {/* Gradient Bottom Bar */}
      <div className="absolute bottom-2 left-3 sm:left-4 right-3 sm:right-4 h-0.5 sm:h-1 bg-gradient-to-r from-amber-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>

      {/* Optional Shine Overlay */}
      <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shine_2.5s_infinite]"></div>
      </div>
    </div>
  ))}
</div>
      </div>
      <style jsx>{`
@keyframes gradient {
0% { background-position: 0% 50%; }
50% { background-position: 100% 50%; }
100% { background-position: 0% 50%; }
}
.bg-size-200 {
background-size: 200% auto;
}
.animate-gradient {
animation: gradient 3s linear infinite;
}
@keyframes shake {
0%, 100% { transform: translateX(0); }
25% { transform: translateX(-2px) rotate(-1deg); }
75% { transform: translateX(2px) rotate(1deg); }
}
.animate-shake {
animation: shake 0.5s ease-in-out;
}
@keyframes bounce-mini {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-3px); }
}
.hover-bounce:hover {
animation: bounce-mini 0.5s ease infinite;
}
@keyframes shine {
0% { left: -100%; }
100% { left: 100%; }
}
`}</style>
    </div>
  );
};
export default Meme;