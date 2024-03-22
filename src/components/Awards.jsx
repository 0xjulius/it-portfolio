import React from "react";
import awardImage from "../images/kamk-cybersecurity-fundamentals-badge.webp"; // Import your award image
import awardImage2 from "../images/kamk-azure-fundamentals-badge.webp";
import awardImage3 from "../images/kamk-elements-of-cloud-and-cybersecurity-badge.webp";
import awardImage4 from "../images/certificate-elements-of-ai-fi.webp";
import awardImage5 from "../images/stage.jpg";
import awardImage6 from "../images/don.avif";

const Awards = () => {
  return (
    <section className="py-10" id="awards">
      <h1 className="text-[30px] lg:text-[36px] uppercase text-center lg:text-center text-4xl font-bold ptx2">
        Certificates
      </h1>
      <div className="flex flex-col items-center lg:flex-row">
        {/* Award Image */}
        <div className="lg:w-1/4 lg:mb-0 lg:mr-6 ">
          <img
            src={awardImage}
            alt="Award"
            className="max-w-96 lg:w-full h-auto px-4"
          />
        </div>

        {/* Award Information */}
        <div className="lg:w-2/3 px-6 mt-10">
          <h1 className="text-4xl font-bold mb-4 ptx text-center lg:text-left lg:pt-10">
            <a
              className="underline hover:no-underline"
              href="https://bit.ly/4a399Qh"
              target="_blank"
              rel="noreferrer"
            >
              Cybersecurity Fundamentals
            </a>
          </h1>
          <p className="text-lg mb-4 ctext font-semibold text-center lg:text-left">
            Issued in March 2023, Kajaani University of Applied Sciences. <br />{" "}
            <br />
            This badge is a recognition of skills and knowledge in the field of
            cloud and cybersecurity as well as the completion of the
            Cybersecurity Fundamentals course.
            <br />
            <br />
            After accomplishing this badge, the student has fundamental
            knowledge on cloud and cybersecurity solutions across Microsoft’s
            Azure services as well as related fundamental terminology and
            principles. Upon earning the badge, the student has demonstrated
            their expertise in the field by completing practical exercises and
            processing various subjects across the aforementioned topics.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row">
        {/* Award Image */}
        <div className="lg:w-1/4 mb-4 lg:mb-0 lg:mr-6">
          <img
            src={awardImage3}
            alt="Award"
            className="max-w-96 lg:w-full h-auto px-4"
          />
        </div>

        {/* Award Information */}
        <div className="lg:w-2/3 px-6">
          <h1 className="text-4xl font-bold mb-4 ptx text-center lg:text-left lg:pt-10">
            <a
              className="underline hover:no-underline"
              href="https://bit.ly/3VuKmQK"
              target="_blank"
              rel="noreferrer"
            >
              Elements of Cloud and Cybersecurity
            </a>
          </h1>
          <p className="text-lg mb-4 ctext font-semibold text-center lg:text-left">
            Issued in March 2023, Kajaani University of Applied Sciences. <br />
            <br />
            This badge is a recognition of skills and knowledge in the field of
            cloud and cybersecurity as well as the completion of the Elements of
            Cloud and Cybersecurity course.
            <br />
            <br />
            After accomplishing this badge, the student has fundamental
            knowledge on cloud and cybersecurity solutions as well as related
            fundamental terminology, features, and principles. Upon earning the
            badge, the student has demonstrated their expertise in the field by
            completing practical exercises and processing various subjects
            across the aforementioned topics.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row">
        {/* Award Image */}
        <div className="lg:w-1/4 mb-4 lg:mb-0 lg:mr-6">
          <img
            src={awardImage2}
            alt="Award"
            className="max-w-96 lg:w-full h-auto px-4"
          />
        </div>

        {/* Award Information */}
        <div className="lg:w-2/3 px-6">
          <h1 className="text-4xl font-bold mb-4 ptx text-center lg:text-left lg:pt-10">
            <a
              className="underline hover:no-underline"
              href="https://bit.ly/43vQpGo"
              target="_blank"
              rel="noreferrer"
            >
              Azure Fundamentals
            </a>
          </h1>
          <p className="text-lg mb-4 ctext font-semibold text-center lg:text-left">
            Issued in March 2023, Kajaani University of Applied Sciences. <br />
            <br />
            This badge is a recognition of skills and knowledge in the field of
            cloud and cybersecurity as well as the completion of the Azure
            Fundamentals course.
            <br />
            <br />
            After accomplishing this badge, the student has fundamental
            knowledge on Microsoft’s cloud-based Azure platform as well as its
            services and capabilities including safety, infrastructure, and
            management features. Upon earning the badge, the student has
            demonstrated their expertise in the field by completing practical
            exercises and processing various subjects across the aforementioned
            topics.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row">
        {/* Award Image */}
        <div className="lg:w-1/4 mb-4 lg:mb-0 lg:mr-6 mt-10">
          <img
            src={awardImage4}
            alt="Award"
            className="max-w-96 lg:w-full h-auto px-4"
          />
        </div>

        {/* Award Information */}
        <div className="lg:w-2/3 px-6">
          <h1 className="text-4xl font-bold mb-4 ptx text-center lg:text-left lg:pt-10">
            <a
              className="underline hover:no-underline"
              href="https://bit.ly/4aq6e3I"
              target="_blank"
              rel="noreferrer"
            >
              Elements of AI - The Basics of Artificial Intelligence
            </a>
          </h1>
          <p className="text-lg mb-4 ctext font-semibold text-center lg:text-left">
            Issued in March 2021, University of Helsinki, Finland.
          </p>
        </div>
      </div>
      <h1 className="text-[30px] lg:text-[36px] uppercase text-center lg:text-center text-4xl font-bold ptx2 mt-[100px]">
        Awards and Honors
      </h1>
      <div className="flex flex-col items-center lg:flex-row pt-10">
        {/* Award Image */}
        <div className="lg:w-1/4 mb-4 lg:mb-0 lg:mr-6 mt-10">
          <img
            src={awardImage5}
            alt="Award"
            className="max-w-[500px] w-full h-auto px-4 "
          />
        </div>

        {/* Award Information */}
        <div className="lg:w-2/3 px-6">
          <h1 className="text-4xl font-bold mb-4 ptx text-center lg:text-left pt-10">
            <a
              className="underline hover:no-underline"
              href="https://juliusaalto.com/portfolio/wapice-hack-the-stage-iot-ticket/"
              target="_blank"
              rel="noreferrer"
            >
              Wapice's Hack The Stage - Grand finalist
            </a>
          </h1>
          <p className="text-lg mb-4 ctext font-semibold text-center lg:text-left">
            Awarded in March 2021.
            <br />
            <br />I was working as a Lead Technical Project Manager with our
            student team and managed to earn a spot on IoT-Ticket Hack The Stage
            -grand final.
            <a
              className="underline hover:no-underline ptx"
              href="https://juliusaalto.com/portfolio/wapice-hack-the-stage-iot-ticket/"
              target="_blank"
              rel="noreferrer"
            >
              <br />
              <br />
              Click here to learn more.
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row">
        {/* Award Image */}
        <div className="w-2/4 lg:w-1/4">
          <img
            src={awardImage6}
            alt="Award"
            className="w-auto max-h-[600px] px-4 pt-10"
          />
        </div>

        {/* Award Information */}
        <div className="lg:w-2/3 px-6">
          <h1 className="text-4xl font-bold mb-4 ptx text-center lg:text-left pt-10">
            Touko Saari's Foundation Scholarships
          </h1>
          <p className="text-lg mb-4 ctext font-semibold text-center lg:text-left">
            Awarded in June 2012, in recognition of diligent and successful
            studies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Awards;
