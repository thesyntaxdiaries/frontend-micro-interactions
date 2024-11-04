import React, { useState, useEffect } from 'react';

export function ProgressiveImage() {
  const [loaded, setLoaded] = useState(false);
  const imageUrl = "https://images.unsplash.com/photo-1682687982501-1e58ab814714";
  
  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="w-full max-w-md aspect-video relative overflow-hidden rounded-lg">
        {/* Blur placeholder */}
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
        
        {/* Actual image */}
        <img
          src={imageUrl}
          alt="Demo"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      <div className="w-full max-w-md p-4 bg-gray-800 rounded-lg">
        <pre className="text-sm text-gray-300">
          <code>{`const [loaded, setLoaded] = useState(false);

useEffect(() => {
  const img = new Image();
  img.src = imageUrl;
  img.onload = () => setLoaded(true);
}, []);`}</code>
        </pre>
      </div>
    </div>
  );
}