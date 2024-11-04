import React, { useState, useEffect, useRef } from 'react';
import { Copy, Share, Trash, Edit } from 'lucide-react';

export function ContextMenu() {
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  };

  const menuItems = [
    { icon: Edit, label: 'Edit' },
    { icon: Copy, label: 'Copy' },
    { icon: Share, label: 'Share' },
    { icon: Trash, label: 'Delete' }
  ];

  return (
    <div className="flex flex-col items-center gap-8">
      <div 
        className="w-full max-w-md aspect-video bg-gray-800 rounded-lg flex items-center justify-center"
        onContextMenu={handleContextMenu}
      >
        Right-click anywhere in this area
      </div>

      {isVisible && (
        <div
          ref={menuRef}
          className="fixed bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2 min-w-[160px] animate-fadeIn"
          style={{
            left: `${menuPosition.x}px`,
            top: `${menuPosition.y}px`
          }}
        >
          {menuItems.map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-700 text-left text-sm"
              onClick={() => setIsVisible(false)}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>
      )}

      <div className="w-full max-w-md p-4 bg-gray-800 rounded-lg">
        <pre className="text-sm text-gray-300">
          <code>{`const [menuPosition, setMenuPosition] = 
  useState({ x: 0, y: 0 });

const handleContextMenu = (e) => {
  e.preventDefault();
  setMenuPosition({ 
    x: e.clientX, 
    y: e.clientY 
  });
};`}</code>
        </pre>
      </div>
    </div>
  );
}