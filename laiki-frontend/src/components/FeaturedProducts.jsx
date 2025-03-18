import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const products = [
    { image: "/hat.jpg", title: "Navy blue crochet beanie", price: 40 },
    { image: "/teapot.jpg", title: "Aquamarine teapot set", price: 80 },
    { image: "/bag.jpg", title: "Cherry Blossom tote bag", price: 20 },
  ];

  return (
    <section className="py-10">
      <h2 className="text-center text-2xl font-bold">Featured Products</h2>
      <div className="flex justify-center gap-6 mt-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
