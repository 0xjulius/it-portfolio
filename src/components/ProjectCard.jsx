import React from "react";

export default function ProjectCard({
  image,
  title,
  description,
  github,
  live,
  badge,
}) {
  return (
    <div className="w-full md:w-1/2 p-4">
      <h2 className="text-center text-xl font-bold mb-4 ">
        {title}
        {badge && <span className="ptx2 text-2xl"> {badge}</span>}
      </h2>

      {/* Image with blurred background */}
      <div className="relative w-full md:h-64 overflow-hidden rounded-lg">
        <img
          src={image}
          alt="blur background"
          className="absolute top-0 left-0 w-full h-full object-cover filter blur-xl scale-110"
          aria-hidden="true"
        />
        <img
          src={image}
          alt={title}
          className="relative w-full h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      <p className="text-center mt-4 font-semibold text-lg">{description}</p>

      <div className="flex justify-center mt-4 flex-wrap gap-2">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Check out source code
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Live Website
          </a>
        )}
      </div>
    </div>
  );
}
