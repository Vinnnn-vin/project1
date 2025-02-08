import React, { useEffect, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [activeSection, setActiveSection] = useState("");

  /* Navbar */
  const sections = ["contents", "services", "about", "gallery"];
  const sectionNames = [
    "All Contents & Event",
    "Services",
    "About KOSI",
    "Gallery KOSI",
  ];
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  /* All Content - Event */
  const title = "Percayakan Perkembangan Masa Depan Bisnis Anda Bersama Kami";
  const dataItems = [
    { title: "Analisis Pasar", value: 100 },
    { title: "Strategi Bisnis", value: 200 },
    { title: "Pengelolaan Keuangan", value: 300 },
    { title: "Optimasi Digital", value: 400 },
    { title: "Pengembangan Produk", value: 500 },
    { title: "Kepuasan Pelanggan", value: 600 },
  ];

  /* Services */
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

  /* Why Kosi Icon */
  const socialIcons = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-8 h-8"
        >
          <path
            fill=""
            d="M448 209.9a210.1 210.1 0 0 1-122.8-39.3v178.8A162.6 162.6 0 1 1 185 188.3v89.9a74.6 74.6 0 1 0 52.2 71.2V0h88a121.2 121.2 0 0 0 1.9 22.2 122.2 122.2 0 0 0 53.9 80.2 121.2 121.2 0 0 0 67 20.7z"
          />
        </svg>
      ),
      name: "TikTok",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-8 h-8"
        >
          <path
            fill=""
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          />
        </svg>
      ),
      name: "Instagram",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-8 h-8"
        >
          <path
            fill=""
            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
          />
        </svg>
      ),
      name: "Twitter",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-8 h-8"
        >
          <path
            fill=""
            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
          />
        </svg>
      ),
      name: "WhatsApp",
    },
  ];

  /* Project client Kami (List Client) */
  const row1 = [
    {
      id: 1,
      image: "/public/images/logo client/bonami.png",
      alt: "Bon Ami",
      description: "EONS Skin Clinic - Beauty & Healthcare",
    },
    {
      id: 2,
      image: "/public/images/logo client/Pertamina_Logo.svg.png",
      alt: "Pertamina",
    },
    {
      id: 3,
      image: "public/images/logo client/ropopang-removebg-preview.png",
      alt: "Ropopang",
    },
    {
      id: 4,
      image: "public/images/logo client/images-removebg-preview.png",
      alt: "Saos Raja Rasa",
    },
    {
      id: 5,
      image: "public/images/logo client/sate_merapi-removebg-preview.png",
      alt: "Sate Merapi",
    },
    {
      id: 6,
      image: "public/images/logo client/tang_kitchen-removebg-preview.png",
      alt: "Tang Kitchen",
    },
    {
      id: 7,
      image: "public/images/logo client/Terbaiktronics.jpg",
      alt: "Terbaik Tronics",
    },
    {
      id: 8,
      image:
        "public/images/logo client/WhatsApp_Image_2024-12-31_at_10.14.56__1_-removebg-preview.png",
      alt: "SCBD",
    },
    {
      id: 9,
      image:
        "public/images/logo client/WhatsApp_Image_2024-12-31_at_10.14.56__2_-removebg-preview.png",
      alt: "Branded Plus",
    },
    {
      id: 10,
      image:
        "public/images/logo client/WhatsApp_Image_2024-12-31_at_10.14.57__1_-removebg-preview.png",
      alt: "Dokter?",
    },
  ];

  const row2 = [
    { id: 11, image: "/public/images/logo client/bonami.png", alt: "Bon Ami" },
    {
      id: 12,
      image: "/public/images/logo client/Pertamina_Logo.svg.png",
      alt: "Pertamina",
    },
    {
      id: 13,
      image: "public/images/logo client/ropopang-removebg-preview.png",
      alt: "Ropopang",
    },
    {
      id: 14,
      image: "public/images/logo client/images-removebg-preview.png",
      alt: "Saos Raja Rasa",
    },
    {
      id: 15,
      image: "public/images/logo client/sate_merapi-removebg-preview.png",
      alt: "Sate Merapi",
    },
    {
      id: 16,
      image: "public/images/logo client/tang_kitchen-removebg-preview.png",
      alt: "Tang Kitchen",
    },
    {
      id: 17,
      image: "public/images/logo client/Terbaiktronics.jpg",
      alt: "Terbaik Tronics",
    },
    {
      id: 18,
      image:
        "public/images/logo client/WhatsApp_Image_2024-12-31_at_10.14.56__1_-removebg-preview.png",
      alt: "SCBD",
    },
    {
      id: 19,
      image:
        "public/images/logo client/WhatsApp_Image_2024-12-31_at_10.14.56__2_-removebg-preview.png",
      alt: "Branded Plus",
    },
    {
      id: 20,
      image:
        "public/images/logo client/WhatsApp_Image_2024-12-31_at_10.14.57__1_-removebg-preview.png",
      alt: "Dokter?",
    },
  ];

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
  }, []);

  const Modal = ({ client, onClose }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={24} />
        </button>
        <div className="flex flex-col items-center">
          <div className="w-64 h-64 flex items-center justify-center mb-6">
            <img
              src={client.image}
              alt={client.alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold mb-4">{client.alt}</h3>
          <p className="text-gray-600 text-center">{client.description}</p>
        </div>
      </div>
    </div>
  );

  const CarouselRow = ({ items, position }) => (
    <div className="overflow-hidden">
      <div
        className="flex gap-8 transition-transform duration-300"
        style={{
          transform: `translateX(${position}px)`,
          width: "fit-content",
        }}
      >
        {[...items, ...items].map((client, index) => (
          <div
            key={`${client.id}-${index}`}
            onClick={() => setSelectedClient(client)}
            className="w-40 h-40 rounded-lg overflow-hidden flex items-center justify-center p-4 cursor-pointer group"
          >
            <img
              src={client.image}
              alt={client.alt}
              className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );

  /* Pricing List */
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
      isTopSeller: true,
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

  /* Galery Kosi */
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: "/images/galery/img1.jpg",
      alt: "Gallery Image 1",
    },
    {
      id: 2,
      src: "/images/galery/img2.jpg",
      alt: "Gallery Image 2",
    },
    {
      id: 3,
      src: "/images/galery/img3.jpg",
      alt: "Gallery Image 3",
    },
    { id: 4, src: "/images/galery/img4.jpg", alt: "Gallery Image 4" },
    { id: 5, src: "/images/galery/img5.jpg", alt: "Gallery Image 5" },
    { id: 6, src: "/images/galery/img6.jpg", alt: "Gallery Image 6" },
    { id: 7, src: "/images/galery/img7.jpg", alt: "Gallery Image 7" },
    { id: 8, src: "/images/galery/img8.jpg", alt: "Gallery Image 8" },
    { id: 9, src: "/images/galery/img9.jpg", alt: "Gallery Image 9" },
    { id: 10, src: "/images/galery/img10.jpg", alt: "Gallery Image 10" },
    { id: 11, src: "/images/galery/img11.jpg", alt: "Gallery Image 11" },
    { id: 12, src: "/images/galery/img12.jpg", alt: "Gallery Image 12" },
    { id: 12, src: "/images/galery/img13.jpg", alt: "Gallery Image 12" },
    { id: 12, src: "/images/galery/img14.jpg", alt: "Gallery Image 12" },
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

  {
    /* Back to Top */
  }
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

  /* =============================================== BATAS FUNCTION ============================================================ */

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
            <div className="text-center" style={{ margin: "100px auto" }}>
              <h1 className="text-5xl font-bold leading-tight text-black">
                {title}
              </h1>
              <div className="w-full flex flex-wrap justify-between gap-6 pt-24 text-left">
                {dataItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center w-1/2 md:w-1/4 mb-6"
                  >
                    <img
                      src="/images/chart.png"
                      alt={`Item ${index + 1}`}
                      className="w-16 h-16 object-cover mr-5"
                    />
                    <div>
                      <h2 className="font-bold text-xl text-black">
                        {item.title}
                      </h2>
                      <motion.p
                        className="text-gray-600 text-4xl font-semibold text-left"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                      >
                        <AnimatedCounter value={item.value} />+
                      </motion.p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "space-around",
                borderTop: "5px solid ",
                marginTop: "50px",
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
                Building your character in Social Media
              </span>
            </p>

            <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
              <span>Mari Berkolaborasi</span>
              {/* <WhatsappLogo size={20} /> */}
            </button>

            <div className="grid grid-cols-4 gap-4 mt-8">
              {socialIcons.map((item, index) => (
                <div
                  key={index}
                  className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
                >
                  {item.icon}
                </div>
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
      <div className="w-full min-h-screen bg-beige flex flex-col justify-center py-16">
        <div className="">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">
            Project Client Kami
          </h2>

          <div className="relative">
            <CarouselRow items={row1} position={position1} />
            <CarouselRow items={row2} position={position2} />
          </div>
        </div>

        {selectedClient && (
          <Modal
            client={selectedClient}
            onClose={() => setSelectedClient(null)}
          />
        )}
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
              className="relative bg-white rounded-t-2xl overflow-hidden shadow-lg flex flex-col h-full"
            >
              {/* Badge logic for different packages */}
              {pack.title === "Bronze Package" && (
                <div className="absolute -top-6 right-0 transform -rotate-12 z-10">
                  <img
                    src="/images/bronze.png"
                    alt="Bronze Badge"
                    className="w-16 h-16"
                  />
                </div>
              )}
              {pack.title === "Silver Package" && (
                <div className="absolute -top-6 right-0 transform -rotate-12 z-10">
                  <img
                    src="/images/silver.png"
                    alt="Silver Badge"
                    className="w-16 h-16"
                  />
                </div>
              )}
              {pack.title === "Gold Package" && (
                <div className="absolute -top-6 right-0 transform -rotate-12 z-10">
                  <img
                    src="/images/gold.png"
                    alt="Gold Badge"
                    className="w-16 h-16"
                  />
                </div>
              )}
              {pack.title === "Paket Live Shopping" && (
                <div className="absolute -top-6 right-0 transform -rotate-12 z-10">
                  <img
                    src="/images/best-offer-badge-a4e224.webp"
                    alt="Best Offer Badge"
                    className="w-16 h-16"
                  />
                </div>
              )}

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
              src="/public/images/KOSI Square  Black 2.png"
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
            <div className="flex gap-2 text-black">
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
                className="bg-white p-2 rounded-full hover:bg-yellow-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-8 h-8"
                >
                  <path
                    fill=""
                    d="M448 209.9a210.1 210.1 0 0 1-122.8-39.3v178.8A162.6 162.6 0 1 1 185 188.3v89.9a74.6 74.6 0 1 0 52.2 71.2V0h88a121.2 121.2 0 0 0 1.9 22.2 122.2 122.2 0 0 0 53.9 80.2 121.2 121.2 0 0 0 67 20.7z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full hover:bg-yellow-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-8 h-8"
                >
                  <path
                    fill=""
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full hover:bg-yellow-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-8 h-8"
                >
                  <path
                    fill=""
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
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

// Counter Angka
function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let totalDuration = 2000;
    let incrementTime = totalDuration / end;
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [value]);

  return <span>{count}</span>;
}

export default App;
