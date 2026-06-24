/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import translations from "./translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Default language is Amharic
  const [language, setLanguage] = useState("am");

  const t = (keyPath) => {
    const keys = keyPath.split(".");
    let value = translations[language];

    for (const key of keys) {
      value = value?.[key];
      if (value === undefined) return keyPath; // fallback: show key if missing
    }

    return value;
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "am" ? "en" : "am"));
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
};
