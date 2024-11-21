import '../style/UserPage.css';
import { getUserById } from '../data/repoMusica'; 
import { Song } from "../components/Song";
import { Artist } from '../components/Artist';
import data from '../data/data.json';

export interface Artist {
    id: number;
    name: string;
    profile_image: string;
}

function UserPage() {
    const user = getUserById(3);
    const artistasPreferidos=[14,4,2,3,1,11];
    const artistas=data.artists;

    return (
        <>
            <div className="user">
                <img className="user-img" src="src/assets/profilePicture.jpg" alt="Foto de Perfil" />
                <span className="user-name">{user ? user.username : 'Usuario no encontrado'}</span>
                <Song id={user!.favorite_song} showOnlyPlayButton={true} /> 
            </div>

            <span className="favorite-artists">Artistas favoritos más escuchados (Último mes)</span>
            <div className="artists-section">
            {artistasPreferidos.map((v)=>(
                v==artistas[v-1].id? <Artist key={artistas[v-1].id} id={artistas[v-1].id}/>:null
            ))}
            </div>
        </>
    );
}


export default UserPage;