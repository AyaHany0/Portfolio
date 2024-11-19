import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/contact");
  };

  return (
    <nav className="xl:max-w-6xl lg:max-w-4xl md:max-w-3xl max-w-md mx-auto flex flex-col md:flex-row items-center p-3 justify-between font-heading">
      <div className="flex justify-between items-center w-full md:w-auto">
        <NavLink to={"/"}>
          <img src={logo} alt="Aya's Portfolio" width={100} />
        </NavLink>

        <div className="md:hidden cursor-pointer p-3" onClick={toggleMenu}>
          {/* Menu Icon */}
          <div
            className={`w-6 h-0.5 bg-white mb-1 transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white mt-1 transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>
      </div>

      {/* Menu */}
      <div
        className={`w-full md:flex md:items-center justify-between md:w-auto transition-transform duration-300 ${
          menuOpen ? "block" : "hidden md:block"
        }`}
      >
        {/* Menu Items */}
        <ul className="flex flex-col md:flex-row items-center  md:bg-transparent shadow-md md:shadow-none gap-4 w-full md:w-auto md:ml-4">
          <li className="p-4 text-lg text-primary cursor-pointer">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="p-4 text-lg text-primary cursor-pointer">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className="p-4 text-lg text-primary cursor-pointer">
            <NavLink to={"/works"}>Works</NavLink>
          </li>
          <li className="p-4 text-lg text-primary cursor-pointer">
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </div>

      <div
        className={`mt-4 md:mt-0 md:ml-8 ${
          menuOpen ? "block" : "hidden md:block"
        }`}
      >
        <button
          onClick={handleNavigation}
          className="px-6 py-2 cursor-pointer text-white bg-subprimary hover:bg-white hover:text-subprimary rounded-lg font-medium transition-colors duration-300"
        >
          Let's talk
        </button>
      </div>
    </nav>
  );
}
