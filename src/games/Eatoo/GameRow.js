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

  updateEnemeyPosition = (i,posY) => {
    if(this.enemyMeetHero({x: this.props.rowX, y: posY})) {
      this.removeItem(i);
      this.props.changePoint(5);
    }
  }

  checkHeroPos = () => {
    if(this.enemyMeetHero({x: this.props.rowX, y: 0})) {
      this.removeItem(i);
      this.props.changePoint(5);
    }
  }
  enemyMeetHero = (enemy) => {
    return enemy.x < this.props.heroPos.x && enemy.y < this.props.heroPos.y;
  }
  drawItems(items) {
    const enemies = [];

    items.forEach((item, i) => {
      enemies.push(
        <Hamburger
          update={this.updateEnemeyPosition}          
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