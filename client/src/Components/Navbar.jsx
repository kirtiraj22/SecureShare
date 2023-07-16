import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll"
import Home from "./Home"
const Navbar = () => {
  return (
    <nav className="bg-[#3D00B7] h-16 flex items-center justify-between w-full">
      <NavLink
        className="text-white text-3xl font-bold cursor-pointer ml-10"
        to="/"
      >
        <span className="text-cyan-300">Secure</span>
        <span className="text-white">Share</span>
      </NavLink>
      <ul className="flex space-x-6 mr-10">
        <li className="cursor-pointer">
          <NavLink
            className="text-white text-lg hover:text-cyan-300 font-semibold transition-colors duration-300"
            activeClassName="active-style"
            to="/"
            offset={-70}
            duration={500}
          >
            Home
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <Link
            className="text-white text-lg hover:text-cyan-300 font-semibold transition-colors duration-300"
            activeClassName="active-style"
            smooth={true}
            to="about"
            offset={-70}
            duration={500}
          >
            About Us
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className="text-white text-lg hover:text-cyan-300 font-semibold transition-colors duration-300"
            activeClassName="active-style"
            to="features"
            offset={-70}
            smooth={true}
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
