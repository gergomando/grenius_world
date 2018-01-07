import React from 'react';
import { View } from 'react-native';
import Svg,{ Polygon } from 'react-native-svg';

export default class Star extends React.Component {
  render() {
    return (
      <View>
        <Svg opacity={this.props.opacity || 1} width="20" height="19" viewBox="0 0 100 95.114">
        <Polygon fill={this.props.color || 'white'} points="50,0 65.435,31.3 100,36.328 74.999,60.73 80.869,95.114 50,78.896 19.093,95.114 25,60.73 
          0,36.328 34.566,31.3 "/>
        </Svg>
      </View>
    );
  }
}