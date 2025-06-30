import React from 'react';

const Bootcamps = () => {
  return (
    <div className='w-5/6 mx-auto mt-[80px]'>
      <h1 className='text-4xl text-[#019d91] mb-8 text-center font-bold'>
        Courses & Bootcamps
      </h1>
<div className='flex justify-center'>
      <ul className="steps steps-vertical">
        <li className="step step-neutral">
         <div>
         <br/>
            <p className='text-[#019d91] font-semibold'>
              Complete Web Development Course (Batch 11)
            </p>
           <p>Programming Hero — 2025</p> 
         </div>
        </li>

        <li className="step step-neutral">
          <div>
          <br/>
            <span className='text-[#019d91] font-semibold'>
              "21 Days with Code" – Web Development Bootcamp
            </span><br />
            Programming Hero — 2023
          </div>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Bootcamps;
