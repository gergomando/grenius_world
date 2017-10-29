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
      color: '#f00',
      fontSize: 42,
      margin:'auto',
      paddingBottom: 24,
    },
    item : {
      flexDirection: 'row',
      fontSize: 18,
    },
    playBtn: {
      width: 140,
      height:70,
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
            <Image style={styles.backgroundImage}  source={require('../assets/stars.png')} >
              <View style={styles.container}>
              <Text style={styles.title}>
                The Game
              </Text>
              <View style={styles.playBtn}>
                <Button
                  containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: '#F9D300'}}
                  style={{fontSize: 20, color: 'white'}}
                  onPress={() => navigate('Item',{id: '1'})}>
                  Play!
                </Button>
              </View>

              <Image style={{height:320}} resizeMode="contain" source={require('../assets/maki_kez.png')} />
              </View>
            </Image>
        );
    }
}