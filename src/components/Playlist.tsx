import { getPlaylistById } from "../data/repoMusica"
import {Link} from 'react-router-dom';

type PlayListProp = {
    id: number;
}
export function Playlist({ id }: PlayListProp) {
    const playlist = getPlaylistById(id);

    return (
        <>
            <Link to={`/Playlist/${id}`}>
                <article>
                    <img src={playlist?.url} />
                    <div>
                        <h3>{playlist?.name}</h3>
                    </div>
                </article>
            </Link>
        </>
    )

}
