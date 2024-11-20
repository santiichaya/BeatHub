import './style/App.css'

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import { Display } from './pages/Display';
import { ContainerPlayList } from './components/ContainerPlayList';
import Header from './components/Header';
import UserPage from './pages/UserPage';

function App() {

  return (
    <>
      <Router>
        <nav>
          <Header />
        </nav>
        <Routes>
          <Route path="/UserPage" element={<UserPage/>} />
          <Route path="/" element={<ContainerPlayList ids={[1, 2, 1, 1, 2, 1, 1, 1, 1]} />} />
          <Route path="/Playlist/:id" element={<Display />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App