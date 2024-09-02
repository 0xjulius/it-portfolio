import React from "react";
import heropic from "../images/omakuva.webp";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="flex items-center justify-center mt-10">
        <div className="flex flex-col lg:flex-row items-center justify-between p-4">
          <div className="mr-4 mt-10 px-4">
            <img
              src={heropic}
              alt="Hero"
              className="lg:w-[500px] h-auto mx-auto w-[400px] mb-10"
            />
          </div>
          <div className="lg:w-1/2 px-10 card pb-10">
            <h1 className="text-4xl font-bold mb-4 ptx mt-10">Julius Aalto.</h1>
            <p className="text-xl max-w-lg ptx mt-10">
              I am an IT professional from Vaasa, Finland who is interested in
              software and web development, IT support roles, and cybersecurity.
              I am looking for a{" "}
              <span className="ptx2 font-semibold">
                junior entry-level IT job
              </span>{" "}
              to develop my career even further. I have gained about a year's
              worth of valuable office-related work experience alongside my
              studies. <br />
              <br />
              I’ve got a solid background in IT and can handle all sorts of hardware and software problems. I love being part of innovative projects and can’t wait to dive in and make things happen together!

              <br />
              <br />
              Feel free to ask if you’d like to check out my grades or CV—I’m happy to share them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
