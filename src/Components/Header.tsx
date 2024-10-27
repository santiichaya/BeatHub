import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './../pages/HomePage';
import SearchPage from './../pages/SearchPage';
import HomeButton from './HomeButton.tsx';
import SearchButton from './SearchButton.tsx';

function header() {
    return (
        <>
        <Router>
            <div className='header-main-container'>
                <header className='header-container'>
                    <Link to="/" className='homecont'><HomeButton /></Link><br />
                    <Link to="/search" className='searchcont'><SearchButton /></Link>
                </header>
            </div>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </Router>
    </>
    )
}

export default header;