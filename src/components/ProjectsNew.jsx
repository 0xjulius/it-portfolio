import ProjectCard from "../components/ProjectCard";
import project18 from "../images/project18.png";
import project17 from "../images/project17.png";
import project16 from "../images/project16.png";
import project15 from "../images/project15.png";
import project14 from "../images/project-photography.png";
import project13 from "../images/project13.png";
import project1 from "../images/project1.webp";
import project2 from "../images/project2.webp";
import project3 from "../images/project3.webp";
import project4 from "../images/project4.webp";
import project5 from "../images/project5.webp";
import project6 from "../images/project6.webp";
import project7 from "../images/project7.webp";
import project8 from "../images/project8.webp";
import project9 from "../images/project9.webp";
import project10 from "../images/project10.webp";
import project11 from "../images/project11.png";
import project12 from "../images/project12.png";
import project from "../images/project-main.png";
import project19 from "../images/project19.png";

const projects = [
  {
    image: project19,
    title: "The PodStation - Where podcasts come alive",
    description:
      "A full stack, responsive, serverless custom API React app to browse, stream, and search podcast episodes via RSS. Built with React, Tailwind",
    github: "https://github.com/0xjulius/PodStation-save-and-listen",
    live: "https://podstation-0xjulius.vercel.app/",
    badge: "NEW!",
  },
  {
    image: project18,
    title: "Yle Uutiset - News feed solution",
    description:
      "React app that fetches Yle’s RSS feed via a proxy, converts XML to JSON, and displays news using Tailwind styles.",
    github: "https://github.com/0xjulius/xml-to-json-axios-react",
    live: "https://xml2json-axios-react.vercel.app/",
    badge: "NEW!",
  },
  {
    image: project17,
    title:
      "Weather application JSON api-request fetcher with React, Vite, Tailwind",
    description:
      "Fetching and displaying JSON data from a weather API using React, styling UI with Tailwind, and setting up the project with Vite",
    github: "https://github.com/0xjulius/json-api-fetch-react",
    live: "https://json-api-fetch-react.vercel.app/",
    badge: "NEW!",
  },

  {
    image: project7,
    title: "Python IT-job finder and Telegram bot",
    description:
      " Python Project which is scraping the web for the latest IT job postings all around Finland. It sends job alerts straight to your phone via Telegram!",
    github: "https://github.com/0xjulius/python-job-finder",
    live: "",
    badge: "",
  },

  {
    image: project15,
    title:
      "Shop With Elon - Funny way to showcase useState on React, Vite, Tailwind",
    description:
      "Key learnings include using useState for state management, Tailwind CSS for styling, number formatting, and implementing a sticky header for user experience enhancement.",
    github: "https://github.com/0xjulius/react-usestate-training",
    live: "https://usestate-training-livid.vercel.app/",
    badge: "",
  },

  {
    image: project14,
    title: "Photography gallery website made with React, Vite, Tailwind",
    description:
      "I built this gallery showcasing my photography skills using React, Vite, Animations.css, and Tailwind. It taught me responsive design, state management and efficient component structuring.",
    github: "https://github.com/0xjulius/photography-gallery",
    live: "https://visionbyjulius.vercel.app/",
    badge: "",
  },

  {
    image: project6,
    title: "Lumivaara.fi -WordPress Solution + PHP WP Plugin",
    description:
      "Fully deployed WordPress solution. I continued to develop the project by crafting a custom WordPress plugin using PHP. This plugin enables users to light virtual candles on the website. ",
    github: "https://github.com/0xjulius/light-a-candle-wp",
    live: "https://www.lumivaara.fi",
    badge: "| My Bachelor’s Thesis",
  },

  {
    image: project12,
    title: "CS2/CSGO-hour / rank guesser with C#",
    description:
      " Guesses your Premier and FaceIt elo, and calculates your gaming hours.",
    github: "https://github.com/0xjulius/cs2-rank-guessr",
    live: "",
    badge: "",
  },
  {
    image: project11,
    title: "Old WordPress IT-portfolio",
    description:
      " My own customized portfolio with WordPress and Elementor. Site has been redone with React.",
    github: "",
    live: "https://juliusaalto.com",
    badge: "",
  },

  {
    image: project10,
    title: "Amazing BMI calculator with Python",
    description:
      "Python tool designed to show your current BMI and estimate calorie burn during walking exercises.",
    github: "https://github.com/0xjulius/bmi_laskuri",
    live: "",
    badge: "",
  },

  {
    image: project9,
    title: "Lotto number random generator with Python",
    description:
      " Generating random numbers from 1-41 and sorting them, while deleting duplicates.",
    github: "https://github.com/0xjulius/python-lotto-generaattori",
    live: "",
    badge: "",
  },

  {
    image: project,
    title: " IT-Portfolio with React + Tailwind",
    description:
      "Project showcasing multiple React components with Tailwind. Main goal was to recreate my old IT-portfolio again and develop my skills to the next level.",
    github: "https://github.com/0xjulius/react-portfolio",
    live: "https://react-portfolio-0xjulius.vercel.app/",
    badge: "",
  },

  {
    image: project8,
    title: "FlappyBird -Night version",
    description:
      " Made with Unity / C# / C++ / Photoshop / Visual Studio Code. Made for PC. Exported to WebGL + Windows executable.",
    github: "https://github.com/0xjulius/FlappyBird",
    live: "https://0xjulius.github.io/FlappyBird/",
    badge: "(schoolproject/tutorial)",
  },

  {
    image: project13,
    title: " Kivi sakset paperi -game with c#",
    description: "Small game, with c# / visual studio",
    github: "https://github.com/0xjulius/kivipaperisakset-24",
    live: "",
    badge: "",
  },

  {
    image: project5,
    title: " Referral website concept HTML, CSS only",
    description:
      " Built with HTML5 and CSS only, optimized for mobile and tablet devices with media queries.",
    github: "https://github.com/0xjulius/ref-site-concept",
    live: "https://0xjulius.github.io/ref-site-concept/",
    badge: "",
  },

  {
    image: project4,
    title: " Banking app one pager React + Vite + Tailwind ",
    description:
      " Built with React, Vite, Tailwind CSS, and animations.css. Key learnings include creating one-pager navigation with IDs, implementing active states in navigation.",
    github: "https://github.com/julmezha/bank-app-react",
    live: "https://bank-app-react-one.vercel.app/",
    badge: "(tutorial)",
  },

  {
    image: project3,
    title: "Tesla website Clone with React, Tailwind ",
    description:
      " Project showcasing loading and hover effects, menu/sidebar creation. Key learnings include navigation and hover animations, navbar creation, and Tailwind usage.",
    github: "https://github.com/julmezha/tesla-react-app-tailwind",
    live: "https://tesla-react-app-tailwind.vercel.app/",
    badge: "Tutorial",
  },

  {
    image: project2,
    title: " Budget Calculator with HTML, CSS + JS",
    description:
      " By developing this project, I've acquired practical experience in DOM manipulation, event handling, and error handling in JavaScript.",
    github: "https://github.com/julmezha/budjettilaskuri",
    live: "https://0xjulius.github.io/budjettilaskuri/",
    badge: "",
  },

  {
    image: project1,
    title: "Cryptocurrency price checker with React, Tailwind",
    description:
      "Cryptocurrency price checker built with React and Tailwind CSS. Utilizes the CoinGecko API to fetch real-time prices and saves them to local storage when real-time prices are rate limited.",
    github: "https://github.com/0xjulius/price-checker-crypto",
    live: "https://0xjulius.github.io/price-checker-crypto/",
    badge: "",
  },
  {
    image: project16,
    title: "Simple CS2/esports mouse eDPI calculator made with C#",
    description:
      " This project offered hands-on experience with C# and WinForms, validating input and enhancing problem-solving and debugging skills.",
    github: "https://github.com/0xjulius/eDPI-Calculator",
    live: "",
    badge: "",
  },
];

function ProjectsNew() {
  return (
    <section className="py-10" id="projects">
      <div className="container mx-auto lg:mt-10">
        <h1 className="text-[30px] lg:text-[36px] uppercase text-center text-4xl font-bold text-gradient">
          My projects
        </h1>

        <div className="flex flex-wrap items-center justify-center ptx lg:mt-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsNew;
