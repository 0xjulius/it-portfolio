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
            <p className="text-2xl max-w-lg ptx mt-10">
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
              My comprehensive education and deep understanding of the IT
              industry empower me to adeptly resolve a wide array of hardware
              and software challenges.
              <br />
              <br />
              I thrive on being part of driving innovation forward and can't
              wait to roll up my sleeves and make things happen together!
              <br />
              <br />
              Please don’t hesitate to request my grades and CV for your review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
