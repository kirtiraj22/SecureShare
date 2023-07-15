import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 h-16 flex items-center justify-between px-6">
      <div className="text-purple-700 text-xl font-bold">SecureShare</div>
      <ul className="flex space-x-6">
        <li className="cursor-pointer">
          <NavLink
            className={(navData) => (navData.isActive ? "active-style" : 'none')}
            to="#home"
            offset={-70}
            duration={500}
          >
            Home
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            className={(navData) => (navData.isActive ? "active-style" : 'none')}
            to="about"
            offset={-70}
            duration={500}
          >
            About Us
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            className={(navData) => (navData.isActive ? "active-style" : 'none')}
            to="features"
            offset={-70}
            duration={500}
          >
            Features
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;
