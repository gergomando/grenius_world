import React from 'react';
import { View, Image } from 'react-native';
import { Loop, Stage } from 'react-game-kit/native';
import Eatoo from './Eatoo/Eatoo';

export default class GameLoop extends React.Component {
  render() {
    return (
      <Loop>
        <Eatoo />
      </Loop>
    );
  }
}
