import { useState } from "react";
import posts from "../data/blogs";
import BlogCard from "../components/BlogCard";

export default function Blog() {
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
            From The Pulpit
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white font-heading md:text-5xl">
            Blog
          </h1>
          <p className="max-w-xl mx-auto leading-relaxed text-brand-200">
            Articles, devotionals, and announcements from Gospel Truth Ministry.
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
        <p className="mb-6 text-sm text-gray-400">
          {filtered.length} post{filtered.length !== 1 ? "s" : ""}
          {selected !== "All" && ` in ${selected}`}
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
            <p className="font-medium text-gray-500">
              No posts in {selected} yet.
            </p>
            <button
              onClick={() => setSelected("All")}
              className="mt-4 text-sm text-brand-600 hover:underline"
            >
              View all posts
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
