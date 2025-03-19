import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink py-12 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center px-10 mb-10">
        <div>
          <h3 className="text-headers text-textHeader font-body mb-2">
            Welcome to the community!
          </h3>
          <p className="text-textHeader font-body mb-4">
            Sign up for our email list to stay up to date with the latest at <strong>Laiki</strong>.
          </p>
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your email address"
            className="px--20 py-2 border-b border-textHeader bg-transparent text-textHeader placeholder-textHeader focus:outline-none focus:border-b-2 focus:border-textHeader w-80"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10 text-left font-body text-sm text-gray-700">
        <div>
          <h4 className="font-semibold mb-2 text-textHeader">Shop</h4>
          <ul>
            <li>Jewelry</li>
            <li>Fashion and Accessories</li>
            <li>Ceramics & Pottery</li>
            <li>Photography</li>
            <li>Beauty and Wellness</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-textHeader">Learn</h4>
          <ul>
            <li>About Laiki</li>
            <li>FAQ</li>
            <li>Education Center</li>
            <li>Community Hub</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-textHeader">Quick Links</h4>
          <ul>
            <li>Contact</li>
            <li>Shipping Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-textHeader">Stay connected!</h4>
          <div className="flex gap-4 mt-2">
            <a href="#"><FaInstagram className="text-4xl text-textHeader hover:text-accent transition-colors" /></a>
            <a href="#"><FaTwitter className="text-4xl text-textHeader hover:text-accent transition-colors" /></a>
            <a href="#"><FaYoutube className="text-4xl text-textHeader hover:text-accent transition-colors" /></a>
          </div>
        </div>
      </div>

      <p className="text-center font-body text-xs text-black mt-10">
        © 2024 Laiki. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
