import { useState } from "react";
import { Link } from "react-router-dom";
import events from "../data/events";

const today = new Date();
today.setHours(0, 0, 0, 0);

const upcomingEvents = events.filter((event) => {
  const eventDate = new Date(event.date);
  return eventDate >= today;
});

const categories = ["All", ...new Set(events.map((event) => event.category))];

const categoryColors = {
  Worship: "bg-brand-100 text-brand-700",
  Teaching: "bg-blue-100 text-blue-700",
  Study: "bg-amber-100 text-amber-700",
  Prayer: "bg-purple-100 text-purple-700",
  Youth: "bg-green-100 text-green-700",
  Special: "bg-rose-100 text-rose-700",
};

const EventCard = ({ id, title, date, time, category, image }) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("en", { month: "short" }).toUpperCase();
  const day = dateObj.getDate();

  return (
    <Link to={`/events/${id}`} className="block group">
      <div className="relative overflow-hidden transition-all duration-300 shadow-sm rounded-2xl h-72 hover:shadow-xl">
        {/* Background */}
        {image ? (
          <div
            className="absolute inset-0 transition-transform duration-700 bg-center bg-cover group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br transition-transform 
                        duration-700 group-hover:scale-105
                        ${
                          category === "Youth"
                            ? "from-green-900  to-green-700"
                            : category === "Study"
                              ? "from-amber-900  to-amber-700"
                              : category === "Prayer"
                                ? "from-purple-900 to-purple-700"
                                : category === "Special"
                                  ? "from-rose-900   to-rose-700"
                                  : "from-brand-900  to-brand-700"
                        }`}
          />
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Date badge */}
        <div
          className="absolute top-3 right-3 bg-white rounded-xl px-3 py-2
                        text-center shadow-lg min-w-[48px]"
        >
          <p className="text-xs font-bold leading-none tracking-wide uppercase text-brand-600">
            {month}
          </p>
          <p className="mt-1 text-2xl font-bold leading-none text-brand-900">
            {day}
          </p>
        </div>

        {/* Event info */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full
                           ${categoryColors[category] ?? "bg-gray-100 text-gray-700"}`}
          >
            {category}
          </span>
          <h3 className="mt-2 mb-1 text-lg font-bold leading-snug text-white transition-colors font-heading group-hover:text-brand-200">
            {title}
          </h3>
          <p className="text-xs text-white/60">{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default function Events() {
  const [selected, setSelected] = useState("All");

  const filtered =
    selected === "All"
      ? upcomingEvents
      : upcomingEvents.filter((e) => e.category === selected);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── PAGE HEADER ── */}
      <div className="py-16 bg-brand-900">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-300">
            What's Happening
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white font-heading md:text-5xl">
            Events
          </h1>
          <p className="max-w-xl mx-auto leading-relaxed text-brand-200">
            Join us throughout the week. Every gathering is an opportunity to
            grow in grace and community.
          </p>
        </div>
      </div>

      <div className="max-w-6xl px-6 py-12 mx-auto">
        {/* ── CATEGORY FILTER TABS ── */}
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
                              : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                          }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── RESULTS COUNT ── */}
        <p className="mb-6 text-sm text-gray-400">
          {filtered.length} upcoming event{filtered.length !== 1 ? "s" : ""}
          {selected !== "All" && ` in ${selected}`}
        </p>

        {/* ── EVENTS GRID ── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        ) : (
          /* ── EMPTY STATE ── */
          <div className="py-20 text-center">
            <p className="mb-4 text-4xl">📅</p>
            <p className="font-medium text-gray-500">
              No upcoming {selected !== "All" ? selected : ""} events right now.
            </p>
            <button
              onClick={() => setSelected("All")}
              className="mt-4 text-sm text-brand-600 hover:underline"
            >
              View all events
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
