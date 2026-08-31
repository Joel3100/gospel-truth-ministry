import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import useYouTube from "../../hooks/useYouTube";
import SermonCard from "../SermonCard";
import playlists from "../../data/playlists";

export default function LatestBlogPosts() {
  const { t, fHeading, fBody } = useLanguage();
  const defaultPlaylist = playlists.find((p) => p.isDefault) || playlists[0];
  const { videos, loading, error } = useYouTube(defaultPlaylist.id, 3);

  return (
    <section className="py-20 transition-colors duration-200 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="flex flex-col justify-between gap-4 mb-12 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-600 dark:text-brand-400">
              {t("sermons.label")}
            </p>
            <h2
              className={`text-brand-900 dark:text-white text-3xl md:text-4xl
                           font-bold ${fHeading}`}
            >
              {t("sermons.title")}
            </h2>
          </div>
          <Link
            to="/sermons"
            className={`text-brand-600 dark:text-brand-400 hover:text-brand-800
                           dark:hover:text-brand-300 font-medium text-sm
                           transition-colors duration-200 w-fit ${fBody}`}
          >
            {t("sermons.viewAll")}
          </Link>
        </div>

        {/* Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="overflow-hidden bg-white border border-gray-100 shadow-sm dark:bg-gray-800 rounded-2xl dark:border-gray-700 animate-pulse"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700" />
                <div className="flex flex-col gap-3 p-5">
                  <div className="w-3/4 h-4 bg-gray-200 rounded dark:bg-gray-700" />
                  <div className="w-1/2 h-4 bg-gray-200 rounded dark:bg-gray-700" />
                  <div className="h-8 bg-gray-200 rounded dark:bg-gray-700" />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && !loading && (
          <div className="py-12 text-center">
            <p className={`text-gray-400 text-sm ${fBody}`}>
              {t("sermons.error")}.{" "}
              <Link to="/sermons" className="text-brand-600 hover:underline">
                {t("sermons.viewAll")}
              </Link>
            </p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {videos.map((video) => (
              <SermonCard key={video.id} {...video} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
