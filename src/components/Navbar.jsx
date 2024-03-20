import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 absolute top-0 right-10 z-50 text-xl xl:text-2xl">
      <ul className='md:flex hidden'>
        <li className='p-4'><Link to="/">Home</Link></li>
        <li className='p-4'><Link to="/contact">Projects</Link></li>
        <li className='p-4'><Link to="/about">About</Link></li>
        <li className='p-4'><Link to="/contact">Contact</Link></li>
      </ul>

      <div onClick={handleNav} className='block lg:hidden xl:hidden md:hidden z-10'>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25}/>}
      </div>

      <div className={`fixed left-0 top-0 w-full h-full bg-black bg-opacity-75 md:hidden transition-opacity duration-300 ease-in-out ${nav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col justify-center h-full">
          <ul className='pt-24 text-2xl text-center'>
            <li className='p-2'><Link to="/">Home</Link></li>
            <li className='p-2'><Link to="/contact">Projects</Link></li>
            <li className='p-2'><Link to="/about">About</Link></li>
            <li className='p-2'><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
