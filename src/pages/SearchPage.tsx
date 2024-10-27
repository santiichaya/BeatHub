import React, { useState } from 'react';
import SearchResults from '../Components/SearchResults';
import SearchBar from '../Components/SearchBar';
import { useSearch } from '../hooks/useSearch';

const SearchPage: React.FC = () => {
    const [query, setQuery] = useState('');
    const { songs, artists } = useSearch(query);

    return (
        <div className='main-container'>
            <SearchBar onSearch={setQuery} />
            <SearchResults songs={songs} artists={artists} />
        </div>
    );
};

export default SearchPage;
