import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Lottie from 'lottie-react';
import bganimation from '/public/bg6.json'
const Homelayout = () => {
    return (
        <div >
            
        <div>
           <div className='fixed z-10 w-screen max-h-screen '>
            <Navbar></Navbar>
            </div>
            <div>
                <div className='fixed inset-0 z-[-10] '>
             <Lottie 
                animationData={bganimation}
                loop={true}
               className='max-h-screen'
            />
             
             </div>
              <Home></Home>
            </div>
           
        </div>
        </div>
       
    );
};

export default Homelayout;