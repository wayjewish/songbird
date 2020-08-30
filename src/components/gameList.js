import React from 'react';

function GameList(props) {
  const gameListItem = props.list.map((item, index) =>
    <GameListItem 
      key={item.id} 
      name={item.name} 
      success={item.success} 
      error={item.error} 
      onGuess={() => props.onGuess(index)} />
  );

  return (
    <ul className="game-list">
      {gameListItem}
    </ul>
  );
}

function GameListItem(props) {
  const classes = `game-list__item${props.success ? ' success' : ''}${props.error ? ' error' : ''}`;
  return <li className={classes} onClick={props.onGuess}>{props.name}</li>;
}

export default GameList;