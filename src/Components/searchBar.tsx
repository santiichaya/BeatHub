import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}


let timeoutId=-1

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        clearTimeout(timeoutId)
        setQuery(e.target.value);
        timeoutId=setTimeout(()=>{
            onSearch(e.target.value);
        },500)
       
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Búsqueda de canción, artista, album..."
            />
        </div>
    );
};

export default SearchBar;
