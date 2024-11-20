import { Playlist } from "./Playlist";
import data from "../data/data.json";

type ContainerPlayListProp = {
    ids: number[];
}

export function ContainerPlayList({ ids }: ContainerPlayListProp) {
    const playlists = data.playlists;

    return (
        <div  className="playlists-section">
        <h1 className="playlist-presentation">Playlists</h1>
            <div className="playlist">
                {ids.map((v) => (
                    <Playlist key={playlists[v - 1].id} id={playlists[v - 1].id}/>
                ))}
            </div>
        </div>
    )

}