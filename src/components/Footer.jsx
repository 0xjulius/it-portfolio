import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#1d2947] text-white py-8 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center mb-4 md:mb-0">
          <span className="text-lg font-semibold"></span>
          <div className="ml-4 flex space-x-4 text-3xl">
            <a
              href="https://github.com/0xjulius"
              className="text-white hover:text-gray-400 transition-colors duration-300 pl-5"
              target="_blank" rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/juliusaalto/"
              className="text-white hover:text-gray-400 transition-colors duration-300 pl-3"
              target="_blank" rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="mb-2">
            Contact me: <a href="#null"></a>
          </p>
          <p>&copy; 2024 Julius Aalto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
