const Footer = () => {
    return (
      <footer className="bg-pink-50 py-10 mt-12">
        <div className="text-center mb-6">
          <h3 className="text-xl font-body mb-2">Welcome to the community!</h3>
          <p className="mb-4">
            Sign up for our email list to stay up to date with the latest at <strong>Laiki</strong>.
          </p>
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-2 rounded border border-gray-300 w-72 mb-4"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8 text-left font-body md:text-left text-sm text-gray-700">
          <div>
            <h4 className="font-semibold mb-2">Shop</h4>
            <ul>
              <li>Jewelry</li>
              <li>Fashion and Accessories</li>
              <li>Ceramics & Pottery</li>
              <li>Photography</li>
              <li>Beauty and Wellness</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Learn</h4>
            <ul>
              <li>About Laiki</li>
              <li>FAQ</li>
              <li>Education Center</li>
              <li>Community Hub</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul>
              <li>Contact</li>
              <li>Shipping Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Stay connected!</h4>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a href="#"><i className="fa-brands fa-instagram text-2xl"></i></a>
              <a href="#"><i className="fa-brands fa-twitter text-2xl"></i></a>
              <a href="#"><i className="fa-brands fa-youtube text-2xl"></i></a>
            </div>
          </div>
        </div>
        <p className="text-center font-body text-xs text-black mt-6">© 2024 Laiki. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;  
