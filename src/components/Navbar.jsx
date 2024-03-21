import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="ptx flex justify-between items-center h-24 max-w-[1240px] mx-auto absolute top-10 right-10 z-50 text-xl xl:text-3xl lg:text-2xl pt-10 xl:pr-20 2xl:pr-60">
      <ul className='md:flex hidden'>
        <li className='font-semibold btn py-4 px-5 animate__animated animate__fadeIn transition-color duration-300 '><Link to="home" spy={true} smooth={true}>Me</Link></li>
        <li className='font-semibold btn py-4 px-5 animate__animated animate__fadeIn transition-color duration-300'><Link to="studies" spy={true} smooth={true}>Studies</Link></li>
        <li className='font-semibold btn py-4 px-5 animate__animated animate__fadeIn transition-color duration-300'><Link to="skills" spy={true} smooth={true}>Skills</Link></li>
        <li className='font-semibold btn py-4 px-5 animate__animated animate__fadeIn transition-color duration-300'><Link to="projects" spy={true} smooth={true}>Projects</Link></li>
        <li className='font-semibold btn py-4 px-5 animate__animated animate__fadeIn transition-color duration-300'><Link to="projects" spy={true} smooth={true}>Contact</Link></li>
      </ul>

      <div onClick={handleNav} className='block lg:hidden xl:hidden md:hidden z-10 pt-10'>
        {nav ? <AiOutlineClose size={25} color='white' /> : <AiOutlineMenu size={25}/>}
      </div>

      <div className={`fixed left-0 top-0 w-full h-full bg-black bg-opacity-75 md:hidden transition-opacity duration-300 ease-in-out ${nav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col justify-center h-full">
          <ul className='pt-24 text-4xl text-center text-white'>
            <li className='p-2'><Link to="home">Me</Link></li>
            <li className='p-2'><Link to="studies">Studies</Link></li>
            <li className='p-2'><Link to="about">About</Link></li>
            <li className='p-2'><Link to="projects">Projects</Link></li>
            <li className='p-2'><Link to="contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
