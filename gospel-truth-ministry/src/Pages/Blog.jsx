import { useState } from "react";
import posts from "../data/blogs";
import BlogCard from "../components/BlogCard";
import { useLanguage } from "../i18n/LanguageContext";

export default function Blog() {
  const { t, fBody } = useLanguage();
  const categories = ["All", ...new Set(posts.map((p) => p.category))];

  const [selected, setSelected] = useState("All");

  const filtered =
    selected === "All" ? posts : posts.filter((p) => p.category === selected);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── PAGE HEADER ── */}
      <div className="py-16 bg-brand-900">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-300">
            {t("blog.pageLabel")}
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white font-heading md:text-5xl">
            {t("blog.pageTitle")}
          </h1>
          <p
            className={`text-brand-200 max-w-xl mx-auto leading-relaxed ${fBody}`}
          >
            {t("blog.pageDesc")}
          </p>
        </div>
      </div>

      <div className="max-w-6xl px-6 py-12 mx-auto">
        {/* ── CATEGORY FILTER ── */}
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
        <p className={`text-gray-400 text-sm mb-6 ${fBody}`}>
          {filtered.length} {selected !== "All" && `${selected} `}
          {t("blog.pageLabel").toLowerCase()}
        </p>

        {/* ── BLOG GRID ── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="mb-4 text-4xl">📭</p>
            <p className={`text-gray-500 font-medium ${fBody}`}>
              {t("blog.notFound")}
            </p>
            <button
              onClick={() => setSelected("All")}
              className="mt-4 text-sm text-brand-600 hover:underline"
            >
              {t('blog.viewAllLink')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
