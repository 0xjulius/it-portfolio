import React, { useState } from "react";
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
  faBrain,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";

const skillsContent = {
  fi: {
    title: "Ammattitaito & Tekninen Osaaminen",
    skills: [
      {
        icon: faBrain,
        title: "Tekoäly & Automaatio",
        description:
          "Generatiivisen tekoälyn ja AI-työkalujen (LLM, Prompt Engineering, tekoälyavusteinen koodaus) hyödyntäminen työntekijän tuottavuuden ja kehitysprosessien tehostamisessa.",
      },
      {
        icon: faCode,
        title: "Web-kehitys",
        description:
          "Modernit web-teknologiat ja -viitekehykset: HTML5, CSS3, React, JavaScript, Node.js sekä DOM-manipulaatio.",
      },
      {
        icon: faCogs,
        title: "Käyttöjärjestelmät",
        description:
          "Monialustainen asiantuntemus eri käyttöjärjestelmien (Windows, macOS, Linux) hallinnasta, konfiguroinnista ja vianmäärityksestä.",
      },
      {
        icon: faNetworkWired,
        title: "Verkkoteknologiat",
        description:
          "Verkkoarkkitehtuurien, TCP/IP-protokollien, kytkimien, reitittimien sekä palomuuriratkaisujen vahva hallinta.",
      },
      {
        icon: faDatabase,
        title: "Tietokannat & DNS",
        description:
          "Tietokantojen hallinta ja ylläpito (SQL, MariaDB) sekä nimipalvelimien (DNS) ja verkkotunnusten hallinnointi.",
      },
      {
        icon: faCogs,
        title: "Ohjelmistohallinta",
        description:
          "Yritystason ohjelmistoympäristöjen asennukset, päivitykset, integraatiot sekä elinkaaren hallinta ja vianmääritys.",
      },
      {
        icon: faShieldAlt,
        title: "Tietoturva",
        description:
          "Tietoturvakäytäntöjen soveltaminen: salausmenetelmät, palomuurit, päätelaitteiden suojaus ja varmuuskopiointiratkaisut.",
      },
      {
        icon: faCloud,
        title: "Pilvipalvelut & Identiteetit",
        description:
          "Pilvi-infrastruktuurien (Microsoft Azure) perusteet sekä identiteetin- ja pääsynhallinta (Active Directory / Entra ID).",
      },
      {
        icon: faServer,
        title: "Virtualisointi",
        description:
          "Kone- ja palvelinvirtualisointiratkaisujen hyödyntäminen ja hallinta (VMware, VirtualBox).",
      },
      {
        icon: faMobileAlt,
        title: "Mobiiliympäristöt",
        description:
          "Päätelaitteiden, erityisesti iOS-ympäristöjen, tekninen tuki, konfigurointi ja ongelmanratkaisu.",
      },
      {
        icon: faShieldAlt,
        title: "Laitteistotekniikka",
        description:
          "Tietokonekomponenttien diagnostiikka, laitteistotason vianmääritys, päivitykset sekä fyysiset huoltotyöt.",
      },
      {
        icon: faDesktop,
        title: "VPN & Tietoliikennesuojaus",
        description:
          "Etäyhteyksien ja tietoliikenteen suojaaminen virtuaalisilla erillisverkoilla (VPN) ja turvallisilla tunnelointiprotokollilla.",
      },
    ],
  },
  en: {
    title: "Professional Skills",
    skills: [
      {
        icon: faBrain,
        title: "AI & Automation Tools",
        description:
          "Leveraging Generative AI, LLMs, prompt engineering, and AI-assisted development techniques to optimize workflows and boost productivity.",
      },
      {
        icon: faCode,
        title: "Web Development",
        description:
          "Proficiency in modern web technologies and frameworks: HTML5, CSS3, React, JavaScript, Node.js, and DOM manipulation.",
      },
      {
        icon: faCogs,
        title: "Operating Systems",
        description:
          "Cross-platform expertise in administration, configuration, and troubleshooting for Windows, macOS, and Linux environments.",
      },
      {
        icon: faNetworkWired,
        title: "Networking",
        description:
          "Strong understanding of network architecture, TCP/IP protocols, switches, routers, and enterprise firewalls.",
      },
      {
        icon: faDatabase,
        title: "Databases & DNS",
        description:
          "Database administration (SQL, MariaDB) along with domain management and DNS configuration.",
      },
      {
        icon: faCogs,
        title: "Software Management",
        description:
          "End-to-end management of software applications: installation, deployment, configuration, lifecycle maintenance, and troubleshooting.",
      },
      {
        icon: faShieldAlt,
        title: "Cybersecurity",
        description:
          "Implementation of core cybersecurity practices: encryption protocols, firewalls, endpoint protection, and data backup solutions.",
      },
      {
        icon: faCloud,
        title: "Cloud & Identity Services",
        description:
          "Fundamentals of cloud infrastructure (Microsoft Azure) alongside Identity and Access Management (Active Directory / Entra ID).",
      },
      {
        icon: faServer,
        title: "Virtualization",
        description:
          "Hands-on experience deploying and managing virtualized environments with VMware and VirtualBox.",
      },
      {
        icon: faMobileAlt,
        title: "Mobile Environments",
        description:
          "Technical support, device configuration, and issue resolution for mobile ecosystems, focusing on iOS.",
      },
      {
        icon: faShieldAlt,
        title: "Hardware Engineering",
        description:
          "Diagnostic troubleshooting at the component level, hardware upgrades, assembly, and physical maintenance.",
      },
      {
        icon: faDesktop,
        title: "VPN & Secure Connections",
        description:
          "Securing remote access and encrypted data transfer through Virtual Private Networks (VPN) and secure protocols.",
      },
    ],
  },
};

// Mobiilin harmonikkarivi
const MobileSkillItem = ({ icon, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/20 last:border-none transition-colors">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between py-5 px-6 sm:px-8 cursor-pointer hover:bg-white/30 transition-colors gap-3"
      >
        <h3 className="font-semibold text-xl ptx flex items-center min-w-0 flex-1 truncate">
          <span className="w-8 flex justify-center flex-shrink-0 mr-3">
            <FontAwesomeIcon icon={icon} fixedWidth className="text-xl" />
          </span>
          <span className="truncate">{title}</span>
        </h3>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`text-black/50 transition-transform duration-300 ease-in-out flex-shrink-0 text-lg ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 pb-6"
            : "grid-rows-[0fr] opacity-0 pb-0"
        }`}
      >
        <div className="overflow-hidden px-6 sm:px-8">
          <p className="leading-relaxed ctext font-medium text-lg sm:text-xl pt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Työpöydän kortti (käytetään puhdasta p-4 täytettä ilman w-1/4 -leveysmääritteitä)
const DesktopSkillItem = ({ icon, title, description }) => (
  <div className="p-4 h-full transition-all duration-300 hover:scale-105 flex flex-col">
    <h3 className="font-semibold text-xl xl:text-2xl mb-2 ptx flex items-center">
      <FontAwesomeIcon icon={icon} fixedWidth className="mr-2 flex-shrink-0" />
      <span>{title}</span>
    </h3>
    <p className="leading-relaxed ctext font-semibold text-base xl:text-lg">
      {description}
    </p>
  </div>
);

const Skills = () => {
  const { lang } = useLanguage();
  const t = skillsContent[lang] || skillsContent.fi;

  return (
    <section className="section" id="skills">
      <div className="container mx-auto px-4 mt-20 mb-10">
        <h2 className="text-[30px] lg:text-[36px] uppercase text-center lg:text-center text-4xl font-bold text-gradient mb-10">
          {t.title}
        </h2>

        {/* MOBIILIN HARMONIKKA (Näkyy puhelimilla & pienillä tableteilla < 1024px) */}
        <div className="flex flex-col card max-w-5xl mx-auto lg:hidden overflow-hidden shadow-sm">
          {t.skills.map((skill, index) => (
            <MobileSkillItem
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>

        {/* TYÖPÖYDÄN RESPONSIVINEN GRID (2 saraketta lg-näytöllä, 4 saraketta xl-näytöllä) */}
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-4 gap-4 card p-4">
          {t.skills.map((skill, index) => (
            <DesktopSkillItem
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
