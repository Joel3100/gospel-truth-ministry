import { Link, useNavigate, useParams } from "react-router-dom";
import posts from "../data/blogs";

const categoryColors = {
  Theology: "bg-brand-100  text-brand-700",
  Family: "bg-green-100  text-green-700",
  Prayer: "bg-purple-100 text-purple-700",
  Announcements: "bg-amber-100  text-amber-700",
  Devotional: "bg-rose-100   text-rose-700",
};

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);

  // ── GUARD CLAUSE ──
  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-50">
        <p className="text-6xl">🔍</p>
        <h2 className="text-2xl font-bold font-heading text-brand-900">
          Post Not Found
        </h2>
        <p className="text-gray-500">
          This post doesn't exist or may have been removed.
        </p>
        <Link
          to="/blog"
          className="px-6 py-2 font-medium text-white transition-colors duration-200 rounded-lg bg-brand-600 hover:bg-brand-700"
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const paragraphs = post.content.split("\n\n").filter((p) => p.trim());

  const relatedPosts = posts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── HERO ── */}
      <div className="relative">
        {/* Background */}
        {post.image ? (
          <div
            className="bg-center bg-cover h-72 md:h-96"
            style={{ backgroundImage: `url(${post.image})` }}
          />
        ) : (
          <div className="h-72 md:h-96 bg-gradient-to-br from-brand-900 to-brand-700" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute z-10 flex items-center gap-2 px-4 py-2 text-sm transition-colors duration-200 rounded-full top-6 left-6 text-white/80 hover:text-white bg-black/30 hover:bg-black/50"
        >
          ← Back
        </button>

        {/* Post meta — bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 z-10 max-w-4xl px-6 pb-8 mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full
                             ${categoryColors[post.category]}`}
            >
              {post.category}
            </span>
            <span className="text-xs text-white/60">{post.readTime} read</span>
          </div>
          <h1 className="text-2xl font-bold leading-tight text-white font-heading md:text-4xl drop-shadow-lg">
            {post.title}
          </h1>
        </div>
      </div>

      {/* ── ARTICLE ── */}
      <div className="max-w-4xl px-6 py-12 mx-auto">
        {/* Author + Date bar */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
          <div className="flex items-center gap-3">
            {/* Author avatar — initials placeholder */}
            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-sm font-bold text-white rounded-full bg-brand-600">
              {post.author
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">{post.author}</p>
              <p className="text-xs text-gray-400">{post.date}</p>
            </div>
          </div>

          {/* Share hint */}
          <p className="hidden text-xs text-gray-400 sm:block">
            {post.readTime} read
          </p>
        </div>

        {/* Article content */}
        <article className="prose-custom">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="mb-6 text-base leading-relaxed text-gray-700 md:text-lg"
            >
              {paragraph.replace(/\n/g, " ")}
            </p>
          ))}
        </article>

        {/* ── RELATED POSTS ── */}
        {relatedPosts.length > 0 && (
          <div className="pt-10 mt-16 border-t border-gray-200">
            <h2 className="mb-8 text-2xl font-bold font-heading text-brand-900">
              Related Posts
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  to={`/blog/${related.id}`}
                  className="flex flex-col gap-2 p-5 transition-all duration-200 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1 group"
                >
                  <div className="h-1 mb-1 rounded-full bg-brand-600" />
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full w-fit
                                   ${categoryColors[related.category]}`}
                  >
                    {related.category}
                  </span>
                  <h3 className="text-base font-bold leading-snug text-gray-900 transition-colors duration-200 font-heading group-hover:text-brand-700">
                    {related.title}
                  </h3>
                  <p className="pt-2 mt-auto text-xs text-gray-400">
                    {related.author} · {related.date}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
