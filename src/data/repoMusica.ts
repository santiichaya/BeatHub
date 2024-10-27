import data from './data.json';

// Definimos las interfaces para los tipos de datos que vamos a manejar
export interface resultartist {
    id: number;
    name: string;
    profile_image: string;
}

export interface resultsong {
    id: number;
    title: string;
    artist_id: number;
    duration: number;
    genre: string;
    release_date: string;
    url: string;
    photo: string;
}

export interface Playlist {
    id: number;
    name: string;
    url: string; // Corregido: Añadido url
    songs: number[];  // Array de IDs de canciones
}

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    favorite_song: number;
}

// Funciones para obtener datos
export function getArtists(): resultartist[] {
    return data.artists;
}

export function getSongs(): resultsong[] {
    return data.songs;
}

export function getUsers(): User[] {
    return data.users;
}

export function getUserById(id: number): User | undefined {
    return data.users.find(user => user.id === id);
}

export function getSongById(id: number): resultsong | undefined {
    return data.songs.find(song => song.id === id);
}

// Función para obtener una playlist por su ID
export function getPlaylistById(playlistId: number): Playlist | undefined {
    return data.playlists.find(playlist => playlist.id === playlistId);
}

export function getArtistById(id: number): resultartist | undefined {
    return data.artists.find(artist => artist.id === id);
}
