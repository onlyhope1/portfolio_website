import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-700 dark:text-yellow-400 hover:scale-110 transition-all border border-gray-200 dark:border-gray-700 cursor-pointer"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
