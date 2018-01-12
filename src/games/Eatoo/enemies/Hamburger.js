import React from 'react';
import {View, Image, StyleSheet, Animated, Easing} from 'react-native';
import timer from 'react-native-timer';
import uuidv1 from 'uuid/v1';

export default class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enemyY: new Animated.Value(620),
    }; 

    this.animation = Animated.timing(this.state.enemyY, {
      toValue:  -100,
      duration: 5000 
    });

    this.state.enemyY.addListener((enemyY) => {
      if(this.enemyMeetHero({ x: this.props.enemy.x , y: enemyY.value })) {
          this.animation.stop();
      }
    });
  }

  enemyMeetHero = (enemy) => {
    console.log(enemy.x, this.props.hero.x);
    return (enemy.x < this.props.hero.x) && (enemy.y < (this.props.hero.y + 50));
  }

  componentDidMount() {
    this.props.animate && this.setPosY();
  }

  setPosY() {
    timer.setTimeout(uuidv1(), () => this.animation.start(), this.props.enemyKey*1000);
  }

  render() {
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