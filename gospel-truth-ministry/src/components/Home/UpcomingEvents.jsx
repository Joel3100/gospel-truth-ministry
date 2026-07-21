import { Link } from "react-router-dom";
import EventCard from "../EventCard";
import events from "../../data/events";
import { useLanguage } from "../../i18n/LanguageContext";

const upcomingEvents = events.slice(0, 3);

export default function UpcomingEvents() {
  const { t, fHeading, fBody } = useLanguage();

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-6xl px-6 mx-auto">
        {/* ── HEADER ROW ── title left, button right */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="mb-1 text-sm font-medium tracking-widest uppercase text-brand-600">
              {t("events.label")}
            </p>
            <h2
              className={`text-brand-900 text-3xl md:text-4xl font-bold ${fHeading}`}
            >
              {t("events.title")}
            </h2>
          </div>

          {/* Outlined button — matches reference image style */}
          <Link
            to="/events"
            className={`text-xs font-semibold uppercase tracking-widest
                       border border-brand-600 text-brand-600 px-4 py-2 rounded-lg
                       hover:bg-brand-600 hover:text-white transition-all duration-200
                       hidden sm:block ${fBody}`}
          >
            {t("events.viewAllBtn")}
          </Link>
        </div>

        {/* ── 3-COLUMN CARD GRID ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>

        {/* Mobile-only "View All" link — shows below cards on small screens */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/events"
            className={`text-brand-600 font-medium text-sm hover:text-brand-800
                       transition-colors duration-200 ${fBody}`}
          >
            {t("events.viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}
