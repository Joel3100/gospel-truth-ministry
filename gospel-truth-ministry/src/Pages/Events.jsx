import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import EventCard from "../components/EventCard";
import events from "../data/events";

const today = new Date();
today.setHours(0, 0, 0, 0);

const upcomingEvents = events.filter((e) => new Date(e.date) >= today);
const categories = ["All", ...new Set(events.map((e) => e.category))];

export default function Events() {
  const [selected, setSelected] = useState("All");
  const { t, fBody, language } = useLanguage();

  const filtered =
    selected === "All"
      ? upcomingEvents
      : upcomingEvents.filter((e) => e.category === selected);

  return (
    <div className="min-h-screen transition-colors duration-200 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="py-16 transition-colors duration-200 bg-brand-900 dark:bg-gray-950">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-300">
            {t("events.pageLabel")}
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white font-heading md:text-5xl">
            {t("events.pageTitle")}
          </h1>
          <p
            className={`text-brand-200 max-w-xl mx-auto leading-relaxed ${fBody}`}
          >
            {t("events.pageDesc")}
          </p>
        </div>
      </div>

      <div className="max-w-6xl px-6 py-12 mx-auto">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium
                          transition-all duration-200
                          ${
                            selected === cat
                              ? "bg-brand-600 text-white shadow-sm"
                              : `bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300
                               hover:bg-gray-100 dark:hover:bg-gray-700
                               border border-gray-200 dark:border-gray-600`
                          }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className={`text-gray-400 dark:text-gray-500 text-sm mb-6 ${fBody}`}>
          {filtered.length}{" "}
          {language === "am"
            ? `ቀጣይ መርሃ ግብር${filtered.length !== 1 ? "ዎች" : ""}`
            : `upcoming event${filtered.length !== 1 ? "s" : ""}`}
          {selected !== "All" && ` — ${selected}`}
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="mb-4 text-4xl">📅</p>
            <p
              className={`text-gray-500 dark:text-gray-400 font-medium ${fBody}`}
            >
              {t("events.notFound")}
            </p>
            <button
              onClick={() => setSelected("All")}
              className="mt-4 text-sm text-brand-600 dark:text-brand-400 hover:underline"
            >
              {t("events.viewAllLink")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
