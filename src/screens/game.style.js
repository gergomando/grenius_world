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
    width:80, 
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
    marginBottom:8,
    paddingBottom: 12,
    height:90,
    justifyContent: 'center',
    borderBottomWidth:2,
    borderBottomColor: '#bb158e',
  },
  noBorder: {
    borderBottomWidth:0,
  },
  fontRed: {
    color: '#f00',
  },
  fontYellow: {
    color: '#F9D300',
  },
  mainMenu: {
    paddingTop:24,
    padding:12,
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
