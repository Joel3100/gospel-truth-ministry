import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";

export default function CallToAction() {
  const { t, fHeading, fBody } = useLanguage();
  
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-3xl px-6 mx-auto text-center">
        <p className="mb-4 text-sm font-medium tracking-widest uppercase text-brand-300">
          {t('callToAction.eyebrow')}
        </p>
        <h2 className="mb-6 text-3xl font-bold leading-tight text-white font-heading md:text-5xl">
          {t('callToAction.title')}
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-brand-200">
          {t('callToAction.description')}
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="px-8 py-3 font-semibold transition-colors duration-200 bg-white rounded-lg text-brand-800 hover:bg-brand-100"
          >
            {t('callToAction.directions')}
          </Link>
          <Link
            to="/sermons"
            className="px-8 py-3 font-semibold text-white transition-colors duration-200 border-2 border-white rounded-lg hover:bg-white hover:text-brand-800"
          >
            {t('callToAction.watchOnline')}
          </Link>
        </div>

        <p className="mt-8 text-sm text-brand-400">
          {t('callToAction.location')}
        </p>
      </div>
    </section>
  );
}
