import { createContext, useContext, useState, useEffect } from "react";
import translations from "./translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // ── LANGUAGE STATE: Default language is Amharic ──
  const [language, setLanguage] = useState("am");

  // ── THEME STATE ──
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // Save to localStorage so it persists on refresh
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "am" ? "en" : "am"));

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // ── TRANSLATION FUNCTION ──
  const t = (keyPath) => {
    const keys = keyPath.split(".");
    let value = translations[language];
    for (const key of keys) {
      value = value?.[key];
      if (value === undefined) return keyPath;
    }
    return value;
  };

  // ── FONT HELPERS ──
  const isAmharic = language === "am";
  const fHeading = isAmharic ? "font-amharicHeading" : "font-heading";
  const fBody = isAmharic ? "font-amharicBody" : "";

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        theme,
        setTheme,
        toggleTheme,
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
