import React from 'react';
import { Menu } from 'lucide-react';
import Navigation from './components/Navigation';
import Showcase from './components/Showcase';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="fixed top-0 w-full bg-black/20 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">UI Patterns</h1>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
          <Navigation isOpen={isMenuOpen} />
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="mt-4 text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Modern UI Patterns
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            A comprehensive showcase of elegant user interface patterns that enhance user experience.
          </p>
          <Showcase />
        </div>
      </main>
    </div>
  );
}

export default App;