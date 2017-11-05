import React from 'react';
import {Text, View, Image, StyleSheet, FlatList, Animated, AsyncStorage } from 'react-native';
import Button from 'react-native-button';
import Svg,{ Circle,Ellipse, G, Line, Path, Polygon,Polyline,Rect,Symbol, Use, Defs, Stop} from 'react-native-svg';
import styles from './game.style.js';

export default class ItemScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {},
      point: 0,
      pointView: '0',
      hasRight: false,
      minutes: '00',
      seconds: '00',
      circleRadius: new Animated.Value(20),
    };

    this.getGame();

    this.state.circleRadius.addListener((circleRadius) => {
      this.pupilLeft.setNativeProps({ r: circleRadius.value.toString() });
      this.pupilRight.setNativeProps({ r: circleRadius.value.toString() });
    });
  }

  componentWillMount() {
    this.gameTimer();

    AsyncStorage.getItem("point").then((value) => {
      this.setPointView(value);
      this.setState({"point": parseInt(value)});
    }).done();
  }

  gameTimer() { 
    let sec = 3600; 
    function pad(val) { 
        return val > 9 ? val : "0" + val; 
    }
    const timer = setInterval(() => {
        this.setState({ seconds: pad(--sec % 60) });
        this.setState({ minutes: pad(parseInt(sec / 60, 10)) });
    }, 1000);
  }

  padPoint(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  setPointView(n) {
    const point = this.state.point + n;
    this.setState({ point: point });
    this.setState({ pointView: this.padPoint(point,5) }); 
    AsyncStorage.setItem("point", String(point));
  }

  checkAnswer(answer) {
    if(answer === this.state.game.answer) {
      this.setPointView(5);
      this.setState({hasRight: true});

      Animated.loop(
        Animated.sequence([
          Animated.timing(this.state.circleRadius, {
            toValue: 40,
            duration: 450,
            delay: 0
          }),
          Animated.timing(this.state.circleRadius, {
            toValue: 20,
            duration: 450,
          })
        ]),
        {
          iterations: 1
        }
      ).start();

    } else {
      this.setPointView(-2);
      this.setState({hasRight: false});
    }
    this.getGame();
  }

  getMultiplierImage(n) {
    const rows = [];
    for (var i=0; i < n; i++) {
        rows.push(<Image style={styles.variable}  source={require('../assets/hamburger.png')} />);
    }
    return rows;
  }

  getGame() {
    self = this;
    fetch('http://geniusgames.webmusketas.hu/api/thegame', {
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
        const { params } = this.props.navigation.state;
        return (
          <Image style={styles.backgroundImage}  source={require('../assets/space_bg_dark.jpg')} >
          <View style={styles.itemContainer}>
              <View style={styles.mainMenu}>
                <Text style={styles.timer}>
                  { this.state.minutes }:{this.state.seconds}
                </Text>
                <Text style={styles.point}>
                  <Image style={styles.pointIcon}  source={require('../assets/info_icon.png')} /> 
                  {this.state.pointView}
                </Text>
              </View>
              <View style={styles.feedbackContainer}>
                {this.state.hasRight && <Image style={styles.rightIcon}  source={require('../assets/check.png')} />}
              </View>

              <Svg style={styles.maki} width="160" height="125" viewBox="0 0 320 250">
              <G>
                <Circle fill="#321E0F" cx="45.1" cy="49.5" r="45.1"/>
                <Circle  fill="#633A23" cx="50.3" cy="54.7" r="30.7"/>
                <Circle  fill="#321E0F"  cx="213.9" cy="45.1" r="45.1"/>
                <Circle  fill="#633A23" cx="208.7" cy="50.3" r="30.7"/>
                <Path  fill="#54321C" d="M47.4,70c0,0,87.5-93.2,172.8-2.4c92.6,98.5-12.9,149.5-3.9,145c-22.9,16.1-115.8,40.8-173.2-20.2
                  C-1.7,143.5,47.4,70,47.4,70z"/>
                <Ellipse  fill="#6E4D2B" cx="143.1" cy="172.4" rx="80.4" ry="41"/>
                <Circle fill="#FFFFFF" cx="89.2" cy="109.8" r="50.3"/>
                <Circle  fill="#FFFFFF" stroke="#321E0F" cx="188.4" cy="109.8" r="50.3"/>
                <Ellipse cx="142.1" cy="165.2" rx="25.2" ry="11"/>
                <Ellipse fill="#FFFFFF" cx="137.7" cy="165.2" rx="7.6" ry="3.3"/>
                <Path d="M174.4,187.5c-19.3,46.7-57.9,3.3-57.9,3.3c-2.3-3.6,1.3-5.1,2.4-5.4s4.9-2,18.6-0.2S177.6,179.8,174.4,187.5z"/>
                <Path fill="#f5f6f6" d="M181.3,149.3c0,0,24.3,0.2,33.6-15.7c7.4-12.6,16.2-25.4,8.1-42.4c-7.5-15.7-24.9-25.8-24.9-25.8l-0.4-1.5
                  c0,0,22.8,2.4,28.5,16.1c5.7,13.8,17,17.4,8.1,42.4s-15.8,23.7-19.4,26.4c-9.4,7.2-23.5,9.5-26.7,5.2
                  C184.9,149.7,185.3,157.9,181.3,149.3z"/>

                <Path fill="#f5f6f6" d="M81.6,149.9c0,0,24.3,0.2,33.6-15.7c7.4-12.6,16.2-25.4,8.1-42.4c-7.5-15.7-24.9-25.8-24.9-25.8L98,64.6
                  c0,0,22.8,2.4,28.5,16.1s17,17.4,8.1,42.4s-15.8,23.7-19.4,26.4c-9.4,7.2-23.5,9.5-26.7,5.2C85.2,150.4,85.6,158.5,81.6,149.9z"/>
                
                <Path fill="#E7949C" id="mouth" d="M126,198.9c0,0,41.3,28.9,43.7-2.4"/>
               <Circle ref={ ref => this.pupilLeft = ref } cx="187" cy="110.5" r="20" fill="black" />
               <Circle ref={ ref => this.pupilRight = ref }  cx="87.6" cy="110.5" r="20" fill="black" />
                  
                <Path fill="#F0EFEF" d="M125.5,191.1c0,0,1.2-3.1-0.6-6.5c-4,0.6-6.5,1.5-6.5,1.5"/>
                <Path fill="#E0E0E0" d="M165.9,191.2c0,0-1.9-3-0.9-7c4.4-0.3,7.2,0.1,7.2,0.1"/>
              </G>
              </Svg>

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
                              containerStyle={{paddingTop:13, height:56,width:56, overflow:'hidden',
                               borderRadius:28, backgroundColor: '#F9D300',borderWidth:3, borderColor:'#f2a705'}}
                              style={{fontSize: 18, color: '#392701',fontWeight: 'bold'}}
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