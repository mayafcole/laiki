const ProductCard = ({ image, title, price }) => {
    return (
      <div className="w-60 p-4 border rounded-lg text-center">
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
        <h3 className="mt-2 font-semibold">{title}</h3>
        <p className="text-gray-600">${price} USD</p>
        <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg">Add to Cart</button>
      </div>
    );
  };
  
  export default ProductCard;
  