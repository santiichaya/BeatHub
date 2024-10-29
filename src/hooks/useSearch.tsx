import { useState, useEffect } from 'react';
import { getSongs, getArtists, Song, Artist } from '../data/repoMusica';

export function useSearch(query: string) {
    const [songs, setSongs] = useState<Song[]>([]);
    const [artists, setArtists] = useState<Artist[]>([]);

    useEffect(() => {
        console.log('>>>HOLA')
        if (query.length > 0) {
            const lowercasedQuery = query.toLowerCase();
            
            // Filtramos canciones que coincidan con el título o el género
            const filteredSongs = getSongs().filter(song =>
                song.title.toLowerCase().includes(lowercasedQuery) ||
                song.genre.toLowerCase().includes(lowercasedQuery)
            );
            setSongs(filteredSongs);

            // Filtramos artistas que coincidan con el nombre o el género
            const filteredArtists = getArtists().filter(artist =>
                artist.name.toLowerCase().includes(lowercasedQuery)
            );
            setArtists(filteredArtists);
        } else {
            setSongs([]);
            setArtists([]);
        }
    }, [query]);

    return { songs, artists };
}
