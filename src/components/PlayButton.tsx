import React, { useRef, useState } from 'react';
import { getSongById } from '../data/repoMusica'; 

type PlayButtonProps = {
  songId: number;  // Recibe el ID de la canción como prop
};

function PlayButton({ songId }: PlayButtonProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Usa la función getSongById para obtener la canción
  const song = getSongById(songId);
  const songUrl = song ? song.url : ''; // Asigna la URL de la canción o una cadena vacía si no se encuentra

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

  return (
    <div>
      <button onClick={toggleAudio}>
        <svg className="play-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path>
          {isPlaying ? (
            <path d="M6 5h2v6H6zM8 5h2v6H8z"></path> // Icono de pausa
          ) : (
            <path d="M6 4v8l6-4z"></path> // Icono de reproducción
          )}
        </svg>
      </button>
      <audio ref={audioRef} src={songUrl}></audio>
    </div>
  );
}

export default PlayButton;
