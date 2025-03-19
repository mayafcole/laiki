import React from "react";
import groupPhoto from "../assets/GalleryImg1.png";
import weaving from "../assets/GalleryImg2.png";
import pottery from "../assets/GalleryImg3.png";
import crocheting from "../assets/GalleryImg4.png";

const ArtSection = () => {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-headers font-heading text-center mb-12 text-accent px-4">
        Art doesn’t just tell stories, it broadens{" "}
        <span className="italic font-semibold">our futures.</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[1400px] mx-auto px-6">
        {/* Left large image */}
        <div className="w-full h-full">
          <img
            src={groupPhoto}
            alt="Group in art gallery"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side grid */}
        <div className="grid grid-rows-[60%_40%] gap-4">
          <div>
            <img
              src={weaving}
              alt="Woman weaving"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={pottery}
              alt="Woman painting pottery"
              className="w-full h-full object-cover"
            />
            <img
              src={crocheting}
              alt="Woman crocheting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtSection;