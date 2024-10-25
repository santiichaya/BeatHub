import '../style/App.css';
import { getArtistById } from '../data/repoMusica'; 
type ArtistProps={
    id:number;
}
export function Artist({id}:ArtistProps) {
    const artist=getArtistById(id);
    
      return (
        <div className="artist">
          <img className="artist-img" src={artist?.profile_image || ''} alt={artist?.name || 'Artista no encontrado'} />
          <span className="artist-name">{artist?.name || 'Artista no encontrado'}</span>
        </div>
      );
}

