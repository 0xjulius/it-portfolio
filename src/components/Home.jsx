import React from 'react';
import heropic from '../images/omakuva.webp';

const Home = () => {
  return (
    <div className="flex items-center justify-center mt-12">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="mr-4 mt-10 px-4">
          <img src={heropic} alt="Hero" className="lg:w-[500px] h-auto mx-auto w-[400px]" />
        </div>
        <div className="lg:w-1/2 px-6">
          <h1 className="text-4xl font-bold mb-4 ptx mt-10">Julius Aalto.</h1>
          <p className="text-lg max-w-lg ctext">
            I am an upcoming IT professional from Vaasa, Finland who is interested in software and web development, IT support roles, and cybersecurity. I am looking for a junior entry-level IT job to start my career. I have the capabilities to solve various hardware-related and software-related IT problems because of my comprehensive education and knowledge of the IT field.
            <br /><br />
            I’m someone who’s always eager to learn and grow. I genuinely care about making things better and love the idea of being part of your team. The ever-changing world of technology excites me, and I’m ready to contribute my bit to drive innovation. Let’s make things happen together!
            <br /><br />
            Please don’t hesitate to request my grades and CV for your review.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
