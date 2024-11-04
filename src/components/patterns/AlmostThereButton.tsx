import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

export function AlmostThereButton() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    setLoading(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 0;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <button
        onClick={handleClick}
        disabled={loading}
        className="relative overflow-hidden group bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
      >
        <div className="flex items-center gap-2">
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              <span>Almost there...</span>
            </>
          ) : (
            <span>Click me</span>
          )}
        </div>
        {loading && (
          <div 
            className="absolute bottom-0 left-0 h-1 bg-white/30"
            style={{ width: `${progress}%`, transition: 'width 0.2s ease-out' }}
          />
        )}
      </button>

      <div className="w-full max-w-md p-4 bg-gray-800 rounded-lg">
        <pre className="text-sm text-gray-300">
          <code>{`const [loading, setLoading] = useState(false);
const [progress, setProgress] = useState(0);

// Progress simulation
setInterval(() => {
  setProgress(prev => prev + 10);
}, 200);`}</code>
        </pre>
      </div>
    </div>
  );
}