import React, { useRef, useEffect } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Game(props) {
  let img = `${process.env.PUBLIC_URL}/img/defaut.jpg`;
  let name = '******';
  const audio = `${process.env.PUBLIC_URL}/sound/data/${props.game.audio}`;
  let stop = false;

  if (props.levelCompleted) {
    img = `${process.env.PUBLIC_URL}/img/data/${props.game.image}`;
    name = props.game.name;
    stop = true;
  }

  return (
    <div className="game">
      <img className="game__img" src={img} alt="game" />
      <div className="game__info">
        <div className="game__name">{name}</div>
        <Player audio={audio} stop={stop} />
      </div>
    </div>
  );
}

function Player(props) {
  const player = useRef();

  useEffect(() => {
    player.current.audio.current.pause();
    player.current.audio.current.currentTime = 0;
  }, [props.stop]);

  return (
    <div className="game__audio">
      <AudioPlayer
            src={props.audio}
            ref={player}
            customControlsSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.VOLUME_CONTROLS]}
            showJumpControls={false}
            showDownloadProgress={false}
          />
    </div>
  );
}

export default Game;