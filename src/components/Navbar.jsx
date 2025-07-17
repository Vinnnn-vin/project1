import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ sections, sectionNames, activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (section) => {
    const element = document.getElementById(section);
    if (element) {
      // Calculate the position to scroll to, accounting for navbar height
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const offsetPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
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
            className="text-white focus:outline-none relative z-50 w-10 h-10 flex flex-col justify-center items-center"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : '-translate-y-1'}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${isMenuOpen ? '-rotate-45 -translate-y-2' : 'translate-y-1'}`}></span>
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`fixed md:static top-0 left-0 w-full h-screen md:h-auto bg-black md:bg-transparent transition-all duration-300 ease-in-out flex items-center justify-center md:block ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:visible md:opacity-100'
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center md:space-x-6 space-y-8 md:space-y-0 justify-between px-20 mx-20">
            {sections.map((section, idx) => (
              <li key={section}>
                <button
                  onClick={() => handleNavigation(section)}
                  className={`text-xl md:text-base px-4 py-2 text-white hover:text-yellow-500 transition-colors ${
                    activeSection === section ? "text-yellow-500" : ""
                  }`}
                >
                  {sectionNames[idx]}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
  sectionNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeSection: PropTypes.string,
  scrollToSection: PropTypes.func.isRequired
};