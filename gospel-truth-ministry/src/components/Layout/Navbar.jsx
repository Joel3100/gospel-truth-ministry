import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Sermons", path: "/sermons" },
  { name: "Events", path: "/events" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        </div>
      )}
    </nav>
  );
}
