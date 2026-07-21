import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.sermons"), path: "/sermons" },
    { name: t("nav.events"), path: "/events" },
    { name: t("nav.blog"), path: "/blog" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-white font-semibold border-b-2 border-brand-300 pb-1"
      : "text-brand-200 hover:text-white transition-colors duration-200";

  return (
    <nav className="sticky top-0 z-50 shadow-lg bg-brand-900">
      <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
        {/* ── LOGO + CHURCH NAME ── */}
        <Link to="/" className="flex items-center gap-3">
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

        {/* ── NAVIGATION LINKS (visible on desktop) ── */}
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

          {/* ── LANGUAGE TOGGLE BUTTON ── */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-brand-200 hover:text-white
                       border border-brand-700 hover:border-brand-400 rounded-lg
                       px-3 py-1.5 text-xs font-medium transition-all duration-200"
            aria-label="Toggle language"
          >
            <span className="text-base leading-none">🌐</span>
            {language === "am" ? "EN" : "አማ"}
          </button>
        </div>

        {/* ── HAMBURGER BUTTON (visible on mobile only) ── */}
        <button
          className="text-2xl text-white transition-colors md:hidden focus:outline-none hover:text-brand-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ── MOBILE DROPDOWN MENU (Only renders when menuOpen is true) ── */}
      {menuOpen && (
        <div className="flex flex-col gap-4 px-6 py-4 border-t md:hidden bg-brand-800 border-brand-700">
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

          {/* Language toggle in mobile menu too */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium transition-all duration-200 border rounded-lg text-brand-200 hover:text-white border-brand-700 w-fit"
          >
            🌐 {language === "am" ? "Switch to English" : "አማርኛ ቀይር"}
          </button>
        </div>
      )}
    </nav>
  );
}
