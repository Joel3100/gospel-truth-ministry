import { useParams, Link, useNavigate } from "react-router-dom";
import events from "../data/events";
import { useLanguage } from "../i18n/LanguageContext";

const categoryColors = {
  Worship: "bg-brand-100  text-brand-700",
  Teaching: "bg-blue-100   text-blue-700",
  Study: "bg-amber-100  text-amber-700",
  Prayer: "bg-purple-100 text-purple-700",
  Youth: "bg-green-100  text-green-700",
  Special: "bg-rose-100   text-rose-700",
};

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === id);
  const { t, fHeading, fBody } = useLanguage();

  if (!event) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-50">
        <p className="text-6xl">🔍</p>
        <h2 className={`text-brand-900 text-2xl font-bold ${fHeading}`}>
          {t("events.notFoundMsg")}
        </h2>
        <Link
          to="/events"
          className="px-6 py-2 font-medium text-white transition-colors duration-200 rounded-lg bg-brand-600 hover:bg-brand-700"
        >
          {t("events.backToEvents")}
        </Link>
      </div>
    );
  }

  // ── HELPERS ──
  const dateObj = new Date(event.date);
  const month = dateObj.toLocaleString("en", { month: "short" }).toUpperCase();
  const day = dateObj.getDate();
  const fullDate = dateObj.toLocaleDateString("en", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative overflow-hidden h-72 md:h-96">
        {event.image ? (
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${event.image})` }}
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br
            ${
              event.category === "Youth"
                ? "from-green-900  to-green-700"
                : event.category === "Study"
                  ? "from-amber-900  to-amber-700"
                  : event.category === "Prayer"
                    ? "from-purple-900 to-purple-700"
                    : event.category === "Special"
                      ? "from-rose-900   to-rose-700"
                      : "from-brand-900  to-brand-700"
            }`}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />

        <button
          onClick={() => navigate(-1)}
          className="absolute z-10 flex items-center gap-2 px-4 py-2 text-sm transition-colors duration-200 rounded-full top-6 left-6 text-white/80 hover:text-white bg-black/30 hover:bg-black/50"
        >
          ← {t("events.backToEvents").replace("←", "").trim()}
        </button>

        <div className="absolute z-10 flex items-center gap-4 bottom-6 left-6">
          <div className="px-4 py-3 text-center bg-white shadow-lg rounded-xl">
            <p className="text-xs font-bold leading-none tracking-wide uppercase text-brand-600">
              {month}
            </p>
            <p className="mt-1 text-3xl font-bold leading-none text-brand-900">
              {day}
            </p>
          </div>
          <div>
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full
                             ${categoryColors[event.category] ?? "bg-gray-100 text-gray-700"}`}
            >
              {event.category}
            </span>
            <h1
              className={`text-white text-2xl md:text-3xl font-bold mt-2 
                           drop-shadow-lg max-w-lg ${fHeading}`}
            >
              {event.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Detail content */}
      <div className="max-w-4xl px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Description */}
          <div className="md:col-span-2">
            <h2 className={`text-brand-900 text-xl font-bold mb-4 ${fHeading}`}>
              {t("events.about")}
            </h2>
            <div className="w-10 h-px mb-6 bg-brand-400" />
            {event.description.split("\n").map(
              (para, i) =>
                para.trim() && (
                  <p
                    key={i}
                    className={`text-gray-600 leading-relaxed mb-4 ${fBody}`}
                  >
                    {para.trim()}
                  </p>
                ),
            )}
          </div>

          {/* Info card */}
          <div className="flex flex-col gap-5 p-6 bg-white border border-gray-100 shadow-sm rounded-2xl h-fit">
            <h3 className={`text-brand-900 font-bold text-lg ${fHeading}`}>
              {t("events.details")}
            </h3>

            {[
              { label: t("events.date"), value: fullDate },
              { label: t("events.time"), value: event.time },
              { label: t("events.location"), value: event.location },
              { label: t("events.category"), value: event.category },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                <p className="text-xs font-medium tracking-wide text-gray-400 uppercase">
                  {item.label}
                </p>
                <p className={`text-gray-800 font-medium text-sm ${fBody}`}>
                  {item.value}
                </p>
              </div>
            ))}

            <Link
              to="/contact"
              className="w-full py-3 mt-2 text-sm font-semibold text-center text-white transition-colors duration-200 rounded-lg bg-brand-600 hover:bg-brand-700"
            >
              {t("events.contactBtn")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
