import { Link } from "react-router-dom";

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

export default EventCard;
