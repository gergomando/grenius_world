import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  controllersWrapper: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    flexDirection: 'row',
  },
  controllersBtn: {
    padding: 8,
  },
  controllerCircle: {
    justifyContent: 'center',
    height:60,
    width:60,
    overflow:'hidden',
    borderRadius:30,
    backgroundColor:'rgba(242,167,5,0.2)',
    borderWidth:2,
    borderColor:'#f2a705',
  },
});
