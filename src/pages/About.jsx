import { motion } from 'framer-motion';
import { Book, Clock, School, Users, Trophy } from 'lucide-react';
import { useState } from 'react';

// Импортируем фотографии
import photo1 from '../assets/school-1.jpg';
import photo2 from '../assets/school-2.jpg';
import photo3 from '../assets/school-3.jpg';
import photo4 from '../assets/school-4.jpg';
import photo5 from '../assets/school-5.jpg';

const photos = [photo1, photo2, photo3, photo4, photo5];

export default function About() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="about"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="about-hero"
        >
          <h1>МБОУ СОШ №2 с. Арзгир</h1>
          <p className="subtitle">Школа с 45 педагогами и программами от начальных до старших классов</p>
        </motion.div>

        <motion.div 
          className="school-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="info-grid">
            <motion.div
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <School size={28} />
              <h3>История школы</h3>
              <p>Основана в 1965 году. За время своего существования школа выпустила более 5000 учеников.</p>
            </motion.div>

            <motion.div
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Users size={28} />
              <h3>Педагогический состав</h3>
              <p>В школе работают 45 высококвалифицированных педагогов, из них 15 имеют высшую категорию.</p>
            </motion.div>

            <motion.div
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Trophy size={28} />
              <h3>Достижения</h3>
              <p>Школа регулярно занимает призовые места в районных и краевых олимпиадах и конкурсах.</p>
            </motion.div>
          </div>
        </motion.div>

        <div className="about-sections">
          <motion.div 
            className="about-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2><Book size={28} /> Образовательные программы</h2>
            <ul className="courses-list">
              {[
                "Начальное общее образование (1-4 классы)",
                "Основное общее образование (5-9 классы)",
                "Среднее общее образование (10-11 классы)",
                "Дополнительное образование"
              ].map((program, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.05 }}
                >
                  {program}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="about-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <h2><Clock size={28} /> Режим работы</h2>
            <ul className="qualifications-list">
              {[
                { year: "Пн-Пт", title: "8:00 - 17:00" },
                { year: "Сб", title: "8:00 - 17:00" },
                { year: "Вс", title: "Выходной" },
                { year: "Каникулы", title: "Согласно учебному календарю" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + index * 0.05 }}
                >
                  <span className="year">{item.year}:</span>
                  <span>{item.title}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

				<motion.div 
          className="photo-collage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="collage-grid">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                className="collage-item"
                onClick={() => setSelectedPhoto(photo)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <img src={photo} alt={`Школьная жизнь ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {selectedPhoto && (
          <motion.div 
            className="photo-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            >
              <img src={selectedPhoto} alt="Увеличенное фото" />
              <button 
                className="close-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhoto(null);
                }}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}