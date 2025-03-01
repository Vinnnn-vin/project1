import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
      {/* Overlay dengan efek blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Konten Banner */}
      <div id="banner" className="flex-1 flex flex-col md:flex-row items-center justify-evenly h-screen px-4 sm:px-8 md:px-12 lg:px-20 relative mx-auto max-w-7xl">
        {/* Teks dan Tombol */}
        <div className="text-left w-full md:w-1/2 mb-8 md:mb-0 space-y-4 sm:space-y-6 mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white animate-fade-in-up">
            Build Your Brand Identity
            <br />
            <span className="text-green-500">With Social Media</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 animate-fade-in-up delay-100">
            Kami membantu Anda membangun identitas brand yang kuat melalui strategi media sosial yang efektif.
          </p>
          <button className="bg-green-500 text-black px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-bold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-200">
            <a href="https://api.whatsapp.com/send/?phone=62881037767536&text&type=phone_number&app_absent=0wa.me/+62881037767536">
              Konsultasi Gratis Sekarang
            </a>
          </button>
        </div>

        {/* Gambar */}
        <div className="w-full md:w-1/2 flex justify-center items-center animate-fade-in-up delay-300">
          <img
            src="/images/banner.jpg"
            alt="Brand Image"
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;