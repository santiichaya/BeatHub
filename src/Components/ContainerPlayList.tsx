import { Playlist } from "./Playlist";
import data from "../data/data.json";

type ContainerPlayListProp = {
    ids: number[];
}

export function ContainerPlayList({ ids }: ContainerPlayListProp) {
    const playlists = data.playlists;

    return (
        <>
            <div className="playlists-section">
                {ids.map((v) => (
                    v == playlists[v - 1].id ? <Playlist key={playlists[v - 1].id} id={playlists[v - 1].id}/> : null
                ))}
            </div>
        </>
    )

}