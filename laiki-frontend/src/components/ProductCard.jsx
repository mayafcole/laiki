const ProductCard = ({ image, subtitle, title, price }) => {
    return (
      <div className="w-[400px] min-h-[300px] p-4   rounded-lg text-center hover:bg-white mx-auto">
        <img src={image} alt={title} className="w-150 h-80 object-contain mb-4" />
        <h3 className="mt-2 font-body  text-product-subtitle pb-2 ">{subtitle}</h3>
        <h3 className="mt-2 font-body  text-product-title pb-4">{title}</h3>
        <p className="text-black text-product-price">${price} USD</p>

        <button className="bg-white mt-2 w-[250px] px-4 py-2 border-[1px] border-textHeader text-textHeader rounded-lg transition-all duration-300 ease-in-out hover:!bg-textHeader hover:!text-white">
        Add to Cart
      </button>




      </div>
    );
  };
  
  export default ProductCard;
  