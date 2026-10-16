import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ProjectPage from './pages/Project/ProjectPage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
