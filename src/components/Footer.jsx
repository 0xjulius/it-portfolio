import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import footerbg from "../images/aaabstract.png"

const Footer = () => {
  return (
    <footer className="relative text-white py-16 mt-12">
      <img src={footerbg} alt="Footer Background" className="absolute inset-0 w-full h-full object-fit blur-lg " />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center mb-4 md:mb-0 z-10">
          <span className="text-xl font-semibold"></span>
          <div className="ml-4 flex space-x-4 text-3xl">
            <a
              href="https://github.com/0xjulius"
              className="ptx hover:text-white transition-colors duration-300 pl-5"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/juliusaalto/"
              className="ptx hover:text-white transition-all duration-300 pl-3"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="text-center md:text-right z-10 text-xl font-semibold ptx">
          <p className="mb-2">
            Contact me:{" "}
            <a
              className="underline hover:no-underline cursor-pointer hover:text-gray-500"
              href="mailto:julius.aalto@gmail.com"
            >
              julius.aalto@gmail.com
            </a>{" "}
            <br />
            All emails are promptly directed to the appropriate recipient.
          </p>
          <p>&copy; 2025 Julius Aalto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
