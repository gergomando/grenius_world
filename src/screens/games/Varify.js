import React from 'react';
import {Text, View, Image, StyleSheet, FlatList, Animated, AsyncStorage, Easing } from 'react-native';
import Button from 'react-native-button';
import Svg,{ Circle,Ellipse, G, Line, Path, Polygon,Polyline,Rect,Symbol, Use, Defs, Stop} from 'react-native-svg';
import styles from './Varify.style.js';
import GameTimer from '../../components/GameTimer/GameTimer';
import MakiSvg from './MakiSvg.js';

export default class Varify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game:{},
      point: 0,
      pointView: '00000',
      hasRight: false,
      animatePupil: false,
      lastPoint: '+5',
      lastPointOpacity: new Animated.Value(0),
    };

    this.getGame();
  }

  padPoint(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  setPointView(n) {
    const point = this.state.point + parseInt(n);
    this.setState({ point: point });
    this.setState({ pointView: this.padPoint(point,5) }); 
  }

  animateLastPoint() {
    Animated.loop(
        Animated.sequence([
          Animated.timing(this.state.lastPointOpacity, {
            toValue: 1,
            duration: 750,
          }),
          Animated.timing(this.state.lastPointOpacity, {
            delay: 2500,
            toValue: 0,
            duration: 550,
          })
        ]),
        {
          iterations: 1
        }
      ).start();
  }

  checkAnswer(answer) {
    if(answer === this.state.game.answer) {
      this.setState({lastPoint: '+5'});
      this.setState({animatePupil:true});
      this.animateLastPoint();
      this.setPointView(5);

    } else {
      this.setState({lastPoint: '-2'});
      this.animateLastPoint();
      
      if (this.state.point > 2)
        this.setPointView(-2);
    }

    this.getGame();
  }

  getMultiplierImage(n) {
    const rows = [];
    for (var i=0; i < n; i++) {
        rows.push(<Image style={styles.variable}  source={require('../../assets/hamburger.png')} />);
    }
    return rows;
  }

  getGame() {
    const self = this;
    return fetch('http://geniusgames.webmusketas.hu/api/thegame', {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
    }
    }).then((response) => response.json())
      .then((responseData) => {
        self.setState({ game:responseData.game.game });
    }).done();
  }

    render() {
        let { lastPointOpacity } = this.state;
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

              <MakiSvg animate={this.state.animatePupil} />

              <Text style={styles.title}>
                Do <Text style={styles.fontYellow}>You</Text> know the <Text style={styles.fontRed}>answer?</Text>
              </Text>
              <View style={{paddingLeft:12,paddingRight:12}}> 
                <View style={styles.equationListWrapper}>      
                    <FlatList
                      data={this.state.game.rows}
                      contentContainerStyle={styles.equationList}
                      renderItem={({item}) =>
                      <View style={styles.itemWrapper} key={item.result}>
                          <View style={[styles.equationItem]}>
                              <View style={styles.multiplierImage}>
                              {this.getMultiplierImage(item.multiplier_1)}
                              </View>
                              
                              <Text style={{width:36, alignItems:'center',fontSize: 32,
                              color:'#fff', paddingTop:16,paddingLeft:8,paddingRight:8, fontWeight:'bold' }}>
                              {item.operator == true ? "+": "-"}
                              </Text>
                              
                              <View style={styles.multiplierImage}>
                              {this.getMultiplierImage(item.multiplier_2)}
                              </View>
                              
                             <Text style={{width:110,fontSize: 32,
                              color:'#fff', paddingTop:16,paddingLeft:12, fontWeight:'bold' }}>
                              = <Text style={{ color: '#f2a705' }}>{item.result}</Text>
                              </Text>
                          </View>
                      </View>}
                    />

                    <View style={ styles.answerListWrapper }>
                      <FlatList
                        contentContainerStyle={styles.answerList}
                        data={this.state.game.results}
                        renderItem={({item}) =>
                         <View style={styles.playBtn}>
                            <Button
                              containerStyle={{justifyContent: 'center', height:60,width:60, overflow:'hidden',
                               borderRadius:30, backgroundColor:'rgba(242,167,5,0.2)',borderWidth:2, borderColor:'#f2a705'}}
                              style={{fontSize: 18, color: '#F9D300',fontWeight: 'bold'}}
                              onPress={() => this.checkAnswer(item)}>
                              {item}
                            </Button>
                          </View>}
                        />
                    </View>
                </View>
              </View>
          </View>
          </Image>
        );
    }
}