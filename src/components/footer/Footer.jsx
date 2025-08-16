import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16 px-6 md:px-24 position-relative">
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
    );
  };
  
  export default Footer; 