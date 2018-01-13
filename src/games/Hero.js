import React from 'react';
import {View, Animated } from 'react-native';
import Svg,{ Circle,Ellipse, G, Line, Path, Polygon,Polyline,Rect,Symbol, Use, Defs, Stop} from 'react-native-svg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCurrentAnimation } from '../redux/reducers/Game';
import { animatePupil } from '../redux/actions/Game';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eyeSize: new Animated.Value(20),
      tonguePos: new Animated.Value(40),
      deadEye: new Animated.Value(0),
    };

    this.state.eyeSize.addListener((eyeSize) => {
      this.pupilLeft.setNativeProps({ r: eyeSize.value.toString() });
      this.pupilRight.setNativeProps({ r: eyeSize.value.toString() });
    });

    this.state.tonguePos.addListener((tonguePos) => {
      const d = `M126,198.9c0,0,${tonguePos.value.toString()},28.9,43.7-2.4`;
      this.tongue.setNativeProps({ d });
    });

    this.state.deadEye.addListener((deadEye) => {
      const opacity = deadEye.value;
      this.deadEye.setNativeProps({ opacity });
    });
  }

  animateDeadEye() {
    Animated.loop(
        Animated.sequence([
          Animated.timing(this.state.eyeSize, {
            toValue: 0,
            duration: 10,
          }),
          Animated.timing(this.state.eyeSize, {
            delay: 750,
            toValue: 20,
            duration: 1,
          })
        ]), {  iterations: 1 }
    ).start();

    Animated.loop(
        Animated.sequence([
          Animated.timing(this.state.deadEye, {
            toValue: 1,
            duration: 450,
          }),
          Animated.timing(this.state.deadEye, {
            toValue: 0,
            duration: 450,
          })
        ]),
        {
          iterations: 1
        }
    ).start();
  }

  animateEyeSize() {
    Animated.loop(
        Animated.sequence([
          Animated.timing(this.state.eyeSize, {
            toValue: 40,
            duration: 450,
          }),
          Animated.timing(this.state.eyeSize, {
            delay: 0,
            toValue: 20,
            duration: 450,
          })
        ]),
        {
          iterations: 1
        }
    ).start();

    Animated.loop(
        Animated.sequence([
          Animated.timing(this.state.tonguePos, {
            delay: 0,
            toValue: 0,
            duration: 450,
          }),
         Animated.timing(this.state.tonguePos, {
            delay: 0,
            toValue: 40,
            duration: 450,
          }),
         Animated.timing(this.state.tonguePos, {
            delay: 0,
            toValue: 0,
            duration: 450,
          })
        ]),
        {
          iterations: 1
        }
    ).start();
  }
  
  render() {
    if(this.props.animatePupil) {
      this.animateEyeSize(); 
      this.props.actions.animate(false);
    } 
    if(this.props.animate && this[this.props.animate]) this[this.props.animate]();
        return (
          <View>
          <Svg width={this.props.height ? (this.props.height*1.28) : 160} height={ this.props.height || 125} viewBox="0 0 320 250">
              <G>
                <Circle fill="#321E0F" cx="45.1" cy="49.5" r="45.1"/>
                <Circle fill="#633A23" cx="50.3" cy="54.7" r="30.7"/>
                <Circle fill="#321E0F"  cx="213.9" cy="45.1" r="45.1"/>
                <Circle fill="#633A23" cx="208.7" cy="50.3" r="30.7"/>
                <Path  fill="#54321C" d="M47.4,70c0,0,87.5-93.2,172.8-2.4c92.6,98.5-12.9,149.5-3.9,145c-22.9,16.1-115.8,40.8-173.2-20.2
                  C-1.7,143.5,47.4,70,47.4,70z"/>
                <Ellipse fill="#6E4D2B" cx="143.1" cy="172.4" rx="80.4" ry="41"/>
                <Circle fill="#FFFFFF" cx="89.2" cy="109.8" r="50.3"/>
                <Circle fill="#FFFFFF" stroke="#321E0F" cx="188.4" cy="109.8" r="50.3"/>
                <Ellipse cx="142.1" cy="165.2" rx="25.2" ry="11"/>
                <Ellipse fill="#FFFFFF" cx="137.7" cy="165.2" rx="7.6" ry="3.3"/>
                <Path d="M174.4,187.5c-19.3,46.7-57.9,3.3-57.9,3.3c-2.3-3.6,1.3-5.1,2.4-5.4s4.9-2,18.6-0.2S177.6,179.8,174.4,187.5z"/>
                <Path fill="#f5f6f6" d="M181.3,149.3c0,0,24.3,0.2,33.6-15.7c7.4-12.6,16.2-25.4,8.1-42.4c-7.5-15.7-24.9-25.8-24.9-25.8l-0.4-1.5
                  c0,0,22.8,2.4,28.5,16.1c5.7,13.8,17,17.4,8.1,42.4s-15.8,23.7-19.4,26.4c-9.4,7.2-23.5,9.5-26.7,5.2
                  C184.9,149.7,185.3,157.9,181.3,149.3z"/>

                <Path fill="#f5f6f6" d="M81.6,149.9c0,0,24.3,0.2,33.6-15.7c7.4-12.6,16.2-25.4,8.1-42.4c-7.5-15.7-24.9-25.8-24.9-25.8L98,64.6
                  c0,0,22.8,2.4,28.5,16.1s17,17.4,8.1,42.4s-15.8,23.7-19.4,26.4c-9.4,7.2-23.5,9.5-26.7,5.2C85.2,150.4,85.6,158.5,81.6,149.9z"/>
                
                <Path ref={ ref => this.tongue = ref } d="M126,198.9c0,0,41.3,28.9,43.7-2.4" fill="#E7949C" id="mouth" />
               <Circle ref={ ref => this.pupilLeft = ref }  cx="87.6" cy="110.5" r="20" fill="black" />
               <Circle ref={ ref => this.pupilRight = ref } cx="187" cy="110.5" r="20" fill="black" />
                <Path fill="#F0EFEF" d="M125.5,191.1c0,0,1.2-3.1-0.6-6.5c-4,0.6-6.5,1.5-6.5,1.5"/>
                <Path fill="#E0E0E0" d="M165.9,191.2c0,0-1.9-3-0.9-7c4.4-0.3,7.2,0.1,7.2,0.1"/>
                <G opacity={0} ref={ ref => this.deadEye = ref }>
                  <Line fill="none" stroke="#DA1F26" strokeWidth="16" strokeMiterlimit={10} x1="62.2" y1="88.2" y2="138.1" x2="110.1" />
                  <Line fill="none" stroke="#DA1F26" strokeWidth="16" strokeMiterlimit={10} x1="62.2" y2="88.2" y1="138.1" x2="110.1" />
                  <Line fill="none" stroke="#DA1F26" strokeWidth="16" strokeMiterlimit={10} x1="162.2" y1="88.2" y2="138.1" x2="210.1" />
                  <Line fill="none" stroke="#DA1F26" strokeWidth="16" strokeMiterlimit={10} x1="162.2" y2="88.2" y1="138.1" x2="210.1" />
                </G>
              </G>
              </Svg>
          </View>
        );
    }
}

const mapStateToProps = state => ({
  animatePupil: getCurrentAnimation(state),
});
    
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    animate: animatePupil,
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hero);