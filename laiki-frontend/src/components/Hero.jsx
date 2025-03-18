const Hero = () => {
  return (
    <section
      className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/images/hero-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />

      <div className="relative z-10 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-md">
          Laiki’s Story
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-sm">
          The marketplace where stories matter. Where shopping feels like belonging.
        </p>
        <button className="mt-8 px-6 py-3 bg-red-500 hover:bg-red-600 transition rounded-full text-lg font-semibold shadow-lg">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
  