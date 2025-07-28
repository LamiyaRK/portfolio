import React, { use, useEffect } from 'react';

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
import { ScrollContext } from './ScrollContext';





const Home = () => {
    
  const {Home}=use(ScrollContext)
     useEffect(()=>{
      Aos.init({
        duration:800,
        once:false,
      })
     },[])
    return (
        <div className='relative' ref={Home} id="Home">
        
           
           <div data-aos="fade-up" data-aos-duration="1000" className='absolute z-1 top-40 inset-0'>
<Banner ></Banner>

<Aboutme></Aboutme>
<Skills></Skills>
<Education></Education>


<FeaturedProject></FeaturedProject>
<Contact ></Contact>
  <br></br>
  <br></br>
  <br></br>
           </div>
           
             
          
        </div>
    );
};

export default Home;