import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ItemScreen from './src/screens/ItemScreen';

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

const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Item: { screen: ItemScreen},
}, {
    headerMode: 'none',
    navigationOptions: {
        headerTitleStyle: { color: '#fff' },
        headerMode:'none',
    }

});

export default class App extends React.Component {
    render() {
        return <SimpleApp />;
    }
}