import { Link } from 'react-router-dom';
import { User, Star, BookOpen, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

export default function Teachers() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const teachers = [
    {
      id: 1,
      name: 'Анна Петрова',
      specialty: 'Web Development',
      experience: 8,
      rating: 4.9,
      students: 150,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Опытный разработчик с экспертизой в React, Node.js и современных веб-технологиях.',
    },
    {
      id: 2,
      name: 'Дмитрий Иванов',
      specialty: 'Data Science',
      experience: 12,
      rating: 4.8,
      students: 200,
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Эксперт в области машинного обучения и анализа данных с опытом в крупных IT-компаниях.',
    },
    {
      id: 3,
      name: 'Мария Сидорова',
      specialty: 'UX/UI Design',
      experience: 6,
      rating: 4.9,
      students: 120,
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Креативный дизайнер с фокусом на пользовательский опыт и современные дизайн-тренды.',
    },
    {
      id: 4,
      name: 'Алексей Козлов',
      specialty: 'Digital Marketing',
      experience: 10,
      rating: 4.7,
      students: 180,
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Специалист по цифровому маркетингу с опытом продвижения брендов в интернете.',
    },
    {
      id: 5,
      name: 'Елена Васильева',
      specialty: 'Business Analytics',
      experience: 7,
      rating: 4.8,
      students: 90,
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Бизнес-аналитик с экспертизой в области управления проектами и анализа бизнес-процессов.',
    },
    {
      id: 6,
      name: 'Сергей Николаев',
      specialty: 'Cloud Computing',
      experience: 15,
      rating: 4.9,
      students: 250,
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Архитектор облачных решений с многолетним опытом работы с AWS, Azure и Google Cloud.',
    },
  ];

  return (
    <div className={`min-h-screen py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} transition-colors`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t('teachers.title')}
          </h1>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('teachers.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105`}
            >
              <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <img 
                  src={teacher.image} 
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {teacher.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {teacher.specialty}
                </p>
                <p className={`mb-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {teacher.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center space-x-1 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    <User className="w-4 h-4" />
                    <span>{teacher.experience} {t('teachers.years')}</span>
                  </div>
                  <div className={`flex items-center space-x-1 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{teacher.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className={`flex items-center space-x-1 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    <BookOpen className="w-4 h-4" />
                    <span>{teacher.students} студентов</span>
                  </div>
                  <Link
                    to={`/booking?teacher=${teacher.id}`}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                  >
                    <span>{t('teachers.book')}</span>
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