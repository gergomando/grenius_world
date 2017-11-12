import React from 'react';
import {Text, View, StyleSheet, FlatList, Image } from 'react-native';
import Button from 'react-native-button';
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title : {
    flexDirection: 'row',
    color: '#ff0505',
    fontSize: 46,
    margin:'auto',
    paddingBottom: 24,
  },
  item : {
    flexDirection: 'row',
    fontSize: 18,
  },
  playBtn: {
  },
  backgroundImage : {
    flex:1,
    resizeMode:'cover',
    width:null,
    height:null,
  }
});

export default class HomeScreen extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const { navigate } = this.props.navigation;
      return (
        <Image style={styles.backgroundImage}  source={require('../assets/space_bg_dark.jpg')} >
          <View style={styles.container}>
          <Text style={styles.title}>
            <Text style={{ color: '#fff'}}>The</Text> Game
          </Text>

           <Button
              containerStyle={{justifyContent: 'center',overflow:'hidden',
                borderRadius:12, backgroundColor: '#F9D300',borderWidth:2, marginBottom:12, borderColor:'#f2a705'}}
              style={{fontSize: 22, color: '#392701',fontWeight: 'bold',padding:8}}
              onPress={() => navigate('Game',{gameType: 'Varify'})}>
              Start Varify
            </Button>

            <Button
              containerStyle={{justifyContent: 'center', overflow:'hidden',
                borderRadius:12, backgroundColor: '#F9D300',borderWidth:2, padding:8, borderColor:'#f2a705'}}
              style={{fontSize: 22, color: '#392701',fontWeight: 'bold'}}
              onPress={() => navigate('Game',{gameType: 'Eatoo'})}>
              Start Eatoo
            </Button>


          <Image style={{height:320}} resizeMode="contain" source={require('../assets/maki_kez.png')} />
          </View>
        </Image>
      );
    }
}