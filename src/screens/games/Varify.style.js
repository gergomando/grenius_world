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
  playBtn : {
    width:80,
    padding:8,
    flex:1,
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
  equationList : {
    padding: 12,
    alignItems:'center',
    paddingBottom:0,
  },
  equationListWrapper: {
    borderRadius:12,
  },
  multiplierImage: {
    width:95, 
    alignItems:'center',
    justifyContent: 'center',
    flexDirection:'row',
    flexWrap: 'wrap',    
  },
  variable: {
    height: 40,
    width:40,
  },
  equationItem: {
    flexDirection:'row',
    height:96,
    paddingTop: 6,
    paddingBottom:6,
    justifyContent: 'center',
    borderBottomWidth:2,
    borderBottomColor: 'rgba(242,167,5,0.4)',
  },
  noBorder: {
    borderBottomWidth:0,
  },
  answerListWrapper : {
    paddingLeft: 12,
    paddingRight:12,
  },
  answerList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:8,
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
  maki: {
    alignSelf: 'center',
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
    color:'#1ac92e',
    fontWeight:'bold',
    fontSize: 20,
  }
});
