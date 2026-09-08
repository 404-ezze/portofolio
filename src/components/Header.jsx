import React, { useState, useEffect } from 'react';

const Header = ({ nama }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-md border-b border-gray-200/50 shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <span className="text-xl font-bold tracking-tighter text-gray-900">
          {nama}
        </span>
        <nav className="space-x-8 text-sm font-medium text-gray-600">
          <a href="#proyek" className="hover:text-blue-600 transition-colors">Proyek</a>
          <a href="#pengalaman" className="hover:text-blue-600 transition-colors">Pengalaman</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;