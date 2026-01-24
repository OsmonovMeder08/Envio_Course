import { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'ru' | 'en' | 'kg' | 'de' | 'es';
  setLanguage: (lang: 'ru' | 'en' | 'kg' | 'de' | 'es') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.courses': 'Курсы',
    'nav.teachers': 'Преподаватели',
    'nav.contact': 'Контакты',
    'nav.booking': 'Запись',
    
    // Home Page
    'home.title': 'Профессиональные курсы Английского языка',
    'home.subtitle': 'Изучайте новые навыки с лучшими преподавателями',
    'home.description': 'Наша платформа предлагает персонализированные консультации и курсы от опытных специалистов. Начните свой путь к профессиональному росту сегодня.',
    'home.cta': 'Записаться на консультацию',
    'home.features.title': 'Почему выбирают нас',
    'home.features.expert': 'Экспертные преподаватели',
    'home.features.expert.desc': 'Наши преподаватели имеют многолетний опыт',
    'home.features.flexible': 'Гибкое расписание',
    'home.features.flexible.desc': 'Выбирайте удобное время для занятий',
    'home.features.quality': 'Качественное обучение',
    'home.features.quality.desc': 'Современные методики и подходы',
    'home.features.question.desc': 'Готовы начать обучение?',
    'home.cta.subtitle': 'Присоединяйтесь к сотням студентам, которые уже изменили свою карьеру',
    'home.cta.courses': 'Посмотреть курсы',
    'home.cta.booking': 'Записаться',
    
   // Courses
   'courses.title': 'Наши Курсы',
    'courses.subtitle': 'Выберите курс для изучения',
    'courses.book': 'Записаться',
    'courses.weeks': 'недель',

    'courses.englishBeginning.title': 'Английский с нуля',
    'courses.englishBeginning.description': 'Основы английского языка с нуля',
    'courses.englishBeginning.level': 'Начинающий',

    'courses.englishElementary.title': 'Английский Элементарный',
    'courses.englishElementary.description': 'Базовое общение и простые фразы',
    'courses.englishElementary.level': 'Элементарный',

    'courses.englishPreIntermediate.title': 'Английский Пред-средний',
    'courses.englishPreIntermediate.description': 'Уверенное понимание и разговор',
    'courses.englishPreIntermediate.level': 'Пред-средний',

    'courses.englishIntermediate.title': 'Английский Средний',
    'courses.englishIntermediate.description': 'Разговорный английский для жизни и работы',
    'courses.englishIntermediate.level': 'Средний',

    'courses.englishUpperIntermediate.title': 'Английский Выше среднего',
    'courses.englishUpperIntermediate.description': 'Английский для карьеры и обучения',
    'courses.englishUpperIntermediate.level': 'Выше среднего',

    'courses.englishAdvanced.title': 'Английский Продвинутый',
    'courses.englishAdvanced.description': 'Свободный английский на продвинутом уровне',
    'courses.englishAdvanced.level': 'Продвинутый',

    
    // Teachers
    'teachers.title': 'Наши Преподаватели',
    'teachers.subtitle': 'Познакомьтесь с нашей командой экспертов',
    'teachers.experience': 'Опыт работы',
    'teachers.years': 'лет',
    'teachers.book': 'Записаться к преподавателю',
    
    // Contact
    'contact.title': 'Связаться с Администратором',
    'contact.subtitle': 'Мы всегда готовы помочь',
    'contact.admin.subtitle': 'Для срочных вопросов и персональных консультаций',
    'contact.name': 'Имя',
    'contact.email': 'Электронная почта',
    'contact.message': 'Сообщение',
    'contact.send': 'Отправить',
    'contact.info': 'Контактная информация',
    'contact.phone': 'Телефон',
    'contact.hours': 'Часы работы',
    'contact.hours.value': 'Пн-Пт: 9:00-18:00',
    'contact.phone.value': '+996 (505)147052',
    'contact.email.value': 'envio@gmail.com',
    'contact.address': 'Адрес',
    'contact.address.value': 'г. Бишкек. Проспект Ч.Айтматова:4',
    
    // Booking
    'booking.title': 'Запись на Консультацию',
    'booking.subtitle': 'Выберите удобное время',
    'booking.course': 'Курс',
    'booking.teacher': 'Преподаватель',
    'booking.date': 'Дата',
    'booking.time': 'Время',
    'booking.submit': 'Записаться',
    'booking.select.course': 'Выберите курс',
    'booking.select.teacher': 'Выберите преподавателя',
    
    // Footer
    'footer.about': 'О нас',
    'footer.about.text': 'Мы предоставляем качественное образование и консультации для профессионального роста.',
    'footer.contact': 'Контакты',
    'footer.courses': 'Курсы',
    'footer.teachers': 'Преподаватели',
    'footer.rights': 'Все права защищены',
    
    // Pricing
    'pricing.title': 'Цены',
    'pricing.consultation': 'Консультация',
    'pricing.consultation.price': '₽2,500',
    'pricing.consultation.duration': '60 минут',
    'pricing.course': 'Полный курс',
    'pricing.course.price': '₽15,000',
    'pricing.course.duration': '8 недель',
    'pricing.premium': 'Премиум',
    'pricing.premium.price': '₽25,000',
    'pricing.premium.duration': '12 недель + поддержка',


  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    'nav.teachers': 'Teachers',
    'nav.contact': 'Contact',
    'nav.booking': 'Booking',
    
    // Home Page
    'home.title': 'Professional Consultations and Courses',
    'home.subtitle': 'Learn new skills with the best teachers',
    'home.description': 'Our platform offers personalized consultations and courses from experienced specialists. Start your journey to professional growth today.',
    'home.cta': 'Book a consultation',
    'home.features.title': 'Why choose us',
    'home.features.expert': 'Expert teachers',
    'home.features.expert.desc': 'Our teachers have years of experience',
    'home.features.flexible': 'Flexible schedule',
    'home.features.flexible.desc': 'Choose convenient time for classes',
    'home.features.quality': 'Quality education',
    'home.features.quality.desc': 'Modern methods and approaches',
    'home.features.question.desc': 'Ready to start learning?',
    'home.cta.subtitle': 'Join hundreds of students who have already changed their careers',
    'home.cta.courses': 'View Courses',
    'home.cta.booking': 'Book Now',
    
    // Courses
    'courses.title': 'Our Courses',
    'courses.subtitle': 'Choose a course to study',
    'courses.book': 'Book Now',
    'courses.weeks': 'weeks',

    'courses.englishBeginning.title': 'English Beginning',
    'courses.englishBeginning.description': 'Basics of English from zero',
    'courses.englishBeginning.level': 'Beginner',

    'courses.englishElementary.title': 'English Elementary',
    'courses.englishElementary.description': 'Basic communication and simple phrases',
    'courses.englishElementary.level': 'Elementary',

    'courses.englishPreIntermediate.title': 'English Pre-Intermediate',
    'courses.englishPreIntermediate.description': 'Confident understanding and speaking',
    'courses.englishPreIntermediate.level': 'Pre-Intermediate',

    'courses.englishIntermediate.title': 'English Intermediate',
    'courses.englishIntermediate.description': 'Conversational English for life and work',
    'courses.englishIntermediate.level': 'Intermediate',

    'courses.englishUpperIntermediate.title': 'English Upper-Intermediate',
    'courses.englishUpperIntermediate.description': 'English for career and studies',
    'courses.englishUpperIntermediate.level': 'Upper-Intermediate',

    'courses.englishAdvanced.title': 'English Advanced',
    'courses.englishAdvanced.description': 'Fluent advanced English',
    'courses.englishAdvanced.level': 'Advanced',
    
    // Teachers
    'teachers.title': 'Our Teachers',
    'teachers.subtitle': 'Meet our team of experts',
    'teachers.experience': 'Experience',
    'teachers.years': 'years',
    'teachers.book': 'Book with teacher',
    
    // Contact
    'contact.title': 'Contact Administrator',
    'contact.subtitle': 'We are always ready to help',
    'contact.admin.subtitle': 'For urgent questions and personal consultations',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.info': 'Contact Information',
    'contact.phone': 'Phone',
    'contact.hours': 'Working Hours',
    'contact.hours.value': 'Mon-Sat: 8:00-22:00',
    'contact.phone.value': '+996 (505)147052',
    'contact.email.value': 'envio@gmail.com',
    'contact.address': 'Address',
    'contact.address.value': 'C. Bishkek. Avenue CH.Aitmatova:4',

    // Booking
    'booking.title': 'Book a Consultation',
    'booking.subtitle': 'Choose convenient time',
    'booking.course': 'Course',
    'booking.teacher': 'Teacher',
    'booking.date': 'Date',
    'booking.time': 'Time',
    'booking.submit': 'Book',
    'booking.select.course': 'Select course',
    'booking.select.teacher': 'Select teacher',
    
    // Footer
    'footer.about': 'About Us',
    'footer.about.text': 'We provide quality education and consultations for professional growth.',
    'footer.contact': 'Contact',
    'footer.courses': 'Courses',
    'footer.teachers': 'Teachers',
    'footer.rights': 'All rights reserved',
    
    // Pricing
    'pricing.title': 'Pricing',
    'pricing.consultation': 'Consultation',
    'pricing.consultation.price': '$35',
    'pricing.consultation.duration': '60 minutes',
    'pricing.course': 'Full Course',
    'pricing.course.price': '$200',
    'pricing.course.duration': '8 weeks',
    'pricing.premium': 'Premium',
    'pricing.premium.price': '$350',
    'pricing.premium.duration': '12 weeks + support',
  },
  kg: {
    // Navigation
    'nav.home': 'Башкы бет',
    'nav.courses': 'Курстар',
    'nav.teachers': 'Мугалимдер',
    'nav.contact': 'Байланыш',
    'nav.booking': 'Жазылуу',

    // Home Page
    'home.title': 'Кесипкөй консультациялар жана курстар',
    'home.subtitle': 'Эң мыкты мугалимдер менен жаңы көндүмдөрдү үйрөнүңүз',
    'home.description': 'Биздин платформа тажрыйбалуу адистерден жеке консультацияларды жана курстарды сунуштайт. Кесиптик өсүү жолуңузду бүгүн баштаңыз.',
    'home.cta': 'Консультацияга жазылуу',
    'home.features.title': 'Эмне үчүн бизди тандашат',
    'home.features.expert': 'Кесипкөй мугалимдер',
    'home.features.expert.desc': 'Биздин мугалимдер көп жылдык тажрыйбага ээ',
    'home.features.flexible': 'Ийкемдүү график',
    'home.features.flexible.desc': 'Сизге ыңгайлуу убакытты тандаңыз',
    'home.features.quality': 'Сапаттуу билим',
    'home.features.quality.desc': 'Заманбап ыкмалар жана методдор',
    'home.features.question.desc': 'Окууну баштоого даярсызбы?',
    'home.cta.subtitle': 'Өз карьерасын өзгөрткөн жүздөн ашык студентке кошулуңуз',
    'home.cta.courses': 'Курстарды көрүңүз',
    'home.cta.booking': 'Жазылуу',

    // Courses
    'courses.title': 'Биздин курстар',
    'courses.subtitle': 'Окуу үчүн курсту тандаңыз',
    'courses.book': 'Жазылуу',
    'courses.weeks': 'жума',

    'courses.englishBeginning.title': 'Англис тили Башталгыч',
    'courses.englishBeginning.description': 'Англис тилин нөлдөн баштап үйрөнүү',
    'courses.englishBeginning.level': 'Башталгыч',

    'courses.englishElementary.title': 'Англис тили Элементардык',
    'courses.englishElementary.description': 'Негизги баарлашуу жана жөнөкөй сөздөр',
    'courses.englishElementary.level': 'Элементардык',

    'courses.englishPreIntermediate.title': 'Англис тили Ортодон Мурунку',
    'courses.englishPreIntermediate.description': 'Ишенимдүү түшүнүү жана баарлашуу',
    'courses.englishPreIntermediate.level': 'Ортодон Мурунку',

    'courses.englishIntermediate.title': 'Англис тили Орто',
    'courses.englishIntermediate.description': 'Жашоо жана жумуш үчүн сүйлөөчү англис тили',
    'courses.englishIntermediate.level': 'Орто',

    'courses.englishUpperIntermediate.title': 'Англис тили Жогорку Орто',
    'courses.englishUpperIntermediate.description': 'Карьера жана окуу үчүн англис тили',
    'courses.englishUpperIntermediate.level': 'Жогорку Орто',

    'courses.englishAdvanced.title': 'Англис тили Aлдыңкы',
    'courses.englishAdvanced.description': 'Жогорку деңгээлде эркин англис тили',
    'courses.englishAdvanced.level': 'Aлдыңкы',

    // Teachers
    'teachers.title': 'Биздин мугалимдер',
    'teachers.subtitle': 'Кесипкөй командабыз менен таанышыңыз',
    'teachers.experience': 'Тажрыйба',
    'teachers.years': 'жыл',
    'teachers.book': 'Мугалимге жазылуу',

    // Contact
    'contact.title': 'Администратор менен байланыш',
    'contact.subtitle': 'Биз сизге ар дайым жардам берүүгө даярбыз',
    'contact.admin.subtitle': 'Ургалуу суроолор жана жеке консультациялар үчүн',
    'contact.name': 'Аты-жөнү',
    'contact.message': 'Билдирүү',
    'contact.send': 'Жөнөтүү',
    'contact.info': 'Байланыш маалыматтары',
    'contact.email': 'Электрондук почта',
    'contact.phone': 'Телефон',
    'contact.hours': 'Иш убактысы',
    'contact.hours.value': 'Дш–Иш: 8:00–22:00',
    'contact.phone.value': '+996 (505)147052',
    'contact.email.value': 'envio@gmail.com',
    'contact.address': 'Дарек',
    'contact.address.value': 'Шаары. Бишкек. аллея Ч.Айтматова:4',

    // Booking
    'booking.title': 'Консультацияга жазылуу',
    'booking.subtitle': 'Ыңгайлуу убакытты тандаңыз',
    'booking.course': 'Курс',
    'booking.teacher': 'Мугалим',
    'booking.date': 'Күнү',
    'booking.time': 'Убактысы',
    'booking.submit': 'Жазылуу',
    'booking.select.course': 'Курсту тандаңыз',
    'booking.select.teacher': 'Мугалимди тандаңыз',

    // Footer
    'footer.about': 'Биз жөнүндө',
    'footer.about.text': 'Биз кесиптик өсүү үчүн сапаттуу билим жана консультацияларды сунуштайбыз.',
    'footer.contact': 'Байланыш',
    'footer.courses': 'Курстар',
    'footer.teachers': 'Мугалимдер',
    'footer.rights': 'Бардык укуктар корголгон',

    // Pricing
    'pricing.title': 'Баалар',
    'pricing.consultation': 'Консультация',
    'pricing.consultation.price': '$35',
    'pricing.consultation.duration': '60 мүнөт',
    'pricing.course': 'Толук курс',
    'pricing.course.price': '$200',
    'pricing.course.duration': '8 жума',
    'pricing.premium': 'Премиум',
    'pricing.premium.price': '$350',
    'pricing.premium.duration': '12 жума + колдоо',
  },
de: {
  // Navigation
  'nav.home': 'Startseite',
  'nav.courses': 'Kurse',
  'nav.teachers': 'Lehrer',
  'nav.contact': 'Kontakt',
  'nav.booking': 'Buchung',

  // Home Page
  'home.title': 'Professionelle Beratungen und Kurse',
  'home.subtitle': 'Lernen Sie neue Fähigkeiten mit den besten Lehrern',
  'home.description': 'Unsere Plattform bietet individuelle Beratungen und Kurse von erfahrenen Experten an. Beginnen Sie noch heute Ihren Weg zum beruflichen Erfolg.',
  'home.cta': 'Beratung buchen',
  'home.features.title': 'Warum uns wählen',
  'home.features.expert': 'Professionelle Lehrer',
  'home.features.expert.desc': 'Unsere Lehrer verfügen über langjährige Erfahrung',
  'home.features.flexible': 'Flexibler Zeitplan',
  'home.features.flexible.desc': 'Wählen Sie die für Sie passende Zeit',
  'home.features.quality': 'Qualitativ hochwertige Bildung',
  'home.features.quality.desc': 'Moderne Methoden und Ansätze',
  'home.features.question.desc': 'Bereit, mit dem Lernen zu beginnen?',
  'home.cta.subtitle': 'Schließen Sie sich Hunderten von Studierenden an, die bereits ihre Karriere verändert haben',
  'home.cta.courses': 'Kurse anzeigen',
  'home.cta.booking': 'Jetzt buchen',

  // Courses
   'courses.title': 'Unsere Kurse',
    'courses.subtitle': 'Wählen Sie einen Kurs zum Lernen',
    'courses.book': 'Buchen',
    'courses.weeks': 'Wochen',

    'courses.englishBeginning.title': 'Englisch Anfänger',
    'courses.englishBeginning.description': 'Grundlagen des Englischen von null',
    'courses.englishBeginning.level': 'Anfänger',

    'courses.englishElementary.title': 'Englisch Elementar',
    'courses.englishElementary.description': 'Grundkommunikation und einfache Sätze',
    'courses.englishElementary.level': 'Elementar',

    'courses.englishPreIntermediate.title': 'Englisch Vorstufe',
    'courses.englishPreIntermediate.description': 'Sicheres Verständnis und Sprechen',
    'courses.englishPreIntermediate.level': 'Vorstufe',

    'courses.englishIntermediate.title': 'Englisch Mittelstufe',
    'courses.englishIntermediate.description': 'Konversationsenglisch für Leben und Arbeit',
    'courses.englishIntermediate.level': 'Mittelstufe',

    'courses.englishUpperIntermediate.title': 'Englisch Oberes Mittelstufe',
    'courses.englishUpperIntermediate.description': 'Englisch für Karriere und Studium',
    'courses.englishUpperIntermediate.level': 'Oberes Mittelstufe',

    'courses.englishAdvanced.title': 'Englisch Fortgeschritten',
    'courses.englishAdvanced.description': 'Fließendes Englisch auf fortgeschrittenem Niveau',
    'courses.englishAdvanced.level': 'Fortgeschritten',

  // Teachers
  'teachers.title': 'Unsere Lehrer',
  'teachers.subtitle': 'Lernen Sie unser professionelles Team kennen',
  'teachers.experience': 'Erfahrung',
  'teachers.years': 'Jahre',
  'teachers.book': 'Lehrer buchen',

  // Contact
  'contact.title': 'Kontakt mit dem Administrator',
  'contact.subtitle': 'Wir sind immer bereit, Ihnen zu helfen',
  'contact.admin.subtitle': 'Für dringende Fragen und persönliche Beratungen',
  'contact.name': 'Vor- und Nachname',
  'contact.email': 'E-Mail',
  'contact.message': 'Nachricht',
  'contact.send': 'Senden',
  'contact.info': 'Kontaktinformationen',
  'contact.phone': 'Telefon',
  'contact.hours': 'Arbeitszeiten',
  'contact.hours.value': 'Mo–Fr: 8:00–22:00',
  'contact.phone.value': '+996 (505)147052',
  'contact.email.value': 'envio@gmail.com',
  'contact.address': 'Adresse',
  'contact.address.value': 'S. Bischkek. Avenue Ch. Aitmatov:4',

  // Booking
  'booking.title': 'Beratung buchen',
  'booking.subtitle': 'Wählen Sie eine passende Zeit',
  'booking.course': 'Kurs',
  'booking.teacher': 'Lehrer',
  'booking.date': 'Datum',
  'booking.time': 'Uhrzeit',
  'booking.submit': 'Buchen',
  'booking.select.course': 'Kurs auswählen',
  'booking.select.teacher': 'Lehrer auswählen',

  // Footer
  'footer.about': 'Über uns',
  'footer.about.text': 'Wir bieten hochwertige Bildung und Beratungen für berufliches Wachstum an.',
  'footer.contact': 'Kontakt',
  'footer.courses': 'Kurse',
  'footer.teachers': 'Lehrer',
  'footer.rights': 'Alle Rechte vorbehalten',

  // Pricing
  'pricing.title': 'Preise',
  'pricing.consultation': 'Beratung',
  'pricing.consultation.price': '35 $',
  'pricing.consultation.duration': '60 Minuten',
  'pricing.course': 'Kompletter Kurs',
  'pricing.course.price': '200 $',
  'pricing.course.duration': '8 Wochen',
  'pricing.premium': 'Premium',
  'pricing.premium.price': '350 $',
  'pricing.premium.duration': '12 Wochen + Support',
},
es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.courses': 'Cursos',
    'nav.teachers': 'Profesores',
    'nav.contact': 'Contacto',
    'nav.booking': 'Reserva',
    
    // Home Page
    'home.title': 'Consultas y Cursos Profesionales',
    'home.subtitle': 'Aprende nuevas habilidades con los mejores profesores',
    'home.description': 'Nuestra plataforma ofrece consultas personalizadas y cursos de especialistas experimentados. Comienza tu camino hacia el crecimiento profesional hoy.',
    'home.cta': 'Reservar una consulta',
    'home.features.title': 'Por qué elegirnos',
    'home.features.expert': 'Profesores expertos',
    'home.features.expert.desc': 'Nuestros profesores tienen años de experiencia',
    'home.features.flexible': 'Horario flexible',
    'home.features.flexible.desc': 'Elige el tiempo conveniente para las clases',
    'home.features.quality': 'Educación de calidad',
    'home.features.quality.desc': 'Métodos y enfoques modernos',
    'home.features.question.desc': '¿Listo para empezar a aprender?',
    'home.cta.subtitle': 'Únete a cientos de estudiantes que ya han cambiado sus carreras',
    'home.cta.courses': 'Ver Cursos',
    'home.cta.booking': 'Reservar Ahora',
    
    // Courses
    'courses.title': 'Nuestros Cursos',
    'courses.subtitle': 'Elige un curso para estudiar',
    'courses.book': 'Reservar',
    'courses.weeks': 'semanas',

    'courses.englishBeginning.title': 'Inglés Principiante',
    'courses.englishBeginning.description': 'Inglés desde cero',
    'courses.englishBeginning.level': 'Principiante',

    'courses.englishElementary.title': 'Inglés Elemental',
    'courses.englishElementary.description': 'Comunicación básica y frases simples',
    'courses.englishElementary.level': 'Elemental',

    'courses.englishPreIntermediate.title': 'Inglés Pre-Intermedio',
    'courses.englishPreIntermediate.description': 'Comprensión y conversación segura',
    'courses.englishPreIntermediate.level': 'Pre-Intermedio',

    'courses.englishIntermediate.title': 'Inglés Intermedio',
    'courses.englishIntermediate.description': 'Inglés conversacional para la vida y el trabajo',
    'courses.englishIntermediate.level': 'Intermedio',

    'courses.englishUpperIntermediate.title': 'Inglés Intermedio Alto',
    'courses.englishUpperIntermediate.description': 'Inglés para carrera y estudios',
    'courses.englishUpperIntermediate.level': 'Intermedio Alto',

    'courses.englishAdvanced.title': 'Inglés Avanzado',
    'courses.englishAdvanced.description': 'Inglés fluido a nivel avanzado',
    'courses.englishAdvanced.level': 'Avanzado',

    
    // Teachers
    'teachers.title': 'Nuestros Profesores',
    'teachers.subtitle': 'Conoce a nuestro equipo de expertos',
    'teachers.experience': 'Experiencia',
    'teachers.years': 'años',
    'teachers.book': 'Reservar con profesor',
    
    // Contact
    'contact.title': 'Contactar Administrador',
    'contact.subtitle': 'Siempre estamos listos para ayudar',
    'contact.admin.subtitle': 'Para preguntas urgentes y consultas personales',
    'contact.name': 'Nombre',
    'contact.email': 'Correo Electrónico',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar',
    'contact.info': 'Información de Contacto',
    'contact.phone': 'Teléfono',
    'contact.hours': 'Horario de Trabajo',
    'contact.hours.value': 'Lun-Sab: 8:00-22:00',
    'contact.phone.value': '+996 (505)147052',
    'contact.email.value': 'envio@gmail.com',
    'contact.address': 'Dirección',
    'contact.address.value': 'G. Biskek. Avenida Ch. Aitmatov:4',

    // Booking
    'booking.title': 'Reservar una Consulta',
    'booking.subtitle': 'Elige el tiempo conveniente',
    'booking.course': 'Curso',
    'booking.teacher': 'Profesor',
    'booking.date': 'Fecha',
    'booking.time': 'Hora',
    'booking.submit': 'Reservar',
    'booking.select.course': 'Seleccionar curso',
    'booking.select.teacher': 'Seleccionar profesor',
    
    // Footer
    'footer.about': 'Acerca de Nosotros',
    'footer.about.text': 'Proporcionamos educación de calidad y consultas para el crecimiento profesional.',
    'footer.contact': 'Contacto',
    'footer.courses': 'Cursos',
    'footer.teachers': 'Profesores',
    'footer.rights': 'Todos los derechos reservados',
    
    // Pricing
    'pricing.title': 'Precios',
    'pricing.consultation': 'Consulta',
    'pricing.consultation.price': '$35',
    'pricing.consultation.duration': '60 minutos',
    'pricing.course': 'Curso Completo',
    'pricing.course.price': '$200',
    'pricing.course.duration': '8 semanas',
    'pricing.premium': 'Premium',
    'pricing.premium.price': '$350',
    'pricing.premium.duration': '12 semanas + soporte',
}
};


export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'ru' | 'en' | 'kg' | 'de' | 'es'>('ru');

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}