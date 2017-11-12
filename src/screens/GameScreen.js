import React from 'react';
import {Text, View, Image, StyleSheet, FlatList } from 'react-native';
import Button from 'react-native-button';
import styles from './game.style.js';
import Varify from './games/Varify';
import Eatoo from './games/Eatoo';

export default class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.gameType = props.navigation.state;
  }

    render() {
        return (
          <Eatoo />
        );
    }
}