import React, { useState } from 'react';


import { useSearch } from '../hooks/useSearch';
import SearchResults from '../components/SearchResults';
import SearchBar from '../components/SearchBar';

const SearchPage: React.FC = () => {
    const [query, setQuery] = useState('');
    const { songs, artists } = useSearch(query);

    return (
        <div>
            <SearchBar onSearch={setQuery} />
            <SearchResults songs={songs} artists={artists} />
        </div>
    );
};

export default SearchPage;
