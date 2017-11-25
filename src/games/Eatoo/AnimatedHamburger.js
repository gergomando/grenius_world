import React from 'react';
import {View, Image, StyleSheet, Animated, Easing } from 'react-native';
import styles from './Eatoo.style.js';

export default class AnimatedHamburger extends React.Component {
  destroyItem() {
    const animation = Animated.timing(this.state.opacity, {
      toValue:  0,
      duration: 5000,
      delay: 500,
    });
    animation.start();
  }

  render() {
    return (
      <Animated.Image style={styles.hamburgerImg}  source={require('../../assets/hamburger.png')}
        style={ 
          { 
            height: 40, 
            width:40,
            transform: [ 
              {translateY : this.props.posY },
            ] 
          } 
        } 
      />
    );
  }
}