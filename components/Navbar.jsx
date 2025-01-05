'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const menuItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#howaiworks', label: 'How AI Works' },
  { href: '#whatsnew', label: 'What\'s New @ SCAI' },
  { href: '#globalimpact', label: 'Global Impact' },
  { href: '#insights', label: 'Insights' },
  { href: '#presidentaddress', label: 'SCAI President Address' },
];

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleSearch = () => setShowSearch(!showSearch);
  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !event.target.closest('.dropdown-menu')
        && !event.target.closest('.menu-btn')
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
        {/* Logo and Search */}
        <div className="flex items-center gap-4">
          <img
            src="/scai.jpeg"
            alt="logo"
            className="w-[80px] h-auto rounded-lg shadow-md"
          />
          <button
            type="button" // Added explicit type
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

        {/* Menu Button */}
        <button
          type="button" // Added explicit type
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

      {/* Search Bar */}
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
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 hover:bg-gray-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;

