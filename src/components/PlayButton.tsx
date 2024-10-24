type PlayButtonProps = {
  onPlay:()=>void;
  estado:boolean;
};

function PlayButton({ onPlay, estado}: PlayButtonProps) {
  return (
    <div className="playbutton-container">
      <button onClick={onPlay}>
      <svg className="playbutton-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    {estado ? (
        <path d="M6 5h2v6H6zM8 5h2v6H8z"></path> // Icono de pausa
    ) : (
        <path d="M6 4v8l6-4z"></path> // Icono de reproducción
    )}
</svg>
      </button>
    </div>
  );
}

export default PlayButton;
