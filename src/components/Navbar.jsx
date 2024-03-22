import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="ptx flex justify-between items-center h-24 max-w-[1240px] mx-auto absolute top-2 right-10 z-50 text-lg xl:text-2xl lg:text-2xl pt-10 2xl:pr-40">
      <ul className="lg:flex hidden">
        <li className="font-semibold btn py-4 px-5 animate__animated animate__fadeIn transition-color duration-300">
          <Link to="home" spy={true} smooth={true}>
            Me
          </Link>
        </li>
        <li className="font-semibold btn py-4 px-5 animate__animated animate__fadeIn transition-color duration-300">
          <Link to="studies" spy={true} smooth={true}>
            Studies
          </Link>
        </li>
        <li className="font-semibold btn py-4 px-5 animate__animated animate__fadeIn transition-color duration-300">
          <Link to="projects" spy={true} smooth={true}>
            Projects
          </Link>
        </li>
        <li className="font-semibold btn py-4 px-5 animate__animated animate__fadeIn transition-color duration-300">
          <Link to="skills" spy={true} smooth={true}>
            Skills
          </Link>
        </li>
        <li className="font-semibold btn py-4 px-5 animate__animated animate__fadeIn transition-color duration-300">
          <Link to="awards" spy={true} smooth={true}>
            Accolades
          </Link>
        </li>
      </ul>

      <div
        onClick={handleNav}
        className={`block cursor-pointer lg:hidden xl:hidden z-10 pt-10 top-0 right-1 ${
          nav ? "fixed top-2 pr-10" : "absolute"
        }`}
      >
        {nav ? (
          <AiOutlineClose size={25} color="white" />
        ) : (
          <AiOutlineMenu size={25} />
        )}
      </div>

      <div
        className={`fixed left-0 top-0 w-full h-full bg-black bg-opacity-75 lg:hidden transition-opacity duration-300 ease-in-out ${
          nav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-center h-full">
          <ul className="pt-24 text-4xl text-center text-white">
            <li className="p-6 cursor-pointer hover:rounded hover:bg-white/10 animate__animated animate__fadeIn transition-color duration-500">
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={() => setNav(false)}
              >
                Me
              </Link>
            </li>
            <li className="p-6 cursor-pointer hover:rounded hover:bg-white/10 animate__animated animate__fadeIn transition-color duration-500">
              <Link
                to="studies"
                smooth={true}
                duration={500}
                onClick={() => setNav(false)}
              >
                Studies
              </Link>
            </li>
            <li className="p-6 cursor-pointer hover:rounded hover:bg-white/10 animate__animated animate__fadeIn transition-color duration-500">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={() => setNav(false)}
              >
                Projects
              </Link>
            </li>
            <li className="p-6 cursor-pointer hover:rounded hover:bg-white/10 animate__animated animate__fadeIn transition-color duration-500">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                onClick={() => setNav(false)}
              >
                Skills
              </Link>
            </li>
            <li className="p-6 cursor-pointer hover:rounded hover:bg-white/10 animate__animated animate__fadeIn transition-color duration-500">
              <Link
                to="awards"
                smooth={true}
                duration={500}
                onClick={() => setNav(false)}
              >
                Accolades
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
