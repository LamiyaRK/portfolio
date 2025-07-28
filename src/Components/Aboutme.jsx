import Lottie from 'lottie-react';
import React, { useEffect, useRef, use } from 'react';
import anime from '../../public/laptop.json';
import { ScrollContext } from './ScrollContext';
import { motion, useAnimation, useInView } from 'framer-motion';

const Aboutme = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftInView = useInView(leftRef, { once: false });
  const rightInView = useInView(rightRef, { once: false });

  const leftControl = useAnimation();
  const rightControl = useAnimation();

  useEffect(() => {
    if (leftInView) leftControl.start('visible');
    if (rightInView) rightControl.start('visible');
  }, [leftInView, rightInView, leftControl, rightControl]);


  const { About } = use(ScrollContext);

  return (
    <div className='pt-[240px]' ref={About} id="About">
      <motion.h1
  
  initial={{ opacity: 0, y: -50, scale: 0.9 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 2, ease: "easeOut" }}
  viewport={{ once: true }}
  
  className="text-5xl text-[#66FCF1] mb-5 text-center font-bold  overflow-x-hidden"
  loop
>
  About Me
</motion.h1>

      <div className='flex flex-col lg:flex-row justify-between items-center w-[95%] lg:w-5/6 mx-auto lg:h-[450px] mt-[80px] text-white'>
       
        <motion.div
          className='w-[95%] lg:w-[50%]'
          ref={leftRef}
          initial='hidden'
          animate={leftControl}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 2 }}
        >
          <Lottie animationData={anime} loop={true} />
        </motion.div>

       
        <motion.div
          className='tabs tabs-lift w-[95%] lg:w-[50%] h-[500px] sm:h-[420px]'
          ref={rightRef}
          initial='hidden'
          animate={rightControl}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 2 }}
        >
          <input
            type='radio'
            name='tab'
            className='tab'
            aria-label='Introduction'
            defaultChecked
          />
          <div className='tab-content bg-base-100 border-base-300 p-6 text-xl'>
            <p>
              Hi, I’m <span className='text-[#66FCF1] font-medium'>Lamiya</span>
              <br />
              <br /> — a{' '}
              <span className='text-[#66FCF1] font-medium'>
                frontend developer
              </span>{' '}
              who loves building{' '}
              <span className='text-[#66FCF1] font-medium'>
                smooth, clean web experiences and learning through challenges
              </span>{' '}
              . Alongside web development, I’ve also explored{' '}
              <span className='text-[#66FCF1] font-medium'>
                competitive programming
              </span>
              , which helped me grow{' '}
              <span className='text-[#66FCF1] font-medium'>
                strong problem-solving habits and a deeper understanding of code
              </span>{' '}
              . I’m currently expanding my skills with the goal of becoming a{' '}
              <span className='text-[#66FCF1] font-medium'>
                full stack developer
              </span>
              .
            </p>
          </div>

          <input
            type='radio'
            name='tab'
            className='tab'
            aria-label='Skills'
            
          />
          <div className='tab-content bg-base-100 border-base-300 p-6'>
            <div className='space-y-6'>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-[#66FCF1]'>
                  Technical Skills
                </h3>
                <ul className='list-disc list-inside space-y-2 text-white'>
                  <li>HTML, CSS, JavaScript</li>
                  <li>React.js, Tailwind CSS</li>
                  <li>Git & GitHub</li>
                  <li>Basic Node.js & REST APIs</li>
                </ul>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-[#66FCF1]'>
                  Soft Skills
                </h3>
                <ul className='list-disc list-inside space-y-2 text-white'>
                  <li>Problem-solving and analytical thinking</li>
                  <li>Creative eye for design and UI/UX</li>
                  <li>Strong communication and collaboration</li>
                  <li>Growth mindset and adaptability</li>
                </ul>
              </div>
            </div>
          </div>

          <input
            type='radio'
            name='tab'
            className='tab'
            aria-label='Hobbies'
          />
          <div className='tab-content bg-base-100 border-base-300 p-6'>
            <div>
              <h3 className='text-xl font-semibold mb-2 text-[#66FCF1]'>
                Hobbies & Interests
              </h3>
              <ul className='list-disc list-inside space-y-2 text-white'>
                Besides coding I enjoy :
                <li>
                  Reading books that expand perspective and spark curiosity
                </li>
                <li>
                  Learning new things that help me grow personally and
                  creatively
                </li>
                <li>Sketching and journaling as a form of quiet expression</li>
                <li>Exploring calming and cozy visual aesthetics</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutme;
