import React, { use } from 'react';
import { ScrollContext } from './ScrollContext';
import { motion } from 'framer-motion';
import { duration } from '@mui/material/styles';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
   
};

const imageVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  transition:{duration:2}
};

const Banner = () => {
  return (
    <motion.div
      className='flex  flex-col-reverse lg:flex-row justify-between items-center w-[95%] lg:w-5/6 mx-auto gap-10 lg:max-h-[400px] mt-16'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount:0.1 }}
    >
     
      <motion.div
        className='h-full w-[95%] lg:w-[60%] backdrop-blur-xs bg-black/10 p-10 rounded-2xl'
        variants={containerVariants}
      >
        <motion.p className='text-2xl font-medium' variants={fadeUp}>
          <span className='text-[#66FCF1]'>Hello,</span> I am
        </motion.p>

        <motion.p className='text-5xl font-bold mb-3' variants={fadeUp}>
          Lamiya Rahman Khan
        </motion.p>

        <motion.p className='text-5xl font-semibold mb-6' variants={fadeUp}>
          Frontend <span className='text-[#66FCF1]'>Developer</span>
        </motion.p>

        <motion.p
          className='font-medium opacity-80 mb-6 max-w-xl'
          variants={fadeUp}
        >
          An enthusiastic developer committed to crafting smooth and responsive web applications.
          I’m eager to grow my skills and contribute meaningful solutions in real-world projects.
        </motion.p>

        <motion.a
        href='/Resume1.pdf' download
          variants={fadeUp}
          className='btn bg-[#019d91] shadow-[0_2px_20px_#66FCF1] mb-6 text-white px-20 rounded-lg hover:scale-105 hover:bg-white hover:text-[#66FCF1]'
        >
        Download Resume 
        </motion.a>

     
        <motion.div className='social-links flex gap-4 flex-wrap' variants={fadeUp}>
          <a href='https://www.facebook.com/lamiya.khan.9887117/' target='_blank' rel="noreferrer">
            <div id='facebook' className='social-btn flex-center gap-2'>
              <svg viewBox='0 0 320 512' height='24' width='24' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill='currentColor'
                  d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 
                  0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
                />
              </svg>
              <span>Facebook</span>
            </div>
          </a>

          <a href='https://www.linkedin.com/in/lamiya-rahmankhan/' target='_blank'>
            <div id='linkedin' className='social-btn flex-center gap-2'>
              <svg viewBox='0 0 24 24' height='24' width='24' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill='currentColor'
                  d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 
                  1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 
                  0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 
                  0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z'
                />
              </svg>
              <span>LinkedIn</span>
            </div>
          </a>

          <a href='https://github.com/LamiyaRK' target='_blank' rel="noreferrer">
            <div id='github' className='social-btn flex-center gap-2'>
              <svg viewBox='0 0 24 24' height='24' width='24' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill='currentColor'
                  d='M12 0c-6.626 0-12 5.373-12 12 0 
                  5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 
                  1.205.084 1.839 1.237 1.839 1.237 
                  1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 
                  0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 
                  0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 
                  3.003-.404 1.02.005 2.047.138 3.006.404 
                  2.291-1.552 3.297-1.23 3.297-1.23.653 
                  1.653.242 2.874.118 3.176.77.84 1.235 
                  1.911 1.235 3.221 0 4.609-2.807 
                  5.624-5.479 5.921.43.372.823 1.102.823 
                  2.222v3.293c0 .319.192.694.801.576 
                  4.765-1.589 8.199-6.086 8.199-11.386 
                  0-6.627-5.373-12-12-12z'
                />
              </svg>
              <span>GitHub</span>
            </div>
          </a>
        </motion.div>
      </motion.div>

     
      <motion.div variants={imageVariant}
      transition={{duration:1}}
      >
        <img src='./prof.png' alt='Profile' className='max-h-[400px] rounded-2xl' />
      </motion.div>
    </motion.div>
  );
};

export default Banner;


