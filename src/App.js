import React from 'react';
import { menu } from './assets/constants';
import Header from './components/header';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      menu: menu,
    };
  }

  render() {
    return (
      <div className="App">
        <Header list={menu} score={this.state.score} />
      </div>
    );
  }
}

export default App;
