import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  itemContainer : {
    flex:1,
    backgroundColor: '#000',
  },
  playBtn : {
    width:75,
    padding:8,
    flex:1,
  },
  answerList: {
    marginTop:16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title : {
      flexDirection: 'row',
      color: '#fff',
      fontSize: 26,
      margin:'auto',
      alignSelf:'center',
      paddingTop:0,
      paddingBottom:24,
  },
  equationList : {
    padding: 12,
    alignItems:'center',
    paddingBottom:0,
    paddingTop:24,
  },
  equationListWrapper: {
    borderRadius:12,
    backgroundColor: '#fff',
  },
  equationItem: {
    fontSize: 36,
  },
  fontRed: {
    color: '#f00',
  },
  backgroundImage : {
    resizeMode:'contain',
    width:null,
    height:null,
    paddingBottom:16,
  },
  mainMenu: {
    paddingTop:24,
    padding:12,
    flexDirection: 'row',
  },
  rightIcon: {
    alignSelf: 'center',
  },
  variable: {
    width: 88,
    height: 90,
    paddingTop:24,
    paddingLeft:12,
  },
  feedbackContainer: {
    height: 30,
    display: 'none',
  },
  pointIcon: {
    height: 40,
    width: 42,
  },
  maki: {
    alignSelf: 'center',
  },
  point: {
    color: '#F9D300',
    fontSize: 22,
    fontWeight:'bold',
    alignSelf:'flex-end',
    justifyContent: 'flex-end',
  },
  timer: {
    flex: 1,
    alignSelf: 'flex-start',
    color:'#1ac92e',
    fontWeight:'bold',
    fontSize: 20,
  }
});
