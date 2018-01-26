import React from 'react';
import { Animated } from 'react-native';

export default class Hamburger extends React.Component {
  render() {
    return (
      <Animated.Image
        source={require('../../../assets/hamburger.png')}
        style={{
          position: 'absolute',
          height: 40,
          width:40,
          opacity: this.props.opacity || 1,
          top: this.props.top || 40,
        }}
      />
    );
  }
}