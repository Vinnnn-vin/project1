import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import PropTypes from "prop-types";

const Contents = ({ title, dataItems }) => {
  const chunkedItems = [];
  for (let i = 0; i < dataItems.length; i += 3) {
    chunkedItems.push(dataItems.slice(i, i + 3));
  }

  return (
    <div
      id="contents"
      className="flex flex-col justify-center py-12 bg-[#ECEBD3] pt-24 min-h-screen"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            {title}
          </h1>
        </div>

        <div className="flex flex-col gap-8">
          {chunkedItems.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8"
            >
              {row.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <img
                      src="/images/chart.png"
                      alt={`Item ${index + 1}`}
                      className="w-16 h-16 object-cover"
                    />
                  </div>

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
          ))}
        </div>
      </div>
    </div>
  );
};

Contents.propTypes = {
  title: PropTypes.string.isRequired,
  dataItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Contents;
