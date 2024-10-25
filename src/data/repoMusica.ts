import data from './data.json';

// Definimos las interfaces para los tipos de datos que vamos a manejar
export interface Artist {
    id: number;
    name: string;
    profile_image: string;
}

export interface Song {
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
    description: string;
    songs: number[];  // Array de IDs de canciones
}

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    playlists: Playlist[];
    favorite_songs: number[];  // Array de IDs de canciones
}

// Funciones para obtener datos
export function getArtists(): Artist[] {
    return data.artists;
}

export function getSongs(): Song[] {
    return data.songs;
}

export function getUsers(): User[] {
    return data.users;
}

export function getUserById(id: number): User | undefined {
    return data.users.find(user => user.id === id);
}

export function getSongById(id: number): Song | undefined {
    return data.songs.find(song => song.id === id);
}

export function getPlaylistById(userId: number, playlistId: number): Playlist | undefined {
    const user = getUserById(userId);
    return user?.playlists.find(playlist => playlist.id === playlistId);
}

export function getArtistById(id: number): Artist | undefined {
    return data.artists.find(artist => artist.id === id);
}
