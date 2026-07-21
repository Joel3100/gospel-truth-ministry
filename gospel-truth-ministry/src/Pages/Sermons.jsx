import { useState } from "react";
import useYouTube from "../hooks/useYouTube";
import SermonCard from "../components/SermonCard";
import playlists from "../data/playlists";
import { useLanguage } from "../i18n/LanguageContext";

export default function Sermon() {
  const defaultPlaylist = playlists.find((p) => p.isDefault) || playlists[0];
  const [selectedId, setSelectedId] = useState(defaultPlaylist.id);
  const { videos, loading, error } = useYouTube(selectedId);
  const selectedPlaylist = playlists.find((p) => p.id === selectedId);
  const { t, fBody } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── PAGE HEADER ── */}
      <div className="py-16 bg-brand-900">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-300">
            {t("sermons.pageLabel")}
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white font-heading md:text-5xl">
            {t("sermons.pageTitle")}
          </h1>
          <p className="max-w-xl mx-auto leading-relaxed text-brand-200">
            {t("sermons.pageDesc")}
          </p>
        </div>
      </div>

      <div className="max-w-6xl px-6 py-12 mx-auto">
        {/* ── PLAYLIST FILTER TABS ── */}
        {playlists.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {playlists.map((playlist) => (
              <button
                key={playlist.id}
                onClick={() => setSelectedId(playlist.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium 
                            transition-all duration-200
                            ${
                              selectedId === playlist.id
                                ? "bg-brand-600 text-white shadow-sm"
                                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                            }`}
              >
                {playlist.name}
              </button>
            ))}
          </div>
        )}

        {/* ── SELECTED PLAYLIST DESCRIPTION ── */}
        {selectedPlaylist?.description && (
          <p className="mb-8 text-sm italic text-gray-500">
            {selectedPlaylist.description}
          </p>
        )}

        {/* ── LOADING STATE ── */}
        {loading && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
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

        {/* ── ERROR STATE ── */}
        {error && !loading && (
          <div className="py-20 text-center">
            <p className="mb-4 text-4xl">⚠️</p>
            <p className={`text-gray-600 font-medium mb-2 ${fBody}`}>
              {t("sermons.error")}
            </p>
            <p className="mb-6 text-sm text-gray-400">{error}</p>
            <button
              onClick={() => setSelectedId(selectedId)}
              className="px-6 py-2 text-sm text-white transition-colors duration-200 rounded-lg bg-brand-600 hover:bg-brand-700"
            >
              {t("sermons.tryAgain")}
            </button>
          </div>
        )}

        {/* ── VIDEOS GRID ── */}
        {!loading && !error && videos.length > 0 && (
          <>
            <p className={`text-gray-400 text-sm mb-6 ${fBody}`}>
              {videos.length}{" "}
              {videos.length !== 1
                ? t("sermons.foundPlural")
                : t("sermons.found")}
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {videos.map((video) => (
                <SermonCard key={video.id} {...video} />
              ))}
            </div>
          </>
        )}

        {/* ── EMPTY STATE ── */}
        {!loading && !error && videos.length === 0 && (
          <div className="py-20 text-center">
            <p className="mb-4 text-4xl">📭</p>
            <p className={`text-gray-500 ${fBody}`}>{t("sermons.notFound")}</p>
          </div>
        )}
      </div>
    </div>
  );
}
