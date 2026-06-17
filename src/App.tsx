import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Dispatch from './pages/Dispatch';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:id" element={<ProjectDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dispatch" element={<Dispatch />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
