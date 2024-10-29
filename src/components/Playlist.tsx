import { getPlaylistById } from "../data/repoMusica"
import {Link} from 'react-router-dom';

type PlayListProp = {
    id: number;
}
export function Playlist({ id }: PlayListProp) {
    const playlist = getPlaylistById(id);

    return (
        <div className="playlist-container">
            <Link to={`/Playlist/${id}`} className="playlist-url">
                <article>
                    <img className="playlist-img" src={playlist?.url} />
                    <div>
                        <h3 className="playlist-title">{playlist?.name}</h3>
                    </div>
                </article>
            </Link>
        </div>
    )

}
