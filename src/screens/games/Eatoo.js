import React from 'react';
import {Text, View, Image, StyleSheet, FlatList, Animated, AsyncStorage, Easing } from 'react-native';
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
      heroPositionX:new Animated.Value(100),
      gameRows: [
        {items: [] }, 
        {items: [] }, 
        {items: [] }, 
        {items: [] }, 
      ],
      gameFloorPos: {x:0,y:0},
      gameFloorDimension: {w:0,h:0},
    };

    this.settings = {
      heroXMoveDepth : 40
    }

    this.state.heroPositionX.addListener(({value}) => this._value = value);

  }

  componentDidMount() {
    this.pushHamburger();
  }

  setHeroPosX(x) {
    Animated.spring(
      this.state.heroPositionX,
      {
        toValue: parseInt(this.state.heroPositionX._value) + (x),
      }
    ).start();
  }

  setGameFloorPos(x,y) {
    this.setState({gameFloorPos : {x,y}});
  }

  setGameFloorDimension(w,h) {
    this.setState({gameFloorDimension : {w,h}});
  }

  pushHamburger() {
    let gameRows = this.state.gameRows;
    for(let n = 0; n < 4; n++) {
        gameRows[0].items.push(<AnimatedHamburger posY={new Animated.Value(480)} />);
        gameRows[1].items.push(<AnimatedHamburger posY={new Animated.Value(480)} />);
        gameRows[3].items.push(<AnimatedHamburger posY={new Animated.Value(480)} />);
    }
  }

  render() {
    let { lastPointOpacity, heroPositionX } = this.state;
    let settings = this.settings;

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
            ref="GameFloorWrapper"
            onLayout={({nativeEvent}) => {
              const self = this;
              this.refs.GameFloorWrapper.measure((x, y, width, height, pageX, pageY) => {
                self.setGameFloorPos(pageX,pageY);
                self.setGameFloorDimension(width,height);
              })
            }}
          >
            <View style={[styles.gameColumn, styles.gameColumnFirst]}>
              {this.state.gameRows[0].items}
            </View>
            <View style={styles.gameColumn}>
              {this.state.gameRows[1].items}
            </View>
            <View style={styles.gameColumn}>
              {this.state.gameRows[2].items}
            </View>
            <View style={[styles.gameColumn, styles.gameColumnLast]}>
              {this.state.gameRows[3].items}
            </View>

            <Animated.View  style={StyleSheet.flatten([styles.heroWrapper, {transform:[ {translateX : heroPositionX } ]} ])} >
              <MakiSvg style={styles.hero} height="70" />
            </Animated.View>

            <View style={styles.controllersWrapper}>
              <View style={styles.controllersBtn}>
                <Button
                  containerStyle={{justifyContent: 'center', height:60,width:60, overflow:'hidden',
                    borderRadius:30, backgroundColor:'rgba(242,167,5,0.2)',borderWidth:2, borderColor:'#f2a705'}}
                  style={{fontSize: 18, color: '#F9D300',fontWeight: 'bold'}}
                  onPress={() => this.setHeroPosX(-settings.heroXMoveDepth)}>
                  Left
                </Button>
              </View>

              <View style={styles.controllersBtn}>
                <Button
                  containerStyle={{justifyContent: 'center', height:60,width:60, overflow:'hidden',
                    borderRadius:30, backgroundColor:'rgba(242,167,5,0.2)',borderWidth:2, borderColor:'#f2a705'}}
                  style={{fontSize: 18, color: '#F9D300',fontWeight: 'bold'}}
                  onPress={() => this.setHeroPosX(settings.heroXMoveDepth)}>
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