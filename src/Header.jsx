import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Left section with links */}
        <div className="flex items-center space-x-4">
          <Link className="text-lg font-semibold" to="/about">
            About LetsUpgrade
          </Link>
          <Link className="text-lg font-semibold" to="/explore">
            Explore Programs
          </Link>
        </div>

        {/* Center section with logo */}
        <div className="flex items-center justify-center flex-grow">
          <img 
            src="data:image/png;base64,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" 
            alt="LU Logo" 
            className="mr-2 w-10 h-10" 
          />
          <span className="text-2xl font-bold">LU</span>
        </div>

        {/* Right section with login button */}
        <div className="flex items-center space-x-4">
          <a className="text-lg font-semibold" href="#">
            Refer & Earn
          </a>
          <button className="bg-black text-white px-4 py-2 rounded">Log In</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
