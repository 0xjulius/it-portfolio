import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faNetworkWired,
  faDatabase,
  faDesktop,
  faCode,
  faShieldAlt,
  faCloud,
  faServer,
  faMobileAlt,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

{/*Simplifying things for the future 5/5 */}

const SkillItem = ({ icon, title, description }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
    <div className="p-4 h-full transition-all duration-300 hover:scale-105">
      <h3 className="font-semibold text-2xl mb-2 ptx">
        <FontAwesomeIcon icon={icon} className="mr-2 pr-1" />
        {title}
      </h3>
      <p className="leading-tight ctext font-semibold text-lg">{description}</p>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container mx-auto px-4 mt-20 mb-40">
        <h2 className="text-[30px] lg:text-[50px] uppercase text-center lg:text-center text-4xl font-bold ptx2 mb-10">
          Professional Skills
        </h2>
        <div className="flex flex-wrap card">
          <SkillItem
            icon={faCogs}
            title="Operating systems"
            description="Understanding and troubleshooting issues with different operating systems like Windows, Mac, and Linux."
          />
          <SkillItem
            icon={faNetworkWired}
            title="Networks"
            description="Understanding of network architecture, TCP/IP protocols, routers, switches, and firewalls."
          />
          <SkillItem
            icon={faDatabase}
            title="Databases"
            description="Knowledge of database management, domains and administration, including SQL basics and MariaDB."
          />
          <SkillItem
            icon={faCode}
            title="Web Development"
            description="Understanding of web development technologies such as
            HTML, CSS, React, JavaScript NODEjs and DOMs."
          />
          <SkillItem
            icon={faCogs}
            title="Software"
            description="Knowledge to install, update, configure, troubleshoot and
            maintain software applications used by an organization or
            any invidual."
          />
          <SkillItem
            icon={faShieldAlt}
            title="Cyber Security"
            description="Knowledge of cybersecurity fundamentals and protocols such
            as encryption, firewalls, antivirus software, and data
            backup solutions."
          />
          <SkillItem
            icon={faCloud}
            title="Cloud Services"
            description="   Understanding of cloud computing technologies, such as
            fundamentals of Microsoft Azure, and Active Directory
            services."
          />
          <SkillItem
            icon={faServer}
            title="Virtualization"
            description="Understanding of virtualization technologies such as
            VMware and VirtualBox and working with them."
          />
          <SkillItem
            icon={faMobileAlt}
            title="Mobile devices"
            description="Ability to troubleshoot mobile device issues, mainly iOS
            -devices."
          />
          <SkillItem
            icon={faTachometerAlt}
            title="Overclocking"
            description=" Knowledge of boosting CPU and GPU core speeds for maximum
            PC performance for rendering and increasing in-game
            performance at high-frame rates."
          />
          <SkillItem
            icon={faShieldAlt}
            title="Hardware"
            description="Troubleshooting hardware issues like replacing or upgrading memory, hard drives, and other components."
          />
          <SkillItem
            icon={faDesktop}
            title="VPNs"
            description="Knowledge of virtual private networks and how to secure
            connections through VPNs."
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
