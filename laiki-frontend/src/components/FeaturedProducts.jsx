import ProductCard from "./ProductCard";

const FeaturedProducts = () => {

  const products = [
    { image: "/src/assets/NavyBeanie.png", subtitle: "Fashion & Accessories", title: "Navy blue crochet beanie", price: 40 },
    { image: "/src/assets/BlueTeapot.png" , subtitle: "Pottery & Cermanics", title: "Aquamarine teapot set", price: 80 },
    { image: "/src/assets/Totebag.png", subtitle: "Fashion & Accessories", title: "Cherry Blossom tote bag", price: 20 },
  ];

  return (
    <section className="relative mt-5">
      {/* Background block positioned above and behind the text */}
      <div className="absolute top-[25px] left-0 w-full h-24 bg-pink -z-10"></div>

      {/* Header text */}
      <h2 className="text-textHeader font-heading-semibold text-headers pl-10">Featured Products</h2>

      {/* Products grid */}
      <div className="max-w-6xl mx-auto py-60 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;