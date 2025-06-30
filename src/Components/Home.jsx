import React, { useEffect } from 'react';

import Lottie from 'lottie-react';
import Banner from './Banner';
import Aboutme from './Aboutme';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Skills from './Skills';
import Education from './Education';
import Bootcamps from './Bootcamps';
import ArtifactsCarousel from './ArtifactsCarousel';
import FeaturedProject from './FeaturedProject';
import Contact from './Contact';


const Home = () => {
     useEffect(()=>{
      Aos.init({
        duration:800,
        once:false,
      })
     },[])
    return (
        <div className='relative'>
        
           
           <div data-aos="fade-up" className='absolute z-1 top-40 inset-0'>
<Banner data-aos="fade-up" className='relative'></Banner>
<Aboutme></Aboutme>
<Skills></Skills>
<Education></Education>
<Bootcamps></Bootcamps>

<FeaturedProject></FeaturedProject>
<Contact></Contact>
           </div>
           
             
          
        </div>
    );
};

export default Home;