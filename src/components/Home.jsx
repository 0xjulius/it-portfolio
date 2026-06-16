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
              className="lg:w-[500px] h-auto mx-auto w-[400px] mb-10 rounded-xl shadow-lg shadow-white/20 duration-300 transition-transform hover:scale-105"
            />
          </div>
          <div className="lg:w-1/2 px-10 card pb-10">
            <h1 className="text-4xl font-bold mb-4 ptx mt-10">Julius Aalto.</h1>
            <p className="text-xl max-w-lg ptx mt-10">
              I’m an IT professional based in Vaasa, Finland with
               interests in software and web development, IT support, and
              cybersecurity. Alongside my studies, I have worked in office and
              quality assurance-related roles within a creative production
              environment, where I was responsible for
              <br /> quality control, file management, documentation, and
              <br /> basic troubleshooting tasks. <br /> <br /> At the moment, I
              am looking for opportunities to further develop my skills in
              hands-on IT roles and build on my existing experience.
              <br />
              <br />
              I’ve worked with IT long enough to be comfortable with most
              hardware and software issues that come up. <br />I like figuring
              things out and fixing problems instead of overthinking them. I do
              my best work in fast-moving projects where you’re actually
              building and
              <br /> improving things together.
              <br />
              <br />
              I’d be happy to share my CV or academic records
              <br /> upon request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
