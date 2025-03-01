import React from 'react';

const Services = ({ services }) => {
  return (
    <div
      id="services"
      className="relative w-full min-h-screen flex flex-col justify-center py-12 sm:py-16"
      style={{
        backgroundImage: "url('/images/ian-schneider-TamMbr4okv4-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Konten */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-yellow-400">Layanan Terbaik</span> untuk
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Kebutuhan Anda
          </h2>
        </div>

        {/* Grid Card Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-8 text-black transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;