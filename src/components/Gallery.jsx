import React from "react";
import { faCamera, faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLanguage } from "../context/LanguageContext";

const galleryContent = {
  fi: {
    visualTitle: "Visuaalinen Suunnittelu",
    visualDesc1: "Vaikuttavien ",
    visualSpan1: "visuaalisten elämysten",
    visualDesc2: " luominen on yksi intohimoistani. Minua on aina kiehtonut ",
    visualSpan2: "käyttöliittymäsuunnittelu, brändäys ja kuvitus",
    visualDesc3: " – ideoiden tuominen eloon ",
    visualSpan3: "värien, muotojen ja typografian",
    visualDesc4:
      " avulla tekee tuotteista paitsi kauniita, myös intuitiivisia käyttää.",
    visualLink: "Katso työnäytteet",

    photoTitle: "Valokuvaus & Visuaalinen Tarinankerronta",
    photoDesc1: "Yli 10 vuoden kokemus ",
    photoSpan1: "valokuvauksesta",
    photoDesc2:
      " tuo uniikin näkökulman myös digitaalisten tuotteiden suunnitteluun. Ymmärrys valosta, sommittelusta ja visuaalisesta tasapainosta vahvistaa ",
    photoSpan2: "luovuuttani",
    photoDesc3: " sekä tarkkaa ",
    photoSpan3: "yksityiskohtien huomioimista",
    photoDesc4: " kaikessa tekemisessäni.",
    photoLink: "Tutustu valokuvagalleriaan",
  },
  en: {
    visualTitle: "Visual Design",
    visualDesc1: "Creating impactful ",
    visualSpan1: "visual experiences",
    visualDesc2: " is one of my core passions. I am deeply engaged in ",
    visualSpan2: "UI design, branding, and illustration",
    visualDesc3: " - bringing ideas to life through ",
    visualSpan3: "color theory, geometry, and typography",
    visualDesc4: " to deliver both engaging and intuitive digital interfaces.",
    visualLink: "View my work",

    photoTitle: "Photography & Media Production",
    photoDesc1: "Over a decade of experience in ",
    photoSpan1: "photography",
    photoDesc2:
      " brings a unique aesthetic perspective to my tech stack. A strong eye for composition, lighting, and balance enhances my ",
    photoSpan2: "creative direction",
    photoDesc3: " and rigorous ",
    photoSpan3: "attention to detail",
    photoDesc4: " across all visual media.",
    photoLink: "Check out my gallery",
  },
};

const Gallery = () => {
  const { lang } = useLanguage();
  const t = galleryContent[lang] || galleryContent.fi;

  return (
    <section className="Gallery flex justify-center mb-60">
      <div className="mx-auto text-center pt-5 px-5 max-w-[800px] lg:max-w-[1200px]">
        <div className="flex flex-wrap justify-center gap-10">
          {/* Visual Design Card */}
          <div className="w-full lg:w-[calc(50%-20px)] flex items-stretch">
            <div className="mx-auto text-xl ctext font-semibold card px-10 p-10 flex flex-col justify-between">
              <div>
                <h2 className="ptx font-semibold mb-6 text-2xl flex items-center justify-center gap-3">
                  <FontAwesomeIcon icon={faPalette} />
                  {t.visualTitle}
                </h2>
                <p>
                  {t.visualDesc1}
                  <span className="ptx2 font-semibold">{t.visualSpan1}</span>
                  {t.visualDesc2}
                  <span className="ptx2 font-semibold">{t.visualSpan2}</span>
                  {t.visualDesc3}
                  <span className="ptx2 font-semibold">{t.visualSpan3}</span>
                  {t.visualDesc4}
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="https://behance.net/juliusaalto"
                  rel="noreferrer"
                  className="underline hover:no-underline ptx2 font-bold text-2xl"
                  target="_blank"
                >
                  {t.visualLink}
                </a>
              </div>
            </div>
          </div>

          {/* Photography Card */}
          <div className="w-full lg:w-[calc(50%-20px)] flex items-stretch">
            <div className="mx-auto text-xl ctext font-semibold card px-10 p-10 flex flex-col justify-between">
              <div>
                <h2 className="ptx font-semibold mb-6 text-2xl flex items-center justify-center gap-3">
                  <FontAwesomeIcon icon={faCamera} />
                  {t.photoTitle}
                </h2>
                <p>
                  {t.photoDesc1}
                  <span className="ptx2 font-semibold">{t.photoSpan1}</span>
                  {t.photoDesc2}
                  <span className="ptx2 font-semibold">{t.photoSpan2}</span>
                  {t.photoDesc3}
                  <span className="ptx2 font-semibold">{t.photoSpan3}</span>
                  {t.photoDesc4}
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="https://visionbyjulius.vercel.app/"
                  rel="noreferrer"
                  className="underline hover:no-underline ptx2 font-bold text-2xl"
                  target="_blank"
                >
                  {t.photoLink}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
