import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/Home/HomePage';
import ServicesPage from '../pages/Services/ServicesPage';
import ProfessionalsPage from '../pages/Professionals/ProfessionalsPage';
import AboutPage from '../pages/About/AboutPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/servicios" element={<ServicesPage />} />
      <Route path="/profesionales" element={<ProfessionalsPage />} />
      <Route path="/nosotros" element={<AboutPage />} />
    </Routes>
  );
}