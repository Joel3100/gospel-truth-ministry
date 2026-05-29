import { useParams, Link, useNavigate } from "react-router-dom";
import events from "../data/events";

export default function EventLDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-50">
        <p className="text-6xl">🔍</p>
        <h2 className="text-2xl font-bold font-heading text-brand-900">
          Event Not Found
        </h2>
        <p className="text-gray-500">
          This event doesn't exist or may have been removed.
        </p>
        <Link
          to="/events"
          className="px-6 py-2 font-medium text-white transition-colors duration-200 rounded-lg bg-brand-600 hover:bg-brand-700"
        >
          ← Back to Events
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

  const categoryColors = {
    Worship: "bg-brand-100  text-brand-700",
    Teaching: "bg-blue-100   text-blue-700",
    Study: "bg-amber-100  text-amber-700",
    Prayer: "bg-purple-100 text-purple-700",
    Youth: "bg-green-100  text-green-700",
    Special: "bg-rose-100   text-rose-700",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── HERO / IMAGE SECTION ── */}
      <div className="relative overflow-hidden h-72 md:h-96">
        {/* Background */}
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Back button — top left */}
        <button
          onClick={() => navigate(-1)}
          className="absolute z-10 flex items-center gap-2 px-4 py-2 text-sm transition-colors duration-200 rounded-full top-6 left-6 text-white/80 hover:text-white bg-black/30 hover:bg-black/50"
        >
          ← Back
        </button>

        {/* Date badge — bottom left of hero */}
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
            <h1 className="max-w-lg mt-2 text-2xl font-bold text-white font-heading md:text-3xl drop-shadow-lg">
              {event.title}
            </h1>
          </div>
        </div>
      </div>

      {/* ── DETAIL CONTENT ── */}
      <div className="max-w-4xl px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* ── LEFT: Description ── */}
          <div className="md:col-span-2">
            <h2 className="mb-4 text-xl font-bold font-heading text-brand-900">
              About This Event
            </h2>
            <div className="w-10 h-px mb-6 bg-brand-400" />
            {event.description.split("\n").map(
              (paragraph, i) =>
                paragraph.trim() && (
                  <p key={i} className="mb-4 leading-relaxed text-gray-600">
                    {paragraph.trim()}
                  </p>
                ),
            )}
          </div>

          {/* ── RIGHT: Event Info Card ── */}
          <div className="flex flex-col gap-5 p-6 bg-white border border-gray-100 shadow-sm rounded-2xl h-fit">
            <h3 className="text-lg font-bold font-heading text-brand-900">
              Event Details
            </h3>

            {/* Date */}
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium tracking-wide text-gray-400 uppercase">
                Date
              </p>
              <p className="text-sm font-medium text-gray-800">{fullDate}</p>
            </div>

            {/* Time */}
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium tracking-wide text-gray-400 uppercase">
                Time
              </p>
              <p className="text-sm font-medium text-gray-800">{event.time}</p>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium tracking-wide text-gray-400 uppercase">
                Location
              </p>
              <p className="text-sm font-medium text-gray-800">
                {event.location}
              </p>
            </div>

            {/* Category */}
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium tracking-wide text-gray-400 uppercase">
                Category
              </p>
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full w-fit
                               ${categoryColors[event.category]}`}
              >
                {event.category}
              </span>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="w-full py-3 mt-2 text-sm font-semibold text-center text-white transition-colors duration-200 rounded-lg bg-brand-600 hover:bg-brand-700"
            >
              Contact Us About This Event
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
