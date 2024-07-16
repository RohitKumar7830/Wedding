import { Routes, Route } from 'react-router-dom';
import { Home, Contact, Services, Stories, About } from './pages/pages.js';
import { Navbar } from './components/Navbar.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-[70px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
