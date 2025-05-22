import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'Математический турнир',
      date: '15 мая 2024',
      time: '14:00 - 16:00',
      location: 'Кабинет математики',
      description: 'Ежегодный математический турнир среди учащихся 7-9 классов. Решение олимпиадных задач, математические игры и конкурсы.',
      participants: 'Ожидается 30+ участников'
    },
    {
      title: 'Подготовка к ОГЭ',
      date: '20 мая 2024',
      time: '15:00 - 17:00',
      location: 'Кабинет математики',
      description: 'Дополнительные занятия по подготовке к ОГЭ по математике. Разбор сложных заданий, решение типовых задач.',
      participants: 'Ожидается 15+ участников'
    },
    {
      title: 'Математический кружок',
      date: 'Каждый четверг',
      time: '15:00 - 16:30',
      location: 'Кабинет математики',
      description: 'Занятия математического кружка для учащихся 5-6 классов. Развитие логического мышления, решение нестандартных задач.',
      participants: 'Ожидается 20+ участников'
    },
    {
      title: 'Подготовка к ЕГЭ',
      date: 'Каждую субботу',
      time: '10:00 - 12:00',
      location: 'Кабинет математики',
      description: 'Интенсивная подготовка к ЕГЭ по математике. Профильный уровень. Разбор заданий повышенной сложности.',
      participants: 'Ожидается 12+ участников'
    }
  ];

  return (
    <div className="events">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h1 className="section-title">Мероприятия</h1>
          <p className="section-description">
            Расписание занятий и мероприятий по математике
          </p>
        </motion.div>

        <div className="events__grid">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="event-card"
            >
              <div className="event-card__header">
                <h2 className="event-card__title">{event.title}</h2>
              </div>
              
              <div className="event-card__details">
                <div className="event-card__detail">
                  <Calendar className="event-card__icon" />
                  <span>{event.date}</span>
                </div>
                <div className="event-card__detail">
                  <Clock className="event-card__icon" />
                  <span>{event.time}</span>
                </div>
                <div className="event-card__detail">
                  <MapPin className="event-card__icon" />
                  <span>{event.location}</span>
                </div>
                <div className="event-card__detail">
                  <Users className="event-card__icon" />
                  <span>{event.participants}</span>
                </div>
              </div>

              <p className="event-card__description">{event.description}</p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                Записаться
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events; 