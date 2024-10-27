import './style/App.css'
/* import UserPage from './pages/UserPage.tsx' */
/* import {Song} from './components/Song.tsx' */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

function App() {

  return (
    <>
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
    </>
  )
}

export default App