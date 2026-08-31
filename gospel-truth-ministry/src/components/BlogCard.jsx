import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const getExcerpt = (content) =>
  content.split("\n\n")[0].replace(/\n/g, " ").slice(0, 180) + "...";

// Category color map
const categoryColors = {
  Theology: "bg-brand-100  text-brand-700",
  Family: "bg-green-100  text-green-700",
  Prayer: "bg-purple-100 text-purple-700",
  Announcements: "bg-amber-100  text-amber-700",
  Devotional: "bg-rose-100   text-rose-700",
};

const BlogCard = ({
  id,
  title,
  date,
  author,
  category,
  readTime,
  image,
  content,
}) => {
  const { t, fBody, fHeading } = useLanguage();

  return (
    <Link to={`/blog/${id}`} className="block group">
      <div className="flex flex-col h-full overflow-hidden transition-all duration-200 bg-white border border-gray-100 shadow-sm dark:bg-gray-800 rounded-2xl dark:border-gray-700 hover:shadow-md hover:-translate-y-1">
        {image ? (
          <div
            className="bg-center bg-cover h-44"
            style={{ backgroundImage: `url(${image})` }}
          />
        ) : (
          <div className="h-1 bg-brand-600" />
        )}
        <div className="flex flex-col flex-1 gap-3 p-6">
          <div className="flex items-center justify-between">
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full
                             ${categoryColors[category] ?? "bg-gray-100 text-gray-600"}`}
            >
              {category}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500">
              {readTime} {t("blog.read")}
            </span>
          </div>
          <h3
            className={`text-gray-900 dark:text-white font-bold text-lg leading-snug
                         group-hover:text-brand-600 dark:group-hover:text-brand-400
                         transition-colors duration-200 ${fHeading}`}
          >
            {title}
          </h3>
          <p
            className={`text-gray-500 dark:text-gray-400 text-sm leading-relaxed
                        line-clamp-3 flex-1 ${fBody}`}
          >
            {getExcerpt(content)}
          </p>
          <div className="flex justify-between pt-3 mt-auto text-xs text-gray-400 border-t border-gray-100 dark:text-gray-500 dark:border-gray-700">
            <span>{author}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
