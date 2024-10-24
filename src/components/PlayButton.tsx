type PlayButtonProps = {
  onPlay:()=>void;
  estado:boolean;
};

function PlayButton({ onPlay, estado}: PlayButtonProps) {
  return (
    <div className="playbutton-container">
      <button onClick={onPlay} className="playbutton-button">
        <svg className="playbutton-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path>
          {estado ? (
            <>
            {/* Mejoramos el icono de pausa usando dos rectángulos proporcionales */}
            <rect x="5" y="4" width="2.5" height="8" rx="1"></rect> {/* Primer rectángulo */}
            <rect x="8.5" y="4" width="2.5" height="8" rx="1"></rect> {/* Segundo rectángulo */}
          </>
          ) : (
            <path d="M6 4v8l6-4z"></path> // Icono de reproducción
          )}
        </svg>
      </button>
    </div>
  );
}

export default PlayButton;
