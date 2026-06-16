import React from "react";

export default function GitHubHeatmap() {
  const username = "0xjulius";

  return (
    <div className="flex justify-center p-4 pt-12">
      <div className="overflow-hidden rounded-lg">
        <h1 className="text-[30px] lg:text-[36px] uppercase text-center lg:text-center text-4xl font-bold text-gradient">
          GitHub Activity Heatmap
        </h1>
        <a
          href={`https://github.com/0xjulius`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={`https://ghchart.rshah.org/228B22/${username}`}
            alt="GitHub activity"
            className="w-full h-auto mt-6"
          />{" "}
        </a>
      </div>
    </div>
  );
}
