import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-10 px-6 md:px-24 position-relative">
      <div className="grid md:grid-cols-4 gap-8">
        {/* Agency Info */}
        <div className="space-y-3">
          <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">
            Digital Agency
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Get started & grow with <br />
            <span className="text-amber-400 font-semibold">The Best 360º Marketing</span> Agency in Jalandhar
          </p>
        </div>
        
        {/* Address */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-amber-400 flex items-center gap-2">
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
        
        {/* Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-purple-400 flex items-center gap-2">
            <span className="text-xl">🔗</span> Links
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/who-we-are" className="hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                About us
              </Link>
            </li>
            <li>
              <Link to="/our-team" className="hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                Our Team
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Socials */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-amber-400 flex items-center gap-2">
            <span className="text-xl">🌐</span> Follow Us
          </h3>
          <div className="flex space-x-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/NOTEDADDIGITAL/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-300 hover:scale-110 hover:rotate-12"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/noted_addigital/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:rotate-12"
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/noted-ad-digital/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 transition-all duration-300 hover:scale-110 hover:rotate-12"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-700 text-center text-sm text-gray-400">
        Powered by Notedaddigital Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
