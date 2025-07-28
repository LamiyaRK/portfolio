import React, { use } from 'react';
import { ScrollContext } from './ScrollContext';

const Details = () => {
    const {explore}=use(ScrollContext)
      const {id,name,image,image1,technologies,description,liveLink,githubLink,challenges,improvements}=explore
    return (
        <div className='bg-base-100 h-full text-white space-y-5 p-5'>
          <h1 className="text-3xl font-semibold mb-2 text-[#66FCF1]">{name}</h1>
          <div className="w-full h-[300px] overflow-auto border rounded-lg shadow">
      <img src={image1} alt="Full Homepage Screenshot" className="w-full" />
    </div>
          <p className="text-xl font-semibold mb-2 text-[#66FCF1]">About</p>
          <p>{description}</p>
           <p className="text-xl font-semibold mb-2 text-[#66FCF1]">Technologies</p>
          <p className='flex gap-2 flex-wrap'>{
                technologies.map(tech=><button className='badge badge-success badge-soft badge-sm text-[#66FCF1]'>{tech}</button>)
            }</p>
            <p className="text-xl font-semibold mb-2 text-[#66FCF1]">Challenges</p>
            <ul className="list-disc list-inside space-y-2 text-white">
                {
                    challenges.map(cha=><li>{cha}</li>)
                }
            </ul>
             <p className="text-xl font-semibold mb-2 text-[#66FCF1]">Improvemnets</p>
            <ul className="list-disc list-inside space-y-2 text-white">
                {
                    improvements.map(cha=><li>{cha}</li>)
                }
            </ul>
            <div className='flex gap-5 items-center'>
                 <a href={githubLink} target='_blank'><button class="git">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="white"></path>
  </svg>
  <p class="text">View Code</p>
</button></a> 


<a href={liveLink} target='_blank'><button
    type="button"
    className="relative z-10 group overflow-hidden px-3 py-1 rounded-xl border-2 bg-[#019d91] text-sm btn-sm text-white backdrop-blur-md font-semibold flex items-center gap-2 transition-all duration-300 hover:text-[#019d91]"
  >
    Live Demo
    <svg
      className="w-8 h-8 text-gray-800 border border-gray-700 p-2 rounded-full transform rotate-45 transition-all duration-300 group-hover:rotate-90 group-hover:bg-white group-hover:text-emerald-600"
      viewBox="0 0 16 19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
        className="fill-current"
      />
    </svg>
    <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-in-out z-[-1] rounded-xl"></span>
  </button></a> 
</div>

           
        </div>
    );
};

export default Details;