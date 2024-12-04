import React from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

export function Header() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'kr' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <header className="relative">
      {/* Theme, Language, and Profile Controls */}
      <div className="absolute right-4 top-4 flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </button>
        <button
          onClick={toggleLanguage}
          className="px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {i18n.language === 'en' ? 'KR' : 'EN'}
        </button>
        <Link
          to="/profile"
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="View Profile"
        >
          <User className="w-5 h-5" />
        </Link>
      </div>

      {/* Header Content */}
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {t('header.title')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t('header.subtitle')}
        </p>
      </div>
    </header>
  );
}