import React from "react";
import "./App.css";

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-white flex flex-col">
      {/* Navbar */}
      <nav
        className="w-full flex justify-between items-center bg-black sticky top-0 z-10"
        style={{ padding: "30px 80px" }}
      >
        <div className="text-2xl font-bold">KOSI</div>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#"
              onClick={() => scrollToSection("contents")}
              className="hover:text-green-500"
            >
              All Contents & Event
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => scrollToSection("services")}
              className="hover:text-green-500"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => scrollToSection("about")}
              className="hover:text-green-500"
            >
              About KOSI
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => scrollToSection("gallery")}
              className="hover:text-green-500"
            >
              Gallery
            </a>
          </li>
        </ul>
      </nav>
      <div
        className="container relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/background.jpg')",
        }}
      >
        {/* Overlay with blur effect */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div>

        {/* Banner Section */}
        <div
          id="banner"
          className="flex-1 flex items-center justify-between h-screen px-20 relative"
        >
          {/* Text Section (left side) */}
          <div className="text-left w-1/2">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Build Your Brand Identity
              <br />
              With Social Media
            </h1>
            <button className="bg-green-500 text-black px-6 py-2 rounded font-bold hover:bg-green-600">
              Konsultasi Gratis Sekarang
            </button>
          </div>

          {/* Image Section (right side) */}
          <div className="w-1/2">
            <img
              src="/images/banner.jpg"
              alt="Brand Image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Contents Section */}
      <div
        id="contents"
        className="w-full h-screen flex flex-col justify-center"
      >
        <div
          className="container relative h-screen bg-cover bg-center"
          style={{
            backgroundColor: "#ECEBD3",
          }}
        >
          <div
            id="banner"
            className="flex flex-col items-center justify-center h-screen"
            style={{ padding: "0 200px", height: "100vh" }}
          >
            <div style={{ height: "100vh" }}>
              {/* Text Section (top) */}
              <div className="text-center mb-10">
                <h1 className="text-5xl font-bold leading-tight text-black">
                  Percayakan Perkembangan Masa Depan
                  <br />
                  Bisnis Anda Bersama Kami
                </h1>
              </div>

              {/* List Section (2 columns, 2 rows) */}
              <div className="w-full flex flex-wrap justify-between gap-6 border-t-4 border-gray-300 pt-6">
                {/* List Item 1 */}
                <div className="flex items-center w-1/2 md:w-1/4 mb-6">
                  <img
                    src="/images/chart.png"
                    alt="Item 1"
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <h2 className="font-bold text-lg text-black">Data 1</h2>
                    <p className="text-gray-600">Description for data 1.</p>
                  </div>
                </div>

                {/* List Item 2 */}
                <div className="flex items-center w-1/2 md:w-1/4 mb-6">
                  <img
                    src="/images/chart.png"
                    alt="Item 2"
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <h2 className="font-bold text-lg text-black">Data 2</h2>
                    <p className="text-gray-600">Description for data 2.</p>
                  </div>
                </div>

                {/* List Item 3 */}
                <div className="flex items-center w-1/2 md:w-1/4 mb-6">
                  <img
                    src="/images/chart.png"
                    alt="Item 3"
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <h2 className="font-bold text-lg text-black">Data 3</h2>
                    <p className="text-gray-600">Description for data 3.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mb-10 mt-20">
            <h1 className="text-5xl font-bold leading-tight text-black">
              Percayakan Perkembangan Masa Depan
              <br />
              Bisnis Anda Bersama Kami
            </h1>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div
        id="services"
        className="w-full h-screen flex flex-col justify-center"
        style={{ backgroundColor: "blue" }}
      >
        <h2 className="text-3xl font-bold mb-6">Services</h2>
      </div>

      {/* About Section */}
      <div
        id="about"
        className="w-full h-screen flex flex-col justify-center"
        style={{ backgroundColor: "red" }}
      >
        <h2 className="text-3xl font-bold mb-6">About KOSI</h2>
      </div>

      {/* Gallery Section */}
      <div
        id="gallery"
        className="w-full h-screen flex flex-col justify-center"
        style={{ backgroundColor: "green" }}
      >
        <h2 className="text-3xl font-bold mb-6">Gallery</h2>
      </div>
    </div>
  );
}

export default App;
