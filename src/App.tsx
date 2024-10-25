import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/search">Buscar Canciones</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
};

export default App;
