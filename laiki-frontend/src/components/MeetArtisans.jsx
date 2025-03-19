import ArtistCard from "./ArtistCard";
import Marquee from "react-fast-marquee";

const MeetArtisans = () => {
  const artisans = [
    { name: "Ami", role: "Basket Weaver", quote: "My art tells my people’s stories.", image: "/src/assets/AmiProfile.png" },
    { name: "Rosa", role: "Studio founder", quote: "Together we are strong.", image: "/src/assets/RosaProfile.png" },
    { name: "Fatima", role: "Tailor", quote: "I love making art.", image: "/src/assets/FatimaProfile.png" },
    { name: "Emeka", role: "Ceramicist", quote: "Clay lets me shape tradition.", image: "/src/assets/EmekaProfile.png" },
    { name: "Leila", role: "Jewelry Designer", quote: "Every piece carries meaning.", image: "/src/assets/LeilaProfile.png" },
    { name: "Diego", role: "Photographer", quote: "I capture life’s beautiful moments.", image: "/src/assets/DiegoProfile.png" },
  ];

  return (
    <section className="py-12 bg-pink-50">
      <h2 className="text-textHeader font-heading font-semibold text-headers text-left pl-10 mb-10">
        Meet the Studios & Artisans
      </h2>
      <Marquee pauseOnHover={true} gradient={false} speed={40}>
        <div className="flex gap-8 px-8">
          {artisans.map((artist, index) => (
            <div key={index} className="flex-shrink-0 w-[300px]">
              <ArtistCard {...artist} />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default MeetArtisans;