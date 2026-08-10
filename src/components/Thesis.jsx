import React from "react";
import { useLanguage } from "../context/LanguageContext";

const thesisContent = {
  fi: {
    title: "Ammattikorkeakoulun opinnäytetyöni",
    linkText: "Sytytä kynttilä -WordPress-lisäosan kehittäminen",
    linkUrl: "https://bit.ly/43pT6JA",
    p1Before: "Opinnäytetyön aiheena oli kehittää ",
    p1Highlight: "’Sytytä kynttilä’ -WordPress-lisäosa",
    p1After:
      ", joka mahdollistaa virtuaalisten muistokynttilöiden sytyttämisen Lumivaarassa menehtyneiden läheisten muistolle.",
    p2Before: "Opinnäytetyöstäni saama ",
    p2Highlight: "täysi arvosana 5/5",
    p2After:
      " on minulle suuri merkkipaalu, ja uskon sen antavan vahvan pohjan tulevalle työuralleni.",
  },
  en: {
    title: "My thesis of University of Applied Sciences studies",
    linkText: "Development of Light a Candle -plugin for WordPress",
    linkUrl: "https://bit.ly/43pT6JA",
    p1Before: "The subject of this thesis was to develop a ",
    p1Highlight: "‘Light a Candle’ -WordPress plugin",
    p1After:
      ", which will allow users to create innovative way to light virtual memorial candles for their deceased loved ones who passed away in Lumivaara.",
    p2Before: "Achieving the ",
    p2Highlight: "perfect score",
    p2After:
      " of five points for my thesis is a major milestone, and I am confident that this accomplishment will significantly elevate my career.",
  },
};

const Thesis = () => {
  const { lang } = useLanguage();
  const t = thesisContent[lang] || thesisContent.fi;

  return (
    <section className="schoolThesis mb-20">
      <div className="mx-auto text-center pt-10 px-5 max-w-[600px] lg:max-w-[900px] mt-[100px]">
        <h1 className="text-[30px] lg:text-[36px] uppercase text-center lg:text-center text-4xl font-bold pt-10 mb-10 text-gradient">
          {t.title}
        </h1>
        <a
          className="a text-3xl font-semibold ptx"
          href={t.linkUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t.linkText}
        </a>
        <p className="mx-auto text-xl mt-10 ptx font-medium card px-10 p-10">
          {t.p1Before}
          <span className="ptx2 font-semibold">{t.p1Highlight}</span>
          {t.p1After} <br />
          <br />
          {t.p2Before}
          <span className="ptx2 font-semibold">{t.p2Highlight}</span>
          {t.p2After}
        </p>
      </div>
    </section>
  );
};

export default Thesis;
