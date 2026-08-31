import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import { FaYoutube, FaFacebook, FaTelegramPlane } from "react-icons/fa";
import { FiPhone, FiMapPin, FiGlobe } from "react-icons/fi";
import logo from "../../assets/logo.svg";

const quickLinks = [
  { key: "nav.home", path: "/" },
  { key: "nav.sermons", path: "/sermons" },
  { key: "nav.events", path: "/events" },
  { key: "nav.blog", path: "/blog" },
  { key: "nav.about", path: "/about" },
  { key: "nav.contact", path: "/contact" },
];

export default function Footer() {
  const { t, language, fBody } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="transition-colors duration-200 bg-brand-900 dark:bg-gray-950 text-brand-200">
      {/* ── MAIN FOOTER CONTENT ── */}
      <div className="grid max-w-6xl grid-cols-1 gap-12 px-6 mx-auto py-14 md:grid-cols-3">
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
            {t("footer.quickLinks")}
          </h3>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-brand-300 dark:text-gray-400 hover:text-white
                                 hover:translate-x-1 transition-all duration-200
                                 text-sm inline-block ${fBody}`}
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── COLUMN 3: Contact + Service Times ── */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-white font-heading">
              {t("footer.contactUs")}
            </h3>

            <ul className="flex flex-col gap-5 text-sm text-brand-300 dark:text-gray-400">
              {/* Phone 1 */}
              <li className="flex items-center gap-4">
                <FiPhone />
                <a
                  href="tel:+251917804407"
                  className="transition-colors hover:text-white"
                >
                  +251 917 804 407
                </a>
              </li>

              {/* Phone 2 */}
              <li className="flex items-center gap-4">
                <FiPhone />
                <a
                  href="tel:+251906202626"
                  className="transition-colors hover:text-white"
                >
                  +251 906 202 626
                </a>
              </li>

              {/* Location */}
              <li className="flex items-center gap-4">
                <FiMapPin />
                <span>{t("footer.location")}</span>
              </li>

              {/* Website */}
              <li className="flex items-center gap-4">
                <FiGlobe />
                <a
                  href="https://gospeltruthethopia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  gospeltruthethopia.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── BOTTOM COPYRIGHT BAR ── */}
      <div className="border border-brand-800">
        <div className="max-w-6xl px-6 py-4 mx-auto text-xs text-center text-brand-400 dark:text-gray-600">
          <p className="italic font-heading text-brand-400">
            © {currentYear} Gospel Truth Ministry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
