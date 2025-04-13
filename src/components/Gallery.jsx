import React, { useState, useEffect, useCallback, useRef } from 'react';

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const modalRef = useRef(null);
  
  // Handle keyboard navigation and close
  const handleKeyDown = useCallback((event) => {
    if (!selectedImage) return;
    
    switch (event.key) {
      case 'Escape':
        setSelectedImage(null);
        break;
      case 'ArrowLeft':
        previousImage();
        break;
      case 'ArrowRight':
        nextImage();
        break;
      default:
        break;
    }
  }, [selectedImage]);

  // Add and cleanup event listeners
  useEffect(() => {
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // Restore body scrolling when modal is closed
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage, handleKeyDown]);

  const nextImage = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const previousImage = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  // Close modal when clicking outside the image container
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="bg-white py-12 sm:py-24" id="gallery">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul Section */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-black">
          Hasil Karya Kolaborasi Terbaik Kami!
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
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center" 
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-modal-title"
        >
          <div 
            ref={modalRef}
            className="relative w-full max-w-6xl mx-4"
          >
            {/* Tombol Close - Native button dengan styling yang lebih baik */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 p-2 z-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
              aria-label="Close gallery"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Tambahan button close untuk mobile di bawah gambar */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2 md:hidden bg-white text-black py-2 px-6 rounded-full font-medium hover:bg-yellow-400 transition-colors"
            >
              Close
            </button>

            {/* Gambar */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <img
                id="gallery-modal-title"
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Tombol Navigasi - Styling yang lebih baik */}
            <button
              type="button"
              onClick={previousImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 sm:-translate-x-16 bg-white/10 hover:bg-white/30 p-3 sm:p-4 rounded-full text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 sm:translate-x-16 bg-white/10 hover:bg-white/30 p-3 sm:p-4 rounded-full text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indikator Gambar */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm sm:text-base bg-black/50 py-1 px-3 rounded-full">
              {images.findIndex((img) => img.id === selectedImage.id) + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;