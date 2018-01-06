import React from 'react';
import {Text, View, StyleSheet, FlatList, Image } from 'react-native';
import Button from 'react-native-button';
import styles from './AnalyzeScreen.style.js';

export default class AnalyzeScreen extends React.Component {
    params = this.props.navigation.state.params;

    getDiagnose = () => {
      percent = this.params.rightAnswerNr > 0 ? this.getPercent() : 0;
      if(percent > 50){
        return 'Genius';
      } else {
        return 'Weak';
      }
    }

    getPercent = () => (this.params.rightAnswerNr/this.params.roundNr)*100;

    render = () =>
      <Image style={styles.backgroundImage}  
        source={require('../../assets/space_bg_dark.jpg')} 
      >
        <View style={styles.container}>
          <Text style={styles.title}>
          <Text style={{ color: '#fff'}}>You are</Text>
          </Text>
          <Text style={styles.title}>
           {this.getDiagnose()}
          </Text>
          <Text style={styles.title}>
            <Text style={{ color: '#f2a705'}}>{this.params.roundNr}/{this.params.rightAnswerNr}</Text>
          </Text>

          <Image style={styles.heroImg} resizeMode="contain" source={require('../../assets/maki_head.png')} />
          <Button
            containerStyle={styles.playBtn} 
            style={styles.playBtnInside}             
            onPress={() => this.props.navigation.navigate('Game',{gameType: 'Varify'})}>
            Press to Play
          </Button>
        </View>
      </Image>;
}