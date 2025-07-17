import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Contents from "./components/Contents";
import WhyKosi from "./components/WhyKosi";
import Services from "./components/Services";
import ClientSection from "./components/ClientSection";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import "./App.css";

function App() {
  const [activeSection] = useState("");

  const sections = ["contents", "services", "pricing", "gallery"];
  const sectionNames = [
    "Beranda",
    "Layanan Kami",
    "Langganan Bersama Kami",
    "Portofolio Kami",
  ];

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const title = "Percayakan Perkembangan Masa Depan Bisnis Anda Bersama Kami";
  const dataItems = [
    { title: "Analisis Pasar", value: 100 },
    { title: "Strategi Bisnis", value: 200 },
    { title: "Pengelolaan Keuangan", value: 300 },
    { title: "Optimasi Digital", value: 400 },
    { title: "Pengembangan Produk", value: 500 },
    { title: "Kepuasan Pelanggan", value: 600 },
  ];

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

  const row1 = [
    {
      id: 1,
      image: "/images/logo_client/bonami.png",
      alt: "Bon Ami",
      description: "EONS Skin Clinic - Beauty & Healthcare",
    },
    {
      id: 2,
      image: "/images/logo_client/Pertamina_Logo.svg.png",
      alt: "Pertamina",
    },
    {
      id: 3,
      image: "/images/logo_client/ropopang-removebg-preview.png",
      alt: "Ropopang",
    },
    {
      id: 4,
      image: "/images/logo_client/images-removebg-preview.png",
      alt: "Saos Raja Rasa",
    },
    {
      id: 5,
      image: "/images/logo_client/sate_merapi-removebg-preview.png",
      alt: "Sate Merapi",
    },
    {
      id: 6,
      image: "/images/logo_client/tang_kitchen-removebg-preview.png",
      alt: "Tang Kitchen",
    },
    {
      id: 7,
      image: "/images/logo_client/Terbaiktronics.jpg",
      alt: "Terbaik Tronics",
    },
    {
      id: 8,
      image:
        "/images/logo_client/WhatsApp_Image_2024-12-31_at_10.14.56__1_-removebg-preview.png",
      alt: "SCBD",
    },
    {
      id: 9,
      image:
        "/images/logo_client/WhatsApp_Image_2024-12-31_at_10.14.56__2_-removebg-preview.png",
      alt: "Branded Plus",
    },
    {
      id: 10,
      image:
        "/images/logo_client/WhatsApp_Image_2024-12-31_at_10.14.57__1_-removebg-preview.png",
      alt: "Dokter?",
    },
  ];

  const row2 = [
    { id: 11, image: "/images/logo_client/bonami.png", alt: "Bon Ami" },
    {
      id: 12,
      image: "/images/logo_client/Pertamina_Logo.svg.png",
      alt: "Pertamina",
    },
    {
      id: 13,
      image: "/images/logo_client/ropopang-removebg-preview.png",
      alt: "Ropopang",
    },
    {
      id: 14,
      image: "/images/logo_client/images-removebg-preview.png",
      alt: "Saos Raja Rasa",
    },
    {
      id: 15,
      image: "/images/logo_client/sate_merapi-removebg-preview.png",
      alt: "Sate Merapi",
    },
    {
      id: 16,
      image: "/images/logo_client/tang_kitchen-removebg-preview.png",
      alt: "Tang Kitchen",
    },
    {
      id: 17,
      image: "/images/logo_client/Terbaiktronics.jpg",
      alt: "Terbaik Tronics",
    },
    {
      id: 18,
      image:
        "/images/logo_client/WhatsApp_Image_2024-12-31_at_10.14.56__1_-removebg-preview.png",
      alt: "SCBD",
    },
    {
      id: 19,
      image:
        "/images/logo_client/WhatsApp_Image_2024-12-31_at_10.14.56__2_-removebg-preview.png",
      alt: "Branded Plus",
    },
    {
      id: 20,
      image:
        "/images/logo_client/WhatsApp_Image_2024-12-31_at_10.14.57__1_-removebg-preview.png",
      alt: "Dokter?",
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
        "Admin Instagram (reply DM, comment, upload video)",
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
        "Admin Tiktok & Instagram (reply DM, comment, upload video)",
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
        "Admin Tiktok & Instagram (reply DM, comment, upload video)",
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
        "Admin Tiktok (reply DM, comment, upload video)",
        "Videographer & Editor",
        "Studio & Perlengkapan",
      ],
    },
  ];

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

  return (
    // <div className="text-white flex flex-col">
    //   {/* <Navbar sections={sections} sectionNames={sectionNames} activeSection={activeSection} scrollToSection={scrollToSection} /> */}
    //   <Banner sections={sections} sectionNames={sectionNames} activeSection={activeSection} scrollToSection={scrollToSection} />
    //   <Contents title={title} dataItems={dataItems} />
    //   <WhyKosi socialIcons={socialIcons} />
    //   <Services services={services} />
    //   <ClientSection row1={row1} row2={row2} />
    //   <Pricing pricingData={pricingData} />
    //   <Gallery images={images} />
    //   <Footer />
    //   <BackToTop />
    // </div>
    <div className="text-white flex flex-col">
      <Navbar
        sections={sections}
        sectionNames={sectionNames}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
        <Banner />
        <Contents title={title} dataItems={dataItems} />
        <WhyKosi socialIcons={socialIcons} />
        <Services services={services} />
        <ClientSection row1={row1} row2={row2} />
        <Pricing pricingData={pricingData} />
        <Gallery images={images} />
        <Footer />
        <BackToTop />
      
    </div>
  );
}

export default App;
