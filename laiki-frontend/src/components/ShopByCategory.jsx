const ShopByCategory = () => {
  const categories = [
    {
      image: "/src/assets/jewlery.png", 
      title: "Fashion & Accessories",
    },
    {
      image: "/src/assets/tempRug.png",
      title: "Home & Living",
    },
    {
      image: "/src/assets/ArtandCollectibles.png",
      title: "Art & Collectibles",
    },
    {
      image: "/src/assets/BeautyAndWellness.png",
      title: "Beauty & Wellness",
    },
    {
      image: "/src/assets/Photography.jpg",
      title: "Photography",
    }
  ];

  return (
    <section className="relative pt-20 pb-32 bg-white">
      <h2 className="text-textHeader font-heading font-semibold text-headers text-left pl-10 mb-16">
        Shop by category
      </h2>

      <div className="max-w-12xl mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-60 object-contain mb-6 mx-auto"
            />
            <h3 className="font-body text-lg mb-4">{category.title}</h3>
            <button className="w-[200px] px-4 py-2 border-[1px] border-textHeader text-textHeader rounded-md hover:bg-textHeader hover:text-white transition-colors">
              Shop Now
            </button>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default ShopByCategory;