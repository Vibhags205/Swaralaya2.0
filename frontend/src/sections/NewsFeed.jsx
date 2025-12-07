import React, { useState, useEffect } from 'react';

const NewsFeed = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      const apiBase = import.meta.env.VITE_API_URL || "";
      const apiUrl = apiBase ? `${apiBase}/api/news` : "/api/news";

      try {
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error("Failed to load news");
        const data = await res.json();
        setNewsItems(data.items || []);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Unable to load news right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div className="text-center p-10 text-amber-800">Loading classical updates...</div>;
  if (error) return <div className="text-center p-10 text-red-700">{error}</div>;

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold mb-4 text-center text-amber-900 font-serif">
  Latest in Classical Music
</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6 border-l-4 border-amber-600 hover:shadow-lg transition-all">
            <h3 className="font-bold text-lg mb-2 text-gray-900 line-clamp-2">{item.title}</h3>
            <p className="text-xs text-amber-700 font-semibold mb-3">
              {item.pubDate ? new Date(item.pubDate).toDateString() : 'Recent Update'}
            </p>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
               {item.contentSnippet ? item.contentSnippet.substring(0, 100) + "..." : "Click to read more details..."}
            </p>
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-700 hover:text-amber-900 text-sm font-bold uppercase tracking-wide"
            >
              Read Full Article &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;