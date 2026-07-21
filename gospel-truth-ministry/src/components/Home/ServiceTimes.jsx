import { Link } from "react-router-dom";
import serviceTimes from "../../data/serviceTimes";
import { useLanguage } from "../../i18n/LanguageContext";

const sundayServices = serviceTimes.filter(
  (service) => service.day === "Sunday",
);

export default function ServiceTimes() {
  const { t, fBody } = useLanguage();

  return (
    <section className="py-20 bg-brand-900">
      <div className="grid items-center max-w-6xl grid-cols-1 gap-16 px-6 mx-auto md:grid-cols-2">
        {/* ── LEFT COLUMN ── */}
        <div>
          <p className="mb-3 text-sm font-medium tracking-widest uppercase text-brand-400">
            {t("serviceTimes.label")}
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white font-heading md:text-4xl">
            {t("serviceTimes.title")}
          </h2>
          <div className="w-12 h-px mb-6 bg-brand-500" />
          <p className="mb-8 text-base leading-relaxed text-brand-200">
            {t("serviceTimes.description")}
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 font-semibold transition-colors duration-200 bg-white rounded-lg text-brand-800 hover:bg-brand-100"
          >
            {t("serviceTimes.beOurGuest")}
          </Link>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="flex flex-col">
          {sundayServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`flex items-center gap-4 py-4
                            ${
                              index !== sundayServices.length - 1
                                ? "border-b border-brand-800"
                                : ""
                            }`}
              >
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-base border rounded-full bg-brand-800 border-brand-700 text-brand-300">
                  <Icon />
                </div>

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
            );
          })}

          {/* ── View Full Schedule button ── */}
          <Link
            to="/schedule"
            className="mt-6 text-center border border-brand-600 text-brand-300 
                       hover:bg-brand-800 hover:text-white px-5 py-2.5 rounded-lg 
                       text-sm font-medium transition-all duration-200"
          >
            {t("serviceTimes.viewFull")}
          </Link>
        </div>
      </div>
    </section>
  );
}
