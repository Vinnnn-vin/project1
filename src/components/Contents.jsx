import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const Contents = ({ title, dataItems }) => {
  return (
    <div id="contents" className="flex flex-col justify-center py-12 bg-[#ECEBD3] pt-24 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            {title}
          </h1>
        </div>

        {/* Grid Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dataItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <img
                  src="/images/chart.png"
                  alt={`Item ${index + 1}`}
                  className="w-16 h-16 object-cover"
                />
              </div>

              {/* Konten */}
              <div className="ml-5">
                <h2 className="text-xl font-bold text-black mb-2">
                  {item.title}
                </h2>
                <motion.p
                  className="text-gray-600 text-3xl font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <AnimatedCounter value={item.value} />+
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contents;