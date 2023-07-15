import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 h-16 flex items-center justify-between px-6">
      <div className="text-purple-700 text-xl font-bold">SecureShare</div>
      <ul className="flex space-x-6">
        <li className="cursor-pointer">
          <Link
            activeClass="active"
            to="#home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About Us
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            activeClass="active"
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Features
          </Link>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;
