import React from 'react';

const Banner = () => {
  return (
    <div className="container relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div>
      <div id="banner" className="flex-1 flex items-center justify-between h-screen px-20 relative">
        <div className="text-left w-1/2">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Build Your Brand Identity
            <br />
            With Social Media
          </h1>
          <button className="bg-green-500 text-black px-6 py-2 rounded font-bold hover:bg-green-600 rounded-lg">
            <a href="https://api.whatsapp.com/send/?phone=62881037767536&text&type=phone_number&app_absent=0wa.me/+62881037767536">
              Konsultasi Gratis Sekarang
            </a>
          </button>
        </div>
        <div className="w-1/2">
          <img src="/images/banner.jpg" alt="Brand Image" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Banner;