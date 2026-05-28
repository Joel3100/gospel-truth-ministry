import { Link } from "react-router-dom";
import playlists from "../../data/playlists";
import useYouTube from "../../hooks/useYouTube";
import SermonCard from "../SermonCard";

export default function LatestBlogPosts() {
  const defaultPlaylist = playlists.find((p) => p.isDefault) || playlists[0];

  const { videos, loading, error } = useYouTube(defaultPlaylist.id, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl px-6 mx-auto">
        {/* Header row */}
        <div className="flex flex-col justify-between gap-4 mb-12 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-600">
              The word preached
            </p>
            <h2 className="text-3xl font-bold font-heading text-brand-900 md:text-4xl">
              Latest Sermons
            </h2>
          </div>

          <Link
            to="/sermons"
            className="text-sm font-medium transition-colors duration-200 text-brand-600 hover:text-brand-800 w-fit"
          >
            View All Posts →
          </Link>
        </div>

        {/* Loading State - skeleton cards */}
        {loading && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="overflow-hidden bg-white border border-gray-100 shadow-sm rounded-2xl animate-pulse"
              >
                <div className="h-48 bg-gray-200" />
                <div className="flex flex-col gap-3 p-5">
                  <div className="w-3/4 h-4 bg-gray-200 rounded" />
                  <div className="w-1/2 h-4 bg-gray-200 rounded" />
                  <div className="h-8 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="py-12 text-center">
            <p className="text-sm text-gray-400">
              Could not load sermons right now.{" "}
              <Link to="/sermons" className="text-brand-400 hover:underline">
                Visit the Sermons page →
              </Link>
            </p>
          </div>
        )}

        {/* Real Videos */}
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
