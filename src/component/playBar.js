import './playBar.css';
import play from '../images/play.svg'
import pause from '../images/pause.svg'

function PlayBar({isPlaying, playAudio}) {
  return (
    <div className="playBar">
      <img src={isPlaying ? pause : play} onClick={playAudio} className='play'/>
    </div>
  );
}

export default PlayBar;
