const ProductCard = ({ image, subtitle, title, price }) => {
    return (
      <div className="w-100 p-4 border rounded-lg text-center">
        <img src={image} alt={title} className="w-600 h-55 object-cover rounded-md" />
        <h3 className="mt-2 font-body  text-product-subtitle ">{subtitle}</h3>
        <h3 className="mt-2 font-body  text-product-title">{title}</h3>
        <p className="text-gray-600">${price} USD</p>
        <button className="mt-2 px-4 py-2 bg-white text-textHeader border border-textHeader rounded-lg">Add to Cart</button>
      </div>
    );
  };
  
  export default ProductCard;
  