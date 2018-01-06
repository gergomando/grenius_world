import React from 'react';
import {View, Image, StyleSheet, Animated, Easing, Dimensions, Text } from 'react-native';
import styles from './Eatoo.style.js';
import Hamburger from "./enemies/Hamburger";
import Mushroom from "./enemies/Mushroom";

export default class GameRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enemies: [],
    } 
  }

  componentDidMount() {
    this.drawItems(this.props.items);
  }

  removeItem = (index) => {
    const enemies = [...this.state.enemies];
    enemies.splice(index,1);
    this.setState({ enemies });
  }

  updateEnemeyPosition = (i,pos) => {
    console.log(i,pos);
  }

  drawItems(items) {
    const enemies = [];

    items.forEach((item, i) => {
      enemies.push(
        <Hamburger
          updatePosition={() => this.updateEnemeyPosition(i,pos)}          
          enemyKey={i}
        />
      );
    });
    this.setState({ enemies });
  }

  render() {
    return (
      <View>
        {this.state.enemies}
      </View>
    );
  }
}