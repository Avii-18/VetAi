import React, { useState, useEffect } from "react";
import { FaStethoscope } from "react-icons/fa";
import { HiMenuAlt3, HiX, HiMoon, HiSun } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  // Change style on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-green-400 rounded-lg flex items-center justify-center shadow-md">
            <FaStethoscope className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg md:text-xl font-bold text-teal-600 dark:text-teal-400">
            VetAi Care
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          {["Home", "About", "Services", "Blog"].map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative text-gray-800 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-300 transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-green-400 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-1.5 text-teal-600 dark:text-teal-300 border border-teal-600 dark:border-teal-300 rounded-full hover:bg-teal-50 dark:hover:bg-gray-800 transition font-medium"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="px-4 py-1.5 bg-gradient-to-r from-teal-600 to-green-500 text-white rounded-full hover:opacity-90 transition font-medium shadow-md"
          >
            Sign Up
          </Link>
          <button
            onClick={toggleDarkMode}
            className="ml-2 p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {isDarkMode ? (
              <HiSun className="h-5 w-5 text-yellow-400" />
            ) : (
              <HiMoon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-3xl text-teal-600 dark:text-teal-300"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md rounded-b-lg">
          <ul className="flex flex-col gap-3 text-gray-700 dark:text-gray-100 font-medium">
            {["Home", "About", "Services", "Blog"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-teal-600 dark:hover:text-teal-300 block"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-2">
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-2 border border-teal-600 text-teal-600 dark:border-teal-300 dark:text-teal-300 rounded-full hover:bg-teal-50 dark:hover:bg-gray-800 text-center"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-2 bg-gradient-to-r from-teal-600 to-green-500 text-white rounded-full hover:opacity-90 text-center shadow-md"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
