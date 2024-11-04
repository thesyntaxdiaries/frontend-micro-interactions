import React, { useRef } from 'react';

export function HapticButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (!buttonRef.current) return;
    
    buttonRef.current.style.transform = 'scale(0.95)';
    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.style.transform = 'scale(1)';
      }
    }, 100);

    // Trigger vibration if supported
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <button
        ref={buttonRef}
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-100"
      >
        Click for feedback
      </button>

      <div className="w-full max-w-md p-4 bg-gray-800 rounded-lg">
        <pre className="text-sm text-gray-300">
          <code>{`// Scale animation
button.style.transform = 'scale(0.95)';
setTimeout(() => {
  button.style.transform = 'scale(1)';
}, 100);

// Haptic feedback
if ('vibrate' in navigator) {
  navigator.vibrate(50);
}`}</code>
        </pre>
      </div>
    </div>
  );
}