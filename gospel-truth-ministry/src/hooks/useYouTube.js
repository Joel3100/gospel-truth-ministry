import { useEffect, useState } from "react"

const useYouTube = (playlistId, maxResults = 30) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!playlistId) return

    const fetchVideos = async () => {
      setLoading(true)
      setError(null)
      setVideos([])

      try {
        const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY

        // Build the API URL
        const url =
          `https://www.googleapis.com/youtube/v3/playlistItems` +
          `?part=snippet` +
          `&playlistId=${playlistId}` +
          `&maxResults=${maxResults}` +
          `&key=${API_KEY}`

        const response = await fetch(url)
        const data = await response.json()

        if (data.error) {
          throw new Error(data.error.message)
        }

        const formatted = data.items
          .filter(item =>
            item.snippet.title !== 'Deleted video' &&
            item.snippet.title !== 'Private video'
          )
          .map(item => ({
            id:          item.snippet.resourceId.videoId,
            title:       item.snippet.title,
            description: item.snippet.description,
            publishedAt: item.snippet.publishedAt,
            thumbnail:
              item.snippet.thumbnails?.maxres?.url   ||
              item.snippet.thumbnails?.high?.url     ||
              item.snippet.thumbnails?.medium?.url   ||
              item.snippet.thumbnails?.default?.url,
          }))

        setVideos(formatted)    
      } catch (err) {
        setError(err.message || 'Failed to load sermons. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [playlistId, maxResults])

  return { videos, loading, error }
}

export default useYouTube;