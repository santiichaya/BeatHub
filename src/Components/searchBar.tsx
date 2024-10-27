import React, { useState } from 'react';
import styled from 'styled-components';

//Instalar dependencias 
//npm install styled-components
//npm install @types/styled-components

interface SearchBarProps {
    onSearch: (query: string) => void;
}

let timeoutId = -1;

// Contenedor del componente de búsqueda
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
`;

// Estilo para el campo de entrada de búsqueda
const SearchInput = styled.input`
    width: 100%;
    max-width: 400px;
    padding: 10px 15px;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 20px;
    outline: none;
    transition: border-color 0.3s;
    padding-left:40px;  /* Espacio para el icono */
    
    &:focus {
        border-color: #1DB954; /* Color de acento */
    }

    &::placeholder {
        color: #aaa;
    }
`;

// Estilo para el icono de búsqueda
const SearchIcon = styled.span`
padding:8px; 
    position: absolute;
    left: 5px;
    font-size: 18px;
    color: #888;
`;

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        clearTimeout(timeoutId);
        setQuery(e.target.value);
        timeoutId = setTimeout(() => {
            onSearch(e.target.value);
        }, 500);
    };

    return (
        <SearchContainer>
            <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
                <SearchIcon>🔍</SearchIcon> {/* Icono de búsqueda */}
                <SearchInput
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Búsqueda de canción, artista, álbum..."
                />
            </div>
        </SearchContainer>
    );
};

export default SearchBar;
