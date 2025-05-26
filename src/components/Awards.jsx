import React from "react";
import awardImage from "../images/kamk-cybersecurity-fundamentals-badge.webp"; // Import your award image
import awardImage2 from "../images/kamk-azure-fundamentals-badge.webp";
import awardImage3 from "../images/kamk-elements-of-cloud-and-cybersecurity-badge.webp";
import awardImage4 from "../images/certificate-elements-of-ai-fi.webp";
import awardImage5 from "../images/stage.jpg";
import awardImage6 from "../images/don.avif";
import awardImage7 from "../images/gandalf.png";
import awardImage8 from "../images/practical-ai-badge.png";

const Awards = () => {
  return (
    <section className="py-10" id="awards">
      <h1 className="text-[30px] lg:text-[36px] uppercase text-center lg:text-center text-4xl font-bold text-gradient ">
        Certificates
      </h1>
      <div className="flex flex-col items-center lg:flex-row card m-4 lg:m-10 pb-10 ">
        {/* Award Image */}
        <div className="lg:w-1/4 lg:mb-0 lg:mr-6 ">
          <img
            src={awardImage8}
            alt="Award"
            className="max-w-96 lg:w-full h-auto px-4"
          />
        </div>

        {/* Award Information */}
        <div className="lg:w-2/3 px-6 mt-10">
          <h1 className="text-4xl font-bold mb-4 ptx text-center lg:text-left lg:pt-10 ">
            Practical AI by Microsoft
          </h1>
          <p className="text-lg mb-4 ctext font-semibold text-center lg:text-left">
            Issued in Kajaani University of Applied Sciences. <br /> <br />
            This badge is a recognition of skills and knowledge in the field of
            artificial intelligence as well as the completion of the Practical
            AI course.
            <br />
            <br />
            After accomplishing this course, the student has practical knowledge
            on artificial intelligence as well as related fundamental
            terminology and principles. Upon earning the badge, the student has
            demonstrated their expertise in the field by completing practical
            exercises and processing various subjects across the aforementioned
            topics.
            <br />
            <br />
            This badge has been granted by the course developers, namely
            Microsoft, Kajaani University of Applied Sciences, and mentor
            companies.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row card m-4 lg:m-10 pb-10 ">
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
          <h1 className="text-4xl font-bold mb-4 ptx text-center lg:text-left lg:pt-10 ">
            Cybersecurity Fundamentals
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
            knowledge on cloud and cybersecurity solutions across{" "}
            <span className="ptx2 font-semibold">Microsoft’s Azure </span>{" "}
            services as well as related fundamental terminology and principles.
            Upon earning the badge, the student has demonstrated their expertise
            in the field by completing practical exercises and processing
            various subjects across the aforementioned topics.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row card m-4 lg:m-10 pb-10">
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
            Elements of Cloud and Cybersecurity
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
            knowledge on{" "}
            <span className="ptx2 font-semibold">
              cloud and cybersecurity solutions as well as related fundamental
              terminology, features, and principles
            </span>
            . Upon earning the badge, the student has demonstrated their
            expertise in the field by completing practical exercises and
            processing various subjects across the aforementioned topics.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row card m-4 lg:m-10 pb-10">
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
            Azure Fundamentals by Microsoft
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
            knowledge on{" "}
            <span className="ptx2 font-semibold">
              Microsoft’s cloud-based Azure platform
            </span>{" "}
            as well as its services and capabilities including safety,
            infrastructure, and management features. Upon earning the badge, the
            student has demonstrated their expertise in the field by completing
            practical exercises and processing various subjects across the
            aforementioned topics.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row card m-4 lg:m-10 pb-10">
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
            Elements of AI - The Basics of Artificial Intelligence
          </h1>
          <p className="text-lg mb-4 ctext font-semibold text-center lg:text-left">
            Issued in March 2021, University of Helsinki, Finland.
          </p>
        </div>
      </div>
      <h1 className="text-[30px] lg:text-[36px] uppercase text-center lg:text-center text-4xl font-bold text-gradient mt-[100px]">
        Awards and Honors
      </h1>
      <div className="flex flex-col items-center lg:flex-row card m-4 lg:m-10 pb-10">
        {/* Award Image */}
        <div className="w-2/4 lg:w-1/4">
          <img
            src={awardImage7}
            alt="Award"
            className="w-auto max-h-[600px] px-4 pt-10"
          />
        </div>

        {/* Award Information */}
        <div className="lg:w-2/3 px-6">
          <h1 className="text-4xl font-bold mb-4 ptx text-center lg:text-left pt-10">
            <a
              className="underline hover:no-underline"
              href="https://www.lakera.ai/blog/who-is-gandalf"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Lakera's The Gandalf Challenge - most popular AI security game in
              the world{" "}
            </a>
          </h1>
          <p className="text-lg mb-4 ctext font-semibold text-center lg:text-left">
            Understanding of{" "}
            <a
              href="https://www.lakera.ai/blog/prompt-engineering-guide"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              Prompt Engineering
            </a>{" "}
            and importance of AI Security for{" "}
            <a
              href="https://www.lakera.ai/blog/large-language-models-guide"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              Large Language Models
            </a>{" "}
            (LLMs), including Custom GPT Security Standards and risks including
            Prompt Leakage Methods,{" "}
            <a
              href="https://www.lakera.ai/blog/guide-to-prompt-injection"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              Prompt Injection Attacks
            </a>
            ,{" "}
            <a
              href="https://www.lakera.ai/blog/jailbreaking-large-language-models-guide"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              Jailbreaking
            </a>
            ,{" "}
            <a
              href="https://www.lakera.ai/blog/training-data-poisoning"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              Training Data Poisoning
            </a>
            , and Malicious User Inputs. <br /> <br />
            Lakera - The AI Security Company is leading and accelerating secure
            AI adoption. Lakera was founded to empower developers and
            organizations to build and operate AI systems that are secure and
            safe.
            <br />
            <br />
            Gandalf challenge is light-hearted fun, it models a real problems
            that large language model applications face everyday. Gandalf has
            been played by millions of people around the world, making it the
            most popular AI security game in the world. I am currently at level
            7 leaderboard. <br />
            <br />
            <a
              href=" https://www.lakera.ai/blog/who-is-gandalf"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              Read more about "Gandalf" AI Security Game
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row pt-10 card m-4 lg:m-10 pb-10">
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
            <br />I was working as a{" "}
            <span className="ptx2 font-semibold">
              Lead Technical Project Manager
            </span>{" "}
            with our student team and managed to earn a spot on IoT-Ticket Hack
            The Stage -grand final.
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
      <div className="flex flex-col items-center lg:flex-row card m-4 lg:m-10 pb-10">
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
            Awarded in recognition of diligent and successful studies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Awards;
