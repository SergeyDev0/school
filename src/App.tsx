import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import About from './components/About';
import Teacher from './components/Teacher';
import './styles/main.css';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-gradient-to-b from-blue-50 to-white"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/teacher" element={<Teacher />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Router>
  );
}

export default App; 