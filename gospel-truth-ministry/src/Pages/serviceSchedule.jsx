import serviceTimes from "../data/serviceTimes";

export default function ServiceSchedule() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── PAGE HEADER ── */}
      <div className="py-16 bg-brand-900">
        <div className="max-w-4xl px-6 mx-auto text-center">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-300">
            Weekly Schedule
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white font-heading md:text-5xl">
            Service Times
          </h1>
          <p className="max-w-xl mx-auto leading-relaxed text-brand-200">
            Join us throughout the week — every gathering is an opportunity to
            grow in grace and community.
          </p>
        </div>
      </div>

      <div className="max-w-4xl px-6 py-16 mx-auto">
        {/* ── DESKTOP — TABLE LAYOUT ── */}
        <div className="hidden overflow-hidden bg-white border border-gray-100 shadow-sm md:block rounded-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-brand-50">
                <th className="w-16 px-6 py-4"></th>
                <th className="px-6 py-4 text-xs font-semibold tracking-wide uppercase text-brand-700">
                  Day
                </th>
                <th className="px-6 py-4 text-xs font-semibold tracking-wide uppercase text-brand-700">
                  Time
                </th>
                <th className="px-6 py-4 text-xs font-semibold tracking-wide uppercase text-brand-700">
                  Program
                </th>
              </tr>
            </thead>
            <tbody>
              {serviceTimes.map((service, index) => {
                const Icon = service.icon;
                return (
                  <tr
                    key={index}
                    className={`${
                      index !== serviceTimes.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    }
                               hover:bg-gray-50 transition-colors duration-150`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center rounded-full w-9 h-9 bg-brand-50 text-brand-600">
                        <Icon />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">
                      {service.day}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {service.time}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {service.program}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* ── MOBILE — STACKED CARDS ── */}
        <div className="flex flex-col gap-3 md:hidden">
          {serviceTimes.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white border border-gray-100 shadow-sm rounded-xl"
              >
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-brand-50 text-brand-600">
                  <Icon />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {service.day}
                    <span className="font-normal text-gray-400">
                      {" "}
                      — {service.time}
                    </span>
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {service.program}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
