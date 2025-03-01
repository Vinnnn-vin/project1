import React, { useState, useEffect } from 'react';

const ClientSection = ({ row1, row2 }) => {
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [selectedClient, setSelectedClient] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition1((prev) => {
        const newPos = prev - 1;
        return Math.abs(newPos) >= row1.length * 200 ? 0 : newPos;
      });

      setPosition2((prev) => {
        const newPos = prev - 1;
        return Math.abs(newPos) >= row2.length * 200 ? 0 : newPos;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [row1.length, row2.length]);

  const Modal = ({ client, onClose }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 relative">
        <button onClick={onClose} className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
          <X size={24} />
        </button>
        <div className="flex flex-col items-center">
          <div className="w-64 h-64 flex items-center justify-center mb-6">
            <img src={client.image} alt={client.alt} className="max-w-full max-h-full object-contain" />
          </div>
          <h3 className="text-2xl font-bold mb-4">{client.alt}</h3>
          <p className="text-gray-600 text-center">{client.description}</p>
        </div>
      </div>
    </div>
  );

  const CarouselRow = ({ items, position }) => (
    <div className="overflow-hidden">
      <div className="flex gap-8 transition-transform duration-300" style={{ transform: `translateX(${position}px)`, width: "fit-content" }}>
        {[...items, ...items].map((client, index) => (
          <div key={`${client.id}-${index}`} onClick={() => setSelectedClient(client)} className="w-40 h-40 rounded-lg overflow-hidden flex items-center justify-center p-4 cursor-pointer group">
            <img src={client.image} alt={client.alt} className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-beige flex flex-col justify-center py-16">
      <div className="">
        <h2 className="text-4xl font-bold text-center mb-16 text-black">Project Client Kami</h2>
        <div className="relative">
          <CarouselRow items={row1} position={position1} />
          <CarouselRow items={row2} position={position2} />
        </div>
      </div>
      {selectedClient && <Modal client={selectedClient} onClose={() => setSelectedClient(null)} />}
    </div>
  );
};

export default ClientSection;