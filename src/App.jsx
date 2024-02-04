import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar'; // Assuming the component name is 'Navbar'
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import About from './pages/About/About';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Place the Navbar component outside the Routes */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;