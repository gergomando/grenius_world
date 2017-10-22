import React from 'react';
import {Text, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title : {
    paddingBottom:12,
    fontSize: 22,
    flexDirection: 'row',
  },
  itemContainer : {
    padding:24,
  },
  description: {
    fontSize:14,
    flexDirection: 'row',
  },
  imgWrapper: {
    flexDirection: 'row',
    paddingBottom:16,
  },
  itemImg : {
    margin:'auto',
    width: 260,
    height: 200,
  }
});

export default class ItemScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item : {},
        };
    }

    getItem(id) {
        let self = this;
        fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json())
            .then((responseData) => {
                self.setState({ item: responseData });
            }).done();
    }

    render() {
        const { params } = this.props.navigation.state;
        this.getItem(params.id);
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.title}>{this.state.item.title}</Text>
                <View style={styles.imgWrapper}>
                    <Image style={styles.itemImg}  source={require('../assets/item.jpg')} />
                </View>
                    <Text style={styles.description}>{this.state.item.body}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur beatae dolores excepturi explicabo labore laboriosam minima modi, possimus qui recusandae reiciendis saepe tenetur vel, velit veniam voluptas voluptatem voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur beatae dolores excepturi explicabo labore laboriosam minima modi, possimus qui recusandae reiciendis saepe tenetur vel, velit veniam voluptas voluptatem voluptatibus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur beatae dolores excepturi explicabo labore laboriosam minima modi, possimus qui recusandae reiciendis saepe tenetur vel, velit veniam voluptas voluptatem voluptatibus.
                    </Text>
            </View>
        );
    }
}