import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Pricing = () => {
  const [expandedPack, setExpandedPack] = useState(null);

  const pricingData = [
    {
      id: 1,
      title: "Bronze Package",
      price: "4.000.000",
      features: [
        "15 Photos Feed Instagram",
        "8 Design Feeds Instagram",
        "12 Story Instagram",
        "2 Reels",
        "Strategi & Perencanaan (analisa + konsep & ide + monthly report & evaluasi)",
        "Scriptwriting",
        "Copywriting Instagram",
        "Admin Instagram (reply DM, comment, upload video)",
        "Instagram Ads",
        "Photographer & Editor",
        "Visit 1-2x sebulan"
      ],
      badge: "bronze.png"
    },
    {
      id: 2,
      title: "Silver Package",
      price: "5.000.000",
      features: [
        "12 Konten TikTok Mirroring ke reels",
        "Strategi Perencanaan (analisa + konsep & ide + monthly report & evaluasi)",
        "Scriptwriting",
        "Copywriting TikTok & Instagram",
        "Admin TikTok & Instagram (reply DM, comment, upload video)",
        "TikTok & Instagram Ads",
        "Videographer & Editor",
        "Visit 2-4x sebulan"
      ],
      badge: "silver.png"
    },
    {
      id: 3,
      title: "Gold Package",
      price: "7.000.000",
      features: [
        "15 Konten TikTok Mirroring ke Reels",
        "8 Design Feeds Instagram",
        "8 High Quality Photos",
        "8 Story Instagram",
        "Strategi & Perencanaan (analisa + konsep & ide + monthly report & evaluasi)",
        "Scriptwriting",
        "Copywriting TikTok & Instagram",
        "Admin TikTok & Instagram (reply DM, comment, upload video)",
        "TikTok Ads",
        "Videographer & Editor",
        "Visit 1-2x sebulan"
      ],
      badge: "gold.png"
    },
    {
      id: 4,
      title: "Paket Live Shopping",
      price: "5.500.000",
      features: [
        "12 Konten Video Awareness",
        "24 Konten Pre-heat Live",
        "Live 72 jam (Senin-Sabtu dengan durasi 3 jam per live)",
        "Ada 50rb per live (total 24x)",
        "Host Live",
        "Studio + Perlengkapan + Properti",
        "Scriptwriting TikTok",
        "Copywriting TikTok",
        "Admin TikTok (reply DM, comment, upload video)",
        "Videographer & Editor",
        "Studio & Perlengkapan"
      ],
      badge: "best-offer-badge-a4e224.webp"
    }
  ];

  const toggleExpand = (id) => {
    setExpandedPack(expandedPack === id ? null : id);
  };

  return (
    <div id="pricing" className="w-full py-12 sm:py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            LAYANAN KAMI
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Kami menyediakan berbagai paket sesuai kebutuhan anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pricingData.map((pack) => (
            <div
              key={pack.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                expandedPack === pack.id ? 'ring-2 ring-yellow-400' : ''
              }`}
            >
              <div 
                className="p-6 cursor-pointer flex justify-between items-center"
                onClick={() => toggleExpand(pack.id)}
              >
                <div>
                  <div className="flex items-center gap-3">
                    {pack.badge && (
                      <img 
                        src={`/images/${pack.badge}`} 
                        alt={pack.title} 
                        className="w-12 h-12 object-contain"
                      />
                    )}
                    <h3 className="text-xl font-bold text-gray-800">
                      {pack.title}
                    </h3>
                  </div>
                  <p className="text-lg font-semibold text-gray-700 mt-1">
                    Rp {pack.price} <span className="text-sm text-gray-500">/ Bulan</span>
                  </p>
                </div>
                <div className="text-gray-500">
                  {expandedPack === pack.id ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
                </div>
              </div>

              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  expandedPack === pack.id ? 'max-h-[1000px]' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <ul className="space-y-3">
                    {pack.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;