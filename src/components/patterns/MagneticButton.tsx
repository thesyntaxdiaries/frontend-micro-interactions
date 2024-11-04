import React, { useRef, useEffect } from 'react';

export function MagneticButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const deltaX = (x - centerX) / 8;
      const deltaY = (y - centerY) / 8;

      button.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    };

    const handleMouseLeave = () => {
      button.style.transform = 'translate(0, 0)';
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="p-8">
        <button
          ref={buttonRef}
          className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
        >
          Hover me
        </button>
      </div>

      <div className="w-full max-w-md p-4 bg-gray-800 rounded-lg">
        <pre className="text-sm text-gray-300">
          <code>{`const deltaX = (x - centerX) / 8;
const deltaY = (y - centerY) / 8;

button.style.transform = 
  \`translate(\${deltaX}px, \${deltaY}px)\`;`}</code>
        </pre>
      </div>
    </div>
  );
}