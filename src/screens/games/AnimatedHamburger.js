import React from 'react';
import {View, Image, StyleSheet, Animated, Easing } from 'react-native';
import styles from './Eatoo.style.js';

export default class AnimatedHamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positionY: this.props.posY,
    };
  }

  componentDidMount() {
    this.setPositionY();
  }

  setPositionY() {
    Animated.timing(this.state.positionY, {
      toValue:  0,
      duration: 5000
    }).start();
  }

  render() {
    let { positionY } = this.state;
    return (
      <Animated.View style={ {transform:[ {translateY : positionY } ] } }>
        <Image style={styles.hamburgerImg} source={require('../../assets/hamburger.png')} />
      </Animated.View>
    );
  }
}