import React from 'react';
import SocketIOClient from 'socket.io-client';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/Home/HomeScreen';
import GameScreen from './src/screens/Game/GameScreen';

const GreniusGames = StackNavigator({
    Home: { screen: HomeScreen },
    Game: { screen: GameScreen },
}, {
    headerMode: 'none',
    navigationOptions: { headerMode:'none' }
});

export default class App extends React.Component {
    render() {
    	this.socket = SocketIOClient('http://localhost:3000');
   		this.socket.emit('tryhard', 'Hello world!');
        console.disableYellowBox = true;
        return <GreniusGames />;
    }
}