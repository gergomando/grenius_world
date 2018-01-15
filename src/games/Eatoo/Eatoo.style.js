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
  hamburgerImg: {
    height: 40,
    width:40,
    position:'absolute',
  },
});
