import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const Beliefs = () => {
  const { t, fHeading, fBody } = useLanguage();
  const beliefs = t("beliefs.items");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16 bg-brand-900">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-300">
            {t("beliefs.eyebrow")}
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white font-heading md:text-5xl">
            {t("beliefs.title")}
          </h1>
          <p
            className={`text-brand-200 max-w-xl mx-auto leading-relaxed ${fBody}`}
          >
            {t("beliefs.description")}
          </p>
          <Link
            to="/about"
            className="inline-block mt-4 text-sm transition-colors duration-200 text-brand-300 hover:text-white"
          >
            {t("beliefs.backToAbout")}
          </Link>
        </div>
      </div>

      <div className="max-w-4xl px-6 py-16 mx-auto">
        <div className="flex flex-col gap-12">
          {Array.isArray(beliefs) &&
            beliefs.map((belief, index) => (
              <div key={belief.id} className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-sm font-bold text-white rounded-full bg-brand-600">
                    {index + 1}
                  </div>
                  <h2
                    className={`text-2xl font-bold text-brand-900 ${fHeading}`}
                  >
                    {belief.title}
                  </h2>
                </div>

                <div className="w-full h-px bg-gray-200 ml-14" />

                <p
                  className={`ml-14 text-gray-600 leading-relaxed text-base ${fBody}`}
                >
                  {belief.content}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Beliefs;
