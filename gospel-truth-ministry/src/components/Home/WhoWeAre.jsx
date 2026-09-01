import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";

export default function WhoWeAre() {
  const { t, fHeading, fBody } = useLanguage();
  const paragraphs = t("whoWeAre.paragraphs");

  return (
    <section className="py-16 transition-colors duration-200 bg-white md:py-20 dark:bg-gray-900">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="grid items-start grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          {/* ── LEFT: TEXT ── */}
          <div>
            <p className="mb-3 text-sm font-medium tracking-widest uppercase text-brand-600 dark:text-brand-400">
              {t("whoWeAre.label")}
            </p>

            <h2
              className={`text-brand-900 dark:text-white text-3xl md:text-4xl
                           font-bold mb-5 ${fHeading}`}
            >
              {t("whoWeAre.title")}
            </h2>

            <div className="h-px mb-6 w-14 bg-brand-400" />

            <div
              className={`flex flex-col gap-5 leading-relaxed text-base
                            text-gray-600 dark:text-gray-300 ${fBody}`}
            >
              {Array.isArray(paragraphs) &&
                paragraphs.map((para, i) => <p key={i}>{para}</p>)}
            </div>

            <div className="mt-8">
              <Link
                to="/about"
                className="inline-block py-3 font-semibold text-white transition-colors duration-200 rounded-lg bg-brand-600 hover:bg-brand-700 px-7"
              >
                {t("whoWeAre.learnMore")}
              </Link>
            </div>
          </div>

          {/* ── RIGHT: IMAGE ── */}
          <div className="relative mt-4 md:mt-8">
            {/* Decorative frame */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-brand-600 rounded-2xl md:translate-x-4 md:translate-y-4" />

            <img
              src="/hero-channel-banner.jpg"
              alt="Gospel Truth Ministry Church Building"
              className="relative z-10 object-cover w-full h-56 shadow-xl rounded-2xl sm:h-64 md:h-72 lg:h-80"
            />

            {/* Floating label */}
            <div className="absolute z-20 px-4 py-2 bg-white shadow-lg bottom-4 left-4 dark:bg-gray-800 rounded-xl">
              <p className="text-xs font-bold text-brand-900 dark:text-white">
                Gospel Truth Ministry
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Jimma, Ethiopia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
