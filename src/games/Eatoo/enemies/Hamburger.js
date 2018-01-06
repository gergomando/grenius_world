import React from 'react';
import {View, Image, StyleSheet, Animated, Easing} from 'react-native';

export default class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enemyY: new Animated.Value(0),
    } 

    this.state.enemyY.addListener((enemyY) => {
        this.props.update(this.props.enemyKey, enemyY.value);
    });
  }

  setPosY() {
    const animation = Animated.timing(this.state.enemyY, {
        toValue:  -30,
        duration: 5000,
        delay: 500,
    });
     
    animation.start();
  }

  render() {
    this.setPosY();    
    return (
      <Animated.Image source={require('../../../assets/hamburger.png')}
        style={
          { 
            position: 'absolute',
            height: 40, 
            width:40,
            top: this.state.enemyY
          }
        } 
      />
    );
  }
}