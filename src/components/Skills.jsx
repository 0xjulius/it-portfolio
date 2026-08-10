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
  faBrain,
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
  const { lang } = useLanguage();
  const t = skillsContent[lang] || skillsContent.fi;

  return (
    <section className="section" id="skills">
      <div className="container mx-auto px-4 mt-20 mb-10">
        <h2 className="text-[30px] lg:text-[36px] uppercase text-center lg:text-center text-4xl font-bold text-gradient mb-10">
          {t.title}
        </h2>
        <div className="flex flex-wrap card">
          {t.skills.map((skill, index) => (
            <SkillItem
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
