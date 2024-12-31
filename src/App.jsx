import React, { useEffect, useState } from "react";
import "./App.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      image: "/images/jose-aljovin-XevnZB3CdsU-unsplash.jpg",
      alt: "Thang Palace Logo",
    },
    {
      id: 2,
      image: "/images/jose-aljovin-XevnZB3CdsU-unsplash.jpg",
      alt: "Cartoon Avatar",
    },
    {
      id: 3,
      image: "/images/jose-aljovin-XevnZB3CdsU-unsplash.jpg",
      alt: "Social Media Post",
    },
    {
      id: 4,
      image: "/images/ian-schneider-TamMbr4okv4-unsplash.jpg",
      alt: "Thang Palace Logo",
    },
    {
      id: 5,
      image: "/images/ian-schneider-TamMbr4okv4-unsplash.jpg",
      alt: "Cartoon Avatar",
    },
    {
      id: 6,
      image: "/images/luke-chesser-1uxV8fAfhVM-unsplash.jpg",
      alt: "Social Media Post",
    },
    {
      id: 7,
      image: "/images/ian-schneider-TamMbr4okv4-unsplash.jpg",
      alt: "Thang Palace Logo",
    },
    {
      id: 8,
      image: "/images/ian-schneider-TamMbr4okv4-unsplash.jpg",
      alt: "Cartoon Avatar",
    },
    {
      id: 9,
      image: "/images/luke-chesser-1uxV8fAfhVM-unsplash.jpg",
      alt: "Social Media Post",
    },
    {
      id: 10,
      image: "/images/ian-schneider-TamMbr4okv4-unsplash.jpg",
      alt: "Thang Palace Logo",
    },
    {
      id: 11,
      image: "/images/ian-schneider-TamMbr4okv4-unsplash.jpg",
      alt: "Cartoon Avatar",
    },
    {
      id: 12,
      image: "/images/luke-chesser-1uxV8fAfhVM-unsplash.jpg",
      alt: "Social Media Post",
    },
    {
      id: 6,
      image: "/images/luke-chesser-1uxV8fAfhVM-unsplash.jpg",
      alt: "Social Media Post",
    },
    {
      id: 7,
      image: "/images/ian-schneider-TamMbr4okv4-unsplash.jpg",
      alt: "Thang Palace Logo",
    },
    {
      id: 8,
      image: "/images/ian-schneider-TamMbr4okv4-unsplash.jpg",
      alt: "Cartoon Avatar",
    },
    {
      id: 9,
      image: "/images/luke-chesser-1uxV8fAfhVM-unsplash.jpg",
      alt: "Social Media Post",
    },
    {
      id: 10,
      image: "/images/ian-schneider-TamMbr4okv4-unsplash.jpg",
      alt: "Thang Palace Logo",
    },
    {
      id: 11,
      image: "/images/ian-schneider-TamMbr4okv4-unsplash.jpg",
      alt: "Cartoon Avatar",
    },
    {
      id: 12,
      image: "/images/luke-chesser-1uxV8fAfhVM-unsplash.jpg",
      alt: "Social Media Post",
    },
  ];

  const pricingData = [
    {
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
        "Admin Instagram (reply dm, comment, upload video)",
        "Instagram Ads",
        "Photographer & Editor",
        "Visit 1-2x sebulan",
      ],
    },
    {
      title: "Silver Package",
      price: "5.000.000",
      features: [
        "12 Konten Tiktok Mirroring ke reels",
        "Strategi Perencanaan (analisa + konsep & ide + monthly report & evaluasi)",
        "Scriptwriting",
        "Copywriting Tiktok & Instagram",
        "Admin Tiktok & Instagram (reply dm, comment, upload video)",
        "Tiktok & Instagram Ads",
        "Videographer & Editor",
        "Visit 2-4x sebulan",
      ],
    },
    {
      title: "Gold Package",
      price: "7.000.000",
      features: [
        "15 Konten Tiktok Mirroring ke Reels",
        "8 Design Feeds Instagram",
        "8 High Quality Photos",
        "8 Story Instagram",
        "Strategi & Perencanaan (analisa + konsep & ide + monthly report & evaluasi)",
        "Scriptwriting",
        "Copywriting Tiktok & Instagram",
        "Admin Tiktok & Instagram (reply dm, comment, upload video)",
        "Tiktok Ads",
        "Videographer & Editor",
        "Visit 1-2x sebulan",
      ],
    },
    {
      title: "Paket Live Shopping",
      price: "5.500.000",
      features: [
        "12 Konten Video Awareness",
        "24 Konten Pre-heat Live",
        "Live 72 jam (Senin-Sabtu dengan durasi 3 jam per live)",
        "Ada 50rb per live (total 24x)",
        "Host Live",
        "Studio + Perlengkapan + Properti",
        "Scriptwriting Tiktok",
        "Copywriting Tiktok",
        "Admin Tiktok (reply dm, comment, upload video)",
        "Videographer & Editor",
        "Studio & Perlengkapan",
      ],
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: "/images/galery/IMG-20241011-WA0010.jpg",
      alt: "Gallery Image 1",
    },
    {
      id: 2,
      src: "/images/galery/IMG-20241011-WA0013.jpg",
      alt: "Gallery Image 2",
    },
    {
      id: 3,
      src: "/images/galery/IMG-20241011-WA0016.jpg",
      alt: "Gallery Image 3",
    },
    { id: 4, src: "/images/gallery/img4.jpg", alt: "Gallery Image 4" },
    { id: 5, src: "/images/gallery/img5.jpg", alt: "Gallery Image 5" },
    { id: 6, src: "/images/gallery/img6.jpg", alt: "Gallery Image 6" },
    { id: 7, src: "/images/gallery/img7.jpg", alt: "Gallery Image 7" },
    { id: 8, src: "/images/gallery/img8.jpg", alt: "Gallery Image 8" },
    { id: 9, src: "/images/gallery/img9.jpg", alt: "Gallery Image 9" },
    { id: 10, src: "/images/gallery/img10.jpg", alt: "Gallery Image 10" },
    { id: 11, src: "/images/gallery/img11.jpg", alt: "Gallery Image 11" },
    { id: 12, src: "/images/gallery/img12.jpg", alt: "Gallery Image 12" },
  ];

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

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemsPerSlide = 6;
  const totalSlides = Math.ceil(clientProjects.length / itemsPerSlide);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const getCurrentSlideProjects = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return clientProjects.slice(startIndex, startIndex + itemsPerSlide);
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

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="text-white flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center bg-black top-0 z-10 px-20 py-6">
        <div className="flex items-center">
          <img
            src="images/KOSI Square White 2.png"
            alt="KOSI Logo"
            className="h-12 w-auto object-contain"
          />
        </div>
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
              <a href="https://api.whatsapp.com/send/?phone=62881037767536&text&type=phone_number&app_absent=0wa.me/+62881037767536">
                Konsultasi Gratis Sekarang
              </a>
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
                  className="items-center md:w-1/4 mb-6 shadow-2xl border-solid border-4 border-yellow-300 rounded-lg bg-yellow-300"
                  style={{ width: "30%" }}
                >
                  <div className="px-5 py-5">
                    <h2 className="font-bold text-lg text-black pb-3">
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
                  className="items-center w-1/2 md:w-1/4 mb-6 shadow-2xl border-solid border-4 border-yellow-300 rounded-lg bg-yellow-300"
                  style={{ width: "30%" }}
                >
                  <div className="px-5 py-5">
                    <h2 className="font-bold text-lg text-black pb-3">
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
                  className="items-center w-1/2 md:w-1/4 mb-6 shadow-2xl border-solid border-4 border-yellow-300 rounded-lg bg-yellow-300"
                  style={{ width: "30%" }}
                >
                  <div className="px-5 py-5">
                    <h2 className="font-bold text-lg text-black pb-3">
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

      {/* Why KOSI? */}
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
      <div id="about" className="w-full min-h-screen bg-black flex flex-col justify-center py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Project Client Kami
          </h2>

          <div className="relative flex justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 bg-white/10 hover:bg-white/20 rounded-full p-4 text-white transition-all duration-300 hover:scale-110 z-10"
              disabled={isAnimating}
            >
              <ChevronLeft size={24} />
            </button>

            <div className="overflow-hidden w-[650px]"> {/* Fixed width container */}
              <div
                className={`grid grid-cols-3 grid-rows-2 transition-opacity duration-500 ${
                  isAnimating ? "opacity-0" : "opacity-100"
                }`}
              >
                {getCurrentSlideProjects().map((project) => (
                  <div key={project.id} className="aspect-square relative group flex justify-center items-center">
                    <div className="w-48 h-48 bg-white rounded-lg overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 bg-white/10 hover:bg-white/20 rounded-full p-4 text-white z-10 transition-all duration-300 hover:scale-110"
              disabled={isAnimating}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-500 ${
                  currentSlide === index
                    ? "w-8 bg-white"
                    : "w-2 bg-gray-500 hover:bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Sections */}
      <div id="pricing" className="w-full py-16 bg-gray-100">
        <div className="text-black text-center pb-10 text-2xl">
          <b>
            <h2>Layanan Kami</h2>
          </b>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingData.map((pack, index) => (
            <div
              key={index}
              className="bg-white rounded-t-2xl overflow-hidden shadow-lg flex flex-col h-full"
            >
              <div className="bg-yellow-400 py-4">
                <h3 className="text-xl font-bold text-center text-black">
                  {pack.title}
                </h3>
              </div>

              <div className="p-6 bg-[#F5F5DC] flex-grow flex flex-col">
                <div className="text-center mb-6">
                  <span className="text-sm text-black">
                    <b>Rp</b>
                  </span>
                  <span className="text-4xl font-bold text-gray-800">
                    {pack.price}
                  </span>
                  <span className="text-sm text-gray-600 ml-1">/ Bulan</span>
                </div>

                <ul className="space-y-4 flex-grow">
                  {pack.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <div className="min-w-4 h-4 mt-1 bg-green-500 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-green-500 text-white py-3 rounded-lg mt-8 hover:bg-green-600 transition-colors">
                  <a href="http://tiny.cc/adminkosi">Pesan Sekarang</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-white py-24" id="gallery">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Gallery</h2>

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
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-yellow-400"
              >
                <span className="text-3xl">×</span>
              </button>

              {/* Image container */}
              <div className="relative aspect-video">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Navigation buttons */}
              <button
                onClick={previousImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-white/10 hover:bg-white/20 p-4 rounded-full text-white"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-white/10 hover:bg-white/20 p-4 rounded-full text-white"
              >
                →
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
                {images.findIndex((img) => img.id === selectedImage.id) + 1} /{" "}
                {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
      <footer className="bg-yellow-400 px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Contact */}
          <div className="flex flex-col">
            <img
              src="images/KOSI Square Black 2.png"
              alt="KOSI"
              className="h-16 w-auto object-contain mb-6"
            />
            <p className="mb-2">Jawa Timur, Surabaya, Indonesia</p>
            <p>+6285772753431</p>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="font-bold mb-4">Sitemap</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Gallery"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl mb-4">Add Your Heading Text Here</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-2 rounded"
              />
              <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-black/10">
          <div className="flex flex-wrap justify-between items-center">
            <p>Andreas Calvin G © September 22, 2024</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-black p-2 rounded-full hover:bg-gray-800"
              >
                <img
                  src="/api/placeholder/24/24"
                  alt="TikTok"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="#"
                className="bg-black p-2 rounded-full hover:bg-gray-800"
              >
                <img
                  src="/api/placeholder/24/24"
                  alt="WhatsApp"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="#"
                className="bg-black p-2 rounded-full hover:bg-gray-800"
              >
                <img
                  src="/api/placeholder/24/24"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-8 bottom-8 bg-black text-white p-4 rounded-full shadow-lg transition-opacity duration-300 hover:bg-gray-800 ${
          showBackToTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        ↑
      </button>
    </div>
  );
}

export default App;
