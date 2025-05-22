import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, BookOpen, User, School, Menu, X, GraduationCap } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { path: "/", icon: <Home size={24} />, text: "Главная" },
  { path: "/materials", icon: <BookOpen size={24} />, text: "Материалы" },
  { path: "/about", icon: <User size={24} />, text: "О школе" }
];

export default function Layout({ children }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div className="layout">
      <motion.header 
        className="header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="container">
          <Link to="/" className="logo">
            <GraduationCap size={32} className="logo-icon" />
            <div>
              <h1>МБОУ СОШ №2</h1>
              <p>Ставропольский край</p>
            </div>
          </Link>
          
          <motion.button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="burger-icon">
              <motion.span
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 8 : 0
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={{
                  opacity: isMenuOpen ? 0 : 1
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -8 : 0
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.button>

          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="nav-item"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.div>
                {location.pathname === item.path && (
                  <motion.div 
                    layoutId="underline"
                    className="underline"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>
      </motion.header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Контакты</h3>
              <p>МБОУ СОШ №2</p>
              <p>Адрес: с. Арзгир, ул. Орлова, 12А</p>
            </div>
            <div className="footer-section">
              <h3>Расписание</h3>
              <p>Понедельник - Суббота: 8:00 - 17:00</p>
              <p>Воскресенье: выходной</p>
            </div>
            <div className="footer-section">
              <h3>Учитель</h3>
              <p>Яцык Татьяна Афанасьевна</p>
              <p>Учитель математики высшей категории</p>
              <p>Отличник просвещения</p>
            </div>
          </div>
          <div className="copyright">
            © 2025 МБОУ СОШ | Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}