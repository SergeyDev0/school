import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Materials from './pages/Materials';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="materials" element={<Materials />} />
				</Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
