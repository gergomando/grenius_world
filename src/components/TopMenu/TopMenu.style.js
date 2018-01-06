import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  mainMenu: {
    paddingTop:24,
    padding:12,
    paddingBottom:0,
    flexDirection: 'row',
  },
  rightIcon: {
    alignSelf: 'center',
  },
  feedbackContainer: {
    height: 30,
    display: 'none',
  },
  pointIcon: {
    height: 40,
    width: 42,
  },
  point: {
    color: '#f2a705',
    fontSize: 22,
    fontWeight:'bold',
    alignSelf:'flex-end',
    justifyContent: 'flex-end',
  },
  lastpoint: {
    color:'#1ac92e',
    alignSelf:'flex-end',
    paddingRight:12,
    fontSize:18,
  },
  timer: {
    flex: 1,
    alignSelf: 'flex-start',
    color: '#1ac92e',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
