import React, { useEffect } from 'react';

const SocialWall = () => {
  
  // Your unique script URL provided by Curator.io
  const CURATOR_JS_URL = "https://cdn.curator.io/published/869ce9e3-4c73-4d26-a30f-f1da2773566a.js";
  
  // The ID of the container div that Curator will target
  const CONTAINER_ID = "curator-feed-default-feed-layout";

  useEffect(() => {
    // 1. Check if the script has already been loaded
    if (!document.querySelector(`script[src="${CURATOR_JS_URL}"]`)) {
      
      // 2. Load the Curator JS Script
      const script = document.createElement("script");
      script.src = CURATOR_JS_URL; // Using your unique URL
      script.async = true;
      script.charset = "UTF-8";
      
      // 3. Append the script to the body to load the feed
      document.body.appendChild(script);
      
      // We don't need the `onload` function here because the published script
      // handles the initialization automatically once loaded.
    }
    
    // Cleanup function (optional, but good practice for SPAs)
    return () => {
        // You can add logic here to clean up the script if necessary,
        // but for a quick start, letting it remain is fine.
    };
  }, []);

  return (
    <div className="py-12 bg-amber-50">
      <h2 className="text-3xl font-bold mb-4 text-center text-amber-900 font-serif">
  Community Highlights
</h2>

      <div className="container mx-auto px-4">
         {/* The div below must match the CONTAINER_ID exactly */}
         <div id={CONTAINER_ID}>
           <a 
             href="https://curator.io" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="crt-logo crt-tag text-xs text-gray-500 hover:text-gray-700"
           >
             Powered by Curator.io
           </a>
         </div>
      </div>
    </div>
  );
};

export default SocialWall;