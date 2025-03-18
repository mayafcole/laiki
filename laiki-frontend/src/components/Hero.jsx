const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-[500px]">
      {/* Left side text panel */}
      <div className="bg-pink-100 flex flex-col justify-center items-start px-10">
        <h2 className="text-4xl font-bold mb-4">Laiki’s Story</h2>
        <p className="text-gray-700 mb-6 text-lg">
          The marketplace where stories matter <br />
          Where shopping feels like belonging
        </p>
        <button className="bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-md transition">
          Learn more
        </button>
      </div>

      {/* Right side image */}
      <div className="h-full">
        <img
          src="/src/assets/LaikiHeroImg.png" 
          alt="hero section"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
  