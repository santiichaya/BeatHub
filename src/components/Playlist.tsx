import { getPlaylistById, getSongById } from "../data/repoMusica"
import { ContentPlaylist } from "./ContentPlaylist";

type PlayListProp={
    id: number;
}
export function Playlist({id}:PlayListProp){
    const playlist=getPlaylistById(id);
    let tiempo_total=0;
    playlist?.songs.map((id)=>{
        const cancion=getSongById(id);
        tiempo_total=tiempo_total+cancion!.duration;
    })
    const horas=Math.trunc(tiempo_total/3600);
    const minutos=`0${Math.trunc(tiempo_total%3600)}`;
    const duracionPlayList=horas!=0?`${horas} h : ${minutos.slice(-2)} min`: `${minutos.slice(-2)} min`;
    return(
        <>
           <article>
            <img src={playlist?.url}/>
            <div>
                <h3>{playlist?.name}</h3>
                <p>{duracionPlayList}</p>
            </div>
            <ContentPlaylist cancionesPlayList={playlist!.songs}/>
           </article>
        </>
    )
}