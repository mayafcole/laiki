import ArtistCard from "./ArtistCard";

const MeetArtisans = () => {
  const artisans = [
    {
      name: "Ami",
      role: "Basket Weaver",
      quote: "My art tells my people’s stories.",
      image: "/src/assets/AmiProfile.png",
    },
    {
      name: "Rosa",
      role: "Studio founder",
      quote: "Together we are strong.",
      image: "/src/assets/RosaProfile.png",
    },
    {
      name: "Fatima",
      role: "Tailor",
      quote: "I love making art.",
      image: "/src/assets/FatimaProfile.png",
    },
  ];

  return (
    <section className="py-12 bg-pink-50">
      <h2 className="text-textHeader font-heading font-semibold text-headers text-left pl-10 mb-16">Meet the Studios & Artisans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {artisans.map((artist, index) => (
          <ArtistCard key={index} {...artist} />
        ))}
      </div>
    </section>
  );
};

export default MeetArtisans;