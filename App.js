import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ItemScreen from './src/screens/ItemScreen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainMenu : {
        backgroundColor: '#D02E2E',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Item: { screen: ItemScreen},
}, {
    navigationOptions: {
        headerTitleStyle: { color: '#fff' },
        headerMode:'screen',
        header: (props) => (
            <View style={styles.mainMenu}>
                <TouchableHighlight onPress={() => props.navigation.navigate('Home')}>
                    <Image source={require('./src/assets/logo.png')} />
                </TouchableHighlight>
            </View>
            )

        ,
    }

});

export default class App extends React.Component {
    render() {
        return <SimpleApp />;
    }
}