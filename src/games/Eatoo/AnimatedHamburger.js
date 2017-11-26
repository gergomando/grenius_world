import React from 'react';
import {View, Image, StyleSheet, Animated, Easing } from 'react-native';
import styles from './Eatoo.style.js';

export default class AnimatedHamburger extends React.Component {
  render() {
    return (
      <Animated.Image source={require('../../assets/hamburger.png')}
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