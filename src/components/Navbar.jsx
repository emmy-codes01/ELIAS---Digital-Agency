import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/blue.png";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  const handleNavClick = (nav) => {
    setActiveNav(nav);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xs border-b border-gray-200/20">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4">
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
          <img src={logo} className="h-20" alt="Logo" />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Toggle menu</span>
          {isOpen ? <X className="w-5 h-5" /> : <Menu size={30} />}
        </button>

        <div
          id="navbar-menu"
          className={`items-center justify-between font-medium w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-white/80 backdrop-blur-sm md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                to="hero"
                smooth={true}
                duration={500}
                onClick={() => handleNavClick("home")}
                className={`block py-2 px-3 rounded-lg transition-colors duration-200 hover:bg-white/80 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 cursor-pointer ${
                  activeNav === "home" ? "text-blue-600" : "text-gray-700"
                }`}
              >
                Home
              </Link>
            </li>
            <li className="relative group">
              <button className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded-lg transition-colors duration-200 hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0">
                Programs
                <svg
                  className="w-2.5 h-2.5 ms-2.5 transform transition-transform duration-200 group-hover:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div className="hidden group-hover:block absolute left-0 mt-2 w-64 bg-white/70 backdrop-blur-md border border-gray-200/20 rounded-lg shadow-lg">
                <div className="p-3">
                  <span className="block p-3 rounded-lg transition-colors duration-200 hover:bg-white/20 cursor-pointer">
                    <div className="font-semibold">
                      ELIAS Internship Program
                    </div>
                    <span className="text-sm text-gray-500">Coming Soon!</span>
                  </span>
                </div>
              </div>
            </li>
            {["about", "testimonials", "contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  onClick={() => handleNavClick(item)}
                  className={`block py-2 px-3 rounded-lg transition-colors duration-200 hover:bg-white/80 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 cursor-pointer ${
                    activeNav === item ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
