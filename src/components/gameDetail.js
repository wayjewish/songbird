import React, { useRef, useEffect } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function GameDetail(props) {
  if (props.game) {
    return (
      <div className="game-detail">
        <GameDetailContent game={props.game} />
      </div>
    );
  }

  return (
    <div className="game-detail">
      <p className="instruction">Послушайте плеер. <br/>Выберите игру из списка</p>
    </div>
  );
}

function GameDetailContent(props) {
  const img = `${process.env.PUBLIC_URL}/img/data/${props.game.image}`;
  const audio = `${process.env.PUBLIC_URL}/sound/data/${props.game.audio}`;

  return (
    <div className="game-detail__body">
      <div className="game-detail__top">
        <img className="game-detail__image" src={img} alt={props.game.name} />
        <div className="game-detail__info">
          <div className="game-detail__name">{props.game.name}</div>
          <div className="game-detail__species">{props.game.species}</div>
        </div>
      </div>
      <Player audio={audio} />
      <div className="game-detail__text">{props.game.description}</div>
    </div>
  );
}

function Player(props) {
  const player = useRef();

  useEffect(() => {
    player.current.audio.current.pause();
    player.current.audio.current.currentTime = 0;
  });
  
  return (
    <div className="game-detail__audio">
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

export default GameDetail;