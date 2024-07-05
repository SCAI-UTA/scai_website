'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-8`}>
      <div className="flex items-center gap-4">
        <img src="/scai.jpeg" alt="logo" className="w-[80px] h-[auto] rounded-lg shadow-md" />

        <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" />
      </div>

      <h2 className="font-extrabold text-[24px] text-white leading-[30px]">
        {/* Your brand name */}
      </h2>

      <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" />
    </div>
  </motion.nav>
);


export default Navbar;
