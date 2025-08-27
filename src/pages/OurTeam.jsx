import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/home/Navbar';
import Footer from '../components/footer/Footer';
import t1 from "../assets/team/t1.jpeg";
import t2 from "../assets/team/t2.jpeg";
import t3 from "../assets/team/t3.jpeg";
import t4 from "../assets/team/t4.jpeg";
import t5 from "../assets/team/t5.jpeg";
import t6 from "../assets/team/t6.jpeg";
import t7 from "../assets/team/t7.jpeg";
import t8 from "../assets/team/t8.jpeg";
import t9 from "../assets/team/t9.jpeg";
import t10 from "../assets/team/t10.jpeg";
import t11 from "../assets/team/t11.jpeg";

// Custom draggable card components
const DraggableCardContainer = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
};

const DraggableCardBody = ({ children, className = "", initialPosition = { x: 0, y: 0 } }) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    const touch = e.touches[0];
    setDragStart({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y
    });
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleEnd);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleEnd);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleEnd);
      };
    }
  }, [isDragging, dragStart]);

  return (
    <div
      ref={cardRef}
      className={`cursor-grab active:cursor-grabbing ${isDragging ? 'z-50' : 'z-10'} ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: isDragging ? 'none' : 'transform 0.2s ease-out'
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {children}
    </div>
  );
};

const ResponsiveDraggableCards = () => {
  const items = [
    {
      name: "Aashiv",
      title: "Social Media Executive",
      image: t1,
      className: "md:absolute md:top-16 md:left-[2%]",
      rotation: "",
    },
    {
      name: "Aditya",
      title: "Senior Video Editor",
      image: t9,
      className: "md:absolute md:top-16 md:left-[18%]",
      rotation: "",
    },
    {
       name: "Pranav",
      title: "Associate Video Editor",
      image: t8,
      className: "md:absolute md:top-16 md:left-[36%]",
      rotation: "",
    },
    {
      name: "Ankit",
      title: "Associate Content Developer",
      image: t4,
      className: "md:absolute md:top-16 md:left-[50%]",
      rotation: "",
    },
    {
      name: "Gurnoor",
      title: "Graphic Designer & Video Editor",
      image: t5,
      className: "md:absolute md:top-16 md:left-[66%]",
      rotation: "",
    },
    {
      name: "Aditi",
      title: "Associate Content Developer",
      image: t10,
      className: "md:absolute md:top-16 md:left-[84%]",
      rotation: "",
    },
    {
       name: "Vanish",
      title: "Software Developer",
      image: t3,
    
      className: "md:absolute md:top-80 md:left-[8%]",
      rotation: "",
    },
    {
      name: "Srishty",
      title: "Associate Content Developer",
      image: t11,
      className: "md:absolute md:top-80 md:left-[24%]",
      rotation: "",
    },
    {
      name: "Gaurav",
      title: "Digital Marketing & Ads Manager",
      image: t2,
      className: "md:absolute md:top-80 md:left-[40%]",
      rotation: "",
    },
    {
      name: "Robin Thakur",
      title: "HR & Office Head",
      image: t6,
      className: "md:absolute md:top-80 md:left-[56%]",
      rotation: "",
    },
    {
        name: "Seetam",
      title: "Software Developer",
      image: t7,
      className: "md:absolute md:top-80 md:left-[72%]",
      rotation: "",
    },
  ];

  return (
    <div className='relative'>
      {/* Navbar Fixed at Top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>
      <div className="min-h-screen w-full pt-8 md:pt-12 bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-800">
        <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4">
          {/* Background text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="mx-auto max-w-xs text-center text-lg font-black text-neutral-400 sm:max-w-sm sm:text-xl md:max-w-md md:text-2xl lg:text-4xl dark:text-neutral-600">
“We’re not just a team… we’re the Wi-Fi that keeps everything connected.”            </p>
          </div>

          {/* Mobile: Grid layout, Desktop: Absolute positioned */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:contents lg:gap-8">
            {items.map((item, index) => (
              <DraggableCardBody
                key={index}
                className={`
                ${item.className}
                ${item.rotation}
                transition-all duration-300 hover:scale-105
                md:hover:rotate-0
              `}
              >
                <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl dark:bg-slate-800">
                  {/* Image container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-56 md:h-64 md:w-72 lg:h-72 lg:w-80"
                      loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  {/* Card content */}
                  <div className="p-4 md:p-6">
                    <div className="text-center">
                      <h3 className="text-lg font-extrabold text-neutral-900 sm:text-xl md:text-2xl dark:text-neutral-200">
                        {item.name}
                      </h3>
                      <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                        {item.title}
                      </p>
                    </div>
                    {/* Mobile-only description */}
                    <p className="mt-2 text-center text-sm text-neutral-600 md:hidden dark:text-neutral-400">
                      Drag to explore
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute -right-2 -top-2 h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 transition-all duration-300 group-hover:opacity-100 md:h-6 md:w-6" />
                </div>
              </DraggableCardBody>
            ))}
          </div>

          {/* Instructions for desktop */}
          <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 transform rounded-full bg-white/80 px-6 py-3 text-sm font-medium text-neutral-600 backdrop-blur-sm md:block dark:bg-slate-800/80 dark:text-neutral-300">
            Click and drag cards to move them around
          </div>
        </DraggableCardContainer>
      </div>
          <Footer/>
      
      </div>
      );
};

      export default ResponsiveDraggableCards;