// 'use client';

// import { motion } from 'framer-motion';
// import styles from '../styles';
// import { navVariants } from '../utils/motion';

// const Navbar = () => (
//   <motion.nav
//     variants={navVariants}
//     initial="hidden"
//     whileInView="show"
//     className={`${styles.xPaddings} py-8 relative`}
//   >
//     <div className="absolute w-[50%] inset-0 gradient-01" />
//     <div className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-8`}>
//       <div className="flex items-center gap-4">
//         <img src="/scai.jpeg" alt="logo" className="w-[80px] h-[auto] rounded-lg shadow-md" />

//         <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" />
//       </div>

//       <h2 className="font-extrabold text-[24px] text-white leading-[30px]">
//         {/* Your brand name */}
//       </h2>

//       <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" />
//     </div>
//   </motion.nav>
// );


// export default Navbar;
// 'use client';

// import { motion } from 'framer-motion';
// import styles from '../styles';
// import { navVariants } from '../utils/motion';
// import Link from 'next/link'; // Import Link from Next.js

// const Navbar = () => (
//   <motion.nav
//     variants={navVariants}
//     initial="hidden"
//     whileInView="show"
//     className={`${styles.xPaddings} py-8 relative`}
//   >
//     <div className="absolute w-[50%] inset-0 gradient-01" />
//     <div className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-8`}>
//       <div className="flex items-center gap-4">
//         <img src="/scai.jpeg" alt="logo" className="w-[80px] h-[auto] rounded-lg shadow-md" />
//         <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" />
//       </div>

//       <h2 className="font-extrabold text-[24px] text-white leading-[30px]">
//         {/* Your brand name */}
//       </h2>

//       <div className="flex items-center gap-4">
//         {/* Add the Login link */}
//         <Link href="/login">
//           <a className="text-white hover:underline">Login</a>
//         </Link>
//         <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" />
//       </div>
//     </div>
//   </motion.nav>
// );

// export default Navbar;
// 'use client';

// import { motion } from 'framer-motion';
// import styles from '../styles';
// import { navVariants } from '../utils/motion';
// import Link from 'next/link'; // Import Link from Next.js

// const Navbar = () => (
//   <motion.nav
//     variants={navVariants}
//     initial="hidden"
//     whileInView="show"
//     className={`${styles.xPaddings} py-8 relative`}
//   >
//     <div className="absolute w-[50%] inset-0 gradient-01" />
//     <div className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-8`}>
//       <div className="flex items-center gap-4">
//         <img src="/scai.jpeg" alt="logo" className="w-[80px] h-[auto] rounded-lg shadow-md" />
//         <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" />
//       </div>

//       <h2 className="font-extrabold text-[24px] text-white leading-[30px]">
//         {/* Your brand name */}
//       </h2>

//       <div className="flex items-center gap-4">
//         {/* Corrected Login link */}
//         <Link href="/login" className="text-white hover:underline">
//           Login
//         </Link>
//         <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" />
//       </div>
//     </div>
//   </motion.nav>
// );

// export default Navbar;
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import Modal from './Modal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
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

          <div className="flex items-center gap-4">
            {/* Button to open the modal */}
            <button onClick={openModal} className="login-button">
              Login
            </button>
            <style jsx>{`
                  .login-button {
                    background-color: black;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 20px;
                    cursor: pointer;
                    font-size: 16px;
                    transition: background-color 0.3s ease;
                  }

                  .login-button:hover {
                    background-color: grey;
                  }
                `}</style>
            <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" />
          </div>
        </div>
      </motion.nav>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;
