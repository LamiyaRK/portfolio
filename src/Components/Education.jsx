import React, { use } from 'react';
import { ScrollContext } from './ScrollContext';
import OutlinedTimeline from './OutlinedTimeline';
import { motion } from 'framer-motion';
const Education = () => {
    const {Education}=use(ScrollContext)
    return (
        <div className='w-[95%] lg:w-5/6 mx-auto text-center pt-[120px]  ' ref={Education} id="Education">
           <motion.h1
           
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
           
            className="text-5xl text-[#66FCF1] mb-5 text-center font-bold mt-[120px]"
            loop
          >
            Learning Path
          </motion.h1>
          <OutlinedTimeline></OutlinedTimeline>
        </div>
    );
};

export default Education;