import React from 'react';
import { Link } from 'react-router-dom';
import HomeButton from './HomeButton.tsx';
import SearchButton from './SearchButton.tsx';

function Header() {
    return (
        <div className='header-main-container'>
            <div className='header-separator'>
                <div className="logo">
                    <img className="logo-img" src="src/assets/onlyLogo.png" alt="logo" />
                    <span className="logo-name">beathub</span>
                </div>
            </div>

            <header className='header-container'>
                <Link to="/" className='searchcont'><HomeButton /></Link>
                <Link to="/search" className='searchcont'><SearchButton /></Link>
            </header>
        </div>
    );
}

export default Header;