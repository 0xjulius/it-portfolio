import React from "react";
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

const Projects = () => {
  return (
    <section className="py-10" id="projects">
      <div className="container mx-auto lg:mt-10">
        <h1 className="text-[30px] lg:text-[36px] uppercase text-center lg:text-center text-4xl font-bold ptx2">
          My projects
        </h1>
        <div className="flex flex-wrap items-center justify-center ptx lg:mt-10">
        
         
          {/* 3rd project */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-center text-xl font-bold mb-4">
              Tesla website Clone
            </h2>
            <img
              src={project3}
              alt="Project 3"
              className="w-full h-auto md:h-64 object-cover transition-all duration-300  hover:scale-105"
            />
            <p className="text-center mt-4 font-semibold text-lg">
              Project showcasing loading and hover effects, menu/sidebar
              creation. Key learnings include navigation and hover animations,
              navbar creation, and Tailwind usage.
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/julmezha/tesla-react-app-tailwind"
                target="_blank" rel="noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Source Code
              </a>
              <a
                href="https://tesla-react-app-tailwind.vercel.app/"
                target="_blank" rel="noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Live Website
              </a>
            </div>
          </div>
            {/* First Project */}
            <div className="w-full md:w-1/2 p-4">
            <h2 className="text-center text-xl font-bold mb-4">
              Cryptocurrency price checker
            </h2>
            <img
              src={project1}
              alt="Project 1"
              className="w-full h-auto md:h-64 object-cover transition-all duration-300  hover:scale-105"
            />
            <p className="text-center mt-4 font-semibold text-lg">
              Cryptocurrency price checker built with React and Tailwind CSS.
              Utilizes the CoinGecko API to fetch real-time prices and saves
              them to local storage when real-time prices are rate limited.
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/0xjulius/price-checker-crypto"
                target="_blank" rel="noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Source Code
              </a>
              <a
                href="https://0xjulius.github.io/price-checker-crypto/"
                target="_blank"rel="noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Live Website
              </a>
            </div>
          </div>
          {/* 4th project */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-center text-xl font-bold mb-4">
              Banking app one pager
            </h2>
            <img
              src={project4}
              alt="Project 4"
              className="w-full h-auto md:h-64 object-cover transition-all duration-300  hover:scale-105"
            />
            <p className="text-center mt-4 font-semibold text-lg">
              Built with React, Vite, Tailwind CSS, and animations.css. Key
              learnings include creating one-pager navigation with IDs,
              implementing active states in navigation. Thanks:
              javascriptmastery @ youtube.com
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/julmezha/bank-app-react"
                target="_blank" rel="noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Source Code
              </a>
              <a
                href="https://bank-app-react-one.vercel.app/"
                target="_blank" rel="noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Live Website
              </a>
            </div>
          </div>
           {/* Second Project */}
           <div className="w-full md:w-1/2 p-4">
            <h2 className="text-center text-xl font-bold mb-4">
              Budget Calculator with HTML, CSS + JS
            </h2>
            <img
              src={project2}
              alt="Project 2"
              className="w-full h-auto md:h-64 object-cover transition-all duration-300  hover:scale-105"
            />
            <p className="text-center mt-4 font-semibold text-lg">
              By developing this project, I've acquired practical experience in
              DOM manipulation, event handling, and error handling in
              JavaScript.
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/julmezha/budjettilaskuri"
                target="_blank" rel="noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Source Code
              </a>
              <a
                href="https://0xjulius.github.io/budjettilaskuri/"
                target="_blank" rel="noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Live Website
              </a>
            </div>
          </div>
          {/* 5th project */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-center text-xl font-bold mb-4">
              Referral website concept
            </h2>
            <img
              src={project5}
              alt="Project 5"
              className="w-full h-auto md:h-64 object-cover transition-all duration-300  hover:scale-105"
            />
            <p className="text-center mt-4 font-semibold text-lg">
              Built with HTML5 and CSS only, optimized for mobile and tablet
              devices with media queries. In this project, I implemented media
              queries for mobile devices and iPads, ensuring optimal display
              across various screen sizes.
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/0xjulius/ref-site-concept"
                target="_blank" rel="noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Source Code
              </a>
              <a
                href="https://0xjulius.github.io/ref-site-concept/"
                target="_blank" rel="noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Live Website
              </a>
            </div>
          </div>
          {/* 6th project */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-center text-xl font-bold mb-4">
              Lumivaara.fi -WordPress Solution
            </h2>
            <img
              src={project6}
              alt="Project 6"
              className="w-full h-auto md:h-64 object-cover transition-all duration-300  hover:scale-105"
            />
            <p className="text-center mt-4 font-semibold text-lg">
              Fully deployed WordPress solution. The website showcases our
              expertise in WordPress development and design, where I was working
              as a Project Leader. Furthermore, I continued to develop the
              project by crafting a custom WordPress plugin using PHP. This
              plugin enables users to light virtual candles on the website.
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/0xjulius/light-a-candle-wp"
                target="_blank" rel="noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Source Code for Light a Candle Plugin
              </a>
              <a
                href="https://www.lumivaara.fi"
                target="_blank" rel="noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Live Website
              </a>
            </div>
          </div>
          {/* 7th project */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-center text-xl font-bold mb-4">
              Python IT-job finder and Telegram bot
            </h2>
            <img
              src={project7}
              alt="Project 7"
              className="w-full h-auto md:h-64 object-cover transition-all duration-300  hover:scale-105"
            />
            <p className="text-center mt-4 font-semibold text-lg">
              Python Project which is scraping the web for the latest IT job
              postings all around Finland. It sends job alerts straight to your
              phone via Telegram!
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/0xjulius/python-job-finder"
                target="_blank" rel="noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Source Code
              </a>
            </div>
          </div>
          {/* 8th project */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-center text-xl font-bold mb-4">
              FlappyBird -Night version (schoolproject)
            </h2>
            <img
              src={project8}
              alt="Project 8"
              className="w-full h-auto md:h-64 object-cover transition-all duration-300  hover:scale-105"
            />
            <p className="text-center mt-4 font-semibold text-lg">
              Made with Unity / C# / C++ / Photoshop / Visual Studio Code. Made
              for PC. Exported to WebGL + Windows executable.
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/0xjulius/FlappyBird"
                target="_blank" rel="noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Source Code
              </a>
              <a
                href="https://0xjulius.github.io/FlappyBird/"
                target="_blank" rel="noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Live Game
              </a>
            </div>
          </div>
          {/* 9th project */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-center text-xl font-bold mb-4">
              Lotto number random generator with Python
            </h2>
            <img
              src={project9}
              alt="Project 9"
              className="w-full h-auto md:h-64 object-cover transition-all duration-300  hover:scale-105"
            />
            <p className="text-center mt-4 font-semibold text-lg">
              Generating random numbers from 1-41 and sorting them, while
              deleting duplicates.
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/0xjulius/python-lotto-generaattori"
                target="_blank" rel="noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Source Code
              </a>
            </div>
          </div>
          {/* 10th project */}
          <div className="w-full md:w-1/2 p-4 font-semibold">
            <h2 className="text-center text-xl font-bold mb-4">
              Amazing BMI calculator with Python
            </h2>
            <img
              src={project10}
              alt="Project 10"
              className="w-full h-auto md:h-64 object-cover transition-all duration-300  hover:scale-105"
            />
            <p className="text-center mt-4 font-semibold text-md">
              Python tool designed to show your current BMI and estimate calorie
              burn during walking exercises. By inputting your weight, height,
              daily step goal, this script is helping you track your fitness
              progress and achieve your health goals.
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/0xjulius/bmi_laskuri"
                target="_blank" rel="noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Source Code
              </a>
            </div>
          </div>
          {/* 11th project */}
          <div className="w-full md:w-1/2 p-4 font-semibold">
            <h2 className="text-center text-xl font-bold mb-4">
              juliusaalto.com -WordPress Solution
            </h2>
            <img
              src={project11}
              alt="Project 11"
              className="w-full h-auto md:h-64 object-cover transition-all duration-300  hover:scale-105"
            />
            <p className="text-center mt-4 font-semibold text-lg">
              My own customized portfolio with WordPress and Elementor.
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="https://www.juliusaalto.com/it-portfolio"
                target="_blank" rel="noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Live Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
