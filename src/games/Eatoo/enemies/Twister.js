import React from 'react';
import { Animated } from 'react-native';

export default class Twister extends React.Component {
  render() {
    return (
      <Animated.Image
        source={require('../../../assets/twister.png')}
        style={{
            position: 'absolute',
            height: 40,
            width:40,
            opacity: this.props.opacity,
            top: this.props.top
        }}
      />
    );
  }
}