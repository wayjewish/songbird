import React from 'react';

function EndGame(props) {
  
  if (props.score === props.scoreMax) {
    let img = `${process.env.PUBLIC_URL}/img/gaming.jpg`;

    return (
      <div className="end-game">
        <h2>Победа-победа вместо обеда!</h2>
        <p>Вы прошли викторину и набрали {props.score} из {props.scoreMax} возможных баллов</p>
        <img className='end-game__img' src={img} alt="gaming" />
        <button className='btn new-game' onClick={() => props.onEndGame()}>Новая игра</button>
      </div>
    );
  }

  return (
    <div className="end-game">
      <h2>Поздравляем!</h2>
      <p>Вы прошли викторину и набрали {props.score} из {props.scoreMax} возможных баллов</p>
      <button className='btn new-game' onClick={() => props.onEndGame()}>Новая игра</button>
    </div>
  );
}

export default EndGame;