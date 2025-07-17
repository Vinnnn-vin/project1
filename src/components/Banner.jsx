const Banner = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
      id="banner"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">
          BUILD YOUR
          <br />
          <i className="text-yellow-400">BRAND IDENTITY</i>
          <br />
          <b>WITH SOCIAL MEDIA</b>
        </h1>
        <p className="text-xl sm:text-2xl mb-8">
          We help businesses grow through strategic social media branding
        </p>
        <button className="bg-green-500 text-black px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-all transform hover:scale-105">
          <a href="https://wa.me/62881037767536?text=Hai%20Min%2C%20Mau%20tanya%20info%20....">
            Konsultasi Gratis Sekarang!
          </a>
        </button>
      </div>
    </div>
  );
};

export default Banner;