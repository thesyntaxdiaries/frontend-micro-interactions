import React from 'react';

export function BreathingLoader() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75" />
        <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse" />
      </div>

      <div className="w-full max-w-md p-4 bg-gray-800 rounded-lg">
        <pre className="text-sm text-gray-300">
          <code>{`<div className="relative">
  <div className="animate-ping opacity-75" />
  <div className="animate-pulse" />
</div>`}</code>
        </pre>
      </div>
    </div>
  );
}