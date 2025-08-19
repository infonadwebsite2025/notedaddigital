import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sparkles, ChevronDown, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
// import DarkModeToggle from '../ui/DarkModeToggle';
import notedad from "../../../public/notedad.png"
const routeMap = {
  'Who We Are?': '/who-we-are',
  'What We Do?': '/what-we-do',
  'Why Choose Us?': '/why-choose-us',
  'The Noted Vibe': '/noted-vibe',
  'Wanna Be Part of This Vibe?': '/join-us',
};

const navLinks = [
  { name: 'Home', hasDropdown: false, path: '/' },
  {
    name: 'About',
    hasDropdown: true,
    dropdownItems: [
      'Who We Are?',
      'What We Do?',
      'Why Choose Us?',
      'The Noted Vibe',
      'Wanna Be Part of This Vibe?',
    ],
  },

  { name: 'Services', hasDropdown: false, path: '/services' },
  { name: 'Awards', hasDropdown: false, path: '/awards' },
  { name: 'Clients', hasDropdown: false, path: '/our-clients' },
  { name: 'Courses', hasDropdown: false, path: '/courses' },
  { name: 'Contact us', hasDropdown: false, path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [showPhone, setShowPhone] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const phoneNumber = '+91 7009704696';
  const toggleDropdown = (idx) => {
    setOpenDropdownIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <nav className={`w-full fixed top-0 z-50 backdrop-blur-xl transition-all duration-700 ease-out ${isScrolled
      ? 'bg-white/90 shadow-2xl border-b border-purple-200/30'
      : 'bg-gradient-to-r from-white/70 via-purple-50/50 to-white/70'
      }`}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-purple-500/5 animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* <Link to="/" className="text-2xl font-bold flex items-center gap-2 group cursor-pointer">
          <div className="relative">
            <Sparkles className="text-purple-500 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
          </div>
          <span className="font-bold group-hover:text-purple-600 transition-colors duration-300">Noted-Ad</span>
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 bg-size-200 animate-gradient group-hover:scale-105 transition-transform duration-300">
            360
          </span>
        </Link> */}
        <Link
  to="/"
  className="flex items-center gap-3 group cursor-pointer"
>
  <div className="relative">
    <Sparkles className="text-purple-500 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
    <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
  </div>

  {/* Logo Image */}
  <img
    src={notedad} // replace with your logo path
    alt="Noted-Ad Logo"
    className="h-12 w-auto group-hover:scale-105 group-hover:animate-spin transition-transform duration-300"
  />
</Link>


        {/* Navlinks mapping of about us  */}
        <ul className="hidden md:flex items-center space-x-8 text-[16px] font-medium text-gray-800 relative">
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredLink(idx)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <div className="flex items-center gap-1 py-2 px-3 rounded-lg relative overflow-hidden transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-50 group-hover:to-cyan-50">
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-500 ease-out"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-cyan-500/10 group-hover:to-purple-500/10 rounded-lg transition-all duration-500"></div>
                {link.hasDropdown ? (
                  <>
                    <span className="relative z-10 group-hover:text-purple-700 transition-colors duration-300 group-hover:scale-105 transform">
                      {link.name}
                    </span>
                    <ChevronDown className="w-4 h-4 relative z-10 group-hover:rotate-180 group-hover:text-purple-500 transition-all duration-300" />
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="relative z-10 group-hover:text-purple-700 transition-colors duration-300 group-hover:scale-105 transform"
                  >
                    {link.name}
                  </Link>
                )}
              </div>

              {hoveredLink === idx && link.hasDropdown && (
                <div className="absolute left-0 mt-2 w-72 bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl z-50 p-4 space-y-2 border border-purple-100/50 animate-in slide-in-from-top-5 fade-in duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl blur-xl"></div>
                  {link.dropdownItems.map((item, subIdx) => (
                    <Link
                      to={routeMap[item]}
                      key={subIdx}
                      className="relative group/item cursor-pointer p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 hover:scale-105 transform hover:shadow-lg block"
                      style={{ animationDelay: `${subIdx * 50}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-cyan-500/0 group-hover/item:from-purple-500/5 group-hover/item:to-cyan-500/5 rounded-xl transition-all duration-300"></div>
                      <span className="relative z-10 text-gray-700 group-hover/item:text-purple-700 transition-colors duration-300">
                        {item}
                      </span>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover/item:opacity-100 transition-all duration-300">
                        <Star className="w-4 h-4 text-purple-500" />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button
            onMouseEnter={() => setShowPhone(true)}
            onMouseLeave={() => setShowPhone(false)}
            className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black text-white px-8 py-3 rounded-full shadow-lg group transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transform"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="relative z-10 flex items-center gap-2">
              <div className="transition-all duration-300 ease-out">
                {showPhone ? (
                  <span className="animate-in slide-in-from-left-5 fade-in duration-300 font-mono">
                    {phoneNumber}
                  </span>
                ) : (
                  <span className="animate-in slide-in-from-right-5 fade-in duration-300 font-semibold tracking-wide">
                    LET'S TALK
                  </span>
                )}
              </div>
              <Phone className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
            </div>
          </button>
          {/* <DarkModeToggle /> */}

        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white group-hover:text-purple-200 group-hover:rotate-90 transition-all duration-300" />
            ) : (
              <Menu className="w-6 h-6 text-white group-hover:text-purple-200 group-hover:scale-110 transition-all duration-300" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-6 pb-6 bg-gradient-to-b from-white/95 to-purple-50/50 backdrop-blur-lg shadow-2xl border-t border-purple-200/30 animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col gap-4 text-gray-800 text-base font-medium">
            {navLinks.map((link, idx) => (
              <li key={idx} className="flex flex-col" style={{ animationDelay: `${idx * 100}ms` }}>
                <div
                  className="flex justify-between items-center p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:scale-105 transform"
                  onClick={() =>
                    link.hasDropdown ? toggleDropdown(idx) : setIsMenuOpen(false)
                  }
                >
                  {link.hasDropdown ? (
                    <span className="group-hover:text-purple-700 transition-colors duration-300">
                      {link.name}
                    </span>
                  ) : (
                    <Link to={link.path} className="group-hover:text-purple-700 transition-colors duration-300">
                      {link.name}
                    </Link>
                  )}
                  {link.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-all duration-300 group-hover:text-purple-500 ${openDropdownIndex === idx ? 'rotate-180' : ''
                      }`} />
                  )}
                </div>

                {link.hasDropdown && openDropdownIndex === idx && (
                  <div className="pl-4 py-2 space-y-2 animate-in slide-in-from-top-2 fade-in duration-300">
                    {link.dropdownItems.map((item, subIdx) => (
                      <Link
                        key={subIdx}
                        to={routeMap[item]}
                        className="block p-3 rounded-lg hover:bg-white/70 hover:text-purple-700 transition-all duration-300 text-sm text-gray-600 hover:scale-105 transform hover:shadow-md"
                        style={{ animationDelay: `${subIdx * 50}ms` }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}

            <button className="mt-6 bg-gradient-to-r from-gray-900 to-black text-white py-4 px-6 rounded-2xl font-semibold shadow-lg flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transform transition-all duration-300 group">
              <span className="group-hover:text-purple-200 transition-colors duration-300">
                LET'S TALK
              </span>
              <Phone className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              <Zap className="w-4 h-4 group-hover:text-yellow-400 transition-all duration-300" />
            </button>
          </ul>
        </div>
      )}

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .bg-size-200 {
          background-size: 200% 200%;
        }

        .animate-in {
          animation-fill-mode: both;
        }

        .slide-in-from-top {
          animation: slideInFromTop 0.3s ease-out;
        }

        .slide-in-from-top-2 {
          animation: slideInFromTop 0.2s ease-out;
        }

        .slide-in-from-top-5 {
          animation: slideInFromTop 0.15s ease-out;
        }

        .slide-in-from-left-5 {
          animation: slideInFromLeft 0.3s ease-out;
        }

        .slide-in-from-right-5 {
          animation: slideInFromRight 0.3s ease-out;
        }

        .fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes slideInFromTop {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInFromRight {
          from { opacity: 0; transform: translateX(10px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
