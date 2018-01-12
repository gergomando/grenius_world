import React from 'react';
import {Text, View, Image, Animated } from 'react-native';
import Button from 'react-native-button';
import styles from './TopMenu.style.js';
import GameTimer from '../GameTimer/GameTimer';
import Star from '../Animated/Star';
import uuidv1 from 'uuid/v1';

export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastPoint: 0,
      lastPointOpacity: new Animated.Value(0),
    };
  }
  
  showLastPoint = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.lastPointOpacity, {
          toValue: 1,
          duration: 750,
        }),
        Animated.timing(this.state.lastPointOpacity, {
          delay: 2500,
          toValue: 0,
          duration: 550,
        })
      ]),
      {
        iterations: 1
      }
    ).start();
  }

  padPoint(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  getPercent = () => (this.props.rightAnswerNr/10)*100;
  drawStars = () => {
    const stars = [];
    for(i = 1;i < 6; i++) {
      const starPercent = i * 15;
      const currentPercent = this.props.rightAnswerNr > 0 ? this.getPercent() : 0;
      stars.push(<Star key={uuidv1()} color="#f2a705" opacity={currentPercent > starPercent ? 1 : 0.4} />);
    }
    return stars.reverse();
  }

  render() {
    let { lastPointOpacity } = this.state;
    return (
      <View >
        <View style={styles.mainMenu}>
          <GameTimer interval="120" />
          <Text style={styles.point}>
            {this.padPoint(this.props.point, 5)}
          </Text>
          <Animated.View style={{ opacity: lastPointOpacity }}>
            <Text style={styles.lastPoint}>
              {this.state.lastPoint}
            </Text>
          </Animated.View>
        </View>
        <View style={styles.levelMenu}>
          <View style={styles.starsWrapper} >
            {this.drawStars()}
          </View>
        </View>
      </View>
    );
  }
}