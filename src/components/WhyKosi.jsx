import React from 'react';

const WhyKosi = ({ socialIcons }) => {
  return (
    <div id="whyKosi" className="w-full min-h-screen bg-yellow-300 flex items-center p-4 sm:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="font-barlow space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight mb-6 text-black">MENGAPA <i>KOSI</i> ENTERTAINMENT?</h2>
          <p className="text-lg text-black">
            Kami adalah tim yang berdedikasi untuk bekerjasama dengan klien, guna meningkatkan brand awareness melalui value utama kami, yaitu
            <span className="font-bold"> Building your character in Social Media</span>
          </p>
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors transform hover:scale-105">
            <span>Mari Berkolaborasi</span>
          </button>
          {/* Ikon Sosial Media */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {socialIcons.map((item, index) => (
              <div
                key={index}
                className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Gambar */}
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src="/images/banner.jpg"
              alt="Team Photo"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Dekorasi */}
          <div className="absolute -z-10 top-4 sm:top-8 right-4 sm:right-8 w-16 h-16 sm:w-32 sm:h-32 bg-yellow-200 rounded-lg"></div>
          <div className="absolute -z-10 bottom-4 sm:bottom-8 left-4 sm:left-8 w-16 h-16 sm:w-32 sm:h-32 bg-yellow-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default WhyKosi;