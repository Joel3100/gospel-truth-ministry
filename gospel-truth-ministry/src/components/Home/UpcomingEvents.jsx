import { Link } from "react-router-dom";
import EventCard from "../EventCard";
import events from "../../data/events";

const upcomingEvents = events.slice(0, 3);

export default function UpcomingEvents() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-6xl px-6 mx-auto">
        {/* ── HEADER ROW ── title left, button right */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="mb-1 text-sm font-medium tracking-widest uppercase text-brand-600">
              What's Coming
            </p>
            <h2 className="text-3xl font-bold font-heading text-brand-900 md:text-4xl">
              Upcoming Events
            </h2>
          </div>

          {/* Outlined button — matches reference image style */}
          <Link
            to="/events"
            className="hidden px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-200 border rounded-lg border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white sm:block"
          >
            View All Events
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
            className="text-sm font-medium transition-colors duration-200 text-brand-600 hover:text-brand-800"
          >
            View All Events →
          </Link>
        </div>
      </div>
    </section>
  );
}
