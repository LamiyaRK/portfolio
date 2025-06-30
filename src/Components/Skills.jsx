import React from 'react';

const Skills = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <h1 className='text-4xl text-[#019d91]  text-center font-bold'>Tech Stack</h1>
            <p className='text-2xl text-[#019d91] my-5'>Frontend</p>
            <div className='flex gap-5'>
            <button className='btn btn-success btn-soft btn-lg text-[#019d91]'><img src="../../public/Frontend/icons8-html-48.png" className='w-[40px]'/>HTML</button>
             <button className='btn btn-success btn-soft btn-lg text-[#019d91]'><img src="../../public/Frontend/icons8-css-48.png" className='w-[40px]'/>CSS</button>
              <button className='btn btn-success btn-soft btn-lg text-[#019d91]'><img src="../../public/Frontend/icons8-react-32.png" className='w-[40px] h-[40px]'/>React</button>
               <button className='btn btn-success btn-soft btn-lg text-[#019d91]'><img src="../../public/Frontend/icons8-javascript-48.png" className='w-[40px]'/>JavaScript</button>
                <button className='btn btn-success btn-soft btn-lg text-[#019d91]'><img src="../../public/Frontend/icons8-tailwind-css-48.png" className='w-[40px]'/>Tailwind</button>
            </div>
            <p className='text-2xl text-[#019d91] my-5'>Backend</p>
            <div className='flex gap-5'>
            <button className='btn btn-success btn-soft btn-lg text-[#019d91]'><img src="../../public/backend/icons8-express-js-50.png" className='w-[40px]'/>Express JS</button>
            <button className='btn btn-success btn-soft btn-lg text-[#019d91]'><img src="../../public/backend/icons8-mongodb-24.png" className='w-[40px]'/>MongoDB</button>
            <button className='btn btn-success btn-soft btn-lg text-[#019d91]'><img src="../../public/backend/icons8-firebase-48.png" className='w-[40px]'/>Firebase</button>
            </div>
            <p className='text-2xl text-[#019d91] my-5'>Tools</p>
            <div className='flex gap-5'>
            <button className='btn btn-success btn-soft btn-lg text-[#019d91]'><img src="../../public/Tools/icons8-figma-48.png" className='w-[40px]'/>Figma</button>
            <button className='btn btn-success btn-soft btn-lg text-[#019d91]'><img src="../../public/Tools/icons8-visual-studio-30.png" className='w-[40px]'/>VS code</button>
            <button className='btn btn-success btn-soft btn-lg text-[#019d91]'><img src="../../public/Tools/icons8-github-48.png" className='w-[40px]'/>Github</button>
            </div>
              <p className='text-2xl text-[#019d91] my-5'>Currently Exploring</p>
            <div className='flex gap-5'>
            <button className='btn btn-success btn-soft btn-lg text-[#019d91]'><img src="../../public/Others/icons8-c-programming-48.png" className='w-[40px]'/>C</button>
            <button className='btn btn-success btn-soft btn-lg text-[#019d91]'><img src="../../public/Others/icons8-c-48.png" className='w-[40px]'/>C++</button>
             <button className='btn btn-success btn-soft btn-lg text-[#019d91]'><img src="../../public/Others/icons8-java-48.png" className='w-[40px]'/>Java</button>
              <button className='btn btn-success btn-soft btn-lg text-[#019d91]'><img src="../../public/Others/icons8-python-48.png" className='w-[40px]'/>Python</button>
               <button className='btn btn-success btn-soft btn-lg text-[#019d91]'><img src="../../public/Others/icons8-php-logo-80.png" className='w-[40px]'/>PHP</button>
                <button className='btn btn-success btn-soft btn-lg text-[#019d91]'><img src="../../public/Others/icons8-mysql-48.png" className='w-[40px]'/>MySql</button>
            </div>
        </div>
    );
};

export default Skills;