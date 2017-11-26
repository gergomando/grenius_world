import React from 'react';
import {View, Image, StyleSheet, Animated, Easing, Dimensions, Text } from 'react-native';
import styles from './Eatoo.style.js';
import AnimatedHamburger from "./AnimatedHamburger";

export default class GameRowItems extends React.Component {
  constructor(props) {
    super(props);
    this.dimension = Dimensions.get('window');    
    this.state = {
      heroPosX: this.props.heroPosX,
      heroPosY: this.props.heroPosY,
      enemies: [],
      rowEmpty: false,
      posY: new Animated.Value(this.dimension.height+50),
    } 

    this.state.posY.addListener(({value}) => this._value = value);
    this.state.heroPosX.addListener((heroPosX) => {
        if(!this.state.rowEmpty && this.heroInEnemyRange({x: heroPosX.value, y: this.state.heroPosY})) {
          this.setState({ rowEmpty : true , enemies: []});
          this.props.animatePupil();  
        }
    });
  }

  heroInEnemyRange = (hero) => {
    return this.heroXInEnemyRange(hero.x) && this.heroYInEnemyRange(hero.y); 
  }

  heroYInEnemyRange = (heroY) => {
    return this.state.posY._value < (heroY + 30) ? true : false;
  }

  heroXInEnemyRange = (heroX) => {
    return this.props.enemyX < heroX && (this.props.enemyX + 40) > heroX ? true : false;
  }

  componentDidMount() {
    this.drawItems(this.props.items);
  }

  drawItems(items) {
    const enemies = [];

    items.forEach((item, i) => {
      enemies.push(
        <AnimatedHamburger
          posY={this.state.posY}
          heroPosX={this.props.heroPosX}
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