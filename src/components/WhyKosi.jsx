import React from 'react';

const WhyKosi = ({ socialIcons }) => {
  return (
    <div id="whyKosi" className="w-full min-h-screen bg-yellow-300 flex items-center p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-black">Mengapa KOSI?</h2>
          <p className="text-lg text-black">
            Kami adalah tim yang berdedikasi untuk bekerjasama dengan klien, guna meningkatkan brand awareness melalui value utama kami, yaitu
            <span className="font-bold"> Building your character in Social Media</span>
          </p>
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
            <span>Mari Berkolaborasi</span>
          </button>
          <div className="grid grid-cols-4 gap-4 mt-8">
            {socialIcons.map((item, index) => (
              <div key={index} className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                {item.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="/images/banner.jpg" alt="Team Photo" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -z-10 top-8 right-8 w-32 h-32 bg-yellow-200 rounded-lg"></div>
          <div className="absolute -z-10 bottom-8 left-8 w-32 h-32 bg-yellow-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default WhyKosi;