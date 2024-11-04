import React from 'react';

const sections = [
  "Almost There Button",
  "Smooth Scroll",
  "Ghost Input",
  "Magnetic Hover",
  "Smart Validation",
  "Breathing Loader",
  "Haptic Feedback",
  "Anticipatory Hover",
  "Progressive Image",
  "Elastic Refresh",
  "Contextual Menu",
  "Memory Form"
];

interface NavigationProps {
  isOpen: boolean;
}

export default function Navigation({ isOpen }: NavigationProps) {
  return (
    <nav className={`
      fixed lg:static top-[72px] left-0 w-full lg:w-auto
      bg-black/20 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-y-0' : '-translate-y-[150%] lg:translate-y-0'}
    `}>
      <ul className="flex flex-col lg:flex-row gap-2 p-4 lg:p-0">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section.toLowerCase().replace(/\s+/g, '-')}`}
              className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}