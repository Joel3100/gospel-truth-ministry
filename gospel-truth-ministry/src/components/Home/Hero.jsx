import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";

const Hero = () => {
  const { t, fHeading, fBody } = useLanguage();

  return (
    <section
      className="relative w-full overflow-hidden
                        h-[320px] md:h-[440px] lg:h-[520px]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url(/church_image.png)",
          backgroundPosition: "center 30%",
        }}
      />

      {/* Gradient overlay — dark left, clear right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="w-full max-w-6xl px-6 mx-auto">
          <div className="max-w-lg">
            <p className="mb-2 text-xs font-medium tracking-widest uppercase text-white/70 md:text-sm md:mb-3">
              {t("hero.eyebrow")}
            </p>

            <h1
              className={`text-white text-2xl md:text-3xl lg:text-4xl font-bold
                           leading-tight mb-3 md:mb-5 drop-shadow-lg ${fHeading}`}
            >
              {t("hero.slides")[0].headline}
            </h1>

            <p
              className={`text-white/80 text-xs md:text-sm italic leading-relaxed
                          mb-5 md:mb-8 drop-shadow ${fBody}`}
            >
              {t("hero.slides")[0].subtitle}
            </p>

            <div className="flex flex-col gap-2 sm:flex-row md:gap-3">
              <Link
                to="/sermons"
                className="bg-white text-brand-800 px-5 md:px-7 py-2 md:py-2.5
                           rounded-lg font-semibold hover:bg-brand-100
                           transition-colors duration-200 shadow-lg
                           text-sm text-center"
              >
                {t("hero.watchSermons")}
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-5 md:px-7 py-2 md:py-2.5
                           rounded-lg font-semibold hover:bg-white hover:text-brand-800
                           transition-colors duration-200 text-sm text-center"
              >
                {t("hero.joinSunday")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
