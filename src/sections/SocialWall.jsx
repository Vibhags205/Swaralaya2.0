import React, { useEffect } from 'react';

const SocialWall = () => {
  useEffect(() => {
    // 1. Check if script already exists to avoid duplicates
    if (!document.querySelector('script[src="https://cdn.curator.io/3.1/js/curator.js"]')) {
      // Load CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://cdn.curator.io/3.1/css/curator.css";
      document.head.appendChild(link);

      // Load JS
      const script = document.createElement("script");
      script.src = "https://cdn.curator.io/3.1/js/curator.js";
      script.async = true;
      script.onload = () => {
        // Initialize Widget
        // TODO: Replace 'YOUR_FEED_ID_HERE' with your actual ID from Curator.io
        new window.Curator.Widgets.Waterfall({
          container: '#curator-feed',
          feedId: 'YOUR_FEED_ID_HERE', 
        });
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="py-12 bg-amber-50">
      <h2 className="text-3xl font-bold mb-8 text-center text-amber-900 font-serif">
        Community Highlights
      </h2>
      <div className="container mx-auto px-4">
         <div id="curator-feed" className="min-h-[400px]"></div>
      </div>
    </div>
  );
};

export default SocialWall;