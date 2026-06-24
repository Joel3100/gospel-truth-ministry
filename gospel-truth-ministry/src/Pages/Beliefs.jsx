import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function Beliefs() {
  const { t } = useLanguage();
  const beliefs = t("beliefs.items");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── PAGE HEADER ── */}
      <div className="py-16 bg-brand-900">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-300">
            What We Stand On
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white font-heading md:text-5xl">
            Statement of Faith
          </h1>

          {/* Back to About */}
          <Link
            to="/about"
            className="inline-block mt-6 text-sm transition-colors duration-200 text-brand-300 hover:text-white"
          >
            ← Back to About
          </Link>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-4xl px-6 py-16 mx-auto">
        <div className="flex flex-col gap-12">
          {Array.isArray(beliefs) &&
            beliefs.map((belief, index) => (
              <div key={belief.id} className="flex flex-col gap-4">
                {/* Number + Title */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-sm font-bold text-white rounded-full bg-brand-600">
                    {index + 1}
                  </div>
                  <h2 className="text-2xl font-bold text-brand-900 font-amharicHeading">
                    {belief.title}
                  </h2>
                </div>

                <div className="w-full h-px bg-gray-200 ml-14" />

                {/* Full content */}
                <p className="text-base leading-relaxed text-gray-600 ml-14 font-amharicBody">
                  {belief.content}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
