import React from "react";
import groupPhoto from "../assets/GalleryImg1.png";
import weaving from "../assets/GalleryImg2.png";
import pottery from "../assets/GalleryImg3.png";
import crocheting from "../assets/GalleryImg4.png";

const ArtSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <h2 className="text-headers font-heading text-center mb-12 text-accent">
        Art doesn’t just tell stories, it broadens{" "}
        <span className="italic bold text-accent font-semibold">our futures.</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
        {/* Left large image */}
        <div>
          <img
            src={groupPhoto}
            alt="Group in art gallery"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side grid */}
        <div className="grid grid-rows-[auto_auto] gap-2">
          <div>
            <img
              src={weaving}
              alt="Woman weaving"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
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