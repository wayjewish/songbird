import React from 'react';
import data from './assets/data';
import { getRandomInRange } from './assets/utils';
import { menu } from './assets/constants';
import Header from './components/header';
import Game from './components/game';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      scoreMax: data.length * 5,
      scoreLevel: 5,
      menu: menu,
      levels: data.length, 
      level: 0,
      levelCompleted: false,
      arrGames: JSON.parse(JSON.stringify(data[0])),
      correctGames: data[0][getRandomInRange(0, data[0].length - 1)],
      guessGames: null,
      endGame: false,
    };
  }

  render() {
    return (
      <div className="App">
        <Header list={menu} score={this.state.score} />
        <Game game={this.state.correctGames} levelCompleted={this.state.levelCompleted} />
      </div>
    );
  }
}

export default App;
