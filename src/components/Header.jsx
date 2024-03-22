import React from "react";

function Header() {
  return (
    <div className="text-black top-10 lg:pt-10 mt-[100px] lg:mt-5">
      <section className="md:flex lg:justify-start justify-center sticky z-10 px-4">
        <div className="text-center xl:pl-40 2xl:pl-60">
          <h1 className="w-full text-5xl font-semibold flex-1 font tracking-widest lg:text-6xl">
            <span className="text-gradient">JULIUS</span>{" "}
            <span className="text-white">AALTO.</span>
          </h1>
          <p className="text-xl mt-3 subpixel-antialiased tracking-widest ptx font-semibold">
            Welcome to my IT-Portfolio! <br />{" "}
            <span className="ctext text-sm font-normal">
              Made with React and Tailwind.css
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;
