// src/components/ui/DarkModeToggle.jsx
import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const body = document.body;
    if (dark) {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(prev => !prev)}
      className="p-2 rounded-full shadow"
      style={{ position: 'fixed', top: 20, right: 80, zIndex: 1000 }}
    >
      {dark ? <FaSun size={20} color="orange" /> : <FaMoon size={20} color="black" />}
    </button>
  );
};

export default DarkModeToggle;
