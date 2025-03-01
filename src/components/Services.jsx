import React from 'react';

const Services = ({ services }) => {
  return (
    <div id="services" className="relative w-full min-h-screen flex flex-col justify-center py-16" style={{ backgroundImage: "url('/images/ian-schneider-TamMbr4okv4-unsplash.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
            <span className="text-yellow-400">LAYANAN TERBAIK</span> UNTUK
            <br/>
            KEBUTUHAN ANDA
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 text-black transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 leading-tight">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;