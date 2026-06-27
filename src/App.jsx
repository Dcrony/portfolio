import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useTheme from './hooks/useTheme';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetail from './pages/CaseStudyDetail';
import ServicesPage from './pages/ServicesPage';
import ExperiencePage from './pages/ExperiencePage';
import GitHubPage from './pages/GitHubPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout theme={theme} toggleTheme={toggleTheme} />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="case-studies" element={<CaseStudiesPage />} />
            <Route path="case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="github" element={<GitHubPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="resume" element={<ResumePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;