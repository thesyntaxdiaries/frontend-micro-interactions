import React, { useState, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export function ElasticPull() {
  const [pullDistance, setPullDistance] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const startY = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const currentY = e.touches[0].clientY;
    const distance = currentY - startY.current;
    if (distance > 0) {
      setPullDistance(Math.min(distance * 0.5, 150));
    }
  };

  const handleTouchEnd = () => {
    if (pullDistance > 100) {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }
    setPullDistance(0);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div 
        className="w-full max-w-md bg-gray-800 rounded-lg overflow-hidden touch-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="transition-transform"
          style={{ transform: `translateY(${pullDistance}px)` }}
        >
          <div className="h-12 flex items-center justify-center border-b border-gray-700">
            <ArrowDown 
              className={`transition-transform ${pullDistance > 100 ? 'rotate-180' : ''}`}
              size={20}
            />
          </div>
          <div className="p-6">
            <p className="text-gray-400">
              {refreshing 
                ? 'Refreshing...' 
                : 'Pull down to refresh (touch devices only)'}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md p-4 bg-gray-800 rounded-lg">
        <pre className="text-sm text-gray-300">
          <code>{`const distance = currentY - startY;
setPullDistance(Math.min(distance * 0.5, 150));

style={{ 
  transform: \`translateY(\${distance}px)\` 
}}`}</code>
        </pre>
      </div>
    </div>
  );
}