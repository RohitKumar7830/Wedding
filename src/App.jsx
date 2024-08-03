import { Routes, Route } from 'react-router-dom';
import { Home, Contact, Services, Stories, About, PhotographerById } from './pages/pages.js';
import { Footer } from './components/footer.jsx';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/services/photographer/:id" element={<PhotographerById />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* divider */}
      <div
        className="border border-b max-w-7xl mx-auto border-slate-500 m-2"
      >
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;