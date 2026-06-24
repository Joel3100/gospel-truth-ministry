import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";

export default function WhoWeAre() {
  const { t } = useLanguage();
  const paragraphs = t("whoWeAre.paragraphs");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl px-6 mx-auto text-center">
        {/* ── SECTION LABEL ── */}
        <p className="mb-3 text-sm font-medium tracking-widest uppercase text-brand-600">
          {t("whoWeAre.label")}
        </p>

        {/* ── HEADING ── */}
        <h2 className="mb-6 text-3xl font-bold font-heading text-brand-900 md:text-4xl">
          {t("whoWeAre.title")}
        </h2>

        {/* ── DECORATIVE DIVIDER ── */}
        <div className="w-16 h-px mx-auto mb-8 bg-brand-400" />

        {/* ── PARAGRAPHS ── */}
        <div className="flex flex-col gap-5 text-lg leading-relaxed text-gray-600 font-amharicBody">
          {Array.isArray(paragraphs) &&
            paragraphs.map((para, index) => <p key={index}>{para}</p>)}
        </div>

        {/* ── BUTTON ── */}
        <div className="mt-10">
          <Link
            to="/about"
            className="inline-block px-8 py-3 font-semibold text-white transition-colors duration-200 rounded-lg bg-brand-600 hover:bg-brand-700"
          >
            Learn More About Us →
          </Link>
        </div>
      </div>
    </section>
  );
}
