const ShopByCountry = () => {
    return (
      <section className="py-12 bg-pink-100">
        <h2 className="text-3xl font-bold text-center mb-4">Shop by country</h2>
        <p className="text-center mb-4 text-gray-700">
          Select what part of the world you want to explore
        </p>
        <div className="flex justify-center">
          <select className="border border-gray-300 rounded-lg px-4 py-2 w-72">
            <option value="">Select</option>
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="south-america">South America</option>
          </select>
        </div>
      </section>
    );
  };
  
  export default ShopByCountry;
  