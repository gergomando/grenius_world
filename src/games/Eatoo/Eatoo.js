import React from 'react';
import {Text, View, Image, StyleSheet, FlatList, Animated, AsyncStorage, Easing, Dimensions } from 'react-native';
import Button from 'react-native-button';
import styles from './Eatoo.style.js';
import Hero from "../Hero";
import GameRow from "./GameRow";
import TopMenu from '../../components/TopMenu/TopMenu';

export default class Eatoo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      point: 0,
      lastPoint: '+5',
      lastPointOpacity: new Animated.Value(0),
      animatePupil: false,
      heroPosX:new Animated.Value(180),
      gameFloorPos: {x:0,y:0},
      gameFloorDimension: {w:0,h:0},
      gameRows: [
        {items: [
          {type:'hamburger'},
        ], posX: 0, }, 
        {items: [
          {type:'hamburger'},
        ], posX: 120, }, 
        {items: [
          {type:'hamburger'},
        ], posX:180, }, 
        {items: [
          {type:'hamburger'},
        ], posX:240, }, 
      ],
    };

    this.settings = {
      heroSpeed : 40,
    }
    this.dimension = Dimensions.get('window');    
    console.log(this.dimension.width/4)
    this.state.heroPosX.addListener(({value}) => this._value = value);
  }

  changePoint = (n) => {
    let point = this.state.point + n;
    point = point > 0 ? point : 0;
    this.setState({ point });
  }

  setHeroPosX(x) {
    if(this.dimension.width < (this.state.heroPosX._value + x + 50))
      return;
    
    if((this.state.heroPosX._value + (x)) < 10) {
      Animated.spring(this.state.heroPosX, {
        toValue: 10,
      }).start();

      return;
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

  animatePupil() {
    this.setState({ animatePupil : true });
  }

  renderGameRows = () => (
    this.state.gameRows.map((row,i) => (
      <View style={[
        styles.gameColumn, 
        i === 0 && styles.gameColumnFirst, 
        i === (this.state.gameRows.length - 1) && styles.gameColumnLast,
        ]}>
        <GameRow 
          items={row.items} 
          heroPos={{x: this.state.heroPosX._value, y: 0}}  
          rowX={row.posX}
          rowNumber={i+1}
          animatePupil={() => this.animatePupil()}
          changePoint={this.changePoint}
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
              <Hero style={styles.hero} height="70" animate={this.state.animatePupil} />
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