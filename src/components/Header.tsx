import React from 'react';
import { Link } from 'react-router-dom';
import HomeButton from './HomeButton.tsx';
import SearchButton from './SearchButton.tsx';

function Header() {
    return (
        <div className='header-main-container'>
            <div className='header-separator'>
                <div className="logo">
                    <Link to="/UserPage" className='user-button'>
                        <img className="logo-img" src="src/assets/onlyLogo.png" alt="logo" />
                        <span className="logo-name">beathub</span>
                    </Link>
                </div>
            </div>

            <header className='header-container'>
                <Link to="/"><HomeButton /></Link>
                <Link to="/search"><SearchButton /></Link>
            </header>
        </div>
    );
}

export default Header;
