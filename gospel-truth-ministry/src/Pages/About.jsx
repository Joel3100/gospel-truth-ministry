import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { t, language } = useLanguage();
  const paragraphs = t("ourStory.paragraphs");
  const beliefs = t("beliefs.items");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── i. PAGE HEADER ── */}
      <div className="py-16 bg-brand-900">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-300">
            Get To Know Us
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white font-heading md:text-5xl">
            About Us
          </h1>
          <p className="max-w-xl mx-auto leading-relaxed text-brand-200 font-amharicBody">
            {t("whoWeAre.paragraphs")[0].slice(0, 120)}...
          </p>
        </div>
      </div>

      {/* ── ii. OUR STORY ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl px-6 mx-auto">
          {/* Section label + heading */}
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-600">
              {t("ourStory.label")}
            </p>
            <h2 className="text-3xl font-bold font-heading text-brand-900 md:text-4xl">
              {t("ourStory.title")}
            </h2>
            <div className="w-16 h-px mx-auto mt-6 bg-brand-400" />
          </div>

          {/* Story paragraphs — replace with real history */}
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-gray-600 font-amharicBody">
            {Array.isArray(paragraphs) &&
              paragraphs.map((para, index) => <p key={index}>{para}</p>)}
          </div>

          {/* Mission + Vision boxes */}
          <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2">
            <div className="p-6 border bg-brand-50 border-brand-100 rounded-2xl">
              <p className="mb-2 text-xs font-medium tracking-widest uppercase text-brand-600">
                {t("mission.label")}
              </p>
              <h3 className="mb-3 text-xl font-bold font-heading text-brand-900">
                {t("mission.title")}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 font-amharicBody">
                {t("mission.content")}
              </p>
            </div>

            <div className="p-6 bg-brand-900 rounded-2xl">
              <p className="mb-2 text-xs font-medium tracking-widest uppercase text-brand-300">
                {t("vision.label")}
              </p>
              <h3 className="mb-3 text-xl font-bold text-white font-heading">
                {t("vision.title")}
              </h3>
              <p className="text-sm leading-relaxed text-brand-200 font-amharicBody">
                {t("vision.content")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── iii. WHAT WE BELIEVE ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl px-6 mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-600">
              {t("beliefs.label")}
            </p>
            <h2 className="mb-4 text-3xl font-bold font-heading text-brand-900 md:text-4xl">
              {t("beliefs.title")}
            </h2>
            <p className="max-w-xl mx-auto leading-relaxed text-gray-500">
              {t("beliefs.description")}
            </p>
            <div className="w-16 h-px mx-auto mt-6 bg-brand-400" />
          </div>

          {/* Belief cards grid */}
          <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3">
            {Array.isArray(beliefs) &&
              beliefs.map((belief) => (
                <div
                  key={belief.id}
                  className="p-6 transition-all duration-200 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-md hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl bg-brand-50 rounded-xl">
                    {belief.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-lg font-bold font-amharicHeading text-brand-900">
                    {belief.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm leading-relaxed text-gray-500 font-amharicBody">
                    {belief.summary}
                  </p>
                </div>
              ))}
          </div>

          {/* Link to full confession */}
          <div className="p-8 text-center bg-brand-900 rounded-2xl">
            <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-300">
              Go Deeper
            </p>
            <h3 className="mb-3 text-2xl font-bold text-white font-heading">
              Read Our Full Statement of Faith
            </h3>
            <p className="max-w-lg mx-auto mb-6 text-sm leading-relaxed text-brand-200 font-amharicBody">
              {language === "am"
                ? "ሙሉ የእምነት መግለጫን ለማንበብ ይህን ይጫኑ።"
                : "Our complete doctrinal statement covers every area of Christian belief in detail."}
            </p>
            <Link
              to="/beliefs"
              className="inline-block px-8 py-3 font-semibold transition-colors duration-200 bg-white rounded-lg text-brand-800 hover:bg-brand-100"
            >
              Read Full Confession →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
