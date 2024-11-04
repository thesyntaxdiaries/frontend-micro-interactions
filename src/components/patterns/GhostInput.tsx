import React, { useState } from 'react';

export function GhostInput() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative w-full max-w-md group">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent border-2 border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 transition-colors peer"
        />
        <label
          className={`absolute left-4 transition-all duration-200 pointer-events-none text-gray-500
            ${focused || value ? '-translate-y-7 text-sm text-blue-500' : 'translate-y-3'}`}
        >
          Email address
        </label>
      </div>

      <div className="w-full max-w-md p-4 bg-gray-800 rounded-lg">
        <pre className="text-sm text-gray-300">
          <code>{`const [focused, setFocused] = useState(false);
const [value, setValue] = useState('');

// Label animation based on state
\${focused || value 
  ? '-translate-y-7 text-sm' 
  : 'translate-y-3'}`}</code>
        </pre>
      </div>
    </div>
  );
}