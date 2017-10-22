import React from 'react';
import {Text, View, Button, StyleSheet, FlatList, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 24,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    item : {
        flexDirection: 'row',
        fontSize: 18,
        paddingBottom:24,
    },
    itemWrapper : {
        padding:24,
        borderBottomWidth: 1,
        borderColor: '#aaa',
    },
    readMoreBtn: {
        justifyContent: 'flex-start',
        width: 100,
        backgroundColor: '#f00'
    }
});

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listItems : [],
            text: '',
        };
    }

    getItems() {
        let self = this;
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json())
            .then((responseData) => {
                self.setState({ listItems: responseData });
            }).done();
    }

    render() {
        this.getItems();
        const { navigate } = this.props.navigation;
        return (
            <View>
                <FlatList
                    data={this.state.listItems}
                    renderItem={({item}) =>
                    <View style={styles.itemWrapper}>
                        <Text style={styles.item}>
                            {item.title}
                        </Text>
                        <View style={styles.readMoreBtn}>
                        <Button color="#D02E2E"
                                onPress={() => navigate('Item', {id: item.id} )}
                                title="Blog item" />
                        </View>
                    </View>}
                />
            </View>
        );
    }
}