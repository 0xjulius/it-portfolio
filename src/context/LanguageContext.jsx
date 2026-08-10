import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("fi"); // Oletuskieli suomi ('fi' tai 'en')

  const toggleLanguage = () => {
    setLang((prev) => (prev === "fi" ? "en" : "fi"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
