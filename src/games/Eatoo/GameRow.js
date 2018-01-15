import React from 'react';
import {View } from 'react-native';
import Enemy from './Enemy';
import uuidv1 from 'uuid/v1';

export default class GameRow extends React.Component {
  state = {
    counter: 0,
    enemies: [],
  };
  
  componentDidMount() {
    this.drawItems(this.props.items);
  }

  drawItems = items => {
     const enemies = items.map((item, i) => {
      if(item.type === 'Empty')
        return false;

      return <Enemy
        key={uuidv1()}
        enemyKey={i}
        animate={true}
        type={item.type}
        enemy={{x: this.props.rowX, y: 620}}
      />;
    });
    
    this.setState({ enemies });
  }

  render() {
    return (
      <View>
        {this.state.enemies}
      </View>
    );
  }
}