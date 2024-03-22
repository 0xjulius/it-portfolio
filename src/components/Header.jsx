import React from "react";
import logo from "../images/Wm_simple_white_250px.webp";

function Header() {
  return (
    <div className="text-black top-10 lg:pt-10 mt-[100px] lg:mt-5">
      <section className="md:flex lg:justify-start justify-center sticky z-10 px-4">
        <div className="text-center xl:pl-40 2xl:pl-60">
          <h1 className="w-full text-5xl font-semibold flex-1 font tracking-widest lg:text-6xl">
            <div className="mb-16 lg:hidden">
              <img
                src={logo}
                alt="logo"
                className="h-auto mx-auto w-[250px] lg:mb-0"
              />
            </div>
            <span className="text-gradient">JULIUS
            AALTO.</span>
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
