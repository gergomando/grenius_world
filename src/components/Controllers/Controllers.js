import React from 'react';
import { View } from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './Controllers.style.js';
import { updateHeroPosition } from '../../redux/actions/Hero';

const heroSpeed = 50;
class Controllers extends React.Component {
  render() {
    return (
      <View style={styles.controllersWrapper}>
        <View style={styles.controllersBtn}>
          <Button
            containerStyle={styles.controllerCircle}
            style={{fontSize: 18, color: '#F9D300',fontWeight: 'bold'}}
            onPress={() => this.props.actions.updateHeroPosition(-heroSpeed)}
            >
            Left
          </Button>
        </View>

        <View style={styles.controllersBtn}>
          <Button
            containerStyle={styles.controllerCircle}
            style={{fontSize: 18, color: '#F9D300',fontWeight: 'bold'}}
            onPress={() => this.props.actions.updateHeroPosition(heroSpeed)}
            >
            Right
          </Button>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    updateHeroPosition,
  }, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(Controllers);