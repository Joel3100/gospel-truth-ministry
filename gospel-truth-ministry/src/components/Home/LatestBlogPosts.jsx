import { Link } from "react-router-dom";
import BlogCard from "../BlogCard";
import posts from "../../data/blogs";

// Show only 3 most recent posts
const latestPosts = posts.slice(0, 3);

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
          {latestPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
