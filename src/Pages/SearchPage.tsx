import React, { useState } from 'react';
import SearchBar from '../Components/searchBar';
import SearchResults from '../Components/searchResults';
import { useSearch } from '../hooks/useSearch';

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
