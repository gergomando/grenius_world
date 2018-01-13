import React from 'react';
import {Text, TouchableWithoutFeedback, View, Image, StyleSheet, FlatList, Animated, AsyncStorage, Easing, Dimensions } from 'react-native';
import Button from 'react-native-button';
import styles from './Eatoo.style.js';
import Hero from "../Hero";
import GameRow from "./GameRow";
import TopMenu from '../../components/TopMenu/TopMenu';
import uuidv1 from 'uuid/v1';

export default class Eatoo extends React.Component {
  constructor(props) {
    super(props);
    this.dimension = Dimensions.get('window');    
    const gameRows = [
      { items: [], posX: 50 },
      { items: [], posX: 140 },
      { items: [], posX: 230 },
      { items: [], posX: 320 },
    ];
      
    for(j = 0; j < 4; j++) {
      for(i = 0; i < 9; i++) {
        gameRows[j].items.push({type: 'Hamburger'});
        gameRows[j].items.push({type: 'Mushroom'});
      }
    }

    this.state = {
      animatePupil: false,
      heroPosX:new Animated.Value(35),
      gameRows,
    };

    this.settings = {
      heroSpeed : 40,
    }
    this.state.heroPosX.addListener(({value}) => this._value = value);
  }
  
  setHeroPosX(x) {
    if(this.dimension.width < (this.state.heroPosX._value + x + 50))
      return;
    
    if((this.state.heroPosX._value + (x)) < 10) {
      return Animated.spring(this.state.heroPosX, {
        toValue: 10,
      }).start();
    }

    Animated.spring(this.state.heroPosX, {
      toValue: this.state.heroPosX._value + x,
    } ).start();
  }

  renderGameRows = () => {
    return this.state.gameRows.map((row,i) => (
      <View
        key={uuidv1()}
        style={[
        styles.gameColumn, 
        i === 0 && styles.gameColumnFirst, 
        i === (this.state.gameRows.length - 1) && styles.gameColumnLast,
        ]}>
        <GameRow
          items={row.items} 
          hero={{x: this.state.heroPosX, y: 50 }}  
          rowX={row.posX}
          />
      </View>
    ));
  }

  render() {
    let { heroPosX, gameRows } = this.state;
    let { heroSpeed } = this.settings;
    return (
      <Image style={styles.backgroundImage}  source={require('../../assets/space_bg_dark.jpg')} >
        <View style={styles.itemContainer}>
          <TopMenu stars={false} />
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
                  onPress={() => this.setHeroPosX(-heroSpeed)}
                  >
                  Left
                </Button>
              </View>

              <View style={styles.controllersBtn}>
                <Button
                  containerStyle={styles.controllerCircle}
                  style={{fontSize: 18, color: '#F9D300',fontWeight: 'bold'}}
                  onPressIn={() => this.setHeroPosX(heroSpeed)}
                  >
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