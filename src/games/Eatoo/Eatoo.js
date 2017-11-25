import React from 'react';
import {Text, View, Image, StyleSheet, FlatList, Animated, AsyncStorage, Easing, Dimensions } from 'react-native';
import Button from 'react-native-button';
import styles from './Eatoo.style.js';
import MakiSvg from "../MakiSvg";
import GameRowItems from "./GameRowItems";
import TopMenu from '../../components/TopMenu/TopMenu';

export default class Eatoo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      point: 0,
      lastPoint: '+5',
      lastPointOpacity: new Animated.Value(0),
      heroPosX:new Animated.Value(100),
      gameFloorPos: {x:0,y:0},
      gameFloorDimension: {w:0,h:0},
      gameRows: [
        {items: [1,1,1,1,1], posX:40, }, 
        {items: [1,1,1],posX: 140 }, 
        {items: [1,1], posX: 240, }, 
        {items: [1,1,1,1,1,1,1,1,1], posX: 280 }, 
      ],
    };

    this.settings = {
      heroSpeed : 50,
    }
    this.dimension = Dimensions.get('window');    
    this.state.heroPosX.addListener(({value}) => this._value = value);
  }

  setHeroPosX(x) {
    if(this.dimension.width < (this.state.heroPosX._value + x + 50))
      return;
    
    if((this.state.heroPosX._value + (x)) < 0) {
      Animated.spring(this.state.heroPosX, {
        toValue: 5,
      }).start();
    }

    Animated.spring(this.state.heroPosX, {
      toValue: this.state.heroPosX._value + x,
    } ).start();
  }

  setGameFloorPos(x,y) {
    const gameFloorPos = {x,y};
    this.setState({gameFloorPos});
  }

  setGameFloorDimension(w,h) {
    const gameFloorDimension = {w,h};
    this.setState({gameFloorDimension});
  }

  renderGameRows = () => (
    this.state.gameRows.map((row,i) => (
      <View style={[
        styles.gameColumn, 
        i === 0 && styles.gameColumnFirst, 
        i === (this.state.gameRows.length - 1) && styles.gameColumnLast,
        ]}>
        <GameRowItems 
          items={row.items} 
          heroPosY={0} 
          rowPosX={row.posX}
          heroPosX={this.state.heroPosX}  
          />
      </View>
    ))
  )

  render() {
    let { lastPointOpacity, heroPosX, gameRows } = this.state;
    let { heroSpeed } = this.settings;
    return (
      <Image style={styles.backgroundImage}  source={require('../../assets/space_bg_dark.jpg')} >
        <View style={styles.itemContainer}>
          <TopMenu point={this.state.point} />

          <View style={styles.gameColumns} >
              {this.renderGameRows()}
            <Animated.View  style={StyleSheet.flatten([styles.heroWrapper, {transform:[ {translateX : heroPosX } ]} ])} >
              <MakiSvg style={styles.hero} height="70" />
            </Animated.View>

            <View style={styles.controllersWrapper}>
              <View style={styles.controllersBtn}>
                <Button
                  containerStyle={styles.controllerCircle}
                  style={{fontSize: 18, color: '#F9D300',fontWeight: 'bold'}}
                  onPress={() => this.setHeroPosX(-heroSpeed)}>
                  Left
                </Button>
              </View>

              <View style={styles.controllersBtn}>
                <Button
                  containerStyle={styles.controllerCircle}
                  style={{fontSize: 18, color: '#F9D300',fontWeight: 'bold'}}
                  onPress={() => this.setHeroPosX(heroSpeed)}>
                  Right
                </Button>
              </View>
            </View>
          </View>
        </View>
      </Image>
    );
  }
}