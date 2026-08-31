import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";

export default function WhoWeAre() {
  const { t, fHeading, fBody } = useLanguage();
  const paragraphs = t("whoWeAre.paragraphs");

  return (
    <section className="py-24 transition-colors duration-200 bg-white dark:bg-gray-900">
      <div className="max-w-3xl px-6 mx-auto text-center">
        <p className="mb-3 text-sm font-medium tracking-widest uppercase text-brand-600 dark:text-brand-400">
          {t("whoWeAre.label")}
        </p>
        <h2
          className={`text-brand-900 dark:text-white text-3xl md:text-4xl
                       font-bold mb-6 ${fHeading}`}
        >
          {t("whoWeAre.title")}
        </h2>
        <div className="w-16 h-px mx-auto mb-8 bg-brand-400" />

        <div
          className={`flex flex-col gap-5 leading-relaxed text-lg
                        text-gray-600 dark:text-gray-300 ${fBody}`}
        >
          {Array.isArray(paragraphs) &&
            paragraphs.map((para, i) => <p key={i}>{para}</p>)}
        </div>

        <div className="mt-10">
          <Link
            to="/about"
            className="inline-block px-8 py-3 font-semibold text-white transition-colors duration-200 rounded-lg bg-brand-600 hover:bg-brand-700"
          >
            {t("whoWeAre.learnMore")}
          </Link>
        </div>
      </div>
    </section>
  );
}
