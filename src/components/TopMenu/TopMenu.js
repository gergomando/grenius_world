import React from 'react';
import {Text, View, Image, Animated } from 'react-native';
import Button from 'react-native-button';
import styles from './TopMenu.style.js';
import GameTimer from '../GameTimer/GameTimer';

export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pointView: '00000',
      lastPoint: '+5',
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

  render() {
    let { lastPointOpacity } = this.state;
    return (
      <View style={styles.mainMenu}>
        <GameTimer interval="120" />
        <Text style={styles.point}>
          <Image style={styles.pointIcon}  source={require('../../assets/info_icon.png')} />
          {this.state.pointView}
        </Text>

        <Animated.View style={{ opacity: lastPointOpacity }}>
          <Text style={{color:'#1ac92e',alignSelf:'flex-end',paddingRight:12,fontSize:18}}>
            {this.state.lastPoint}
          </Text>
        </Animated.View>
      </View>
    );
  }
}