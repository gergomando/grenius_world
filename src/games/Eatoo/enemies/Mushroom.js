import React from 'react';
import { Animated } from 'react-native';
import timer from 'react-native-timer';
import uuidv1 from 'uuid/v1';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changePoint } from '../../../redux/actions/Game';
import { animateHero, changeBackground } from '../../../redux/actions/Game';

class Mushroom extends React.Component {
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
      duration: 300, 
    });

    this.state.enemyY.addListener((enemyY) => {
      const enemy = { x: this.props.enemy.x , y: enemyY.value };
      const hero = { x: this.props.hero.x._value , y: this.props.hero.y};
      if(this.enemyMeetHero({enemy, hero})) {
        this.destroyAnimation.start();
        this.animation.stop();
        this.props.actions.changePoint(-2);
        this.props.actions.animateHero('animateDeadEye');
      }
    });
  }

  enemyMeetHero = ({enemy,hero}) => {
    const isMeetX = (enemy.x < (hero.x + 50)) && !(hero.x > (enemy.x + 40));
    const isMeetY = isMeetX && (enemy.y < hero.y);
    return isMeetY && isMeetX;
  }

  componentDidMount() {
    this.props.animate && this.setPosY();
  }

  setPosY() {
    timer.setTimeout(uuidv1(), () => this.animation.start(), this.props.enemyKey*1500);
  }

  render() {
    return (
      <Animated.Image source={require('../../../assets/mushroom.png')}
        style={
          { 
            position: 'absolute',
            height: 40, 
            width:40,
            opacity: this.state.opacity,
            top: this.state.enemyY
          }
        } 
      />
    );
  }
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    changePoint,
    animateHero,
    changeBackground,
  }, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(Mushroom);