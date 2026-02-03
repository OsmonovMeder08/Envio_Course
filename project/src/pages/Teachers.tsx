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
      name: 'Daniel Eshbaev',
      specialty: t('courses.englishElementary.level'),
      experience: 8,
      rating: 4.9,
      students: 150,
      image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlmZXxlbnwwfHwwfHx8MA%3D%3D',
      description: t('teachers.daniel.desc'),
    },
    {
      id: 2,
      name: 'Osmonov Meder',
      specialty: t('courses.englishAdvanced.level'),
      experience: 12,
      rating: 4.8,
      students: 200,
      image: 'https://p0.piqsels.com/preview/267/712/965/islamic-prayer-dusk-sun.jpg',
      description: t('teachers.meder.desc'),
    },
    {
      id: 3,
      name: 'Artykov Aziret',
      specialty: t('courses.englishBeginning.level'),
      experience: 6,
      rating: 4.9,
      students: 120,
      image: 'https://www.pix-star.com/blog/wp-content/uploads/2021/05/digital-photo-frames.jpg',
      description: t('teachers.aziret.desc'),
    },
    {
      id: 4,
      name: 'Topchubekov Ilimbek',
      specialty: t('courses.englishIntermediate.level'),
      experience: 10,
      rating: 4.7,
      students: 180,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA-7UIYLcEK1mAwct1XgW8aSMnvm3ZEQBYgQ&s',
      description: t('teachers.ilimbek.desc'),
    },
    {
      id: 5,
      name: 'Artykova Jumaida',
      specialty: t('courses.englishPreIntermediate.level'),
      experience: 7,
      rating: 4.8,
      students: 90,
      image: 'https://iso.500px.com/wp-content/uploads/2019/07/stock-photo-maderas-312058103.jpg',
      description: t('teachers.jumaida.desc'),
    },
    {
      id: 6,
      name: 'Artykova Ayat',
      specialty: t('courses.englishUpperIntermediate.level'),
      experience: 15,
      rating: 4.9,
      students: 250,
      image: 'https://static.desygner.com/wp-content/uploads/sites/13/2022/05/04141642/Free-Stock-Photos-01.jpg',
      description: t('teachers.ayat.desc'),
    },
  ];

  return (
    <div
      className={`min-h-screen py-20 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      } transition-colors`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t('teachers.title')}
          </h1>
          <p
            className={`text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {t('teachers.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className={`${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105`}
            >
              <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {teacher.name}
                </h3>

                <p className="text-blue-600 font-medium mb-3">
                  {teacher.specialty}
                </p>

                <p
                  className={`mb-4 text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {teacher.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`flex items-center space-x-1 text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    <User className="w-4 h-4" />
                    <span>
                      {teacher.experience} {t('teachers.years')}
                    </span>
                  </div>

                  <div
                    className={`flex items-center space-x-1 text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{teacher.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div
                    className={`flex items-center space-x-1 text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>
                      {teacher.students} {t('teachers.students')}
                    </span>
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
