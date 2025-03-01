import React from 'react';

const Navbar = ({ sections, sectionNames, activeSection, scrollToSection }) => {
  return (
    <nav className="w-full flex justify-between items-center bg-black top-0 z-10 px-20 py-6">
      <div className="flex items-center">
        <img
          src="images/KOSI Square White 2.png"
          alt="KOSI Logo"
          className="h-12 w-auto object-contain"
        />
      </div>
      <ul className="flex space-x-6">
        {sections.map((section, idx) => (
          <li key={section}>
            <a
              onClick={() => scrollToSection(section)}
              className={`hover:text-yellow-500 transition cursor-pointer ${
                activeSection === section ? "text-yellow-500" : ""
              }`}
            >
              {sectionNames[idx]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;