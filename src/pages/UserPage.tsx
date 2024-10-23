import PlayButton from "../components/PlayButton";
import '../style/UserPage.css';
import { getArtistById, getUserById } from '../data/repoMusica'; 

function UserPage() {
    let user = getUserById(2);
    let artist1 = getArtistById(1);
    let artist2 = getArtistById(2);
    let artist3 = getArtistById(3);
    let artist4 = getArtistById(4);
    let artist5 = getArtistById(5);

    return (
        <>
            <div className="logo">
                <img className="logo-img" src="src/assets/onlyLogo.png" alt="logo" />
                <span className="logo-name">beathub</span>
            </div>    
            <div className="user">
                <img className="user-img" src="src/assets/profilePicture.jpg" alt="Foto de Perfil" />
                <span className="user-name">{user ? user.username : 'Usuario no encontrado'}</span>
                <PlayButton songId={4} />
            </div>

            <span className="favorite-artists">Artistas favoritos más escuchados (Último mes)</span>
            <div className="artists-section">
                <div className="artist">
                    <img className="artist-img" src={artist1 ? artist1.profile_image : ''} alt={artist1 ? artist1.name : 'Artista no encontrado'} />
                    <span className="artist-name">{artist1 ? artist1.name : 'Artista no encontrado'}</span>
                </div>
                <div className="artist">
                    <img className="artist-img" src={artist2 ? artist2.profile_image : ''} alt={artist2 ? artist2.name : 'Artista no encontrado'} />
                    <span className="artist-name">{artist2 ? artist2.name : 'Artista no encontrado'}</span>
                </div>
                <div className="artist">
                    <img className="artist-img" src={artist3 ? artist3.profile_image : ''} alt={artist3 ? artist3.name : 'Artista no encontrado'} />
                    <span className="artist-name">{artist3 ? artist3.name : 'Artista no encontrado'}</span>
                </div>
                <div className="artist">
                    <img className="artist-img" src={artist4 ? artist4.profile_image : ''} alt={artist4 ? artist4.name : 'Artista no encontrado'} />
                    <span className="artist-name">{artist4 ? artist4.name : 'Artista no encontrado'}</span>
                </div>
                <div className="artist">
                    <img className="artist-img" src={artist5 ? artist5.profile_image : ''} alt={artist5 ? artist5.name : 'Artista no encontrado'} />
                    <span className="artist-name">{artist5 ? artist5.name : 'Artista no encontrado'}</span>
                </div>
            </div>
        </>
    );
}

export default UserPage;
