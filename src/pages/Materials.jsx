import { motion, AnimatePresence } from 'framer-motion';
import { FileText, BookOpen, Users, ChevronDown, ChevronUp, Download, Calculator, Ruler } from 'lucide-react';
import { useState, useEffect } from 'react';

const materialsData = [
  {
    id: 'algebra',
    title: "Алгебра",
    icon: <Calculator size={24} />,
    class: "5-11",
    type: "Учебные материалы",
    files: [
      { name: "Темы для повторения.pdf", size: "306 KB", file: "/materials/alg.pdf" },
      { name: "Задачи для повторения.pdf", size: "177 KB", file: "/materials/alg-2.pdf" },
      { name: "Задачи для повторения 5-6 класс.pdf", size: "860 KB", file: "/materials/alg-3.pdf" }
    ]
  },
  {
    id: 'geometry',
    title: "Геометрия",
    icon: <Ruler size={24} />,
    class: "7-8",
    type: "Учебные материалы",
    files: [
      { name: "Темы для повторения 7 класс.pdf", size: "202 KB", file: "/materials/geo.pdf" },
      { name: "Темы для повторения 8 класс.pdf", size: "248 KB", file: "/materials/geo-8.pdf" },
    ]
  },
  {
    id: 'math',
    title: "Математика",
    icon: <BookOpen size={24} />,
    class: "5-6",
    type: "Учебные материалы",
    files: [
      { name: "Методическое пособие для учителя 5-6 класс.pdf", size: "7.2 MB", file: "/materials/math.pdf" },
    ]
  }
];

const classHours = [
  "История математики",
  "Математика в профессиях",
  "Математические головоломки",
  "Математика в искусстве",
  "Математика в природе",
  "Математика в спорте",
  "Математика в архитектуре",
  "Математика в музыке",
  "Математика в экономике"
];

export default function Materials() {
  const [expandedMaterial, setExpandedMaterial] = useState(null);

  useEffect(() => {
    // Получаем хэш из URL (например, #algebra)
    const hash = window.location.hash.slice(1);
    
    // Находим индекс материала по id
    const materialIndex = materialsData.findIndex(material => material.id === hash);
    
    // Если материал найден, раскрываем его и прокручиваем к нему
    if (materialIndex !== -1) {
      setExpandedMaterial(materialIndex);
      
      // Даем время на раскрытие блока
      setTimeout(() => {
        const element = document.getElementById(hash);
        const header = document.querySelector('.header');
        
        if (element && header) {
          const headerHeight = header.offsetHeight;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 30;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, []); // Запускаем только при монтировании компонента

  const toggleMaterial = (index) => {
    setExpandedMaterial(expandedMaterial === index ? null : index);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="materials"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="materials-header"
        >
          <h1>Учебные материалы</h1>
          <p className="subtitle">Доступ к учебным ресурсам для учащихся</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="materials-grid"
        >
          {materialsData.map((material, index) => (
            <motion.div
              key={material.id}
              id={material.id}
              className="material-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div 
                className="material-header"
                onClick={() => toggleMaterial(index)}
              >
                <div className="material-icon">
                  {material.icon}
                </div>
                <div className="material-info">
                  <h3>{material.title}</h3>
                  <div className="material-meta">
                    <span className="class">{material.class}</span>
                    <span className="type">{material.type}</span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedMaterial === index ? 180 : 0 }}
                  className="material-toggle"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </div>
              
              <motion.div
                className="material-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: expandedMaterial === index ? 'auto' : 0,
                  opacity: expandedMaterial === index ? 1 : 0
                }}
              >
                <div className="files-list">
                  {material.files.map((file, fileIndex) => (
                    <motion.div 
                      key={fileIndex}
                      className="file-item"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <FileText size={18} />
                      <div className="file-info">
                        <span>{file.name}</span>
                        <span className="file-size">{file.size}</span>
                      </div>
                      <motion.a 
                        href={file.file}
                        download
                        className="download-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Скачать
                      </motion.a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="class-hours-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2><Users size={24} /> Темы лекций</h2>
          <div className="class-hours-grid">
            {classHours.map((topic, index) => (
              <motion.div
                key={index}
                className="topic-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileHover={{ scale: 1.03 }}
              > 
                <div className="topic-number">{index + 1}</div>
                <h3>{topic}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}