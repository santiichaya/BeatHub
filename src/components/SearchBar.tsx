import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}


let timeoutId = -1

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        clearTimeout(timeoutId)
        setQuery(e.target.value);
        timeoutId = setTimeout(() => {
            onSearch(e.target.value);
        }, 500)

    };

    return (
        <div className='searchbar-container'>
            <h2 className='searchbar-title'>Busca cualquier canción, artista o grupo</h2>
            <div className='searchbar-bar-container'>
                <svg className="searchbar-svg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 600 600">
                    <path d="M496.131,435.698L374.855,332.551c-12.537-11.283-25.945-16.463-36.777-15.963C366.707,283.055,384,239.549,384,192
                C384,85.961,298.039,0,192,0C85.962,0,0,85.961,0,192s85.961,192,192,192c47.549,0,91.055-17.293,124.588-45.922
                c-0.5,10.831,4.68,24.238,15.963,36.775L435.697,496.13c17.662,19.623,46.512,21.277,64.109,3.678
                C517.406,482.209,515.754,453.359,496.131,435.698z M192,320c-70.692,0-128-57.309-128-128c0-70.692,57.308-128,128-128
                c70.691,0,128,57.308,128,128C320,262.691,262.693,320,192,320z"/>
                </svg>
                <input
                    className='searchbar-bar'
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Búsqueda de canción, artista, album..." />
            </div>

        </div>
    );
};

export default SearchBar;
