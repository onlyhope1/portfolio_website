import {
  Home,
  User,
  Code,
  Award,
  GitBranch,
  Mail,
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: User, label: 'About' },
  { icon: Code, label: 'Skills' },
  { icon: Award, label: 'Certificates' },
  { icon: GitBranch, label: 'Projects' },
  { icon: Mail, label: 'Contact' },
];

export default function Nav({
  currentSection,
  sectionNames,
  navigate,
  theme,
  toggleTheme,
  totalSections,
}) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-end gap-2">
      {/* Theme toggle - positioned top-right of navbar */}
      <div className="mr-0">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>

      {/* Navbar pill */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 rounded-full px-3 md:px-6 py-2 md:py-3 shadow-2xl shadow-red-900/40 flex items-center gap-1 md:gap-2">
        {/* Nav items (first 3) */}
        {navItems.slice(0, 3).map((item, i) => {
          const Icon = item.icon;
          const isActive = currentSection === i;
          return (
            <button
              key={item.label}
              onClick={() => navigate(i)}
              className={`relative flex flex-col items-center gap-0.5 px-2 md:px-3 py-1 rounded-full transition-all cursor-pointer ${
                isActive ? 'text-white' : 'text-red-200/70 hover:text-white'
              }`}
            >
              {isActive && (
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-5 h-1 bg-white rounded-full" />
              )}
              <Icon size={16} strokeWidth={isActive ? 2.5 : 1.5} />
              <span className={`text-[10px] md:text-xs ${isActive ? 'font-bold' : 'font-normal'} hidden sm:block`}>
                {item.label}
              </span>
            </button>
          );
        })}

        {/* Dot indicators */}
        <div className="flex items-center gap-1 px-2 md:px-3">
          {Array.from({ length: totalSections }).map((_, i) => (
            <button
              key={i}
              onClick={() => navigate(i)}
              className={`rounded-full transition-all cursor-pointer ${
                i === currentSection
                  ? 'w-4 h-1.5 bg-white'
                  : 'w-1.5 h-1.5 bg-red-300/40 hover:bg-red-200/60'
              }`}
              aria-label={`Go to ${sectionNames[i]}`}
            />
          ))}
        </div>

        {/* Nav items (last 3) */}
        {navItems.slice(3).map((item, i) => {
          const idx = i + 3;
          const Icon = item.icon;
          const isActive = currentSection === idx;
          return (
            <button
              key={item.label}
              onClick={() => navigate(idx)}
              className={`relative flex flex-col items-center gap-0.5 px-2 md:px-3 py-1 rounded-full transition-all cursor-pointer ${
                isActive ? 'text-white' : 'text-red-200/70 hover:text-white'
              }`}
            >
              {isActive && (
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-5 h-1 bg-white rounded-full" />
              )}
              <Icon size={16} strokeWidth={isActive ? 2.5 : 1.5} />
              <span className={`text-[10px] md:text-xs ${isActive ? 'font-bold' : 'font-normal'} hidden sm:block`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
