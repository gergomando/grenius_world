import React from 'react';
import {Text, View, Image, Animated } from 'react-native';
import Button from 'react-native-button';
import styles from './TopMenu.style.js';
import GameTimer from '../GameTimer/GameTimer';
import Star from '../Animated/Star';
import uuidv1 from 'uuid/v1';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCurrentPoint } from '../../redux/reducers/Game';

class TopMenu extends React.Component {
  state = {
    padPoint: false,
  }

  padPoint(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  getPercent = () => (this.props.rightAnswerNr/10)*100;
  drawStars = () => {
    const stars = [];
    for(i = 1;i < 6; i++) {
      const starPercent = i * 15;
      const currentPercent = this.props.rightAnswerNr > 0 ? this.getPercent() : 0;
      stars.push(<Star key={uuidv1()} color="#f2a705" opacity={currentPercent > starPercent ? 1 : 0.4} />);
    }
    return stars.reverse();
  }

  render() {
    return (
      <View >
        <View style={styles.mainMenu}>
          {this.props.timer &&
            <GameTimer interval="120" />}
          <Text style={styles.point}>
            {this.state.padPoint ? this.padPoint(this.props.point, 5) : this.props.point}
          </Text>
        </View>
        {this.props.stars && 
          <View style={styles.levelMenu}>
           <View style={styles.starsWrapper}>
            {this.drawStars()}
          </View>
        </View>}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  point: getCurrentPoint(state),
});

export default connect(
  mapStateToProps,
  null,
)(TopMenu);