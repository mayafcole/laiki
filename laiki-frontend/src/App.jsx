import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import ArtSection from "./components/ArtSection";
import ShopByCountry from "./components/ShopByCountry";
import ShopByCategory from "./components/ShopByCountry";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <ArtSection />
      <ShopByCountry />
      {/* <ShopByCategory/> */}

      <Footer />
    </div>
  );
}

export default App;
