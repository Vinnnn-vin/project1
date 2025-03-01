import React, { useState, useEffect } from 'react';

const Navbar = ({ sections, sectionNames, activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mengontrol menu hamburger

  return (
    <nav className="w-full fixed top-0 left-0 bg-black z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="images/KOSI Square White 2.png"
            alt="KOSI Logo"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Menu Navigasi */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:space-x-6 absolute md:static top-16 right-0 bg-black w-full md:w-auto text-center py-4 md:py-0`}
        >
          {sections.map((section, idx) => (
            <li key={section} className="my-4 md:my-0">
              <a
                onClick={() => {
                  scrollToSection(section);
                  setIsMenuOpen(false); // Tutup menu setelah diklik
                }}
                className={`block px-4 py-2 text-black hover:text-yellow-500 transition-colors cursor-pointer ${
                  activeSection === section ? "text-yellow-500" : ""
                }`}
              >
                {sectionNames[idx]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;