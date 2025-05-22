import { motion } from 'framer-motion';
import { 
  Calculator, 
  Ruler, 
  BookOpen, 
  GraduationCap, 
  Trophy, 
  School, 
  Users, 
  ChevronRight, 
  Award,
  Building2,
  Dumbbell,
  Theater,
  BookOpenCheck
} from 'lucide-react';
import teacherPhoto from '../assets/teacher.jpg';

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="home"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hero"
        >
          <div className="hero-content">
            <div className="hero-text">
              <h1>Яцык Татьяна Афанасьевна</h1>
              <p className="subtitle">Учитель математики с 49-летним стажем</p>
              <p className="hero-description">
                Преподаю алгебру, геометрию и математику для учащихся 5-11 классов. 
                Индивидуальный подход к каждому ученику, подготовка к ОГЭ и ЕГЭ.
              </p>
              <div className="hero-buttons">
                <motion.a 
                  href="/materials" 
                  className="btn primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Учебные материалы
                </motion.a>
                <motion.a 
                  href="/about" 
                  className="btn secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  О школе
                </motion.a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="hero-image"
            >
              <motion.div 
                className="teacher-photo-container"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={teacherPhoto} alt="Яцык Татьяна Афанасьевна" />
                <div className="photo-overlay">
                  <div className="overlay-content">
                    <h3>Яцык Татьяна Афанасьевна</h3>
                    <p>Учитель математики высшей категории</p>
                    <div className="overlay-stats">
                      <div className="stat-item">
                        <Trophy size={20} />
                        <span>49 лет стажа</span>
                      </div>
                      <div className="stat-item">
                        <Award size={20} />
                        <span>Отличник просвещения</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="features"
        >
          <h2>Преподаваемые предметы</h2>
          <div className="features-grid">
            {[
              {
                icon: <BookOpen size={40} />,
                title: "Математика",
                description: "5-6 классы, реализация ФГОС",
                link: "/materials#math"
              },
              {
                icon: <Calculator size={40} />,
                title: "Алгебра", 
                description: "5-9 классы, повторение",
                link: "/materials#algebra"
              },
              {
                icon: <Ruler size={40} />,
                title: "Геометрия",
                description: "7-8 классы, повторение",
                link: "/materials#geometry"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.05,
                  delay: 0.1 + index * 0.1 
                }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <motion.a 
                  href={feature.link}
                  className="learn-more"
                  whileHover={{ x: 5 }}
                >
                  Подробнее <ChevronRight size={16} />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="school-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2>О нашей школе</h2>
          <p className="school-description">
            МБОУ СОШ №2 с. Арзгир - современное образовательное учреждение с богатой историей. 
            Школа располагается в типовом здании, построенном в 1982 году. 
            В нем имеется 27 учебных кабинетов, включая 2 компьютерных класса, 
            2 спортивных зала, актовый зал, музей, столовую, мастерские, библиотеку, 
            кабинеты психологической, медицинской и социальной служб.
          </p>
          <div className="info-grid">
            {[
              {
                icon: <Building2 size={28} />,
                title: "27 учебных кабинетов",
                description: "Включая 2 компьютерных класса"
              },
              {
                icon: <Dumbbell size={28} />,
                title: "2 спортивных зала", 
                description: "Для занятий физкультурой и спортом"
              },
              {
                icon: <Theater size={28} />,
                title: "Актовый зал",
                description: "Для проведения мероприятий"
              },
              {
                icon: <BookOpenCheck size={28} />,
                title: "Углублённое изучение",
                description: "Физики и гуманитарных дисциплин"
              }
            ].map((info, index) => (
              <motion.div
                key={index}
                className="info-card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <div className="info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <p>{info.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}