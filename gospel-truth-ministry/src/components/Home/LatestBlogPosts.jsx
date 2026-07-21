import { Link } from "react-router-dom";
import BlogCard from "../BlogCard";
import posts from "../../data/blogs";
import { useLanguage } from "../../i18n/LanguageContext";

// Show only 3 most recent posts
const latestPosts = posts.slice(0, 3);

export default function LatestBlogPosts() {
  const { t, fHeading, fBody } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl px-6 mx-auto">
        {/* ── HEADER ROW ── */}
        <div className="flex flex-col justify-between gap-4 mb-12 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-600">
              {t("blog.label")}
            </p>
            <h2
              className={`text-brand-900 text-3xl md:text-4xl font-bold ${fHeading}`}
            >
              {t("blog.title")}
            </h2>
          </div>
          <Link
            to="/blog"
            className={`text-brand-600 hover:text-brand-800 font-medium text-sm
                       transition-colors duration-200 w-fit ${fBody}`}
          >
            {t("blog.viewAll")}
          </Link>
        </div>

        {/* ── BLOG CARDS GRID ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
