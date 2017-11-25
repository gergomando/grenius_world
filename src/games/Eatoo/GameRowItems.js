import React from 'react';
import {View, Image, StyleSheet, Animated, Easing, Dimensions, Text } from 'react-native';
import styles from './Eatoo.style.js';
import AnimatedHamburger from "./AnimatedHamburger";

export default class GameRowItems extends React.Component {
  constructor(props) {
    super(props);
    this.dimension = Dimensions.get('window');    
    this.state = {
      items : this.props.items,
      heroPosX: this.props.heroPosX,
      enemies: [],
      posY: new Animated.Value(this.dimension.height+50),
    } 

    this.state.heroPosX.addListener((heroPosX) => {
        if(this.props.rowPosX < heroPosX.value) {
          this.drawItems([]); 
        }
    });
  }

  componentDidMount() {
    this.drawItems(this.state.items);
  }

  drawItems(items) {
    const enemies = [];
    items.forEach(() => {
      enemies.push(
        <AnimatedHamburger 
          posY={this.state.posY} 
        />
      );
    });

    this.setState({ enemies }, () => ( this.setPosY()));
  }

  setPosY() {
    const animation = Animated.timing(this.state.posY, {
        toValue:  0,
        duration: 5000,
        delay: 500,
      });
      animation.start();
  }
 
  render() {
    return (
      <View>
        {this.state.enemies}
      </View>
    );
  }
}