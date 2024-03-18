import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 fixed top-0 right-10 z-50 text-xl">
        <ul className='md:flex hidden'>
          <li className='p-4'><Link to="/">Home</Link></li>
          <li className='p-4'><Link to="/contact">Projects</Link></li>
          <li className='p-4'><Link to="/about">About</Link></li>
          <li className='p-4'><Link to="/contact">Contact</Link></li>
        </ul>

        <div onClick={handleNav} className='block lg:hidden xl:hidden md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
        </div>

      <div className={nav ? ' bg-black h-full border-r-gray-900 fixed left-0 top-0 w-[30%] border-r text-gray-300 lg:hidden md:hidden xl:hidden' : 'fixed left-[-100%]'}>
        <ul className='pt-24 text-2xl'>
          <li className='p-2'><Link to="/">Home</Link></li>
          <li className='p-2'><Link to="/contact">Projects</Link></li>
          <li className='p-2'><Link to="/about">About</Link></li>
          <li className='p-2'><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
  </div>
  );
}

export default Navbar;
