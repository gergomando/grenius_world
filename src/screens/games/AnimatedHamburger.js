import React from 'react';
import {View, Image, StyleSheet, Animated, Easing } from 'react-native';
import styles from './Eatoo.style.js';

export default class AnimatedHamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positionY: new Animated.Value(this.props.posY),
    };
  }

  componentDidMount() {
    this.setPositionY();
  }

  setPositionY() {
    Animated.timing(this.state.positionY, {
      toValue:  -50,
      duration: 5000,
      delay: 500,
    }).start();
  }

  render() {
    let { positionY } = this.state;
    return (
      <Animated.Image style={styles.hamburgerImg} source={require('../../assets/hamburger.png')}
      style={ { height: 40, width:40,position:'absolute',transform:[ {translateY : positionY } ] } } />
    );
  }
}