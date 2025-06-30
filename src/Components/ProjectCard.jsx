import React from 'react';
import ArtifactsCarousel from './ArtifactsCarousel';

const ProjectCard = ({data}) => {
    const {id,name,image,technologies,description,liveLink,githubLink,challenges,improvemnets}=data
  
    return (
        <div className={`flex items-center w-5/6 mx-auto relative   ${id&1?'flex-row':'flex-row-reverse'} mb-10` } >
    <ArtifactsCarousel image={image}></ArtifactsCarousel>
        <div className={`w-[55%] space-y-2 bg-white/10 backdrop-blur-xs p-3 rounded-2xl z-1  shadow-xl ${id&1?'ml-[-40px]':'mr-[-40px]'}`}>
            <h1 className='text-3xl font-semibold text-[#019d91]'>{name}</h1>
            <p className='w-[95%] opacity-80 font-medium'>{description}</p>
            <p className='flex gap-2 flex-wrap'>{
                technologies.map(tech=><button className='badge badge-success badge-soft badge-sm text-[#019d91]'>{tech}</button>)
            }</p>
            <button
  type="submit"
  className="relative z-10 group overflow-hidden px-3 py-1 rounded-xl border-2 bg-[#019d91] text-sm btn-sm text-white backdrop-blur-md  font-semibold flex items-center gap-2  transition-all duration-300 hover:text-[#019d91]"
>
  Explore
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
</button>

</div>

 

        </div>
    );
};

export default ProjectCard;