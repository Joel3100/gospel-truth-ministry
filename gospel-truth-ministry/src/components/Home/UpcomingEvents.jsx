import { Link } from "react-router-dom";

const mockEvents = [
  {
    id: "1",
    title: "Sunday Worship Service",
    date: "May 25, 2026",
    time: "9:00 AM – 12:00 PM",
    location: "Main Sanctuary",
    category: "Worship",
    image: null,
  },
  {
    id: "2",
    title: "Youth Fellowship",
    date: "June 15, 2026",
    time: "6:00 PM – 8:00 PM",
    location: "Youth Hall",
    category: "Youth",
    image: null,
  },
  {
    id: "3",
    title: "Wednesday Bible Study",
    date: "October 10, 2026",
    time: "6:00 PM – 8:00 PM",
    location: "Room 101",
    category: "Study",
    image: null,
  },
];

const categoryGradients = {
  Worship: "from-brand-900 to-brand-700",
  Youth: "from-green-900  to-green-700",
  Study: "from-amber-900  to-amber-700",
  Prayer: "from-purple-900 to-purple-700",
};

const EventCard = ({ title, date, time, location, category, image }) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("en", { month: "short" }).toUpperCase();
  const day = dateObj.getDate();

  return (
    <div className="relative overflow-hidden transition-shadow duration-300 shadow-md cursor-pointer rounded-2xl h-80 group hover:shadow-xl">
      {/* ── BACKGROUND LAYER ── */}
      {image ? (
        <div
          className="absolute inset-0 transition-transform duration-700 bg-center bg-cover group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${categoryGradients[category] ?? "from-brand-900 to-brand-700"} transition-transform duration-700 group-hover:scale-105`}
        />
      )}

      {/* ── DARK GRADIENT OVERLAY ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* ── DATE BADGE — top right corner ── */}
      <div className="absolute top-3 right-3 bg-white rounded-xl px-3 py-2 text-center shadow-lg min-w-[48px]">
        {/* Month — small, colored, uppercase */}
        <p className="text-xs font-bold leading-none tracking-wide uppercase text-brand-600">
          {month}
        </p>
        {/* Day number — large and bold */}
        <p className="mt-1 text-2xl font-bold leading-none text-brand-900">
          {day}
        </p>
      </div>

      {/* ── EVENT INFO — pinned to bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="mb-1 text-xs tracking-widest uppercase text-white/70">
          {category}
        </p>
        <h3 className="font-heading text-white font-bold text-lg leading-snug mb-1.5">
          {title}
        </h3>
        <p className="text-xs text-white/60">
          {time} · {location}
        </p>
      </div>
    </div>
  );
};

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
          {mockEvents.map((event) => (
            <Link to={`/events/${event.id}`} className="block group">
              <EventCard key={event.id} {...event} />
            </Link>
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
