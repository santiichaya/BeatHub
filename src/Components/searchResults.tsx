import React from 'react';
import { Artist, Song } from '../data/repoMusica';

interface SearchResultsProps {
    songs: Song[];
    artists: Artist[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ songs, artists }) => {

    return (
        <div>
            <h4>Canciones:</h4>
            {songs.length > 0 ? (
                songs.map(song => (
                    <div key={song.id}>
                        <img src={song.photo} alt={song.title} />
                        <p>{song.title}</p>
                    </div>
                ))
            ) : (
                <p>No se ha encontrado la canción</p>
            )}

            <h4>Artistas:</h4>
            {artists.length > 0 ? (
                artists.map(artist => (
                    <div key={artist.id}>
                        <img src={artist.profile_image} alt={artist.name} style={{width:'100px'}}/>
                        <p>{artist.name}</p>
                    </div>
                ))
            ) : (
                <p>No se ha encontrado el artista</p>
            )}
        </div>
    );
};

export default SearchResults;
