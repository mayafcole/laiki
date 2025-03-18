import React, { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    "/src/assets/LaikiHeroImg.png",
    "/src/assets/GalleryImg2.png",
    "/src/assets/GalleryImg3.png",
    "/src/assets/GalleryImg4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-[500px] gap-x-3">
      {/* Left side text panel */}
      <div className="bg-pink flex flex-col justify-start items-start px-10 pt-20">
        <h2 className="text-textHeader text-hero-title font-body-semibold mb-4">
          Laiki’s Story
        </h2>
        <p className="text-black text-hero-subtitle font-body mb-8">
          The marketplace where stories matter <br />
          Where shopping feels like belonging 
        </p>

        <p className="text-black text-product-subtitle font-body mb-6">
          Women can share their craft, gain financial independence, and keep cultural traditions alive — one stitch, weave, and story at a time.
        </p>



        <button className="bg-accent hover:bg-accent text-white px-6 py-2 rounded-md transition min-w-[280px]">
          Learn more
        </button>
      </div>

      {/* Right side carousel with dissolve */}
      <div className="relative h-[500px] w-full overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`hero image ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;  