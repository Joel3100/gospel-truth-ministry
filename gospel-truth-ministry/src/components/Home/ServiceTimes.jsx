import { Link } from "react-router-dom";

const serviceTimes = [
  {
    day: "Sunday",
    time: "9:00 AM – 12:00 PM",
    program: "Worship Service",
  },
  {
    day: "Sunday",
    time: "6:00 PM – 8:00 PM",
    program: "Biblical Teaching Session",
  },
  {
    day: "Monday",
    time: "6:00 PM – 8:00 PM",
    program: "Biblical Teaching Session",
  },
  {
    day: "Tuesday",
    time: "6:00 PM – 8:00 PM",
    program: "Prayer & Intercession",
  },
  {
    day: "Wednesday",
    time: "6:00 PM – 8:00 PM",
    program: "Bible Study",
  },
  {
    day: "Thursday",
    time: "6:00 PM – 8:00 PM",
    program: "Bible Study",
  },
  {
    day: "Friday",
    time: "6:00 PM – 8:00 PM",
    program: "Praise & Worship Night",
  },
  {
    day: "Saturday",
    time: "6:00 PM – 8:00 PM",
    program: "Youth Fellowship",
  },
];

export default function ServiceTimes() {
  return (
    <section className="py-20 bg-brand-900">
      <div className="grid items-center max-w-6xl grid-cols-1 gap-16 px-6 mx-auto md:grid-cols-2">
        {/* ── LEFT COLUMN ── */}
        <div>
          {/* Section label */}
          <p className="mb-3 text-sm font-medium tracking-widest uppercase text-brand-400">
            Service Times
          </p>

          {/* Heading */}
          <h2 className="mb-4 text-3xl font-bold text-white font-heading md:text-4xl">
            Worship With Us
          </h2>

          {/* Decorative divider */}
          <div className="w-12 h-px mb-6 bg-brand-500" />

          {/* Description */}
          <p className="mb-8 text-base leading-relaxed text-brand-200">
            Join us each week as we gather to worship, learn, and grow together
            in the grace of God. Whether you are coming for Sunday worship or
            our midweek Bible study, you will find a warm and welcoming
            community to connect with.
          </p>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="inline-block px-6 py-3 font-semibold transition-colors duration-200 bg-white rounded-lg text-brand-800 hover:bg-brand-100"
          >
            Be Our Guest
          </Link>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="flex flex-col">
          {serviceTimes.map((service, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 py-4 ${index !== serviceTimes.length - 1 ? "border-b border-brand-800" : ""}`}
            >
              {/* Icon container */}
              <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-base border rounded-full bg-brand-800 border-brand-700 text-brand-300">
                {service.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-medium text-white">
                  {service.day}
                  <span className="font-normal text-brand-400">
                    {" "}
                    — {service.time}
                  </span>
                </p>
                <p className="text-xs text-brand-300">{service.program}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
