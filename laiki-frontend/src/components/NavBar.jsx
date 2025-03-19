import { FiShoppingCart, FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white">
      {/* Left links */}
      <div className="space-x-6 text-sm">
      <a href="#" className="text-gray-600 hover:text-black no-underline font-body">Meet the Artisans</a>
      <a href="#" className="text-gray-600 hover:text-black no-underline font-body">Education Center</a>
      <a href="#" className="text-gray-600 hover:text-black no-underline font-body">Community Hub</a>
      </div>

      {/* Center logo */}
      <h1 className="absolute inset-x-0 mx-auto text-xl italic font-body text-center">Laiki</h1>

      {/* Right icons + live button */}
      <div className="flex items-center space-x-6">
      <button className="bg-accent text-white px-4 py-1 text-sm rounded-full 
      shadow-md hover:shadow-xl transition 
      drop-shadow-[0_2px_4px_rgba(255,110,110,0.7)]">
      live
    </button>
        <FiShoppingCart className="text-xl cursor-pointer" />
        <FiUser className="text-xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
