import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/Home/HomePage';
import ProjectPage from './pages/Project/ProjectPage';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
