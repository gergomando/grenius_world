import React from 'react';
import Varify from '../../games/Varify/Varify';
import Eatoo from '../../games/Eatoo/Eatoo';

const components = {
  Varify,
  Eatoo
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

  render = () => this.getGame(this.gameType);
}