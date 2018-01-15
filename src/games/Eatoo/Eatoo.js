import React from 'react';
import { View, Image, StyleSheet, Animated, Dimensions } from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
import Random from 'random-js';
import styles from './Eatoo.style.js';
import Hero from "../Hero";
import GameRow from "./GameRow";
import TopMenu from '../../components/TopMenu/TopMenu';
import spaceBg from '../../assets/space_bg_dark.jpg';
import twisterBg from '../../assets/twisted_bg.jpg';
import { getBackground } from '../../redux/reducers/Game';
import { getHero } from '../../redux/reducers/Game';

const Backgrounds = {
  spaceBg,
  twisterBg,
}

class Eatoo extends React.Component {
  constructor(props) {
    super(props);
    this.dimension = Dimensions.get('window');    
    const gameRows = [
      { items: [], posX: 50 },
      { items: [], posX: 140 },
      { items: [], posX: 230 },
      { items: [], posX: 320 },
    ];
    const types = ['Empty', 'Hamburger' ,'Mushroom','Twister'];
    for(j = 0; j < 4; j++) {
      for(i = 0; i < 16; i++) {
        gameRows[j].items.push({type: types[ new Random().integer(0,types.length-1)]});
      }
    }

    this.state = {
      heroPosX: new Animated.Value(35),
      gameRows,
    };

    this.settings = { heroSpeed: 50 };
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
    let { heroSpeed } = this.settings;
    return (
      <Image style={styles.backgroundImage} source={Backgrounds[this.props.background]}>
        <View style={styles.itemContainer}>
          <TopMenu timer={false} stars={false} />
          <View style={styles.gameColumns} >
              {this.renderGameRows()}
            <Animated.View  style={StyleSheet.flatten([
              styles.heroWrapper,
              { transform: [{translateX : this.state.heroPosX }] }
              ])}
            >
              <Hero style={styles.hero} height="70" animate={false} />
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
                  onPress={() => this.setHeroPosX(heroSpeed)}
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

const mapStateToProps = state => ({
  background: getBackground(state),
  hero: getHero(state),
});

export default connect(
  mapStateToProps,
  null,
)(Eatoo);