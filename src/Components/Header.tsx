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
                    <div className='header-separator'>
                        <div className="logo">
                            <img className="logo-img" src="src/assets/onlyLogo.png" alt="logo" />
                            <span className="logo-name">beathub</span>
                        </div>
                    </div>

                    <header className='header-container'>
                        <Link to="/" className='searchcont'><HomeButton/></Link>
                        {/* <a href='/'><HomeButton /></a> */}
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