import React, { createContext, useContext, useState } from "react";

import en from "../i18n/en";
import kn from "../i18n/kn";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "kn" : "en"));
  };

  const text = lang === "en" ? en : kn;

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, text }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
