import React from 'react';
import {Text, View, Image, StyleSheet, FlatList } from 'react-native';
import Button from 'react-native-button';

const styles = StyleSheet.create({
  itemContainer : {
    flex:1,
    backgroundColor: '#000'
  },
  playBtn : {
    width:75,
    padding:8,
    flex:1,
  },
  answerList: {
    marginTop:16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title : {
      flexDirection: 'row',
      color: '#f00',
      fontSize: 30,
      margin:'auto',
      alignSelf:'center',
      paddingTop:32,
      paddingBottom:32,
  },
  equationList : {
    padding: 24,
    alignItems:'center',
    paddingBottom:0,
  },
  equationListWrapper: {
    borderRadius:12,
    backgroundColor: '#fff',
  },
  equationItem: {
    fontSize: 32,
  },
  backgroundImage : {
    resizeMode:'contain',
    width:null,
    height:null,
    paddingBottom:16,
  },
  point: {
    color: '#fff',
    fontSize: 22,
    alignSelf: 'flex-end',
  },
  mainMenu: {
    paddingTop:24,
    padding:12,
    flexDirection: 'row',
    backgroundColor: '#D02E2E',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rightIcon: {
  }
});

export default class ItemScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          game :{},
          point: 0,
          hasRight: false,
        };
        this.getGame();

    }

    checkAnswer(answer) {
      if(answer === this.state.game.answer) {
        this.state.point = this.state.point + 5;
        this.setState({hasRight: true});
      } else {
        this.state.point = this.state.point - 2;
        this.setState({hasRight: false});
      }
      this.getGame();
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
          <View style={styles.itemContainer}>
              <View style={styles.mainMenu}>
                <Text style={styles.point}>
                  Pont: {this.state.point}
                </Text>
                {this.state.hasRight && <Image style={styles.rightIcon}  source={require('../assets/check.png')} />}
              </View>
              <Text style={styles.title}>
                Melyik a helyes ?
              </Text>

              <View style={styles.equationListWrapper}>      
                <Image style={styles.backgroundImage}  source={require('../assets/math_squares.png')} >
                  <FlatList
                    data={this.state.game.rows}
                    contentContainerStyle={styles.equationList}
                    renderItem={({item}) =>
                    <View style={styles.itemWrapper}>
                        <Text style={styles.equationItem}>
                            {item.multiplier_1}x
                            {item.operator ? '+': '-'}{item.multiplier_2}x = {item.result}
                        </Text>
                    </View>}
                  />

                  <View>
                    <FlatList
                      contentContainerStyle={styles.answerList}
                      data={this.state.game.results}
                      renderItem={({item}) =>
                       <View style={styles.playBtn}>
                          <Button
                            containerStyle={{padding:10, height:45, overflow:'hidden',
                             borderRadius:4, backgroundColor: '#F9D300'}}
                            style={{fontSize: 18, color: '#392701'}}
                            onPress={() => this.checkAnswer(item)}>
                            {item}
                          </Button>
                        </View>}
                      />
                  </View>
                </Image>
              </View>
          </View>
        );
    }
}