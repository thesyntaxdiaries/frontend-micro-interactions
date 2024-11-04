import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

export function SmartValidation() {
  const [password, setPassword] = useState('');
  
  const validations = [
    { 
      label: 'At least 8 characters',
      check: (p: string) => p.length >= 8 
    },
    { 
      label: 'Contains a number',
      check: (p: string) => /\d/.test(p)
    },
    { 
      label: 'Contains a special character',
      check: (p: string) => /[!@#$%^&*]/.test(p)
    },
    { 
      label: 'Contains uppercase letter',
      check: (p: string) => /[A-Z]/.test(p)
    }
  ];

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="w-full max-w-md space-y-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="w-full bg-transparent border-2 border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 transition-colors"
        />
        
        <div className="space-y-2">
          {validations.map(({ label, check }) => (
            <div 
              key={label}
              className="flex items-center gap-2 text-sm"
            >
              {check(password) ? (
                <Check className="text-green-500" size={16} />
              ) : (
                <X className="text-red-500" size={16} />
              )}
              <span className={check(password) ? 'text-green-500' : 'text-gray-400'}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-md p-4 bg-gray-800 rounded-lg">
        <pre className="text-sm text-gray-300">
          <code>{`const validations = [
  { 
    label: 'At least 8 characters',
    check: (p) => p.length >= 8 
  },
  // ... more validations
];`}</code>
        </pre>
      </div>
    </div>
  );
}