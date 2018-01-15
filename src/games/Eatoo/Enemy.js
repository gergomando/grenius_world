import React from 'react';
import { Animated } from 'react-native';
import timer from 'react-native-timer';
import uuidv1 from 'uuid/v1';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changePoint } from '../../redux/actions/Game';
import { animateHero } from '../../redux/actions/Game';
import { updateGame } from '../../redux/actions/Game';
import { getX } from '../../redux/reducers/Hero';
import Hamburger from "./enemies/Hamburger";
import Mushroom from "./enemies/Mushroom";
import Twister from "./enemies/Twister";

const EnemyTypes = {
  Mushroom,
  Hamburger,
  Twister,
};

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
      duration: 300,
    });

    this.state.enemyY.addListener((enemyY) => {
      const enemy = { x: this.props.enemy.x , y: enemyY.value };
      const hero = { x: this.props.hero.x, y: this.props.hero.y};
      if(this.enemyMeetHero({enemy, hero})) {
        this.destroyAnimation.start();
        this.animation.stop();
        this.props.actions.updateGame({
          point: 5,
          animate: 'animateEyeSize',
        });
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
    const EnemyType = EnemyTypes[this.props.type];
    return (
      <EnemyType opacity={this.state.opacity} top={this.state.enemyY} />
    );
  }
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    changePoint,
    animateHero,
    updateGame,
  }, dispatch),
});

const mapStateToProps = state => ({
  hero: { x: getX(state), y: 50 },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Enemy);