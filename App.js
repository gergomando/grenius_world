import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import GameScreen from './src/screens/GameScreen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainMenu : {
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const GreniusGames = StackNavigator({
    Home: { screen: HomeScreen },
    Game: { screen: GameScreen },
}, {
    headerMode: 'none',
    navigationOptions: {
        headerTitleStyle: { color: '#fff' },
        headerMode:'none',
    }

});

export default class App extends React.Component {
    render() {
        console.disableYellowBox = true;
        return <GreniusGames />;
    }
}