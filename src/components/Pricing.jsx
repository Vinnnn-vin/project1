import React from 'react';

const Pricing = ({ pricingData }) => {
  return (
    // <div id="pricing" className="w-full py-16 bg-gray-100">
    //   <div className="text-3xl sm:text-4xl font-bold text-center mb-16 text-black">
    //     <h2>Layanan Kami</h2>
    //   </div>
    //   <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
    //     {pricingData.map((pack, index) => (
    //       <div key={index} className="relative bg-white rounded-t-2xl overflow shadow-lg flex flex-col h-full">
    //         {pack.title === "Bronze Package" && (
    //           <div className="absolute -top-12 right-14 mr-14 pr-14 transform -rotate-12 z-10">
    //             <img src="/images/bronze.png" alt="Bronze Badge" className="w-20 h-20" />
    //           </div>
    //         )}
    //         {pack.title === "Silver Package" && (
    //           <div className="absolute -top-12 right-14 mr-14 pr-14 transform -rotate-12 z-10">
    //             <img src="/images/silver.png" alt="Silver Badge" className="w-20 h-20" />
    //           </div>
    //         )}
    //         {pack.title === "Gold Package" && (
    //           <div className="absolute -top-12 right-14 mr-14 pr-14 transform -rotate-12 z-10">
    //             <img src="/images/gold.png" alt="Gold Badge" className="w-20 h-20" />
    //           </div>
    //         )}
    //         {pack.title === "Paket Live Shopping" && (
    //           <div className="absolute top-12 right-14 mr-14 pr-14 transform -rotate-12 z-10">
    //             <img src="/images/best-offer-badge-a4e224.webp" alt="Best Offer Badge" className="w-20 h-20" />
    //           </div>
    //         )}
    //         <div className="p-6 bg-[#F5F5DC] flex-grow flex flex-col">
    //           <div className="text-center mt-10 mb-6">
    //             <span className="text-sm text-black"><b>Rp </b></span>
    //             <span className="text-4xl font-bold text-gray-800">{pack.price}</span>
    //             <span className="text-sm text-gray-600 ml-1">/ Bulan</span>
    //           </div>
    //           <ul className="space-y-4 flex-grow">
    //             {pack.features.map((feature, idx) => (
    //               <li key={idx} className="flex items-start gap-2 text-gray-700">
    //                 <div className="min-w-4 h-4 mt-1 bg-green-500 rounded-full"></div>
    //                 <span className="text-sm">{feature}</span>
    //               </li>
    //             ))}
    //           </ul>
    //           <button className="w-full bg-green-500 text-white py-3 rounded-lg mt-8 hover:bg-green-600 transition-colors">
    //             <a href="http://tiny.cc/adminkosi">Pesan Sekarang</a>
    //           </button>
    <div id="pricing" className="w-full py-12 sm:py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Layanan Kami
          </h2>
        </div>

        {/* Grid Card Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData.map((pack, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Badge */}
              {pack.title === "Bronze Package" && (
                <div className="absolute -top-8 right-8 transform -rotate-12 z-10">
                  <img
                    src="/images/bronze.png"
                    alt="Bronze Badge"
                    className="w-20 h-20"
                  />
                </div>
              )}
              {pack.title === "Silver Package" && (
                <div className="absolute -top-8 right-8 transform -rotate-12 z-10">
                  <img
                    src="/images/silver.png"
                    alt="Silver Badge"
                    className="w-16 h-16"
                  />
                </div>
              )}
              {pack.title === "Gold Package" && (
                <div className="absolute -top-8 right-8 transform -rotate-12 z-10">
                  <img
                    src="/images/gold.png"
                    alt="Gold Badge"
                    className="w-16 h-16"
                  />
                </div>
              )}
              {pack.title === "Paket Live Shopping" && (
                <div className="absolute -top-8 right-8 transform -rotate-12 z-10">
                  <img
                    src="/images/best-offer-badge-a4e224.webp"
                    alt="Best Offer Badge"
                    className="w-16 h-16"
                  />
                </div>
              )}

              {/* Konten Card */}
              <div className="p-6 bg-[#F5F5DC] flex flex-col h-full">
                {/* Harga */}
                <div className="text-center mb-6">
                  <span className="text-sm text-black"><b>Rp</b></span>
                  <span className="text-3xl sm:text-4xl font-bold text-gray-800">
                    {pack.price}
                  </span>
                  <span className="text-sm text-gray-600 ml-1">/ Bulan</span>
                </div>

                {/* Fitur */}
                <ul className="space-y-4 flex-grow">
                  {pack.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <div className="min-w-4 h-4 mt-1 bg-green-500 rounded-full"></div>
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Tombol */}
                <button className="w-full bg-green-500 text-white py-3 rounded-lg mt-8 hover:bg-green-600 transition-colors transform hover:scale-105">
                  <a href="http://tiny.cc/adminkosi">Pesan Sekarang</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;