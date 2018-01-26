import React from 'react';
import Varify from '../../games/Varify/Varify';
import Eatoo from '../../games/Eatoo/Eatoo';
import GameLoop from '../../games/Gameloop';

const components = {
  Varify,
};

export default class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;
  	this.gameType = params.gameType;
  }

  getGame = gameType => {
  	const Game = components[gameType];
		return <Game navigation={this.props.navigation} />;
  }

  render = () => <GameLoop navigation={this.props.navigation} />;
}