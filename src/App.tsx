import './style/App.css'

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import { Display } from './pages/Display';
import { ContainerPlayList } from './components/ContainerPlayList';

function App() {

  return (
    <>
       {/* <Router>
            <Routes>
                <Route path="/" element={<ContainerPlayList ids={[1,1,1]} />} />
                <Route path="/Playlist/:id" element={<Display/>} />
            </Routes>
        </Router> */}
        <Router>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/search">Buscar Canciones</Link>
      </nav>
      <Routes>
      <Route path="/" element={<ContainerPlayList ids={[1,1,1]} />} />
      <Route path="/Playlist/:id" element={<Display/>} />
      <Route path="/search" element={<SearchPage />} />
      </Routes>
      </Router> 
    </>
  )
}

export default App