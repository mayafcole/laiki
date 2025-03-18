import { FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      <h1 className="text-xl font-bold">Laiki</h1>
      <div className="space-x-6">
        <a href="#" className="text-gray-600 hover:text-black">Meet the Artisans</a>
        <a href="#" className="text-gray-600 hover:text-black">Education Center</a>
        <a href="#" className="text-gray-600 hover:text-black">Community Hub</a>
      </div>
      <div className="flex items-center space-x-4">
        <FaShoppingCart className="text-xl cursor-pointer" />
        <FaUser className="text-xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
