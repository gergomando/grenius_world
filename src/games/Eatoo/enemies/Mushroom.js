import React from 'react';
import {View, Image, StyleSheet, Animated, Easing } from 'react-native';

export default class Mushroom extends React.Component {
  componentWillUpdate(nextProps) {
    console.log(this.props, nextProps);
  }

  render() {
    return (
      <Animated.Image source={require('../../assets/mushroom.png')}
        style={
          { 
            position: 'absolute',
            height: 40, 
            width:40,
            top: this.props.posY
          } 
        } 
      />
    );
  }
}