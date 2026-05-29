import { useState } from "react";
import events from "../data/events";
import EventCard from "../components/EventCard";

const today = new Date();
today.setHours(0, 0, 0, 0);

const upcomingEvents = events.filter((event) => {
  const eventDate = new Date(event.date);
  return eventDate >= today;
});

const categories = ["All", ...new Set(events.map((event) => event.category))];

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
