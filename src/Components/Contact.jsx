import React, { use } from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import { ScrollContext } from './ScrollContext';

const fadeInFromTop = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const fadeFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2 },
  }),
};

const Contact = () => {
  const { Contact: ContactRef } = use(ScrollContext);

  return (
    <div ref={ContactRef} id='Contact' >
     
      <motion.h1
        className='text-5xl text-[#66FCF1] text-center font-bold pt-[120px] mb-[80px]'
        variants={fadeInFromTop}
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h1>

      <div className=' w-[95%] lg:w-5/6 mx-auto lg:grid lg:grid-cols-3 flex  flex-col gap-6 '>

        {/* Left Section */}
        <motion.div
          className='space-y-5 flex-1'
          variants={fadeFromLeft}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <h1 className='text-3xl font-medium'>Let’s Connect</h1>
          <p className='text-gray'>
            I’d love to hear from you! Whether you have a question, a project idea,
            or just want to say hello, feel free to reach out using the form or via
            the contact details provided.
          </p>

          {/* Contact Info Cards */}
          {[
            {
              icon: '/icons8-home-50.png',
              label: 'Address:',
              value: 'Dhaka, Bangladesh',
            },
            {
              icon: '/icons8-mail-50.png',
              label: 'My Email:',
              value: 'lamiyarahmankhan01@gmail.com',
            },
            {
              icon: '/icons8-call-48.png',
              label: 'Call Me Now:',
              value: '+8801994063900',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className='flex items-center gap-4 bg-black/10 backdrop-blur-xs p-3 rounded-2xl'
              custom={i}
              variants={cardVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              <img src={item.icon} className='btn h-[60px] py-2' />
              <div>
                <p className='text-gray-400 text-lg'>{item.label}</p>
                <p className='text-base sm:text-xl font-medium overflow-x-auto'>{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

       
        <motion.div
          className='main_container col-span-1 flex-1'
          variants={fadeInFromTop}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 2, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className='main'>
            <div className='up flex gap-4'>
              <a href='https://www.facebook.com/lamiya.khan.9887117/' target='_blank' rel='noreferrer'>
                <motion.button className='card1' whileHover={{ scale: 1.1 }}>
                  <svg width='50' height='50' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fill='white'
                      d='M22 12a10 10 0 1 0-11.5 9.87v-6.99h-2.2V12h2.2v-1.56c0-2.18 1.3-3.39 3.3-3.39.96 0 1.96.17 1.96.17v2.15h-1.11c-1.1 
                      0-1.44.69-1.44 1.4V12h2.45l-.39 2.88h-2.06v6.99A10 10 0 0 0 22 12z'
                    />
                  </svg>
                </motion.button>
              </a>
<a href='https://www.linkedin.com/in/lamiya-rahmankhan/' target='_blank' rel='noreferrer'>
              <motion.button className='card2' whileHover={{ scale: 1.1 }}>
                <svg width='40' height='40' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill='white'
                    d='M19 0h-14c-2.76 0-5 2.24-5 5v14c0 
                    2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
                    19h-3v-10h3v10zm-1.5-11.3c-.97 0-1.5-.64-1.5-1.44 
                    0-.81.53-1.44 1.53-1.44s1.5.63 1.5 
                    1.44c0 .8-.53 1.44-1.53 1.44zm13.5 
                    11.3h-3v-5.6c0-1.34-.48-2.25-1.69-2.25-.92 
                    0-1.47.62-1.71 1.22-.09.22-.11.52-.11.82v5.81h-3s.04-9.43 
                    0-10.4h3v1.47c.4-.62 1.12-1.5 2.74-1.5 
                    2 0 3.5 1.3 3.5 4.09v6.34z'
                  />
                </svg>
              </motion.button>
              </a>
            </div>

            <div className='down flex gap-4 '>
            <a href='lamiya_04403' target='_blank' rel='noreferrer'>
              <motion.button className='card3' whileHover={{ scale: 1.1 }}>
                <svg height='50' width='50' viewBox='0 0 60 32' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill='white'
                    d='M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4
                     c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32
                     c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30
                     c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4
                     c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z'
                  />
                </svg>
                
              </motion.button>
              </a>

              <a href='https://github.com/LamiyaRK' target='_blank' rel='noreferrer'>
                <motion.button className='card4' whileHover={{ scale: 1.1 }}>
                  <svg width='40' height='40' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fill='white'
                      d='M12 0a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77
                       -1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 
                       1.08 1.85 2.84 1.32 3.53 1.01.11-.79.42-1.32.76-1.62
                       -2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22
                       -.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0
                       c2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.24 2.86.12 3.16
                       .77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94
                       .43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 0Z'
                    />
                  </svg>
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>

       
        <motion.div
          variants={fadeFromRight}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className='col-span-1'
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
