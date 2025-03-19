const ShopByCountry = () => {
  return (
    <section className="relative py-60 bg-pink  mt-40">
      {/* Background map image */}
      <img
        src="/src/assets/Laiki-map.png"
        alt="World map background"
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
      />

      {/* Section heading */}
      <h2 className="text-textHeader font-heading font-semibold text-headers text-left pl-10 mb-8 relative z-10 -top-64">
        Shop by country
      </h2>

      {/* Subheading */}
      <p className="text-center mb-10 font-body text-hero-subtitle text-textHeader relative z-10">
        Select what part of the world you want to explore
      </p>

      {/* Dropdown with custom arrow */}
      <div className="flex justify-center relative z-10">
        <div className="relative w-[900px]">
          <select className="appearance-none border-[1px] border-textHeader text-textHeader rounded-lg px-6 py-3 w-full text-lg bg-white focus:outline-none focus:ring-2 focus:ring-textHeader cursor-pointer">
            <option value="">Select</option>
            <option value="brazil">Brazil</option>
            <option value="usa">United States of America</option>
            <option value="france">France</option>
            <option value="thailand">Thailand</option>
            <option value="peru">Peru</option>
          </select>

          {/* Custom arrow icon positioned towards the left */}
          <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-textHeader text-xl">
            ▼
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCountry;
  