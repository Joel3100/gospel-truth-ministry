import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { t, fHeading, fBody } = useLanguage();
  const paragraphs = t("ourStory.paragraphs");
  const beliefs = t("beliefs.items");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="py-16 bg-brand-900">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-300">
            {t("about.eyebrow")}
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white font-heading md:text-5xl">
            {t("about.title")}
          </h1>
          <p
            className={`text-brand-200 max-w-xl mx-auto leading-relaxed ${fBody}`}
          >
            {t("about.description")}
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl px-6 mx-auto">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-600">
              {t("ourStory.label")}
            </p>
            <h2
              className={`text-brand-900 text-3xl md:text-4xl font-bold ${fHeading}`}
            >
              {t("ourStory.title")}
            </h2>
            <div className="w-16 h-px mx-auto mt-6 bg-brand-400" />
          </div>

          <div
            className={`flex flex-col gap-6 text-gray-600 leading-relaxed text-lg ${fBody}`}
          >
            {Array.isArray(paragraphs) &&
              paragraphs.map((para, i) => <p key={i}>{para}</p>)}
          </div>

          {/* Mission + Vision */}
          <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2">
            <div className="p-6 border bg-brand-50 border-brand-100 rounded-2xl">
              <p className="mb-2 text-xs font-medium tracking-widest uppercase text-brand-600">
                {t("mission.label")}
              </p>
              <h3
                className={`text-brand-900 text-xl font-bold mb-3 ${fHeading}`}
              >
                {t("mission.title")}
              </h3>
              <p className={`text-gray-600 text-sm leading-relaxed ${fBody}`}>
                {t("mission.content")}
              </p>
            </div>
            <div className="p-6 bg-brand-900 rounded-2xl">
              <p className="mb-2 text-xs font-medium tracking-widest uppercase text-brand-300">
                {t("vision.label")}
              </p>
              <h3 className={`text-white text-xl font-bold mb-3 ${fHeading}`}>
                {t("vision.title")}
              </h3>
              <p className={`text-brand-200 text-sm leading-relaxed ${fBody}`}>
                {t("vision.content")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl px-6 mx-auto">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-600">
              {t("beliefs.label")}
            </p>
            <h2
              className={`text-brand-900 text-3xl md:text-4xl font-bold mb-4 ${fHeading}`}
            >
              {t("beliefs.mainTitle")}
            </h2>
            <p
              className={`text-gray-500 max-w-xl mx-auto leading-relaxed ${fBody}`}
            >
              {t("beliefs.mainDesc")}
            </p>
            <div className="w-16 h-px mx-auto mt-6 bg-brand-400" />
          </div>

          <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3">
            {Array.isArray(beliefs) &&
              beliefs.map((belief) => (
                <div
                  key={belief.id}
                  className="p-6 transition-all duration-200 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl bg-brand-50 rounded-xl">
                    {belief.icon}
                  </div>
                  <h3
                    className={`font-bold text-brand-900 text-lg mb-2 ${fHeading}`}
                  >
                    {belief.title}
                  </h3>
                  <p
                    className={`text-gray-500 text-sm leading-relaxed ${fBody}`}
                  >
                    {belief.summary}
                  </p>
                </div>
              ))}
          </div>

          {/* Full confession CTA */}
          <div className="p-8 text-center bg-brand-900 rounded-2xl">
            <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-300">
              {t("about.goDeeper")}
            </p>
            <h3 className={`text-white text-2xl font-bold mb-3 ${fHeading}`}>
              {t("about.fullFaith")}
            </h3>
            <p
              className={`text-brand-200 text-sm leading-relaxed max-w-lg mx-auto mb-6 ${fBody}`}
            >
              {t("about.faithDesc")}
            </p>
            <Link
              to="/beliefs"
              className="inline-block px-8 py-3 font-semibold transition-colors duration-200 bg-white rounded-lg text-brand-800 hover:bg-brand-100"
            >
              {t("about.readFull")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
