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

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "am" ? "en" : "am"));

  const isAmharic = language === "am";
  const fHeading = isAmharic ? "font-amharicHeading" : "font-heading";
  const fBody = isAmharic ? "font-amharicBody" : "";

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        fHeading,
        fBody,
        isAmharic,
      }}
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
