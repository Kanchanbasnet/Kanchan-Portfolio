import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ProjectPage from './pages/Project/ProjectPage';
import BlogsPage from './pages/Blogs/BlogsPage';
import { MouseFollower } from './components/mouse-follower';
function App() {
  return (
    <>
      <MouseFollower color="#10e4a7" glowColor="rgba(16, 228, 167, 0.4)" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
