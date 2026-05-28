export default function SermonCard({ id, title, publishedAt, thumbnail }) {
  const formattedDate = new Date(publishedAt).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    dat: "numeric",
  });

  const youtubeUrl = `https://www.youtube.com/watch?v=${id}`;
  const embedUrl = `https://www.youtube.com/embed/${id}`;

  return (
    <div className="overflow-hidden transition-all duration-200 bg-white border border-gray-100 shadow-sm group rounded-2xl hover:shadow-md hover:-translate-y-1">
      {/* THUMBNAIL */}
      <div className="relative overflow-hidden">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-48 bg-brand-900">
            <span className="text-4xl text-brand-400">▶</span>
          </div>
        )}

        {/* Play overlay - appears on hover */}
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100">
          <div className="flex items-center justify-center rounded-full w-14 h-14 bg-white/90">
            <span className="ml-1 text-xl text-brand-800">▶</span>
          </div>
        </div>
      </div>

      {/* CARD BODY */}
      <div className="flex flex-col gap-3 p-5">
        {/* Title */}
        <h3 className="text-base font-bold leading-snug text-gray-900 transition-colors duration-200 font-heading line-clamp-2 group-hover:text-brand-700">
          {title}
        </h3>

        {/* Date */}
        <p className="text-xs text-gray-400">{formattedDate}</p>

        {/* Buttons row */}
        <div className="flex gap-2 pt-1">
          {/* Watch on site - embed */}
          <a
            href={embedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 text-xs font-semibold text-center text-white transition-colors duration-200 rounded-lg bg-brand-600 hover:bg-brand-700"
          >
            ▶ Watch
          </a>

          {/* Open on YouTube */}
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 text-xs font-semibold text-center transition-colors duration-200 border rounded-lg border-brand-600 text-brand-600 hover:bg-brand-50"
          >
            YouTube ↗
          </a>
        </div>
      </div>
    </div>
  );
}
