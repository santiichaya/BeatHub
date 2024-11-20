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
        <div className="display-container">
            <div className="display-container-background" style={{ backgroundImage: `url(${playlist?.url})` }}></div>
            <div className="displayPlaylist-header">
                <h3>{playlist?.name}</h3>
                <p>{duracionPlayList}</p>
            </div>
            <table className="displayPlaylist-content">
                <tr className="display-table-header">
                    <td className="vacio"></td>
                    <div className="display-table-header-width">
                    <td className="display-titulo">Titulo</td>
                    <td className="display-artista">Artista</td>
                    <td className="display-genero">Género</td>
                    </div>
                    <td className="display-duracion">Duración</td>
                </tr>
                {playlist?.songs.map((v: number) => (
                    v == canciones[v - 1].id ? <tr><td colSpan={5}><Song key={canciones[v - 1].id} id={canciones[v - 1].id} /></td></tr> : null
                ))}
            </table>
        </div>
    )
}