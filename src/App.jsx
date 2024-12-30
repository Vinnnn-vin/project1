import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("");

  const sections = ["contents", "services", "about", "gallery"];
  const sectionNames = [
    "All Contents & Event",
    "Services",
    "About KOSI",
    "Gallery KOSI",
  ]; // Nama tampilan baru

  const services = [
    {
      title: "KEAHLIAN DAN PENGALAMAN",
      description:
        "Dapatkan bimbingan dari para profesional yang memahami branding dan juga goal bisnis",
    },
    {
      title: "KONSISTENSI MENJADI UTAMA",
      description:
        "Kembangkan identitas merek yang konsisten agar dapat dikenali di masyarakat",
    },
    {
      title: "EFESIENSI WAKTU DAN BIAYA",
      description:
        "Menghemat waktu dan biaya dengan mempercayakan tugas branding kepada KOSI.",
    },
  ];

  const clientProjects = [
    {
      id: 1,
      image: "/images/thang-palace.jpg",
      alt: "Thang Palace Logo",
    },
    {
      id: 2,
      image: "/images/cartoon-avatar.jpg",
      alt: "Cartoon Avatar",
    },
    {
      id: 3,
      image: "/images/social-post.jpg",
      alt: "Social Media Post",
    },
    {
      id: 4,
      image: "/images/thang-palace.jpg",
      alt: "Thang Palace Logo",
    },
    {
      id: 5,
      image: "/images/cartoon-avatar.jpg",
      alt: "Cartoon Avatar",
    },
    {
      id: 6,
      image: "/images/social-post.jpg",
      alt: "Social Media Post",
    },
    // Add more projects as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 3; // Number of slides to show at once

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === clientProjects.length - slidesToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? clientProjects.length - slidesToShow : prev - 1
    );
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, [sections]);

  return (
    <div className="text-white flex flex-col">
      {/* Navbar */}
      <nav
        className="w-full flex justify-between items-center bg-black sticky top-0 z-10"
        style={{ padding: "30px 80px" }}
      >
        <div className="text-2xl font-bold">KOSI</div>
        <ul className="flex space-x-6">
          {sections.map((section, idx) => (
            <li key={section}>
              <a
                onClick={() => scrollToSection(section)}
                className={`hover:text-yellow-500 transition cursor-pointer ${
                  activeSection === section ? "text-yellow-500" : ""
                }`}
              >
                {sectionNames[idx]}
              </a>
            </li>
          ))}
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
            <button className="bg-green-500 text-black px-6 py-2 rounded font-bold hover:bg-green-600 rounded-lg">
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
      <div id="contents" className="w-full flex flex-col justify-center">
        <div
          className="bg-cover bg-center"
          style={{
            backgroundColor: "#ECEBD3",
          }}
        >
          <div
            id="banner"
            className="flex flex-col items-center justify-center"
            style={{ padding: "0 200px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              {/* Text Section (top) */}
              <div className="text-center" style={{ margin: "100px auto" }}>
                <h1 className="text-5xl font-bold leading-tight text-black">
                  Percayakan Perkembangan Masa Depan
                  <br />
                  Bisnis Anda Bersama Kami
                </h1>
              </div>

              {/* List Section (2 columns, 2 rows) */}
              <div className="w-full flex flex-wrap justify-between gap-6 pt-6">
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

                {/* List Item 4 */}
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

                {/* List Item 5 */}
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

                {/* List Item 6 */}
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

            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "space-around",
                borderTop: "5px solid ",
                marginTop: "100px",
                marginBottom: "100px",
              }}
            >
              {/* Text Section (top) */}
              <div
                className="text-center"
                style={{ paddingTop: "100px", paddingBottom: "50px" }}
              >
                <h1 className="text-5xl font-bold leading-tight text-black">
                  Mendorong dampak bisnis <br /> seharusnya lebih mudah
                </h1>
              </div>

              {/* List Section (2 columns, 2 rows) */}
              <div className="w-full flex flex-wrap justify-center gap-6 pt-6">
                {/* List Item 1 */}
                <div
                  className="items-center md:w-1/4 mb-6 shadow-2xl border-solid border-4 border-yellow-300 rounded-lg"
                  style={{ width: "30%" }}
                >
                  <div className="px-5 py-5">
                    <h2 className="font-bold text-lg text-black">
                      Kemajuan Teknologi dan Digitalisasi
                    </h2>
                    <p className="text-gray-600">
                      Perkembangan teknologi memudahkan perusahaan untuk
                      mengotomatiskan proses, mengumpulkan data, dan
                      menganalisis tren bisnis dengan cepat, yang membantu
                      membuat keputusan strategi lebih tepat dan cepat.
                    </p>
                  </div>
                </div>

                {/* List Item 2 */}
                <div
                  className="items-center w-1/2 md:w-1/4 mb-6 shadow-2xl border-solid border-4 border-yellow-300 rounded-lg"
                  style={{ width: "30%" }}
                >
                  <div className="px-5 py-5">
                    <h2 className="font-bold text-lg text-black">
                      Akses ke Pasar Global
                    </h2>
                    <p className="text-gray-600">
                      Internet dan platform e-commerce membuka peluang untuk
                      memperluas jangkauan bisnis secara global, memungkinkan
                      bisnis dari berbagai ukuran untuk menjangkau pelanggan
                      yang lebih luas tanpa hambatan geografis.
                    </p>
                  </div>
                </div>

                {/* List Item 3 */}
                <div
                  className="items-center w-1/2 md:w-1/4 mb-6 shadow-2xl border-solid border-4 border-yellow-300 rounded-lg"
                  style={{ width: "30%" }}
                >
                  <div className="px-5 py-5">
                    <h2 className="font-bold text-lg text-black">
                      Inovasi dalam Pembiayaan Bisnis
                    </h2>
                    <p className="text-gray-600">
                      Dengan adanya platform crowdfunding dan fintech, akses
                      terhadap pendanaan lebih mudah dan beragam, sehingga
                      bisnis dapat mendapatkan modal dengan lebih cepat
                      dibandingkan cara tradisional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="whyKosi"
        className="w-full min-h-screen bg-yellow-300 flex items-center p-8"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-black">Mengapa KOSI?</h2>

            <p className="text-lg text-black">
              Kami adalah tim yang berdedikasi untuk bekerjasama dengan klien,
              guna meningkatkan brand awareness melalui value utama kami, yaitu
              <span className="font-bold">
                {" "}
                "Building your character in Social Media"
              </span>
            </p>

            <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
              <span>Mari Berkolaborasi</span>
              {/* <WhatsappLogo size={20} /> */}
            </button>

            <div className="grid grid-cols-4 gap-4 mt-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="w-16 h-16 bg-gray-200 rounded-lg" />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/banner.jpg"
                alt="Team Photo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative squares in background */}
            <div className="absolute -z-10 top-8 right-8 w-32 h-32 bg-yellow-200 rounded-lg"></div>
            <div className="absolute -z-10 bottom-8 left-8 w-32 h-32 bg-yellow-200 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div
        id="services"
        className="relative w-full min-h-screen flex flex-col justify-center py-16"
        style={{
          backgroundImage:
            "url('/images/ian-schneider-TamMbr4okv4-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-yellow-400">Layanan Terbaik</span> untuk
            </h2>
            <h2 className="text-4xl font-bold">Kebutuhan Anda</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-black transform hover:-translate-y-2 transition-transform duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Section */}
      <div
        id="about"
        className="w-full h-screen flex flex-col justify-center"
        style={{ backgroundColor: "red" }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-center mb-16">
            Project Client Kami
          </h2>

          {/* Carousel Container */}
          <div className="relative">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/10 hover:bg-white/20 rounded-full p-2 z-10"
            >
              {/* <ChevronLeft size={24} /> */}
              <p> kiri </p>
            </button>

            {/* Carousel */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentSlide * (100 / slidesToShow)
                  }%)`,
                }}
              >
                {clientProjects.map((project) => (
                  <div key={project.id} className="w-full min-w-[33.333%] px-4">
                    <div className="bg-white rounded-lg aspect-square overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/10 hover:bg-white/20 rounded-full p-2 z-10"
            >
              {/* <ChevronRight size={24} /> */}
              <p>kanan</p>
            </button>
          </div>
        </div>
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
