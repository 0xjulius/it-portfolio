import React from "react";
import { faCamera, faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Gallery = () => {
  return (
    <section className="Gallery flex justify-center mb-60">
      <div className="mx-auto text-center pt-5 px-5 max-w-[800px] lg:max-w-[1200px]">
        <div className="flex flex-wrap justify-center gap-10">
          <div className="w-full lg:w-[calc(50%-20px)] flex items-stretch">
            <p className="mx-auto text-xl ctext font-semibold card px-10 p-10">
              <h1 className="ptx font-semibold mb-6 text-2xl">
                <FontAwesomeIcon icon={faPalette} className="mr-4" />
                Visual Design
              </h1>
              Creating impactful{" "}
              <span className="ptx2 font-semibold">visual experiences</span> is
              one of my passions. I've always been drawn to{" "}
              <span className="ptx2 font-semibold">
                design, branding, and illustration
              </span>{" "}
              - there's something about bringing ideas to life through{" "}
              <span className="ptx2 font-semibold">
                colors, shapes, and typography
              </span>{" "}
              that just clicks with me. I'm passionate about exploring the
              endless possibilities of visual storytelling. <br /> <br />
              <a
                href="https://behance.net/juliusaalto"
                rel="noreferrer"
                className="underline hover:no-underline ptx2 font-bold text-2xl"
                target="_blank"
              >
                View my work
              </a>
            </p>
          </div>
          <div className="w-full lg:w-[calc(50%-20px)] flex items-stretch">
            <p className="mx-auto text-xl ctext font-semibold card px-10 p-10">
              <h1 className="ptx font-semibold mb-6 text-2xl">
                <FontAwesomeIcon icon={faCamera} className="mr-4" />
                Photography Skills
              </h1>
              My extensive experience of over 10 years in{" "}
              <span className="ptx2 font-semibold">photography</span> adds a
              unique perspective to my skills. I'm adept at capturing moments
              and transforming them into enduring memories. This ability not
              only showcases my{" "}
              <span className="ptx2 font-semibold">creativity</span> but also
              demonstrates my{" "}
              <span className="ptx2 font-semibold">attention to detail</span>{" "}
              and commitment to excellence.
              <br /> <br />
              <a
                href="https://visionbyjulius.vercel.app/"
                rel="noreferrer"
                className="underline hover:no-underline ptx2 font-bold text-2xl"
                target="_blank"
              >
                Check out my new gallery!
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
