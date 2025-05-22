import React from "react";

const Thesis = () => {
  return (
    <section className="schoolThesis mb-20">
      <div className="mx-auto text-center pt-10 px-5 max-w-[600px] lg:max-w-[900px] mt-[100px]">
        <h1 className="text-[30px] lg:text-[36px] uppercase text-center lg:text-center text-4xl font-bold pt-10 mb-10 ptx2">
          My thesis of University of Applied Sciences studies
        </h1>
        <a
          className="a text-3xl font-semibold ptx"
          href="https://bit.ly/43pT6JA"
          target="_blank"
        >
          Development of Light a Candle -plugin for WordPress
        </a>
        <p className="mx-auto text-xl mt-10 ptx font-medium card px-10 p-10">
          The subject of this thesis was to develop a{" "}
          <span className="ptx2 font-semibold">
            ‘Light a Candle’ -WordPress plugin
          </span>
          , which will allow users to create innovative way to light virtual
          memorial candles for their deceased loved ones who passed away in
          Lumivaara. <br />
          <br />
          Achieving the{" "}
          <span className="ptx2 font-semibold">perfect score</span> of five
          points for my thesis is a major milestone, and I am confident that
          this accomplishment will significantly elevate my career.
        </p>
      </div>
    </section>
  );
};

export default Thesis;
