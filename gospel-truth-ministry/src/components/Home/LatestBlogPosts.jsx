import { Link } from "react-router-dom";

const mockPosts = [
  {
    id: "1",
    title: "What Does It Mean to Be Reformed?",
    excerpt:
      "Many hear the word Reformed and wonder what it means. We explore the five solas and their importance for the church today.",
    date: "May 10, 2026",
    author: "Dawit Fassil",
    category: "Theology",
    readTime: "5 min",
  },
  {
    id: "2",
    title: "The Importance of Family Worship",
    excerpt:
      "The home is the first place of discipleship. Learn practical ways to build a culture of Scripture and prayer in your household.",
    date: "May 3, 2026",
    author: "Eyuel Alemu",
    category: "Family",
    readTime: "4 min",
  },
  {
    id: "3",
    title: "Prayer: Talking to a Sovereign God",
    excerpt:
      "If God is sovereign over all things, why do we pray? This question has a beautiful answer that deepens both theology and devotion.",
    date: "April 26, 2026",
    author: "Eyuel Alemu",
    category: "Prayer",
    readTime: "6 min",
  },
];

const BlogCard = ({ title, excerpt, date, author, category, readTime }) => {
  return (
    <div className="flex flex-col overflow-hidden transition-all duration-200 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1">
      <div className="h-1 bg-brand-600" />
      <div className="flex flex-col flex-1 gap-3 p-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium tracking-wide uppercase text-brand-600">
            {category}
          </span>
          <span className="text-xs text-gray-400">{readTime} read</span>
        </div>

        <h3 className="text-lg font-bold leading-snug text-gray-900 font-heading">
          {title}
        </h3>

        <p className="flex-1 text-sm leading-relaxed text-gray-500 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex justify-between pt-3 text-xs text-gray-400 border-t border-gray-100">
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default function LatestBlogPosts() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="flex flex-col justify-between gap-4 mb-12 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-600">
              From The Pulpit
            </p>
            <h2 className="text-3xl font-bold font-heading text-brand-900 md:text-4xl">
              Latest Posts
            </h2>
          </div>

          <Link
            to="/blog"
            className="text-sm font-medium transition-colors duration-200 text-brand-600 hover:text-brand-800 w-fit"
          >
            View All Posts →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {mockPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
