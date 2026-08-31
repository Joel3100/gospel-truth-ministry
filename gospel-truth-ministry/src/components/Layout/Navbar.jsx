import { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import { FiSettings, FiSun, FiMoon } from "react-icons/fi";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  const { t, language, setLanguage, theme, setTheme } = useLanguage();

  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Settings dropdown reference
  const settingsRef = useRef(null);

  // Close settings dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setSettingsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.sermons"), path: "/sermons" },
    { name: t("nav.events"), path: "/events" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-white font-semibold border-b-2 border-brand-300 pb-1"
      : "text-brand-200 hover:text-white transition-colors duration-200";

  // Change Language
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setSettingsOpen(false);
  };

  // Change Theme
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setSettingsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 transition-colors duration-200 shadow-lg bg-brand-900 dark:bg-gray-950">
      <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
        {/* ── LOGO + CHURCH NAME ── */}
        <Link to="/" className="flex items-center gap-3 w-fit">
          <img
            src={logo}
            alt="Gospel Truth Ministry Logo"
            className="object-contain w-10 h-10"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-white font-heading">
              Gospel Truth
            </span>
            <span className="text-xs tracking-widest uppercase text-brand-300">
              Ministry
            </span>
          </div>
        </Link>
        
        {/* ── RIGHT SIDE ── */}
        <div className="flex items-center gap-4">
          {/* ── DESKTOP NAV LINKS ── */}{" "}
          <div className="items-center hidden gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={linkStyle}
                end={link.path === "/"}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          
          {/* ── SETTINGS ── */}
          <div ref={settingsRef} className="relative">
            {/* Settings button */}
            <button
              type="button"
              onClick={() => setSettingsOpen((prev) => !prev)}
              className={`flex items-center justify-center w-9 h-9 rounded-lg text-brand-200 hover:text-white hover:bg-brand-800 dark:hover:bg-gray-800 transition-all duration-200 ${settingsOpen ? "bg-brand-800 dark:bg-gray-800 text-white" : ""}`}
              aria-label="Settings"
              aria-expanded={settingsOpen}
            >
              <FiSettings
                className={`text-lg transition-transform duration-300 ${settingsOpen ? "rotate-45" : "rotate-0"}`}
              />
            </button>
            
            {/* Settings dropdown */}
            {settingsOpen && (
              <div className="absolute right-0 z-50 w-56 overflow-hidden bg-white border border-gray-100 shadow-xl top-12 dark:bg-gray-800 rounded-2xl dark:border-gray-700">
                {/* ── LANGUAGE ── */}
                <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                  <p className="flex items-center gap-2 mb-3 text-xs font-medium tracking-widest text-gray-400 uppercase dark:text-gray-500">
                    <span>🌐</span>
                    {language === "am" ? "ቋንቋ" : "Language"}
                  </p>
                  
                  <div className="flex overflow-hidden border border-gray-200 rounded-lg dark:border-gray-600">
                    {/* Amharic */}
                    <button
                      type="button"
                      onClick={() => handleLanguageChange("am")}
                      className={`flex-1 py-2 text-sm font-medium transition-all duration-200 ${language === "am" ? "bg-brand-600 text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"}`}
                    >
                      አማርኛ
                    </button>
                    
                    {/* English */}
                    <button
                      type="button"
                      onClick={() => handleLanguageChange("en")}
                      className={`flex-1 py-2 text-sm font-medium transition-all duration-200 ${language === "en" ? "bg-brand-600 text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"}`}
                    >
                      English
                    </button>
                  </div>
                </div>
                
                {/* ── THEME ── */}
                <div className="p-4">
                  <p className="flex items-center gap-2 mb-3 text-xs font-medium tracking-widest text-gray-400 uppercase dark:text-gray-500">
                    {theme === "dark" ? <FiMoon /> : <FiSun />}
                    {language === "am" ? "መልክ" : "Theme"}
                  </p>
                  
                  <div className="flex overflow-hidden border border-gray-200 rounded-lg dark:border-gray-600">
                    {/* Light */}
                    <button
                      type="button"
                      onClick={() => handleThemeChange("light")}
                      className={`flex-1 py-2 text-sm font-medium flex items-center justify-center gap-1.5 transition-all duration-200 ${theme === "light" ? "bg-brand-600 text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"}`}
                    >
                      <FiSun className="text-sm" />
                      {language === "am" ? "ቀን" : "Light"}
                    </button>
                    
                    {/* Dark */}
                    <button
                      type="button"
                      onClick={() => handleThemeChange("dark")}
                      className={`flex-1 py-2 text-sm font-medium flex items-center justify-center gap-1.5 transition-all duration-200 ${theme === "dark" ? "bg-brand-600 text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"}`}
                    >
                      <FiMoon className="text-sm" />
                      {language === "am" ? "ሌሊት" : "Dark"}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* ── MOBILE HAMBURGER ── */}
          <button
            type="button"
            className="text-2xl text-white transition-colors md:hidden focus:outline-none hover:text-brand-300"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      
      {/* ── MOBILE NAVIGATION ── */}
      {menuOpen && (
        <div className="flex flex-col gap-4 px-6 py-4 border-t md:hidden bg-brand-800 dark:bg-gray-900 border-brand-700 dark:border-gray-700">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={linkStyle}
              end={link.path === "/"}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
