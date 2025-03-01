import React, { useState } from 'react';

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const nextImage = () => {
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const previousImage = () => {
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div className="bg-white py-12 sm:py-24" id="gallery">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul Section */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          Our Gallery
        </h2>

        {/* Grid Gambar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <button
                    onClick={() => setSelectedImage(image)}
                    className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-6xl mx-4">
            {/* Tombol Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-yellow-400"
            >
              <span className="text-3xl">×</span>
            </button>

            {/* Gambar */}
            <div className="relative aspect-video">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Tombol Navigasi */}
            <button
              onClick={previousImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 sm:-translate-x-16 bg-white/10 hover:bg-white/20 p-3 sm:p-4 rounded-full text-white"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 sm:translate-x-16 bg-white/10 hover:bg-white/20 p-3 sm:p-4 rounded-full text-white"
            >
              →
            </button>

            {/* Indikator Gambar */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm sm:text-base">
              {images.findIndex((img) => img.id === selectedImage.id) + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;