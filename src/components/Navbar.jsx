import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useLanguage } from "../context/LanguageContext";

const navContent = {
  fi: {
    me: "Koti",
    studies: "Opinnot",
    projects: "Projektit",
    skills: "Osaaminen",
    accolades: "Sertifikaatit",
  },
  en: {
    me: "Me",
    studies: "Studies",
    projects: "Projects",
    skills: "Skills",
    accolades: "Accolades",
  },
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { lang } = useLanguage();
  const t = navContent[lang] || navContent.fi;

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    // Korjattu säiliö: poistettu pr-40 ja annettu tilaa leilata
    <div className="ptx flex justify-end items-center h-24 w-full absolute top-2 right-4 lg:right-12 z-50 text-base xl:text-xl pt-10">
      {/* Lisätty gap-6 ja flex-wrap vapaudeksi */}
      <ul className="lg:flex hidden items-center gap-4 whitespace-nowrap">
        <li className="font-semibold btn py-2 px-3 transition-colors duration-300">
          <Link to="home" spy={true} smooth={true}>
            {t.me}
          </Link>
        </li>
        <li className="font-semibold btn py-2 px-3 transition-colors duration-300">
          <Link to="studies" spy={true} smooth={true}>
            {t.studies}
          </Link>
        </li>
        <li className="font-semibold btn py-2 px-3 transition-colors duration-300">
          <Link to="projects" spy={true} smooth={true}>
            {t.projects}
          </Link>
        </li>
        <li className="font-semibold btn py-2 px-3 transition-colors duration-300">
          <Link to="skills" spy={true} smooth={true}>
            {t.skills}
          </Link>
        </li>
        <li className="font-semibold btn py-2 px-3 transition-colors duration-300">
          <Link to="awards" spy={true} smooth={true}>
            {t.accolades}
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
        className={`fixed left-0 top-0 w-full h-full bg-black backdrop-blur-sm bg-opacity-75 lg:hidden transition-opacity duration-300 ease-in-out ${
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
                {t.me}
              </Link>
            </li>
            <li className="p-6 cursor-pointer hover:rounded hover:bg-white/10 animate__animated animate__fadeIn transition-color duration-500">
              <Link
                to="studies"
                smooth={true}
                duration={500}
                onClick={() => setNav(false)}
              >
                {t.studies}
              </Link>
            </li>
            <li className="p-6 cursor-pointer hover:rounded hover:bg-white/10 animate__animated animate__fadeIn transition-color duration-500">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={() => setNav(false)}
              >
                {t.projects}
              </Link>
            </li>
            <li className="p-6 cursor-pointer hover:rounded hover:bg-white/10 animate__animated animate__fadeIn transition-color duration-500">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                onClick={() => setNav(false)}
              >
                {t.skills}
              </Link>
            </li>
            <li className="p-6 cursor-pointer hover:rounded hover:bg-white/10 animate__animated animate__fadeIn transition-color duration-500">
              <Link
                to="awards"
                smooth={true}
                duration={500}
                onClick={() => setNav(false)}
              >
                {t.accolades}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
