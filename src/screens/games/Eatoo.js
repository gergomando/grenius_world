import React from 'react';
import {Text, View, Image, StyleSheet, FlatList, Animated, AsyncStorage, Easing, Dimensions } from 'react-native';
import Button from 'react-native-button';
import styles from './Eatoo.style.js';
import GameTimer from '../../components/GameTimer/GameTimer';
import MakiSvg from "./MakiSvg";
import AnimatedHamburger from "./AnimatedHamburger";

export default class Eatoo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      point: 0,
      pointView: '00000',
      lastPoint: '+5',
      lastPointOpacity: new Animated.Value(0),
      heroPosX:new Animated.Value(100),
      gameFloorPos: {x:0,y:0},
      gameFloorDimension: {w:0,h:0},
      gameRows: [
        {items: [] }, 
        {items: [] }, 
        {items: [] }, 
        {items: [] }, 
      ],
      gameRows0Item : [],
      gameRows1Item : [],
    };

    this.settings = {
      heroSpeed : 50,
    }
    this.state.heroPosX.addListener(({value}) => this._value = value);
    this.dimension = Dimensions.get('window');
    const hamburger = <AnimatedHamburger posY={this.dimension.height} />;

    const pushHamburger = setInterval(() => {this.setState({'gameRows0Item': this.state.gameRows0Item.concat(hamburger) })}, 1500);
    const pushHamburgera = setInterval(() => {this.setState({'gameRows1Item': this.state.gameRows1Item.concat(hamburger) })}, 1200);
  }


  setHeroPosX(x) {
    if(this.dimension.width < (this.state.heroPosX._value + x + 50))
      return;
    
    if((this.state.heroPosX._value + (x)) < 0) {
      Animated.spring(
      this.state.heroPosX,
      {
        toValue: 5,
      }
      ).start();
      return;
    }

    Animated.spring(
      this.state.heroPosX,
      {
        toValue: this.state.heroPosX._value + x,
      }
    ).start();
  }

  setGameFloorPos(x,y) {
    const gameFloorPos = {x,y};
    this.setState({gameFloorPos});
  }

  setGameFloorDimension(w,h) {
    const gameFloorDimension = {w,h};
    this.setState({gameFloorDimension});
  }

  render() {
    let { lastPointOpacity, heroPosX } = this.state;
    let { heroSpeed } = this.settings;
    return (
      <Image style={styles.backgroundImage}  source={require('../../assets/space_bg_dark.jpg')} >
        <View style={styles.itemContainer}>
          <View style={styles.mainMenu}>
            <GameTimer interval="120" />
            <Text style={styles.point}>
              <Image style={styles.pointIcon}  source={require('../../assets/info_icon.png')} />
              {this.state.pointView}
            </Text>
          </View>

          <Animated.View style={{ opacity:lastPointOpacity }}>
            <Text style={{color:'#1ac92e',alignSelf:'flex-end',paddingRight:12,fontSize:18}}>
              {this.state.lastPoint}
            </Text>
          </Animated.View>

          <View style={styles.gameColumns} 
            collapsable={false} 
            renderToHardwareTextureAndroid={true} 
            ref={component => this._root = component} >
            <View style={[styles.gameColumn, styles.gameColumnFirst]}>
              {this.state.gameRows0Item}
            </View>
            <View style={styles.gameColumn}>
              {this.state.gameRows1Item}
            </View>
            <View style={styles.gameColumn}>
              {this.state.gameRows[2].items}
            </View>
            <View style={[styles.gameColumn, styles.gameColumnLast]}>
              {this.state.gameRows[3].items}
            </View>

            <Animated.View  style={StyleSheet.flatten([styles.heroWrapper, {transform:[ {translateX : heroPosX } ]} ])} >
              <MakiSvg style={styles.hero} height="70" />
            </Animated.View>

            <View style={styles.controllersWrapper}>
              <View style={styles.controllersBtn}>
                <Button
                  containerStyle={{justifyContent: 'center', height:60,width:60, overflow:'hidden',
                    borderRadius:30, backgroundColor:'rgba(242,167,5,0.2)',borderWidth:2, borderColor:'#f2a705'}}
                  style={{fontSize: 18, color: '#F9D300',fontWeight: 'bold'}}
                  onPress={() => this.setHeroPosX(-heroSpeed)}>
                  Left
                </Button>
              </View>

              <View style={styles.controllersBtn}>
                <Button
                  containerStyle={{justifyContent: 'center', height:60,width:60, overflow:'hidden',
                    borderRadius:30, backgroundColor:'rgba(242,167,5,0.2)',borderWidth:2, borderColor:'#f2a705'}}
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