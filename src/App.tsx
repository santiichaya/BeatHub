import './style/App.css'

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import UserPage from './pages/UserPage';
import { Display } from './pages/Display';
import { ContainerPlayList } from './components/ContainerPlayList';

function App() {

  return (
    <>
    <Header/>
    {/* <UserPage/> */}
    
       <Router>
            <Routes>
                <Route path="/" element={<ContainerPlayList ids={[1,1,1]} />} />
                <Route path="/Playlist/:id" element={<Display/>} />
            </Routes>
        </Router>
    </>
  )
}

export default App