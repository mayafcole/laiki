import ArtistCard from "./ArtistCard";

const MeetArtisans = () => {
  const artisans = [
    {
      name: "Ami",
      role: "Basket Weaver",
      quote: "My art tells my people’s stories.",
      image: "/images/ami.jpg",
    },
    {
      name: "Rosa",
      role: "Studio founder",
      quote: "Together we are strong.",
      image: "/images/rosa.jpg",
    },
    {
      name: "Fatima",
      role: "Tailor",
      quote: "I love making art.",
      image: "/images/fatima.jpg",
    },
  ];

  return (
    <section className="py-12 bg-pink-50">
      <h2 className="text-3xl font-bold text-center mb-8">Meet the Studios & Artisans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {artisans.map((artist, index) => (
          <ArtistCard key={index} {...artist} />
        ))}
      </div>
    </section>
  );
};

export default MeetArtisans;