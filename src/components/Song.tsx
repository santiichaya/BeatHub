import { useState,useRef } from "react";
import { getArtistById, getSongById } from "../data/repoMusica"
import PlayButton from "./PlayButton";

type SongsProps={
    id:number;
    showOnlyPlayButton?: boolean;
}
export function Song({id,showOnlyPlayButton=false}:SongsProps){
    const [isPlaying, setIsPlaying] = useState(false); // El estado para saber cuando está sonando y cuando no.
    const audioRef = useRef<HTMLAudioElement>(null); //El audiRef sirve para poder manipular un elemento del DOM de tipo audio. Es un estado mutable.
    const song=getSongById(id); //Obtengo la canción a partir del id
    const artista=typeof(song?.artist_id)!='undefined'?getArtistById(song.artist_id):null; //Obtengo el artista a partir de la propiedad id_artist que tiene la canción
    const minutes = (Math.trunc(song!.duration / 60));
    const seconds = `0${(Math.trunc(song!.duration % 60))}`;
    const duracion = `${minutes}: ${seconds.slice(-2)}`;
    //Función para poder tratar cuando me hagan click en el componente PlayButton
    const toggleAudio = () => {
        if (audioRef.current) {
          if (isPlaying) {
            audioRef.current.pause();
          } else {
            audioRef.current.play().catch(error => {
              console.error('Error al reproducir el audio:', error);
            });
          }
          setIsPlaying(!isPlaying);
        }
      };
    return(
        <>
            <article className={`song-container ${showOnlyPlayButton ? 'song-container-only-play-button' : ''}`}>

        {!showOnlyPlayButton && (
          <>
            <header className="song-header">
                <img src={song?.photo} />
                <div className="song-info">
                    <h3 className="song-title">{song?.title}</h3>
                    <p className="song-artistname">{artista?.name}</p>
                    <p className="song-genre">"{song?.genre}"</p>
                </div>
            </header>
            <footer className="song-footer">
            <p className="song-duration">{duracion}</p>
            <PlayButton onPlay={toggleAudio} estado={isPlaying} />
            <audio ref={audioRef} src={song?.url} />
        </footer>
        </>
        )} { showOnlyPlayButton &&(
          <footer className="song-footer-only-play-button">
            <PlayButton onPlay={toggleAudio} estado={isPlaying} />
            <audio ref={audioRef} src={song?.url} />
        </footer>
        )}
        
    </article>
        </>
    )
}