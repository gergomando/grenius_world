import React from 'react';
import {View, Image, StyleSheet, Animated, Easing, Dimensions, Text } from 'react-native';
import styles from './Eatoo.style.js';
import Hamburger from "./enemies/Hamburger";
import Mushroom from "./enemies/Mushroom";
import uuidv1 from 'uuid/v1';

const EnemyTypes = {
  Mushroom,
  Hamburger,
}

export default class GameRow extends React.Component {
  state = {
    counter: 0,
    enemies: [],
  };

  updateEnemeyPosition = (i,posY) => {
    if(this.enemyMeetHero({x: this.props.rowX, y: posY})) {
    }
  }
  
  componentDidMount() {
    this.drawItems(this.props.items);
  }

  drawItems = items => {
     const enemies = items.map((item, i) => {
      const Enemy = EnemyTypes[item.type];
      return <Enemy
        key={uuidv1()}
        update={this.updateEnemeyPosition}          
        enemyKey={i}
        animate={true}
        hero={this.props.hero}
        enemy={{x: this.props.rowX, y: 620}}
      />;
    });
    
    this.setState({ enemies });
  }
  render() {
    return (
      <View >
        {this.state.enemies}
      </View>
    );
  }
}