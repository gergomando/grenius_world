import React from 'react';
import {Text, View, Image, StyleSheet, FlatList, Animated, AsyncStorage, Easing } from 'react-native';
import styles from './style.js';

export default class GameTimer  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remainSec: this.props.interval,
      minutes: '00',
      seconds: '00',
    };
  }

  componentDidMount() {
    this.gameTimer();
  }

  gameTimer() { 
    let sec = this.props.interval; 
    function pad(val) { 
        return val > 9 ? val : "0" + val; 
    }
    const timer = setInterval(() => {
       const remainSec = --this.state.remainSec;
        this.setState({ seconds: pad(--sec % 60) });
        this.setState({ minutes: pad(parseInt(sec / 60, 10)) });
        this.setState({ remainSec: remainSec });
        if(this.state.remainSec < 1) {
          clearTimeout(timer);
        }
    }, 1000);
  }


  render() {
        return (
          <Text style={styles.timer}>
            { this.state.minutes }:{this.state.seconds}
          </Text>
        );
    }
}