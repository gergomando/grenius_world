import React from 'react';
import SocketIOClient from 'socket.io-client';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/Home/HomeScreen';
import GameScreen from './src/screens/Game/GameScreen';
import AnalyzeScreen from './src/screens/Analyze/AnalyzeScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const GreniusGames = StackNavigator({
    Home: { screen: HomeScreen },
    Game: { screen: GameScreen },
    Analyze: { screen: AnalyzeScreen },
}, {
    headerMode: 'none',
    navigationOptions: { headerMode:'none' }
});

export default class App extends React.Component {
    render() {
    	this.socket = SocketIOClient('http://localhost:3000');
   		this.socket.emit('tryhard', 'Hello world!');
        console.disableYellowBox = true;
        return (
            <Provider store={store}>
                <GreniusGames />
            </Provider>);
    }
}