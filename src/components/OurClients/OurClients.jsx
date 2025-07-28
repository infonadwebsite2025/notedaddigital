import React, { useState, useEffect } from 'react';
import { User, CheckCircle, TrendingUp, BarChart3, Zap, Star, Award, Target, Sparkles } from 'lucide-react';
import HeaderSection from './HeaderSection';
import StatsBar from './StatsBar';
import TestimonialsGrid from './TestimonialsGrid';
import CTASection from './CTASection';
import ParticleBackground from './ParticleBackground';
import Navbar from '../home/Navbar';
import Footer from '../footer/Footer';

const OurClients = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      icon: User,
      title: "From Invisible to Unmissable",
      quote: "Our brand was just another name until Notedad stepped in. Their performance marketing strategy turned our ad spend into serious ROI. In just 3 months, we saw a",
      highlight: "220% increase in leads and 3x growth in sales.",
      author: "Nikhil R., Founder, Blanc",
      gradientFrom: "#f59e0b",
      gradientTo: "#8b5cf6",
      rating: 5,
      category: "Performance Marketing"
    },
    {
      id: 2, 
      icon: CheckCircle,
      title: "Instagram Exploded. So Did Our Sales.",
      quote: "They didn't just manage our socials, they",
      highlight: "revived",
      quote2: "them. Reels hit 1M+ views, engagement went through the roof, and our DMs turned into a sales channel.",
      author: "Priya M., Co-Founder, Maned",
      gradientFrom: "#8b5cf6",
      gradientTo: "#f59e0b",
      rating: 5,
      category: "Social Media"
    },
    {
      id: 3,
      icon: Zap,
      title: "Campaigns That Print Money",
      quote: "Every rupee we spent with Notedad brought ₹10 back. From creatives to targeting, everything was sharp. They scaled our ecommerce store to",
      highlight: "7 figures in under 6 months.",
      author: "Gauri, CEO, JCL",
      gradientFrom: "#f59e0b",
      gradientTo: "#374151",
      rating: 5,
      category: "E-commerce Growth"
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "A True Growth Partner",
      quote: "Working with Notedad is like having a digital marketing war room at your fingertips. Our revenue increased by",
      highlight: "180% quarter over quarter, and our CAC dropped like magic.",
      author: "Supriya, Marketing Head, Iconic Media",
      gradientFrom: "#8b5cf6",
      gradientTo: "#374151",
      rating: 5,
      category: "Revenue Growth"
    }
  ];

  const stats = [
    { number: "300+", label: "Happy Clients", icon: Award },
    { number: "500%", label: "Average ROI", icon: TrendingUp },
    { number: "1M+", label: "Leads Generated", icon: Target },
    { number: "₹50Cr+", label: "Revenue Generated", icon: Sparkles }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleCards(prev => [...new Set([...prev, cardId])]);
          }
        });
      },
      { threshold: 0.1 }
    );
    const cards = document.querySelectorAll('[data-card-id]');
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  return (
     <div className='relative'>
            {/* Navbar Fixed at Top */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                <Navbar />
            </div>
    <div className="max-w-6xl mx-auto p-8 font-sans relative overflow-hidden">
    
      <ParticleBackground />
      <HeaderSection />
      <StatsBar stats={stats} />
      <TestimonialsGrid
        testimonials={testimonials}
        hoveredCard={hoveredCard}
        setHoveredCard={setHoveredCard}
        visibleCards={visibleCards}
        currentTestimonial={currentTestimonial}
        isAutoPlaying={isAutoPlaying}
        setIsAutoPlaying={setIsAutoPlaying}
      />
      <CTASection />
      
      </div>
      <style jsx>{`
        @keyframes slideInUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
      <Footer/>
    </div>
  );
};

export default OurClients; 