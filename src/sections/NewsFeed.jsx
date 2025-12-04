import React, { useState, useEffect } from 'react';
import Parser from 'rss-parser';

const NewsFeed = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const parser = new Parser();
      // We use a CORS proxy to avoid browser blocking the request
      const CORS_PROXY = "https://api.allorigins.win/raw?url=";

      // Feeds: The Hindu (Music), Indian Express (Arts), Sruti Mag
      const feeds = [
        "https://www.thehindu.com/entertainment/music/feeder/default.rss", 
        "https://indianexpress.com/section/lifestyle/art-and-culture/feed/", 
        "http://srutimag.blogspot.com/feeds/posts/default?alt=rss" 
      ];

      try {
        const feedPromises = feeds.map(feedUrl => 
          parser.parseURL(CORS_PROXY + encodeURIComponent(feedUrl))
        );
        
        const results = await Promise.all(feedPromises);
        
        // Combine, sort by date, and take top 6
        const allItems = results.flatMap(feed => feed.items).sort((a, b) => {
            return new Date(b.pubDate) - new Date(a.pubDate);
        });

        setNewsItems(allItems.slice(0, 6));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div className="text-center p-10 text-amber-800">Loading classical updates...</div>;

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-amber-900 font-serif">
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