import React from 'react';
import {View, Image, StyleSheet, Animated, Easing} from 'react-native';
import timer from 'react-native-timer';
import uuidv1 from 'uuid/v1';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changePoint } from '../../redux/actions/Game';
import { animateHero } from '../../redux/actions/Game';
import Hamburger from "./enemies/Hamburger";
import Mushroom from "./enemies/Mushroom";
import Twister from "./enemies/Twister";

const EnemyTypes = {
  Mushroom,
  Hamburger,
  Twister,
}

class Enemy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enemyY: new Animated.Value(620),
      opacity: new Animated.Value(1),
    };
    

    this.animation = Animated.timing(this.state.enemyY, {
      toValue:  -100,
      duration: 5000 
    });

    this.destroyAnimation = Animated.timing(this.state.opacity, {
      toValue:  0,
      duration: 100, 
    });

    this.state.enemyY.addListener((enemyY) => {
      const enemy = { x: this.props.enemy.x , y: enemyY.value };
      const hero = { x: this.props.hero.x._value , y: this.props.hero.y};
      if(this.enemyMeetHero({enemy, hero})) {
        this.destroyAnimation.start();
        this.animation.stop();
        this.props.actions.changePoint(5);
        this.props.actions.animateHero('animateEyeSize');
      }
    });

  }

  enemyMeetHero = ({enemy,hero}) => {
    let isMeet = false;
    isMeet = (enemy.x < (hero.x + 50)) && !(hero.x > (enemy.x + 40)) ? true : false;
    isMeet = isMeet && (enemy.y < hero.y) ? true : false;
    return isMeet;
  }

  componentDidMount() {
    this.props.animate && this.setPosY();
  }

  setPosY() {
    timer.setTimeout(uuidv1(), () => this.animation.start(), this.props.enemyKey*1500);
  }

  render() {
    const EnemyType = EnemyTypes[this.props.type];
    return ( 
      <EnemyType
        style={{ 
          opacity:  1,
          top: this.state.enemyY
        }} 
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    changePoint,
    animateHero,
  }, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(Enemy);