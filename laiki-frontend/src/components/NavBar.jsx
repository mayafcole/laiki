import { FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 shadow-md bg-white">
      {/* Left links */}
      <div className="space-x-6 text-sm">
      <a href="#" className="text-gray-600 hover:text-black no-underline font-body">Meet the Artisans</a>
      <a href="#" className="text-gray-600 hover:text-black no-underline font-body">Education Center</a>
      <a href="#" className="text-gray-600 hover:text-black no-underline font-body">Community Hub</a>
      </div>

      {/* Center logo */}
      <h1 className="text-xl italic font-semibold">Laiki</h1>

      {/* Right icons + live button */}
      <div className="flex items-center space-x-4">
        <button className="bg-accent text-white -700 px-4 py-1 text-sm rounded-full hover:bg-accent-300 transition">
          live
        </button>
        <FaShoppingCart className="text-xl cursor-pointer" />
        <FaUser className="text-xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
