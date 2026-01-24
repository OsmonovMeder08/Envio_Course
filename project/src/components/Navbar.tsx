import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  const { theme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/courses', label: t('nav.courses') },
    { path: '/teachers', label: t('nav.teachers') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className={`${theme === 'dark' ? 'bg-gray-900/95 text-white' : 'bg-white/95'} backdrop-blur-md shadow-lg sticky top-0 z-50 transition-colors`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/images/envio.png"  // путь из public
            alt="Envio Logo" 
            className="w-12 h-12 object-contain"
          />
          <span className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Envio
          </span>
        </Link>

        
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? theme === 'dark' 
                      ? 'text-blue-400 bg-blue-900/30'
                      : 'text-blue-600 bg-blue-50'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Theme and Language Switchers */}
            <div className={`flex items-center space-x-2 pl-4 border-l ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>

            {/* CTA Button */}
            <Link
              to="/booking"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              {t('nav.booking')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${theme === 'dark' ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} focus:outline-none`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? theme === 'dark'
                        ? 'text-blue-400 bg-blue-900/30'
                        : 'text-blue-600 bg-blue-50'
                      : theme === 'dark'
                        ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-700'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <LanguageSwitcher />
              </div>
              <Link
                to="/booking"
                onClick={() => setIsOpen(false)}
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-md text-base font-medium hover:from-blue-700 hover:to-purple-700 transition-all mt-2"
              >
                {t('nav.booking')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}