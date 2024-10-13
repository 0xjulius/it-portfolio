import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faPython,
  faGit,
  faGithub,
  faMicrosoft,
  faLinux,
  faWindows,
  faWordpress,
  faElementor,
  faPhp, // Added for PHP
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons"; // Added for SQL

const Technologies = () => {
  return (
    <section className="py-10 px-4 ptx mt-10" id="technologies">
              <h1 className="text-[30px] lg:text-[36px] uppercase text-center lg:text-center text-4xl font-bold ptx2 mb-16">
              TECHNOLOGIES
            </h1>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center lg:flex-row gap-14">
          <Icon icon={faHtml5} title="HTML5" />
          <Icon icon={faCss3} title="CSS3" />
          <Icon icon={faJs} title="JavaScript" />
          <Icon icon={faReact} title="React" />
          <Icon icon={faPython} title="Python" />
          <Icon icon={faGit} title="Git" />
          <Icon icon={faGithub} title="GitHub" />
          <Icon icon={faMicrosoft} title="Microsoft" />
          <Icon icon={faLinux} title="Linux" />
          <Icon icon={faWindows} title="Windows" />
          <Icon icon={faWordpress} title="WordPress" />
          <Icon icon={faElementor} title="Elementor" />
          <Icon icon={faPhp} title="PHP" /> {/* Added PHP */}
          <Icon icon={faDatabase} title="SQL" /> {/* Added SQL */}
        </div>
      </div>
    </section>
  );
};

const Icon = ({ icon, title }) => {
  return (
    <div
      className="text-center w-1/4 lg:w-auto mb-8 transition-all duration-300  hover:scale-110"
      style={{ color: "#39495e" }}
    >
      <FontAwesomeIcon icon={icon} className="text-5xl mb-2" />

      <p className="text-sm">{title}</p>
    </div>
  );
};

export default Technologies;
