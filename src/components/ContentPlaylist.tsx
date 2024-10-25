import { Song } from "./Song";
import data from '../data/data.json';

type ContentPlaylistProp={
    cancionesPlayList:number[];
}
export function ContentPlaylist({cancionesPlayList}:ContentPlaylistProp){
    const canciones=data.songs;
    return(
        <>
            <div className="List-section">
            {cancionesPlayList.map((v:number)=>(
                 v==canciones[v-1].id? <Song key={canciones[v-1].id} id={canciones[v-1].id}/>:null
            ))}
            </div>
        </>
    )
}