import React from 'react';

const Banner = ({ sections, sectionNames, activeSection, scrollToSection }) => {
  
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div>
      <nav className="w-full flex justify-between items-center bg-transparent fixed top-0 left-0 z-10 px-4 sm:px-20 h-20">
      <div className="flex items-center">
        <img
          src="images/KOSI Square White 2.png"
          alt="KOSI Logo"
          className="h-20 w-auto object-contain"
          style={{ marginLeft: '-40px' }}
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

      <div id="banner" className="flex-1 flex flex-col md:flex-row items-center justify-between h-screen px-4 sm:px-20 relative">
        <div className="font-barlow text-left w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6 mt-20">
          BUILD YOUR
            <br/> 
            <i>BRAND IDENTITY</i>
            <br/>
            <b>WITH SOCIAL MEDIA</b>
          </h1>
          <button className="bg-green-500 text-black px-6 py-2 rounded font-bold hover:bg-green-600 rounded-full">
      {/* Overlay dengan efek blur */}
      {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div> */}

      {/* Konten Banner */}
      {/* <div id="banner" className="flex-1 flex flex-col md:flex-row items-center justify-evenly h-screen px-4 sm:px-8 md:px-12 lg:px-20 relative mx-auto max-w-7xl"> */}
        {/* Teks dan Tombol */}
        {/* <div className="text-left w-full md:w-1/2 mb-8 md:mb-0 space-y-4 sm:space-y-6 mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white animate-fade-in-up">
            Build Your Brand Identity
            <br />
            <span className="text-green-500">With Social Media</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 animate-fade-in-up delay-100">
            Kami membantu Anda membangun identitas brand yang kuat melalui strategi media sosial yang efektif.
          </p>
          <button className="bg-green-500 text-black px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-bold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-200"> */}
            <a href="https://api.whatsapp.com/send/?phone=62881037767536&text&type=phone_number&app_absent=0wa.me/+62881037767536">
              Konsultasi Gratis Sekarang!
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;