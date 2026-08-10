import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useLanguage } from "../context/LanguageContext";

const studiesContent = {
  fi: {
    title: "Opintoni ja koulutukseni",
    cards: [
      {
        title: "Liiketoiminnan perustutkinto, merkonomi.",
        school: "Koulutuskeskus Sedu, Seinäjoki.",
        textBefore: "Valmistuessani minulle myönnettiin ",
        highlight: "stipendi",
        textAfter: " Touko Saaren säätiöltä.",
      },
      {
        title: "Puolustusvoimat, Varusmiespalvelus.",
        school: "Tykistöprikaati, Niinisalo.",
        text: "Olen viestintään erikoistunut koulutettu sotilas. Palveluksen aikana opin teknisiä taitoja, strategista suunnittelua, tiimityötä ja ongelmanratkaisua.",
      },
      {
        title: "Visuaalinen suunnittelija, Kulttuurituotanto.",
        school: "SeAMK, Seinäjoen ammattikorkeakoulu.",
        text: "Siirryin Vaasan ammattikorkeakouluun jatkamaan opintojani.",
      },
      {
        title: "Tietojenkäsittelyn tradenomi (BBA).",
        school: "VAMK – Vaasan ammattikorkeakoulu.",
        textBefore: "Olen suorittanut opintoni menestyksekkäästi keskiarvolla ",
        highlight: "3.64/5.0.",
        curriculumLink: "Tutustu koulumme opetussuunnitelmaan.",
      },
    ],
  },
  en: {
    title: "My studies and education",
    cards: [
      {
        title: "Vocational Qualification on Business and Administration.",
        school: "Koulutuskeskus Sedu, Seinäjoki.",
        textBefore: "Upon graduating, I was awarded a ",
        highlight: "scholarship",
        textAfter: " from the Touko Saari foundation scholarships.",
      },
      {
        title: "Finnish Defence Forces, Military Service.",
        school: "Artillery Brigade, Niinisalo.",
        text: "I am a trained soldier specialized in communications. During my service, I learned technical skills, strategic planning, teamwork and problem solving.",
      },
      {
        title: "Visual Designer, Cultural Production.",
        school: "SeAMK, Seinäjoki University of Applied Sciences.",
        text: "I transferred to Vaasa University of Applied Sciences to provide/continue my studies.",
      },
      {
        title: "IT-Bachelor of Business Administration.",
        school: "VAMK – Vaasa University of Applied Sciences.",
        textBefore:
          "I have successfully completed my studies with grade point average ",
        highlight: "3.64/5.0.",
        curriculumLink: "Review our school's curriculum.",
      },
    ],
  },
};

const Studies = () => {
  const [inView] = useInView({
    threshold: 0.5,
  });

  const { lang } = useLanguage();
  const t = studiesContent[lang] || studiesContent.fi;

  return (
    <section className="section" id="studies">
      <div className="container mx-auto mt-[100px] flex-none">
        <div className="flex flex-col lg:flex-none lg:items-center">
          <div className="flex-1 w-full">
            <h1 className="text-[30px] lg:text-[36px] uppercase text-center font-bold text-gradient mb-16">
              {t.title}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 text-center p-4">
              {/* Kortti 1: Sedu */}
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="mx-auto text-center card p-6 flex flex-col justify-between w-full"
              >
                <div>
                  <h3 className="font-semibold mb-4 mt-4 text-xl lg:text-2xl ptx">
                    {t.cards[0].title}
                  </h3>
                  <p className="mx-auto ctext text-center text-lg">
                    <span className="font-semibold">{t.cards[0].school}</span>{" "}
                    <span className="italic">
                      <br />
                      {t.cards[0].textBefore}
                      <span className="ptx2 font-semibold">
                        {t.cards[0].highlight}
                      </span>
                      {t.cards[0].textAfter}
                    </span>
                  </p>
                </div>
              </motion.div>

              {/* Kortti 2: Armeija */}
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="mx-auto text-center p-6 card flex flex-col justify-between w-full"
              >
                <div>
                  <h3 className="font-semibold mb-4 mt-4 text-lg lg:text-2xl ptx">
                    {t.cards[1].title}
                  </h3>
                  <p className="italic mx-auto text-lg ctext">
                    <span className="not-italic font-semibold">
                      {t.cards[1].school} <br />
                    </span>{" "}
                    {t.cards[1].text}
                  </p>
                </div>
              </motion.div>

              {/* Kortti 3: SeAMK */}
              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="mx-auto text-center p-6 card flex flex-col justify-between w-full"
              >
                <div>
                  <h3 className="font-semibold ptx mb-4 mt-4 text-xl lg:text-2xl">
                    {t.cards[2].title}
                  </h3>
                  <p className="italic mx-auto ctext text-lg">
                    <span className="not-italic font-semibold">
                      {t.cards[2].school}
                    </span>
                    <br />
                    {t.cards[2].text}
                  </p>
                </div>
              </motion.div>

              {/* Kortti 4: VAMK */}
              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="mx-auto text-center p-6 card flex flex-col justify-between w-full"
              >
                <div>
                  <h3 className="font-semibold ptx mb-4 mt-4 text-xl lg:text-2xl">
                    {t.cards[3].title}
                  </h3>
                  <p className="italic mx-auto text-lg ctext">
                    <span className="not-italic font-semibold">
                      {t.cards[3].school}
                    </span>
                    <br />
                    {t.cards[3].textBefore}
                    <span className="ptx2 font-semibold">
                      {t.cards[3].highlight}
                    </span>
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    className="font-bold cursor-pointer underline hover:no-underline text-sm text-blue-300"
                    href="https://ops.vamk.fi/fi/TK/2020/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.cards[3].curriculumLink}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studies;
