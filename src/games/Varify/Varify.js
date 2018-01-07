import React from 'react';
import {Text, View, Image, StyleSheet, FlatList } from 'react-native';
import Button from 'react-native-button';
import styles from './Varify.style.js';
import Hero from '../Hero.js';
import TopMenu from '../../components/TopMenu/TopMenu';

export default class Varify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game:{ rows: [], results: [] },
      games: [],
      current: 0,
      point: 0,
      animate: false,
      roundNr: 1,
      rightAnswerNr: 0,
    };

    this.getGame();
  }
  changePoint = (n) => {
    let point = this.state.point + n;
    point = point > 0 ? point : 0;
    this.setState({ point });
  }

  checkAnswer = (answer) => {
    const isRight = answer === this.state.game.answer;
    const rightAnswerNr = isRight ? this.state.rightAnswerNr + 1 : this.state.rightAnswerNr;
    if(isRight) {
      this.setState({animate:'animateEyeSize', rightAnswerNr });
      this.changePoint(5);
    } else {
      this.setState({animate:'animateDeadEye'});
      this.changePoint(-2);
    }
    const isLastRound = this.state.roundNr === 10;
    if(isLastRound) {
      const params = { roundNr: this.state.roundNr, rightAnswerNr };
      this.props.navigation.navigate('Analyze', {...params});
    } else {
      this.nextGame();
    }
  }

  nextGame = () => {
    const roundNr = this.state.roundNr + 1;
    this.setState({ roundNr });
    const current = this.state.current + 1;
    if(this.state.games[current]) {
      this.setState({ game: {...this.state.games[current].game} });
      this.setState({ current });
    } else {
      this.setState({ current: 0 });
      this.getGame();
    }
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
    })
      .then((response) => response.json())
      .then(data => self.setState({
        games:data.games,
        game: data.games[0].game,
      })
    );
  }

  render() {
      return (
        <Image style={styles.backgroundImage}  source={require('../../assets/space_bg_dark.jpg')} >
        <View style={styles.itemContainer}>
            <TopMenu point={this.state.point} roundNr={this.state.roundNr} rightAnswerNr={this.state.rightAnswerNr} />
            <View style={styles.maki}>
              <Hero height={100} animate={this.state.animate} />
            </View>
            <Text style={styles.title}>
              Do <Text style={styles.fontYellow}>You</Text> know the <Text style={styles.fontRed}>answer?</Text>
            </Text>
            <View>      
                <FlatList
                  data={this.state.game.rows}
                  contentContainerStyle={styles.equationList}
                  renderItem={({item}) =>
                  <View style={styles.itemWrapper} key={item.result}>
                      <View style={styles.equationItem}>
                          <View style={styles.multiplierImage}>
                            {this.getMultiplierImage(item.multiplier_1)}
                          </View>
                          
                          <Text style={styles.operator}>
                            {item.operator == true ? "+": "-"}
                          </Text>
                          
                          <View style={styles.multiplierImage}>
                            {this.getMultiplierImage(item.multiplier_2)}
                          </View>
                          
                          <Text style={styles.resultWrapper}>
                            = <Text style={styles.result}>{`${item.result}`}</Text>
                          </Text>
                      </View>
                  </View>}
                />

                <View style={ styles.answerListWrapper }>
                  <FlatList
                    contentContainerStyle={styles.answerList}
                    data={this.state.game.results}
                    renderItem={({item}) =>
                     <View style={styles.playBtn} key={item}>
                        <Button
                          containerStyle={styles.answerBtn}
                          style={styles.answerBtnText}
                          onPress={() => this.checkAnswer(item)}>
                          {`${item}`}
                        </Button>
                      </View>}
                    />
                </View>
            </View>
        </View>
        </Image>
      );
  }
}