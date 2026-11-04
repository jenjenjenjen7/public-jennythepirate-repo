import React, { useEffect, useState } from 'react';

const InstagramFeed = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // 1. Check if script already exists on the page
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    
    if (existingScript) {
      setScriptLoaded(true);
      // Force Elfsight to parse the new DOM element
      if (window.ElfsightApps) {
        window.ElfsightApps.init();
      }
      return;
    }

    // 2. If it doesn't exist, create it safely
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    
    script.onload = () => {
      setScriptLoaded(true);
      if (window.ElfsightApps) {
        window.ElfsightApps.init();
      }
    };

    document.body.appendChild(script);

    // 3. Cleanup on unmount
    return () => {
      // Keep the script global so it doesn't have to reload constantly
    };
  }, []);

  return (
    <div className="instagram-feed-container" style={{ minHeight: '200px', width: '100%' }}>
      {/* The actual Elfsight Widget */}
      <div 
        className="elfsight-app-0c6b02e3-5ede-4fc6-8a1d-e0b3325d7d7f" 
        data-elfsight-app-lazy
      />
    </div>
  );
};

export default InstagramFeed;
