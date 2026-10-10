import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectRow({
  title,
  description,
  tags,
  image,
  github,
  live,
  badge,
}) {
  return (
    <div className="flex card flex-col sm:flex-row items-start sm:items-center justify-between px-4 py-4 mx-4 sm:px-6 border-b border-gray-700/30 last:border-none gap-4 transition-colors hover:bg-white/5">
      {/* Kuva ja perustiedot */}
      <div className="flex items-center space-x-4 min-w-0 w-full sm:w-auto">
        <img
          src={image}
          alt={title}
          className="w-14 h-14 object-cover rounded-xl flex-shrink-0 shadow-sm"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold ptx text-base truncate">
              {title}
            </h3>
            {badge && (
              <span className="text-[10px] bg-accent text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider flex-shrink-0">
                {badge}
              </span>
            )}
          </div>

          {/* Tägit tiiviisti */}
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            {tags &&
              tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] text-gray-300 bg-gray-800/80 px-2 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            {tags && tags.length > 3 && (
              <span className="text-[10px] text-gray-400 bg-gray-900/60 px-1.5 py-0.5 rounded-md">
                +{tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Selkeät CTA-painikkeet */}
      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-300 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all"
          >
            <FaGithub className="text-sm" />
            <span>Code</span>
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-accent hover:opacity-90 rounded-lg transition-all shadow-sm"
          >
            <span>Demo</span>
            <FaExternalLinkAlt className="text-xs" />
          </a>
        )}
      </div>
    </div>
  );
}
