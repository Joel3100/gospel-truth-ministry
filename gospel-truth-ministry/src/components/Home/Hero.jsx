import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: "/hero.jpg",
    headline: "እንኳን ወደ የወንጌል እውነት ቤተክርስቲያን በደህና መጡ",
    subtitle: "“ክርስቶስ ኢየሱስን ጌታ እንደ ሆነ እንጂ ራሳችንን አንሰብክም።” — 2ኛ ቆሮ 4፥5",
  },
  {
    id: 2,
    image: "/hero-channel-banner.jpg",
    headline: " ",
    subtitle: " ",
  },
];

const SLIDE_DURATION = 6000; // 6 seconds

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const startAutoPlay = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, []);

  // ── MANUAL NAVIGATION ──
  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    startAutoPlay();
  };

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    startAutoPlay();
  };

  const goToSlide = (index) => {
    setCurrent(index);
    startAutoPlay();
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* ── IMAGE SLIDES ── */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* ── DARK OVERLAY ── */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ── SLIDE CONTENT ── */}
      <div className="relative z-10 max-w-4xl px-6 mx-auto text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white transition-all duration-500 font-amharicHeading md:text-6xl drop-shadow-lg">
          {slides[current].headline}
        </h1>

        <p className="max-w-2xl mx-auto mb-10 text-base italic leading-relaxed text-white/80 md:text-lg drop-shadow font-amharicHeading">
          {slides[current].subtitle}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/sermons"
            className="px-8 py-3 font-semibold transition-colors duration-200 bg-white rounded-lg shadow-lg text-brand-800 hover:bg-brand-100"
          >
            Watch Sermons
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 font-semibold text-white transition-colors duration-200 border-2 border-white rounded-lg hover:bg-white hover:text-brand-800"
          >
            Join Us Sunday
          </Link>
        </div>
      </div>

      {/* ── LEFT ARROW ── */}
      <button
        onClick={goToPrev}
        className="absolute z-30 p-3 transition-all duration-200 rounded-full left-4 md:left-8 text-white/70 hover:text-white bg-black/20 hover:bg-black/40"
        aria-label="Previous slide"
      >
        {/* Unicode left arrow */}
        <span className="text-2xl leading-none">‹</span>
      </button>

      {/* ── RIGHT ARROW ── */}
      <button
        onClick={goToNext}
        className="absolute z-30 p-3 transition-all duration-200 rounded-full right-4 md:right-8 text-white/70 hover:text-white bg-black/20 hover:bg-black/40"
        aria-label="Next slide"
      >
        <span className="text-2xl leading-none">›</span>
      </button>

      {/* ── DOT INDICATORS ── */}
      <div className="absolute z-30 flex items-center gap-3 -translate-x-1/2 bottom-10 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${index === current ? "bg-white w-6 h-2" : "bg-white/40 w-2 h-2"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
