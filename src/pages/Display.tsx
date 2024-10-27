import { Song } from "../components/Song";
import data from '../data/data.json';
import { getPlaylistById, getSongById } from "../data/repoMusica"
import { useParams } from "react-router-dom";

export function Display() {
    const { id } = useParams(); // Obtener el ID de la URL
    const idPlayList = Number(id); // Convertir a número
    const playlist = getPlaylistById(idPlayList);
    const canciones = data.songs;
    let tiempo_total = 0;
    //Para saber el tiempo total de la PlayList
    playlist?.songs.map((id) => {
        const cancion = getSongById(id);
        tiempo_total = tiempo_total + cancion!.duration;
    })
    const horas = Math.trunc(tiempo_total / 3600);
    const minutos = `0${Math.trunc(tiempo_total % 3600)}`;
    const duracionPlayList = horas != 0 ? `${horas} h : ${minutos.slice(-2)} min` : `${minutos.slice(-2)} min`;
    return (
        <>
            <div className="displayPlaylist-header">
                <img src={playlist?.url} />
                <div>
                    <h3>{playlist?.name}</h3>
                    <p>{duracionPlayList}</p>
                </div>
            </div>
            <table>
                <tr>
                    <td>Titulo</td>
                    <td>Artista</td>
                    <td>Género</td>
                    <td>Duración</td>
                </tr>
                {playlist?.songs.map((v: number) => (
                    v == canciones[v - 1].id ? <tr><td colSpan={4}><Song key={canciones[v - 1].id} id={canciones[v - 1].id} /></td></tr> : null
                ))}
            </table>
            <a href="/">Inicio</a>
        </>
    )
}