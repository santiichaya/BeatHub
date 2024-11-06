import React from 'react';
import { resultartist, resultsong } from '../data/repoMusica';
import {Song} from './Song';
import {Artist} from './Artist';

interface SearchResultsProps {
    songs: resultsong[];
    artists: resultartist[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ songs, artists }) => {

    return (
        <div className='search-result'> 
        <div className='search-result-song'>
            <h4>Canciones:</h4>
            {songs.length > 0 ? (
                songs.map(resultsong => (
                    <div key={resultsong.id}>
                        <Song id={resultsong.id}/>
                    </div>
                ))
            ) : (
                <p className='result-not-found'>No se ha encontrado la canción</p>
            )}
            </div>
            <div className='search-result-artists-main'>
            <h4>Artistas:</h4>
            <div className='search-result-artists'>
            {artists.length > 0 ? (
                artists.map(resultartist => (
                    <div key={resultartist.id}>
                        <Artist id={resultartist.id}/>
                    </div>
                ))
            ) : (
                <p className='result-not-found'>No se ha encontrado el artista</p>
            )}
            </div>
            </div>
        </div>
    );
};

export default SearchResults;
