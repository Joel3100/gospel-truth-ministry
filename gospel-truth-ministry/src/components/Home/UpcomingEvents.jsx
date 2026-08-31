import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import EventCard from "../EventCard";
import events from "../../data/events";

const today = new Date();
today.setHours(0, 0, 0, 0);

const upcomingEvents = events
  .filter((e) => new Date(e.date) >= today)
  .slice(0, 3);

export default function UpcomingEvents() {
  const { t, fHeading, fBody } = useLanguage();

  return (
    <section className="py-20 transition-colors duration-200 bg-stone-50 dark:bg-gray-800">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="mb-1 text-sm font-medium tracking-widest uppercase text-brand-600 dark:text-brand-400">
              {t("events.label")}
            </p>
            <h2
              className={`text-brand-900 dark:text-white text-3xl md:text-4xl
                           font-bold ${fHeading}`}
            >
              {t("events.title")}
            </h2>
          </div>
          <Link
            to="/events"
            className={`text-xs font-semibold uppercase tracking-widest
                           border border-brand-600 text-brand-600 dark:text-brand-400
                           dark:border-brand-400 px-4 py-2 rounded-lg
                           hover:bg-brand-600 hover:text-white transition-all duration-200
                           hidden sm:block ${fBody}`}
          >
            {t("events.viewAllBtn")}
          </Link>
        </div>

        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="mb-4 text-4xl">📅</p>
            <p className={`text-gray-500 dark:text-gray-400 ${fBody}`}>
              {t("events.notFound")}
            </p>
          </div>
        )}

        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/events"
            className={`text-brand-600 dark:text-brand-400 font-medium text-sm
                           hover:text-brand-800 transition-colors duration-200 ${fBody}`}
          >
            {t("events.viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}
