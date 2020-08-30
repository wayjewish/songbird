import React from 'react';
import data from './assets/data';
import { getRandomInRange, soundClick } from './assets/utils';
import { menu } from './assets/constants';
import Header from './components/header';
import Game from './components/game';
import GameList from './components/gameList';
import GameDetail from './components/gameDetail';
import EndGame from './components/endGame';


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

  componentDidMount() {
    console.log(this.state.correctGames.name);
  }

  handleClickGameList(index) {
    let arrGamesNew = this.state.arrGames;
    let guessGames = arrGamesNew[index];

    if (guessGames.id === this.state.correctGames.id && !this.state.levelCompleted) {
      arrGamesNew[index].success = true;
      soundClick(`${process.env.PUBLIC_URL}/sound/win.mp3`);

      this.setState((state) => {
        return {
          score: state.score + state.scoreLevel,
          levelCompleted: true,
        };
      });
    } 

    if (guessGames.id !== this.state.correctGames.id && !this.state.levelCompleted) { 
      arrGamesNew[index].error = true;
      soundClick(`${process.env.PUBLIC_URL}/sound/error.mp3`);

      this.setState((state) => {
        return {
          scoreLevel: state.scoreLevel - 1,
        };
      });
    }

    this.setState((state) => {
      return {
        arrGames: arrGamesNew,
        guessGames: guessGames,
      };
    });
  }

  handleClickNext() {
    let levelNext = this.state.level + 1;

    if (levelNext < this.state.levels) {
      this.setState((state) => {
        state.menu[state.level].isActive = false;
        state.menu[levelNext].isActive = true;
        let correctGames = data[levelNext][getRandomInRange(0, data[levelNext].length - 1)];
        console.log(correctGames.name);

        return {
          menu: menu,
          scoreLevel: 5,
          level: state.level + 1,
          levelCompleted: false,
          arrGames: JSON.parse(JSON.stringify(data[levelNext])),
          correctGames: correctGames,
          guessGames: null,
        };
      });
    }
    
    if (levelNext >= this.state.levels) {
      this.setState((state) => {
        return {
          endGame: true,
        };
      });
    }
  }

  handleClickNewGame() {
    this.setState((state) => {
      state.menu[this.state.level].isActive = false;
      state.menu[0].isActive = true;

      return {
        menu: menu,
        score: 0,
        scoreLevel: 5,
        level: 0,
        levelCompleted: false,
        arrGames: JSON.parse(JSON.stringify(data[0])),
        correctGames: data[0][getRandomInRange(0, data[0].length - 1)],
        guessGames: null,
        endGame: false,
      };
    });
  }

  render() {
    if (this.state.endGame) {
      return (
        <div className="App">
          <Header list={menu} score={this.state.score} />
          <EndGame score={this.state.score} scoreMax={this.state.scoreMax} onEndGame={() => this.handleClickNewGame()} />
        </div>
      );
    } else {
      let classesBtn = `btn${this.state.levelCompleted ? ' next' : ''}`;

      return (
        <div className="App">
          <Header list={menu} score={this.state.score} />
          <Game game={this.state.correctGames} levelCompleted={this.state.levelCompleted} />
          <div className="row">
            <div className="col-md-5">
              <GameList list={this.state.arrGames} onGuess={(index) => this.handleClickGameList(index)} />
            </div>
            <div className="col-md-7">
              <GameDetail game={this.state.guessGames} />
            </div>
          </div>
          <button className={classesBtn} onClick={() => this.handleClickNext()}>Далее</button>
        </div>
      );
    }

  }
}

export default App;
