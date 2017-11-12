import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  itemContainer : {
    flex:1,
  },
  backgroundImage : {
    flex:1,
    resizeMode:'cover',
    width:null,
    height:null,
    paddingBottom:16,
  },
  title : {
      flexDirection: 'row',
      color: '#fff',
      fontSize: 26,
      margin:'auto',
      alignSelf:'center',
      paddingTop:0,
      fontWeight: 'bold',
  },
  fontRed: {
    color: '#f00',
  },
  fontYellow: {
    color: '#f2a705',
  },
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
  timer: {
    flex: 1,
    alignSelf: 'flex-start',
    color: '#1ac92e',
    fontWeight: 'bold',
    fontSize: 20,
  },
  gameColumns: {
    flexDirection: 'row',
    flex: 1,
  },
  gameColumn: {
    flex: 1,
    borderColor: 'transparent',
    borderWidth: 1,
    width: '25%',
    borderBottomWidth:0,
    borderTopWidth:0,
    alignItems: 'center',
  },
  gameColumnFirst: {
    borderLeftWidth: 0,
  },
  gameColumnLast: {
    borderRightWidth: 0,
  },
  hamburgerWrapper: {
    position: 'absolute',
    bottom: 480,
  },
  hamburgerImg: {
    height: 40,
    width:40,
  },
  heroWrapper: {
    position: 'absolute',
    left: 0,
    top:15,
  },
  hero: {
    height:50,
  },
  controllersWrapper: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    flexDirection: 'row',
  },
  controllersBtn: {
    padding: 8,
  },
});
