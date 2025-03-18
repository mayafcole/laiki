import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";


const FeaturedProducts = () => {

  const products = [
    { image: "/src/assets/NavyBeanie.png", subtitle: "Fashion & Accessories", title: "Navy blue crochet beanie", price: 40 },
    { image: "/src/assets/BlueTeapot.png" , subtitle: "Pottery & Ceramics", title: "Aquamarine teapot set", price: 80 },
    { image: "/src/assets/Totebag.png", subtitle: "Fashion & Accessories", title: "Cherry Blossom tote bag", price: 20 },
    { image: "/src/assets/JadeNecklace.png", subtitle: "Fashion & Accessories", title: "Jade necklace", price: 220 },
    { image: "/src/assets/EthopianPlate.png" , subtitle: "Pottery & Ceramics", title: "Ethopian plate", price: 50 },
    { image: "/src/assets/SheaButter.png", subtitle: "Beauty & Wellness", title: "Shea butter", price: 35 },
  ];

  

  return (
    <section className="relative mt-10">
    {/* Background block behind the header */}
    <div className="absolute top-0 left-0 w-full h-20 bg-pink -z-10"></div>

    <h2 className="text-textHeader font-heading-semibold text-headers pl-10 pt-12">
      Featured Products
    </h2>

    <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-8 px-6 pb-10 w-max">
          {products.map((product, index) => (
            <div key={index} className="flex-shrink-0">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;