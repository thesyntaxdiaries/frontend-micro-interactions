import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export function AnticipatoryCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center gap-8">
      <div
        className="w-full max-w-md bg-gray-800 rounded-lg overflow-hidden cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-6 flex items-center justify-between">
          <div className="space-y-2">
            <h3 className="text-lg font-medium group-hover:text-blue-400 transition-colors">
              Hover to preview
            </h3>
            <p className="text-sm text-gray-400">
              Content loads before you click
            </p>
          </div>
          <ChevronRight 
            className="transform transition-transform group-hover:translate-x-1"
            size={20}
          />
        </div>
        
        {isHovered && (
          <div className="px-6 pb-6 animate-fadeIn">
            <div className="h-32 bg-gray-700 rounded-lg" />
          </div>
        )}
      </div>

      <div className="w-full max-w-md p-4 bg-gray-800 rounded-lg">
        <pre className="text-sm text-gray-300">
          <code>{`const [isHovered, setIsHovered] = useState(false);

{isHovered && (
  <div className="animate-fadeIn">
    <PreloadedContent />
  </div>
)}`}</code>
        </pre>
      </div>
    </div>
  );
}