import React from "react";
import awardImage from "../images/kamk-cybersecurity-fundamentals-badge.webp"; // Import your award image
import awardImage2 from "../images/kamk-azure-fundamentals-badge.webp";
import awardImage3 from "../images/kamk-elements-of-cloud-and-cybersecurity-badge.webp";
import awardImage4 from "../images/certificate-elements-of-ai-fi.webp";

const Awards = () => {
  return (
    <section className="py-10" id="awards">
      <h1 className="text-[30px] lg:text-[36px] uppercase text-center lg:text-center text-4xl font-bold ptx2">
        Honors, Awards and Certificates
      </h1>
      <div className="container mx-auto flex items-center">
        {/* Award Image */}
        <div className="w-1/4">
          <img src={awardImage} alt="Award" className="w-full h-auto px-2" />
        </div>

        {/* Award Information */}
        <div className="w-2/3 px-6">
          <h1 className="text-4xl font-bold mb-4 ptx pt-10">
            <a
              className="underline hover:no-underline"
              href="https://bit.ly/4a399Qh"
              target="blank"
            >
              Cybersecurity Fundamentals
            </a>
          </h1>
          <p className="text-lg mb-4 ctext font-semibold">
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
      <div className="container mx-auto flex items-center pt-20 ">
        {/* Award Image */}
        <div className="w-1/4">
          <img src={awardImage3} alt="Award" className="w-full h-auto px-2" />
        </div>

        {/* Award Information */}
        <div className="w-2/3 px-6">
          <h1 className="text-4xl font-bold mb-4 ptx">
            <a
              className="underline hover:no-underline"
              href="https://bit.ly/3VuKmQK"
              target="blank"
            >
              Elements of Cloud and Cybersecurity
            </a>
          </h1>
          <p className="text-lg mb-4 ctext font-semibold">
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
      <div className="container mx-auto flex items-center pt-20">
        {/* Award Image */}
        <div className="w-1/4">
          <img src={awardImage2} alt="Award" className="w-full h-auto px-2" />
        </div>

        {/* Award Information */}
        <div className="w-2/3 px-6">
          <h1 className="text-4xl font-bold mb-4 ptx">
            <a
              className="underline hover:no-underline"
              href="https://bit.ly/43vQpGo"
              target="blank"
            >
              Azure Fundamentals
            </a>
          </h1>
          <p className="text-lg mb-4 ctext font-semibold">
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
      <div className="container mx-auto flex items-center pt-20">
        {/* Award Image */}
        <div className="w-1/4">
          <img src={awardImage4} alt="Award" className="w-full h-auto px-2" />
        </div>

        {/* Award Information */}
        <div className="w-2/3 px-6">
          <h1 className="text-4xl font-bold mb-4 ptx">
            <a
              className="underline hover:no-underline"
              href="https://bit.ly/4aq6e3I"
              target="blank"
            >
              Elements of AI - The Basics of Artificial Intelligence
            </a>
          </h1>
          <p className="text-lg mb-4 ctext font-semibold">
            Issued in March 2021, University of Helsinki, Finland.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Awards;
