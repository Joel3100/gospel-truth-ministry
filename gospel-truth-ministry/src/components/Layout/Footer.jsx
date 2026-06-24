import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FaYoutube, FaFacebook, FaTelegramPlane } from "react-icons/fa";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Sermons", path: "/sermons" },
  { name: "Events", path: "/events" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-brand-200">
      {/* ── MAIN FOOTER CONTENT ── */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1.5fr] gap-x-16 gap-y-12">
        {/* ── COLUMN 1: Identity ── */}
        <div className="flex flex-col gap-4">
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

          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://www.youtube.com/@dawitfassilministries"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-xl transition-colors duration-200 text-brand-300 hover:text-red-400"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100064395113270&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-xl transition-colors duration-200 text-brand-300 hover:text-blue-400"
            >
              <FaFacebook />
            </a>
            <a
              href="https://t.me/DawitFassilMinistry"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="text-xl transition-colors duration-200 text-brand-300 hover:text-sky-400"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </div>

        {/* ── COLUMN 2: Quick Links ── */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-white font-heading">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── COLUMN 3: Contact + Service Times ── */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-white font-heading">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-brand-300">
              <li>📍 Jimma, Ethiopia</li>
              <li>📞 +2519-84-74-43-25</li>
              <li>
                <a
                  href="mailto:eyuela3100@gmail.com"
                  className="transition-colors duration-200 hover:text-white"
                >
                  ✉️ eyuela3100@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── BOTTOM COPYRIGHT BAR ── */}
      <div className="border border-brand-800">
        <div className="max-w-6xl px-6 py-4 mx-auto text-xs text-center text-brand-400">
          <p className="italic font-heading text-brand-400">
            © {currentYear} Gospel Truth Ministry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
