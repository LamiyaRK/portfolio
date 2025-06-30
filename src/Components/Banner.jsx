import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between items-center w-5/6 mx-auto max-h-[400px]'>

        <div  className='h-full w-[60%] backdrop-blur-xs bg-white/10 p-10 rounded-2xl'>
            <p className='text-2xl font-medium'><span className='text-[#019d91]'>Hello,</span> I am</p>
            <p className='text-6xl font-bold mb-3' >Lamiya Rahman Khan</p>
            <p className='text-4xl font-semibold mb-6'>Frontend <span className='text-[#019d91]'>Developer</span></p>
            <p className='font-medium opacity-80 mb-6 max-w-xl'>  An enthusiastic developer committed to crafting smooth and responsive web applications.
I’m eager to grow my skills and contribute meaningful solutions in real-world projects.</p>
<button className='btn bg-[#019d91] shadow-[0_2px_20px_#019d91] text-white px-20 rounded-lg hover:scale-105 hover:bg-white hover:text-[#019d91]'>Download Resume</button>

        </div>
        <div>
            <img src='./prof.png' className='max-h-[400px] rounded-2xl'></img>
        </div>
        </div>
    );
};

export default Banner;