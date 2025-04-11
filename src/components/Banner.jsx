import React from "react";

const Banner = ({ sections, sectionNames, activeSection, scrollToSection }) => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
      id="banner"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div>
      
      <div className="flex-1 flex flex-col md:flex-row items-center justify-between h-screen px-4 sm:px-20 relative">
        <div className="font-barlow text-left w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6 mt-20">
            BUILD YOUR
            <br />
            <i>BRAND IDENTITY</i>
            <br />
            <b>WITH SOCIAL MEDIA</b>
          </h1>
          <button className="bg-green-500 text-black px-6 py-2 rounded font-bold hover:bg-green-600 rounded-full">
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