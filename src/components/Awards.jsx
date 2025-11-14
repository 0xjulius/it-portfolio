import React from "react";
import awardImage from "../images/kamk-cybersecurity-fundamentals-badge.webp"; // Import your award image
import awardImage2 from "../images/kamk-azure-fundamentals-badge.webp";
import awardImage3 from "../images/kamk-elements-of-cloud-and-cybersecurity-badge.webp";
import awardImage4 from "../images/certificate-elements-of-ai-fi.webp";
import awardImage5 from "../images/stage.jpg";
import awardImage6 from "../images/don.avif";
import awardImage7 from "../images/gandalf.png";
import awardImage8 from "../images/practical-ai-badge.png";
import awardImage1 from "../images/aicert-edu.png";
import awardImage9 from "../images/m365.png";
import awardImage10 from "../images/m365-2.png";
import awardImage11 from "../images/m365-3.png";
import awardImage12 from "../images/ai-agents.png";

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
            src={awardImage12}
            alt="Award"
            className="max-w-96 lg:w-full h-auto px-4"
          />
        </div>

        {/* Award Information */}
        <div className="lg:w-2/3 px-6 mt-10">
          <h1 className="text-4xl font-bold mb-4 ptx text-center lg:text-left lg:pt-10 ">
            AI Agents – Your Executive’s Right Hand
          </h1>
          <p className="text-lg mb-4 ctext font-semibold text-center lg:text-left">
            Issued by Esa Riutta, Eduhouse. <br /> <br />
            This badge recognizes the participant’s advanced understanding of AI
            agents, demonstrated through the completion of
            <br />
            <span className="ptx2 font-bold">
              AI-agentit johtajan oikeana kätenä
            </span>
            .
            <br />
            <br />
            After completing this webinar, the participant has gained practical
            insight into how AI agents can serve as an executive’s right hand.
            The course covered key concepts such as
            <span className="ptx2 font-bold">
              {" "}
              AI agents in Microsoft Copilot
            </span>
            ,
            <span className="ptx2 font-bold">
              {" "}
              creating agents in Copilot Studio
            </span>
            ,<span className="ptx2 font-bold"> naming agents</span>,
            <span className="ptx2 font-bold"> writing instructions</span>,
            <span className="ptx2 font-bold"> crafting descriptions</span>,
            <span className="ptx2 font-bold"> defining knowledge</span>,
            <span className="ptx2 font-bold"> configuring agents</span>, and
            <span className="ptx2 font-bold"> suggested prompting</span>.
            Participants learned how to identify the real value of AI agents,
            apply them in leadership tasks, and integrate them efficiently to
            save time and improve decision quality.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row card m-4 lg:m-10 pb-10 ">
        {/* Award Image */}
        <div className="lg:w-1/4 lg:mb-0 lg:mr-6 ">
          <img
            src={awardImage11}
            alt="Award"
            className="max-w-96 lg:w-full h-auto px-4"
          />
        </div>

        {/* Award Information */}
        <div className="lg:w-2/3 px-6 mt-10">
          <h1 className="text-4xl font-bold mb-4 ptx text-center lg:text-left lg:pt-10 ">
            Microsoft 365 3 – Using the Applications
          </h1>
          <p className="text-lg mb-4 ctext font-semibold text-center lg:text-left">
            Issued by Tanja Lehto, Eduhouse. <br /> <br />
            This badge recognizes the participant’s practical skills in
            Microsoft 365, demonstrated through the completion of
            <br />
            <span className="ptx2 font-bold">
              Microsoft 365 3 – Näin käytät sitä
            </span>
            .
            <br />
            <br />
            After completing this course, the participant has gained essential
            knowledge on how to use Microsoft 365 effectively in daily work. The
            course covered key tasks such as
            <span className="ptx2 font-bold"> opening applications</span>,
            configuring
            <span className="ptx2 font-bold"> settings</span>,
            <span className="ptx2 font-bold">
              {" "}
              installing desktop applications
            </span>
            , and properly
            <span className="ptx2 font-bold"> signing out</span> to ensure
            secure use of the environment. Through these modules, the
            participant has strengthened their understanding of how to navigate,
            manage, and operate the Microsoft 365 ecosystem smoothly and
            efficiently.
            <br />
            <br />
            This badge has been granted by the course developers, namely
            eduhouse and mentor companies.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row card m-4 lg:m-10 pb-10 ">
        {/* Award Image */}
        <div className="lg:w-1/4 lg:mb-0 lg:mr-6 ">
          <img
            src={awardImage10}
            alt="Award"
            className="max-w-96 lg:w-full h-auto px-4"
          />
        </div>

        {/* Award Information */}
        <div className="lg:w-2/3 px-6 mt-10">
          <h1 className="text-4xl font-bold mb-4 ptx text-center lg:text-left lg:pt-10 ">
            Microsoft 365 2 – Getting to Know the Applications
          </h1>
          <p className="text-lg mb-4 ctext font-semibold text-center lg:text-left">
            Issued by Tanja Lehto, Eduhouse. <br /> <br />
            This badge recognizes the student’s growing skills and knowledge in
            Microsoft 365, demonstrated through the completion of
            <br />
            <span className="ptx2 font-bold">
              Microsoft 365 2 – Sovelluksiin tutustuminen
            </span>
            .
            <br />
            <br />
            After completing this course, the student has gained a practical
            understanding of several key Microsoft 365 applications and how they
            support everyday work. The course introduced essential tools such as
            <span className="ptx2 font-bold"> OneDrive</span> for managing
            personal files in the cloud,
            <span className="ptx2 font-bold"> Teams</span> for communication and
            collaboration,
            <span className="ptx2 font-bold"> OneNote</span> for personal and
            shared note-taking,
            <span className="ptx2 font-bold"> Forms</span> for creating and
            sharing forms,
            <span className="ptx2 font-bold"> Sway</span> for easy web-based
            presentations,
            <span className="ptx2 font-bold"> Planner</span> for task sharing
            and tracking,
            <span className="ptx2 font-bold"> Viva Engage</span> for
            social-style communication,
            <span className="ptx2 font-bold"> Stream</span> for videos and live
            broadcasts, and
            <span className="ptx2 font-bold"> Power Automate</span> for
            automating workflows. Through these applications, the participant
            has learned how Microsoft 365 supports efficient, collaborative, and
            organized work practices.
            <br />
            <br />
            This badge has been granted by the course developers, namely
            eduhouse and mentor companies.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row card m-4 lg:m-10 pb-10 ">
        {/* Award Image */}
        <div className="lg:w-1/4 lg:mb-0 lg:mr-6 ">
          <img
            src={awardImage9}
            alt="Award"
            className="max-w-96 lg:w-full h-auto px-4"
          />
        </div>

        {/* Award Information */}
        <div className="lg:w-2/3 px-6 mt-10">
          <h1 className="text-4xl font-bold mb-4 ptx text-center lg:text-left lg:pt-10 ">
            Microsoft 365 1 - Fundamentals
          </h1>
          <p className="text-lg mb-4 ctext font-semibold text-center lg:text-left">
            Issued by Tanja Lehto, Eduhouse. <br /> <br />
            This badge recognizes the student’s skills and foundational
            knowledge in Microsoft 365, demonstrated through the completion of
            <br />
            <span className="ptx2 font-bold">
              Microsoft 365 1 – Perusteet
            </span>{" "}
            course.
            <br />
            <br />
            After completing this course, the student possesses a clear
            understanding of the core Microsoft 365 applications and their
            purposes. The course provided an overview of essential tools such as
            <span className="ptx2 font-bold"> Outlook</span>,
            <span className="ptx2 font-bold"> Word</span>,
            <span className="ptx2 font-bold"> Excel</span>,
            <span className="ptx2 font-bold"> PowerPoint</span>,
            <span className="ptx2 font-bold"> Teams</span>, and
            <span className="ptx2 font-bold"> OneDrive</span>, and explained how
            these applications work together to support productive, secure, and
            collaborative workflows in modern digital environments. The student
            has also gained practical insight into how to navigate the Microsoft
            365 ecosystem and apply its features effectively in everyday tasks.
            <br />
            <br />
            This badge has been granted by the course developers, namely
            eduhouse and mentor companies.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row card m-4 lg:m-10 pb-10 ">
        {/* Award Image */}
        <div className="lg:w-1/4 lg:mb-0 lg:mr-6 ">
          <img
            src={awardImage1}
            alt="Award"
            className="max-w-96 lg:w-full h-auto px-4"
          />
        </div>

        {/* Award Information */}
        <div className="lg:w-2/3 px-6 mt-10">
          <h1 className="text-4xl font-bold mb-4 ptx text-center lg:text-left lg:pt-10 ">
            AI: Basics of Artificial Intelligence
          </h1>
          <p className="text-lg mb-4 ctext font-semibold text-center lg:text-left">
            Issued by Riku Rantala, Eduhouse. <br /> <br />
            This badge recognizes the student’s skills and knowledge in the
            field of artificial intelligence, demonstrated through the
            completion of the <br />
            <span className="ptx2 font-bold ">
              AI: Tekoälyn perusteet course.
            </span>
            <br />
            <br />
            After completing this course, the student possesses practical
            understanding of how to begin using AI, including foundational
            concepts, effective prompting, and applying tools such as{" "}
            <span className="ptx2 font-bold ">ChatGPT </span> or information
            analysis. <br />
            <br />
            The student has also explored real-world case studies showing how AI
            supports professionals in marketing, editorial work, and media
            production. In addition, the course introduced key creative and
            technical AI tools—such as{" "}
            <span className="ptx2 font-bold ">Midjourney </span> for image
            generation, <span className="ptx2 font-bold ">ElevenLabs</span> for
            voice cloning, and <span className="ptx2 font-bold ">Heygen</span>{" "}
            and <span className="ptx2 font-bold ">Synthesia</span> for virtual
            avatars and revoicing—and examined critical topics related to data
            security, copyright, ethics, biases, and responsible AI use. The
            student further gained insight into today’s leading AI platforms,
            including Microsoft Copilot and Google Gemini, along with guidance
            for continuing AI skill development.
            <br />
            <br />
            This badge has been granted by the course developers, namely
            eduhouse and mentor companies.
          </p>
        </div>
      </div>

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
