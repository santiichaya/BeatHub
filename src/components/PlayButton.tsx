type PlayButtonProps = {
  onPlay:()=>void;
  estado:boolean;
};

function PlayButton({ onPlay, estado}: PlayButtonProps) {
  return (
    <div className="playbutton-container">
      <button onClick={onPlay} className="playbutton-button">          
          <svg className="playbutton-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    {estado ? (
      <>
        <rect x="5" y="4" width="2.5" height="8" rx="1"></rect> 
        <rect x="8.5" y="4" width="2.5" height="8" rx="1"></rect> 
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
