const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-[500px] gap-x-3">
      {/* Left side text panel */}
      <div className="bg-pink flex flex-col justify-center items-start px-10">
        <h2 className="text-textHeader text-hero-title font-body-semibold mb-4">Laiki’s Story</h2>
        <p className="text-textHeader text-hero-subtitle font-body mb-6">
          The marketplace where stories matter <br />
          Where shopping feels like belonging
        </p>
        <button className="bg-accent hover:bg-accent text-white px-6 py-2 rounded-md transition min-w-[280px]">
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
  