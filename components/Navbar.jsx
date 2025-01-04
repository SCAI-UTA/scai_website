'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Close dropdown menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !event.target.closest('.dropdown-menu') &&
        !event.target.closest('.menu-btn')
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />

      <div className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-8`}>
        {/* Left Section: Logo and Search */}
        <div className="flex items-center gap-4">
          <img
            src="/scai.jpeg"
            alt="logo"
            className="w-[80px] h-auto rounded-lg shadow-md"
          />

          {/* Search Icon */}
          <button
            onClick={toggleSearch}
            className="p-2 focus:outline-none"
            aria-label="Toggle Search"
          >
            <img
              src="/search.svg"
              alt="search"
              className="w-[24px] h-[24px] object-contain"
            />
          </button>
        </div>

        {/* Brand Name */}
        <h2 className="font-extrabold text-[24px] text-white leading-[30px]">
          SCAI
        </h2>

        {/* Menu Icon */}
        <button
          onClick={toggleMenu}
          className="p-2 focus:outline-none menu-btn"
          aria-label="Toggle Menu"
        >
          <img
            src="/menu.svg"
            alt="menu"
            className="w-[24px] h-[24px] object-contain"
          />
        </button>
      </div>

      {/* Search Input */}
      {showSearch && (
        <div className="mt-4 mx-auto flex justify-center">
          <input
            type="text"
            placeholder="Search SCAI"
            className="w-full max-w-md p-2 border border-gray-300 rounded-md bg-white text-black shadow-md focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
        </div>
      )}

      {/* Dropdown Menu */}
      {showMenu && (
        <div
          className="absolute top-[100%] right-0 mt-2 bg-white text-black rounded-lg shadow-lg py-2 w-[200px] z-50 dropdown-menu"
        >
          <a href="#about" className="block px-4 py-2 hover:bg-gray-200">
            About
          </a>
          <a href="#projects" className="block px-4 py-2 hover:bg-gray-200">
            Projects
          </a>
          <a href="#howaiworks" className="block px-4 py-2 hover:bg-gray-200">
            How AI Works
          </a>
	  <a href="#about" className="block px-4 py-2 hover:bg-gray-200">
            What's New @ SCAI
          </a>
          <a href="#projects" className="block px-4 py-2 hover:bg-gray-200">
            Global Impact
          </a>
          <a href="#howaiworks" className="block px-4 py-2 hover:bg-gray-200">
            Insights
          </a>
          <a href="#howaiworks" className="block px-4 py-2 hover:bg-gray-200">
            SCAI President Address
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;

