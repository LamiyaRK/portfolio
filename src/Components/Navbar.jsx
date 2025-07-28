import React, { useContext } from 'react';
import { ScrollContext } from './ScrollContext';

const Navbar = () => {
  const { About, Skills, Contact, scrollTo, Education, Projects, Home, selected } = useContext(ScrollContext);
 const list=<>
   <li>
              <button
                onClick={() => scrollTo(Home, "Home")}
                className={`font-medium text-lg ${selected === "Home" ? 'shiny-text' : ''}`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo(About, "About")}
                className={`font-medium text-lg ${selected === "About" ? 'shiny-text' : ''}`}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo(Skills, "Skills")}
                className={`font-medium text-lg ${selected === "Skills" ? 'shiny-text' : ''}`}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo(Education, "Education")}
                className={`font-medium text-lg ${selected === "Education" ? 'shiny-text' : ''}`}
              >
                Education
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo(Projects, "Projects")}
                className={`font-medium text-lg ${selected === "Projects" ? 'shiny-text' : ''}`}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo(Contact, "Contact")}
                className={`font-medium text-lg ${selected === "Contact" ? 'shiny-text' : ''}`}
              >
                Contact
              </button>
            </li>
            
 </>
  return (
    <div className='z-20 sticky top-0'> 
      <div className="navbar bg-black/10 lg:px-10 py-4 backdrop-blur-xs shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {list}
      </ul>
    </div>
     <a className="text-6xl  logofont shiny-text">.Lrk.</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {list}
    </ul>
  </div>
  <div className="navbar-end">
   <a href='/Resume1.pdf' download>  <button className="group relative w-[150px] h-[40px] overflow-hidden border border-[#17795E] bg-[#019d91] text-white text-lg font-semibold flex items-center cursor-pointer transition-all duration-300 hover:bg-[#17795E] active:border-[#146c54]">
  <span className="absolute left-[22px] transition-all duration-300 group-hover:text-transparent">
    Resume
  </span>
  <span className="absolute right-0 w-[39px]  h-full bg-[#17795E] flex items-center justify-center transition-all duration-300 group-hover:w-full group-hover:right-auto group-hover:left-0 group-active:bg-[#146c54]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35 35"
      className="w-5 fill-white"
    >
      <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
      <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
      <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
    </svg>
  </span>
</button></a>
  </div>
</div>
    </div>
   
  );
};

export default Navbar;
