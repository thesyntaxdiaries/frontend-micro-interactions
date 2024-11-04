import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';

export function MemoryForm() {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('draftForm');
    return saved ? JSON.parse(saved) : { title: '', content: '' };
  });

  useEffect(() => {
    const saveToStorage = () => {
      localStorage.setItem('draftForm', JSON.stringify(formData));
    };

    window.addEventListener('beforeunload', saveToStorage);
    return () => window.removeEventListener('beforeunload', saveToStorage);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <form className="w-full max-w-md space-y-4">
        <div>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
            className="w-full bg-transparent border-2 border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 transition-colors"
          />
        </div>
        <div>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Enter content"
            rows={4}
            className="w-full bg-transparent border-2 border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 transition-colors resize-none"
          />
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Save size={16} />
          <span>Content saved automatically</span>
        </div>
      </form>

      <div className="w-full max-w-md p-4 bg-gray-800 rounded-lg">
        <pre className="text-sm text-gray-300">
          <code>{`useEffect(() => {
  const saveToStorage = () => {
    localStorage.setItem(
      'draftForm', 
      JSON.stringify(formData)
    );
  };

  window.addEventListener(
    'beforeunload', 
    saveToStorage
  );
}, [formData]);`}</code>
        </pre>
      </div>
    </div>
  );
}