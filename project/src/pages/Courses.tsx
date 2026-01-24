import { Link } from 'react-router-dom';
import { Clock, BarChart, DollarSign, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

export default function Courses() {
  const { t } = useLanguage();
  const { theme } = useTheme();

const courses = [
  {
    id: 1,
    title: 'English Beginning',
    description: 'Основы английского языка с нуля',
    duration: 12,
    level: t('courses.beginner'),
    price: '₽3,800',
    image: 'https://liberianinvestigator.com/wp-content/uploads/2025/08/English.jpeg',
  },
  {
    id: 2,
    title: 'English Elementary',
    description: 'Базовое общение и простые фразы',
    duration: 6,
    level: t('courses.elementary'),
    price: '₽3,800',
    image: 'https://img.freepik.com/free-vector/hand-drawn-english-school-background_23-2149496629.jpg',
  },
  {
    id: 3,
    title: 'English Pre-Intermediate',
    description: 'Уверенное понимание и разговор',
    duration: 10,
    level: t('courses.pre-intermediate'),
    price: '₽3,800',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 4,
    title: 'English Intermediate',
    description: 'Разговорный английский для жизни и работы',
    duration: 8,
    level: t('courses.intermediate'),
    price: '₽3,800',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 5,
    title: 'English Upper-Intermediate',
    description: 'Английский для карьеры и обучения',
    duration: 14,
    level: t('courses.upperIntermediate'),
    price: '₽3,800',
    image: 'https://images.pexels.com/photos/3184634/pexels-photo-3184634.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 6,
    title: 'English Advanced',
    description: 'Свободный английский на продвинутом уровне',
    duration: 8,
    level: t('courses.advanced'),
    price: '₽3,800',
    image: 'https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];
 return (
    <div className={`min-h-screen py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} transition-colors`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t('courses.title')}
          </h1>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('courses.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105`}
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {course.title}
                </h3>
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center space-x-1 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    <Clock className="w-4 h-4" />
                    <span>{course.duration} {t('courses.weeks')}</span>
                  </div>
                  <div className={`flex items-center space-x-1 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    <BarChart className="w-4 h-4" />
                    <span>{course.level}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className={`flex items-center space-x-1 text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    <DollarSign className="w-6 h-6" />
                    <span>{course.price}</span>
                  </div>
                  <Link
                    to={`/booking/${course.id}`}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                  >
                    <span>{t('courses.book')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}