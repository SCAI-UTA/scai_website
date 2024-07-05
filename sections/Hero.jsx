// 'use client';

// import { motion } from 'framer-motion';
// import styles from '../styles';
// import { slideIn, staggerContainer, textVariant } from '../utils/motion';

// const Hero = () => (
//   <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0.25 }}
//       className={`${styles.innerWidth2} mx-auto flex flex-col`}
//     >
//       <div className="relative z-10 flex flex-col items-center justify-center">
//         <motion.h1
//           variants={textVariant(1.1)}
//           className={styles.heroHeading}
//         >
//           SCAI
//         </motion.h1>
//         <motion.div
//           variants={textVariant(1.2)}
//           className="flex flex-row items-center justify-center"
//         >
//           <h1 className={styles.heroHeading}> Ma</h1>
//           <div className={styles.heroDText} />
//           <h1 className={styles.heroHeading}> Ness</h1>
//         </motion.div>
//       </div>

//       <motion.div
//         variants={slideIn('right', 'tween', 0.2, 1)}
//         className="relative w-full lg:-mt-[30px] md:-mt-[18px] -mt-[15px]  2xl:pl-[280px]"
//       >
//         <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] sm:-top-[20px] -top-[10px]" />
//         <img
//           src="/cover.png"
//           alt="cover"
//           className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
//         />

//         <a href="#explore">
//           <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 2xl:-ml-[100px]">
//             <motion.img
//               src="/stamp.png"
//               alt="stamp"
//               className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain "
//               animate={{ rotate: 360 }}
//               transition={{ repeat: Infinity, duration: 7, repeatType: 'loop' }}
//             />
//           </div>
//         </a>
//       </motion.div>
//     </motion.div>
//   </section>
// );

// export default Hero;
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth2} mx-auto flex flex-col`}
      >
        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.h1
            variants={textVariant(1.1)}
            className={styles.heroHeadingLarge}
          >
            SCAI
          </motion.h1>

          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row items-center justify-center"
          >
            <h1 className={styles.heroHeading}> Ma</h1>
            <div className={styles.heroDText} />
            <h1 className={styles.heroHeading}> Ness</h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full lg:-mt-[30px] md:-mt-[18px] -mt-[15px] 2xl:pl-[280px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] sm:-top-[20px] -top-[10px]" />
          <img
            src="/cover.png"
            alt="cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />

          <a href="#explore">
            <div className="w-full flex justify-between sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 2xl:-ml-[100px]">
              <div className="flex items-center gap-4">
                <a href="https://discord.com/invite/ZZrgf9XsD4" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/disc.jpeg"
                    alt="Discord"
                    className="w-10 h-10 object-contain rounded-lg shadow-md"
                  />
                </a>
                <a href="https://www.instagram.com/scai_uta?igsh=MTgxamljaGxmOWoxeQ==" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/instagram.svg"
                    alt="Instagram"
                    className="w-10 h-10 object-contain"
                  />
                </a>
                <a href="https://github.com/SCAI-UTA" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/github.png"
                    alt="Github"
                    className="w-10 h-10 object-contain rounded-lg shadow-md"
                  />
                </a>
              </div>

              <motion.img
                src="/scai.jpeg"
                alt="stamp"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 7, repeatType: 'loop' }}
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
