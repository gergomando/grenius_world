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
