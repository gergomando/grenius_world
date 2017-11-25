import React from 'react';
import {Text, View, StyleSheet, FlatList, Image } from 'react-native';
import Button from 'react-native-button';
import styles from './HomeScreen.style.js';

export default class HomeScreen extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Image style={styles.backgroundImage}  
          source={require('../../assets/space_bg_dark.jpg')} 
        >
          <View style={styles.container}>
          <Text style={styles.title}>
            <Text style={{ color: '#fff'}}>The</Text> Game
          </Text>
           <Button
              containerStyle={styles.playBtn} 
              style={styles.playBtnInside}
              onPress={() => navigate('Game',{gameType: 'Varify'})}>
              Start Varify
            </Button>

            <Button
              containerStyle={styles.playBtn}
              style={styles.playBtnInside}
              onPress={() => navigate('Game',{gameType: 'Eatoo'})}>
              Start Eatoo
            </Button>
            <Image style={{height:80}} resizeMode="contain" source={require('../../assets/maki_head.png')} />
          </View>
        </Image>
      );
    }
}