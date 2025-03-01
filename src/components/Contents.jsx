import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const Contents = ({ title, dataItems }) => {
  return (
    <div id="contents" className="flex flex-col justify-center">
      <div className="bg-cover bg-center" style={{ backgroundColor: "#ECEBD3" }}>
        <div id="banner" className="flex flex-col items-center justify-center w-full">
          <div className="text-center" style={{ margin: "50px auto" }}>
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-black">{title}</h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 text-left">
              {dataItems.map((item, index) => (
                <div key={index} className="flex items-center w-full mb-6">
                  <img src="/images/chart.png" alt={`Item ${index + 1}`} className="w-16 h-16 object-cover mr-5" />
                  <div>
                    <h2 className="font-bold text-xl text-black">{item.title}</h2>
                    <motion.p className="text-gray-600 text-4xl font-semibold text-left" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                      <AnimatedCounter value={item.value} />+
                    </motion.p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;