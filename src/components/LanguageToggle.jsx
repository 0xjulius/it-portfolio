import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { lang, toggleLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const isEn = lang === "en";

  useEffect(() => {
    const handleScroll = () => {
      // Etsitään Home-osio sivulta
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const homeBottom = homeSection.getBoundingClientRect().bottom;
        // Jos Home-osion pohja on näytön yläreunan yläpuolella, piilotetaan nappi
        setIsVisible(homeBottom > 100);
      } else {
        // Jos osiota ei löydy (esim. eri sivulla), seurataan pelkkää pikselirarajaa
        setIsVisible(window.scrollY < 800);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Vaihda kieltä / Switch language"
      className={`fixed top-8 left-8 lg:left-12 z-[9999] w-24 h-12 rounded-full bg-[#00A3E0] shadow-xl shadow-sky-500/30 flex items-center justify-between px-3 transition-all duration-500 ease-in-out cursor-pointer border-none outline-none ${
        isVisible
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-90 pointer-events-none"
      }`}
    >
      {/* Taustatekstit */}
      <span className="text-xs font-bold text-white select-none">FIN</span>
      <span className="text-xs font-bold text-white select-none">ENG</span>

      {/* Liukuva valkoinen pallo */}
      <div
        className={`absolute top-1 left-1 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300 ease-in-out ${
          isEn ? "translate-x-12" : "translate-x-0"
        }`}
      >
        <span className="text-xs font-extrabold text-[#00A3E0] select-none">
          {isEn ? "ENG" : "FIN"}
        </span>
      </div>
    </button>
  );
};

export default LanguageToggle;
