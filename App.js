import React from 'react';
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
        console.disableYellowBox = true;
        return <GreniusGames />;
    }
}