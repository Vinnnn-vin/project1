import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { X } from "react-feather";

const ClientSection = ({ row1, row2 }) => {
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [selectedClient, setSelectedClient] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const animationRef = useRef(null);
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);
  const modalCloseButtonRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      if (!isDragging && !selectedClient) {
        setPosition1(prev => (Math.abs(prev - 1) >= row1.length * 200 ? 0 : prev - 1));
        setPosition2(prev => (Math.abs(prev - 1) >= row2.length * 200 ? 0 : prev - 1));
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [row1.length, row2.length, isDragging, selectedClient]);

  // Event listener untuk Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedClient) {
        closeModal();
      }
    };

    if (selectedClient) {
      document.body.style.overflow = "hidden"; // Mencegah scrolling background
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto"; // Mengembalikan scrolling
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedClient]);

  // Pastikan button modal selalu memiliki focus event handler
  useEffect(() => {
    if (selectedClient && modalCloseButtonRef.current) {
      const closeButton = modalCloseButtonRef.current;
      closeButton.addEventListener("click", closeModal);

      return () => {
        closeButton.removeEventListener("click", closeModal);
      };
    }
  }, [selectedClient]);

  const handlePointerDown = (e) => {
    setIsDragging(false);
    setStartX(e.clientX || (e.touches && e.touches[0].clientX) || 0);
  };

  const handlePointerMove = (e) => {
    if (!startX) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    if (Math.abs(currentX - startX) > 5) {
      setIsDragging(true);
    }
  };

  const handlePointerUp = (client) => {
    if (!isDragging) {
      openModal(client);
    }
    setIsDragging(false);
    setStartX(0);
  };

  const openModal = (client) => {
    if (!client) return;
    document.body.style.overflow = "hidden";
    setSelectedClient(client);
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    setSelectedClient(null);
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && modalRef.current === e.target) {
      closeModal();
    }
  };

  const Modal = ({ client }) => {
    if (!client) return null;

    return (
      <div
        ref={modalRef}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={handleOutsideClick}
      >
        <div
          ref={modalContentRef}
          className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 relative shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            ref={modalCloseButtonRef}
            onClick={closeModal}
            className="absolute -top-10 right-0 sm:-right-10 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300"
            aria-label="Close modal"
            type="button"
          >
            <X
              size={28}
              className="text-white hover:text-yellow-400 transition-colors"
              strokeWidth={2.5}
            />
          </button>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex items-center justify-center bg-gray-50 rounded-lg p-4">
                <img
                  src={client.image}
                  alt={client.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
                {client.alt}
              </h3>
              <a href="http://tiny.cc/adminkosi">
                <button className="w-full bg-green-600 text-white py-3 px-3 rounded-lg hover:bg-green-600 transition-colors transform hover:scale-105 text-start">
                  <b>
                    Bergabung
                  </b>
                </button>
              </a>
              <button
                onClick={closeModal}
                className="mt-6 md:hidden w-full py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
                type="button"
              >
                <X size={18} />
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CarouselItem = ({ client }) => {
    return (
      <div
        className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-lg bg-white shadow-md overflow-hidden flex items-center justify-center p-3 cursor-pointer group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={() => handlePointerUp(client)}
        onMouseLeave={() => {
          setIsDragging(false);
          setStartX(0);
        }}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={() => handlePointerUp(client)}
      >
        <img
          src={client.image}
          alt={client.alt}
          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    );
  };

  const CarouselRow = ({ items, position }) => (
    <div className="overflow-hidden py-2">
      <div
        className="flex gap-6 sm:gap-8 transition-transform duration-300 will-change-transform"
        style={{ transform: `translateX(${position}px)`, width: "fit-content" }}
      >
        {[...items, ...items].map((client, index) => (
          <CarouselItem key={`${client.id}-${index}`} client={client} />
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="clients"
      className="min-h-screen bg-beige flex flex-col justify-center py-16 sm:py-20 px-4 sm:px-6"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-900">
          PROJECT CLIENT KAMI
        </h2>
        <div className="space-y-8 md:space-y-12">
          <CarouselRow items={row1} position={position1} />
          <CarouselRow items={row2} position={position2} />
        </div>
      </div>
      x{selectedClient && <Modal client={selectedClient} />}
    </section>
  );
};

export default ClientSection;

ClientSection.propTypes = {
  row1: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string,
      views: PropTypes.number,
      pinned: PropTypes.bool,
    })
  ).isRequired,
  row2: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string,
      views: PropTypes.number,
      pinned: PropTypes.bool,
    })
  ).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  position: PropTypes.number.isRequired,
  client: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};