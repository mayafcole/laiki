const categories = [
    {
      name: "Fashion & Accessories",
      image: "/images/fashion.jpg",
    },
    {
      name: "Home & Living",
      image: "/images/home-living.jpg",
    },
    {
      name: "Art & Collectibles",
      image: "/images/art-collectibles.jpg",
    },
    {
      name: "Beauty & Wellness",
      image: "/images/beauty-wellness.jpg",
    },
  ];
  
  const ShopByCategory = () => {
    return (
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8">
          {categories.map((cat, index) => (
            <div key={index} className="text-center">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-40 h-40 mx-auto rounded-lg object-cover mb-4"
              />
              <h3 className="font-semibold mb-2">{cat.name}</h3>
              <button className="border border-red-500 text-red-500 px-4 py-1 rounded hover:bg-red-500 hover:text-white transition">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ShopByCategory;  