import { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'kg', name: 'Кыргызча', flag: '🇰🇬' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const currentLang = languages.find((lang) => lang.code === language);

  const handleLanguageChange = (code: string) => {
    setLanguage(code as 'ru' | 'en' | 'kg' | 'de' | 'es');
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span>{currentLang?.flag}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-3 flex items-center space-x-3 transition-colors ${
                language === lang.code
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <div>
                <div className="font-medium">{lang.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{lang.code.toUpperCase()}</div>
              </div>
              {language === lang.code && (
                <div className="ml-auto w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
